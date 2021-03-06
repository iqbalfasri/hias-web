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
  requestCoupon,
  fetchRelatedProductCart
} from "../../api";
import { isLogin } from "../../utils/auth";
import { formatMoneyWithoutSymbol } from "../../utils/money";
import { withContext } from "../../context/withContext";
import Modal from "../../components/layout/Modal";

import { getDiscount } from "../../utils/money";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carts: [],
      cartsQuantity: [],
      relatedPopup: false,
      couponCode: "",
      priceCoupon: 0,
      relatedItems: []
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

    // fetch related product
    fetchRelatedProductCart().then(res => {
      this.setState({ relatedItems: res.data });
    });
  }

  // componentWillUnmount() {
  //   localStorage.removeItem('cartItems')
  // }

  onChangeQuantity(e, index) {
    // const value = e.target.value;
    // const quantity = this.state.cartsQuantity;
    // quantity[index] = value;
    // this.setState({
    //   cartsQuantity: quantity
    // });
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
        setTimeout(() => {
          this.props.context.setIsLoading(false);
        }, 2000);
      });
  }

  handleIncrement = cart => {
    const carts = [...this.state.carts];
    const index = carts.indexOf(cart);

    if (carts[index].qty) {
      carts[index].qty += 1;
      this.setState({ carts });
    }
  };

  handleDecrement = cart => {
    const carts = [...this.state.carts];
    const index = carts.indexOf(cart);

    if (carts[index].qty == 1) {
      return;
    }

    if (carts[index].qty) {
      carts[index].qty -= 1;
      this.setState({ carts });
    }
  };

  getTotal(discount, cart) {
    let priceWithoutDiscount = cart.qty * cart.price;
    if (discount == null) {
      return priceWithoutDiscount;
    }

    return getDiscount(priceWithoutDiscount, discount);
  }

  renderCart() {
    if (this.state.carts.length !== 0) {
      return this.state.carts.map((cart, index) => {
        const quantity = this.state.carts[index].qty || 1;
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
              {cart.discount !== null ? (
                <span
                  style={{ textDecoration: "line-through" }}
                  className="mr--1"
                >
                  IDR {formatMoneyWithoutSymbol(cart.price)}
                </span>
              ) : null}
              <span>
                IDR{" "}
                {formatMoneyWithoutSymbol(
                  cart.discount == null
                    ? cart.price
                    : getDiscount(cart.price, cart.discount)
                )}
              </span>
            </td>
            <td>
              <button
                className="btn btn--primary mr--1"
                onClick={() => this.handleDecrement(cart)}
              >
                -
              </button>
              <input
                style={{ width: "50px", height: "34px", textAlign: "center" }}
                value={quantity}
                type="text"
                name="quantity"
                className="form--input"
                pattern="[0-9]*"
              />
              <button
                className="btn btn--blue ml--1"
                onClick={() => this.handleIncrement(cart)}
              >
                +
              </button>
            </td>
            <td>
              <span>
                <strong>
                  IDR{" "}
                  {formatMoneyWithoutSymbol(this.getTotal(cart.discount, cart))}
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
      if (carts[i].discount == null) {
        total = total + itemAmount * carts[i].price;
      } else {
        total =
          total + itemAmount * getDiscount(carts[i].price, carts[i].discount);
      }
    }

    // this code will returned price with kupon code
    return total;
  }

  getTotalCartPrice() {
    const { cartsQuantity, carts } = this.state;
    let total = 0;
    for (let i = 0; i < carts.length; i++) {
      const itemAmount = carts[i].qty || 1;
      // const itemAmount = cartsQuantity[i] || 1;
      if (carts[i].discount == null) {
        total = total + itemAmount * carts[i].price;
      } else {
        total =
          total + itemAmount * getDiscount(carts[i].price, carts[i].discount);
      }
    }

    // this code will returned price with kupon code
    return this.state.couponCode < 0 ? total : total - this.state.priceCoupon;
  }

  onCheckout() {
    // onPlaceOrder({
    //   cartId: localStorage.getItem("userId"),
    //   subTotal: this.getTotalCartPrice(),
    //   status: ""
    // }).then(res => {
    //   this.props.history.push("/checkout");
    //   localStorage.setItem("subTotal", this.getTotalCartPrice());
    // }).catch(error => {
    //   console.log(error)
    // })
    this.props.history.push("/checkout");
    localStorage.setItem("subTotal", this.getTotalCartPrice());
  }

  handlePopup() {
    if (this.state.carts.length == 0) {
      alert("Maaf cart kamu kosong, ayo belanja dulu");
    } else {
      this.setState(
        {
          relatedPopup: !this.state.relatedPopup
        },
        () => {
          localStorage.setItem("cartItems", JSON.stringify(this.state.carts));
        }
      );
    }
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
                  itemStock={product.itemStock}
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
                            <th scope="col">RINCIAN BARANG</th>
                            <th scope="col">HARGA</th>
                            <th scope="col">
                              <span style={{ textAlign: "center" }}>
                                JUMLAH
                              </span>
                            </th>
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
                            placeholder="Kupon"
                          />
                          <div className="ml--1">
                            <button
                              onClick={e => this.handleCoupon(e)}
                              className="btn btn--primary"
                            >
                              Gunakan
                            </button>
                          </div>
                        </div>
                      </div>
                      <div style={{ marginRight: "3em" }}>
                        {this.state.priceCoupon > 0 ? (
                          <>
                            <div className="fx justify-content-between">
                              <span>Potongan</span>
                              <span>
                                IDR{" "}
                                {formatMoneyWithoutSymbol(
                                  this.state.priceCoupon
                                )}
                              </span>
                            </div>
                            <div className="fx justify-content-between">
                              <span>Diskon</span>
                              <span
                                style={{ textDecoration: "line-through" }}
                                className="mr--1"
                              >
                                IDR{" "}
                                {formatMoneyWithoutSymbol(
                                  this.getTotalCartPricBeforeCoupon()
                                )}
                              </span>
                            </div>
                          </>
                        ) : null}
                        <div className="fx justify-content-between">
                          <span className="mr--1" style={{ fontWeight: 'bold', fontSize: '16px' }}>Subtotal</span>
                          <span style={{ fontWeight: 'bold', fontSize: '16px' }}>
                            IDR{" "}
                            {formatMoneyWithoutSymbol(this.getTotalCartPrice())}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="total-card-cart-wrapper">
                      <div className="total-card-cart">
                        <div className="mb--1">
                          <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
                            Jumlah Total IDR{" "}
                            {formatMoneyWithoutSymbol(this.getTotalCartPrice())}
                          </span>
                        </div>
                        <div>
                          <button
                            onClick={() => this.handlePopup()}
                            className="btn btn--blue btn--full"
                          >
                            Proses pembelian
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
          <div style={{ textAlign: 'center' }} className="mb--2">
            <span style={{ fontSize: '18px', fontWeight: "bold" }}>
              Kamu yakin tidak mau item ini?
              {/* Are you sure you don’t want this item? */}
            </span>
          </div>
          {this.renderRelatedItems()}
          <button
            style={{ display: "block", margin: "0 auto" }}
            onClick={() => this.onCheckout()}
            className="btn btn--blue"
          >
            {/* Proceed to Checkout */}
            Proses Sekarang
          </button>
        </Modal>
      </>
    );
  }
}

export default withContext(Cart);
