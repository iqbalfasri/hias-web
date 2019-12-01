import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import axios from "axios";

import InputText from "../../components/form/InputText";
import ProductCard from "../../components/card/Product";

import {
  getCart,
  removeProductOnCart,
  onPlaceOrder,
  requestCoupon
} from "../../api";
import { isLogin } from "../../utils/auth";
import { formatMoneyWithoutSymbol } from "../../utils/money";
import { withContext } from "../../context/withContext";
import Modal from "../../components/layout/Modal";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carts: [],
      cartsQuantity: [],
      relatedPopup: false,
      couponCode: "",
      priceCoupon: 0,
      relatedItems: [
        {
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/hias-apps.appspot.com/o/HIAS%20House%20AEGLE%20SOFA%20%202%20Seated%20P046326%20%20(1).jpg?alt=media&token=d965f902-4e73-4ede-9b47-d6d43cf1f991",
          productId: 4,
          price: 2949000.0,
          category: {
            name: "Chair",
            id: 4
          },
          productName: "AEGLE SOFA Aegle Sofa 1 seated"
        },
        {
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/hias-apps.appspot.com/o/HIAS%20House%20Ainsley%20Sofa%202%20seated%20P046015.jpg?alt=media&token=187c32c5-0639-4655-8871-c1307fd31444",
          productId: 9,
          price: 3039000.0,
          category: {
            name: "Chair",
            id: 4
          },
          productName: "Ainsley Sofa 2 seated"
        },
        {
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/hias-apps.appspot.com/o/HIAS%20House%20Aveta%20Sofa%20Set%20Yellow%201%20seated%20P045998.jpg?alt=media&token=664621cb-26e7-480d-8d00-cfee934ce363",
          productId: 20,
          price: 3219000.0,
          category: {
            name: "Chair",
            id: 4
          },
          productName: "Aveta Sofa Set Yellow 1 seated"
        }
      ]
    };
  }

  componentDidMount() {
    const userId = JSON.parse(localStorage.getItem("userId"));
    if (!isLogin()) {
      this.props.history.push("/login");
    }
    getCart(userId)
      .then(res => {
        if (res.data.listItems) {
          this.setState({
            carts: res.data.listItems
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  // componentWillUnmount() {
  //   localStorage.removeItem('cartItems')
  // }

  onChangeQuantity(e, index) {
    const value = e.target.value;
    const quantity = this.state.cartsQuantity;
    quantity[index] = value;
    this.setState({
      cartsQuantity: quantity
    });
  }

  onRemoveCart(index, productId) {
    this.props.context.setIsLoading(true);
    removeProductOnCart(productId)
      .then(res => {
        const newList = this.state.carts;
        newList.splice(index, 1);
        this.setState(
          {
            carts: newList
          },
          () => this.props.context.setTotalCart(0)
        );
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.props.context.setIsLoading(false);
      });
  }

  renderCart() {
    if (this.state.carts.length !== 0) {
      return this.state.carts.map((cart, index) => {
        const quantity = this.state.cartsQuantity[index] || 1;
        return (
          <tr key={`${cart.idItems}-${index}`}>
            <th scope="row">
              <div className="table-product-image-wrapper align-items-center">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => this.onRemoveCart(index, cart.productId)}
                >
                  X
                </div>
                <div className="table-product-image">
                  {/* <img src="https://via.placeholder.com/550x550" alt=""/> */}
                  <img src={cart.thumbnail} alt="" />
                </div>
                <div>
                  <span>{cart.name}</span>
                </div>
              </div>
            </th>
            <td>
              <span>IDR {formatMoneyWithoutSymbol(cart.price)}</span>
            </td>
            <td>
              <input
                style={{ width: "50px" }}
                onChange={e => this.onChangeQuantity(e, index)}
                value={quantity}
                type="number"
                name="quantity"
                className="form--input"
                maxLength={6}
                min="0"
              />
            </td>
            <td>
              <span>
                <strong>
                  IDR {formatMoneyWithoutSymbol(quantity * cart.price)}
                </strong>
              </span>
            </td>
          </tr>
        );
      });
    }
  }

  getTotalCartPricBeforeCoupon() {
    const { cartsQuantity, carts } = this.state;
    let total = 0;
    for (let i = 0; i < carts.length; i++) {
      const itemAmount = cartsQuantity[i] || 1;
      total = total + itemAmount * carts[i].price;
    }

    // this code will returned price with kupon code
    return total;
  }

  getTotalCartPrice() {
    const { cartsQuantity, carts } = this.state;
    let total = 0;
    for (let i = 0; i < carts.length; i++) {
      const itemAmount = cartsQuantity[i] || 1;
      total = total + itemAmount * carts[i].price;
    }

    // this code will returned price with kupon code
    return this.state.couponCode < 0 ? total : total - this.state.priceCoupon;
  }

  onCheckout() {
    onPlaceOrder({
      cartId: localStorage.getItem("userId"),
      subTotal: this.getTotalCartPrice(),
      status: ""
    }).then(res => {
      this.props.history.push("/checkout");
      localStorage.setItem("subTotal", this.getTotalCartPrice());
    });
  }

  handlePopup() {
    this.setState(
      {
        relatedPopup: !this.state.relatedPopup
      },
      () => {
        localStorage.setItem("cartItems", JSON.stringify(this.state.carts));
      }
    );
  }

  handleCouponText(e) {
    const input = e.target;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    this.setState({ couponCode: input.value.toUpperCase() }, () =>
      input.setSelectionRange(start, end)
    );
  }

  handleCoupon(e) {
    e.preventDefault();

    requestCoupon(this.state.couponCode)
      .then(res => {
        console.log(res.data[0]);
        this.setState({ priceCoupon: res.data[0].priceCoupon });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderRelatedItems() {
    const { relatedItems } = this.state;
    if (relatedItems.length !== 0 || relatedItems !== undefined) {
      return (
        <div
          className="row"
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {relatedItems.map(product => {
            return (
              <div className="col-md-3" key={`product-${product.productId}`}>
                <ProductCard
                  thumbnail={product.thumbnail}
                  id={product.id || product.productId}
                  title={product.productName}
                  price={product.price}
                  category={product.categoryName}
                />
              </div>
            );
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <>
        <div className="content">
          <Helmet key={Math.random()}>
            <title>Cart Page</title>
            <meta property="og:title" content="Hias Homepage" />
            <meta name="description" content="Hias" />
            <meta name="robots" content="index, nofollow" />
          </Helmet>
          <div className="content">
            <section className="section-page">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="table-cart">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">ITEM DETAIL</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">QTY</th>
                            <th scope="col">TOTAL</th>
                          </tr>
                        </thead>
                        <tbody>{this.renderCart()}</tbody>
                      </table>
                    </div>
                    <div className="fx justify-content-between">
                      <div>
                        <div className="fx">
                          <InputText
                            value={this.state.couponCode.toUpperCase()}
                            onChange={e => this.handleCouponText(e)}
                            type="text"
                            placeholder="Coupon"
                          />
                          <div className="ml--1">
                            <button
                              onClick={e => this.handleCoupon(e)}
                              className="btn btn--primary"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                      <div style={{ marginRight: "3em" }}>
                        {this.state.priceCoupon > 0 ? (
                          <>
                            <div className="fx justify-content-between">
                              <h3>Potongan</h3>
                              <h3>
                                IDR{" "}
                                {formatMoneyWithoutSymbol(
                                  this.state.priceCoupon
                                )}
                              </h3>
                            </div>
                            <div className="fx justify-content-between">
                              <h3>Diskon</h3>
                              <h3
                                style={{ textDecoration: "line-through" }}
                                className="mr--1"
                              >
                                IDR{" "}
                                {formatMoneyWithoutSymbol(
                                  this.getTotalCartPricBeforeCoupon()
                                )}
                              </h3>
                            </div>
                          </>
                        ) : null}
                        <div className="fx justify-content-between">
                          <h3 className="mr--1">Subtotal</h3>
                          <h3>
                            IDR{" "}
                            {formatMoneyWithoutSymbol(this.getTotalCartPrice())}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="total-card-cart-wrapper">
                      <div className="total-card-cart">
                        <div>
                          <h3>
                            Total amount IDR{" "}
                            {formatMoneyWithoutSymbol(this.getTotalCartPrice())}
                          </h3>
                        </div>
                        <div>
                          <button
                            onClick={() => this.handlePopup()}
                            className="btn btn--blue btn--full"
                          >
                            Proceed to Checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <Modal
          big
          isOpen={this.state.relatedPopup}
          onCloseModal={() => this.handlePopup()}
        >
          <div>
            <h3 style={{ textAlign: "center" }}>
              Are you sure you don’t want this item?
            </h3>
          </div>
          {this.renderRelatedItems()}
          <button
            style={{ display: "block", margin: "0 auto" }}
            onClick={() => this.onCheckout()}
            className="btn btn--blue"
          >
            Proceed to Checkout
          </button>
        </Modal>
      </>
    );
  }
}

export default withContext(Cart);
