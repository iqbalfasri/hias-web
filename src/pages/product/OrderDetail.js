import React, { Component } from "react";

import Helmet from "react-helmet";

import { formatMoneyWithoutSymbol } from "../../utils/money";

import { getOrderById } from "../../api/";

class OrderDetail extends Component {
  state = {
    orderDetail: null,
    orderProducts: []
  };
  getParams = this.props.match.params.id;

  componentDidMount() {
    getOrderById(this.getParams)
      .then(res => {
        this.setState({
          orderDetail: res.data[0],
          orderProducts: res.data[0].product
        });

        console.log(this.state.orderDetail);
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderItems() {
    if (this.state.orderProducts.length !== 0) {
      return this.state.orderProducts.map((item, index) => {
        return (
          <tr key={`${item.idItems}-${index}`}>
            <th scope="row">
              <div className="table-product-image-wrapper align-items-center">
                <div className="table-product-image">
                  <img src={item.thumbnailUrl} alt={item.name} />
                </div>
                <div>
                  <span>{item.name}</span>
                </div>
              </div>
            </th>
            <td>
              <span>IDR {formatMoneyWithoutSymbol(item.price)}</span>
            </td>
            <td>
              <span>{item.qty}</span>
            </td>
            <td>
              <span>
                <strong>
                  IDR {formatMoneyWithoutSymbol(item.qty * item.price)}
                </strong>
              </span>
            </td>
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <>
        <div className="content">
          <Helmet key={Math.random()}>
            <title>Order Detail - {this.getParams}</title>
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
                        <tbody>{this.renderItems()}</tbody>
                      </table>
                    </div>

                    <div className="order-status-container">
                      <div className="order-status-wrapper orb--active">
                        <div className="order-status-box">
                          <img
                            src={require("../../assets/img/Coupon.svg")}
                            alt=""
                          />
                        </div>
                        <div className="order-status-text">
                          <span>Payment</span>
                        </div>
                      </div>
                      <div className="order-status-wrapper">
                        <div className="order-status-box">
                          <img
                            src={require("../../assets/img/OrderPacking.svg")}
                            alt=""
                          />
                        </div>
                        <div className="order-status-text">
                          <span>Packing</span>
                        </div>
                      </div>
                      <div className="order-status-wrapper">
                        <div className="order-status-box">
                          <img
                            src={require("../../assets/img/Inbox.svg")}
                            alt=""
                          />
                        </div>
                        <div className="order-status-text">
                          <span>On Delivery</span>
                        </div>
                      </div>
                      <div className="order-status-wrapper">
                        <div className="order-status-box">
                          <img
                            src={require("../../assets/img/ItemArrived.svg")}
                            alt=""
                          />
                        </div>
                        <div className="order-status-text">
                          <span>Completed</span>
                        </div>
                      </div>
                    </div>

                    <div className="fx mt--2 justify-content-between">
                      <div>
                        <div className="fx"></div>
                      </div>
                      <div style={{ marginRight: "3em" }}>
                        <div className="fx justify-content-between">
                          <h3 className="mr--1">Subtotal</h3>
                          <h3>
                            IDR{" "}
                            {formatMoneyWithoutSymbol(
                              this.state.orderDetail !== null
                                ? this.state.orderDetail.total
                                : null
                            )}
                          </h3>
                        </div>
                        <div className="fx justify-content-between">
                          <h3 className="mr--1">Shipping</h3>
                          <h3>Free</h3>
                          <button
                            onClick={() => this.handlePopup()}
                            className="btn btn--blue btn--full"
                          >
                            Confirm Order
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
      </>
    );
  }
}

export default OrderDetail;
