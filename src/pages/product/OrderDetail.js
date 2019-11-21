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
    getOrderById(2)
      .then(res => {
        this.setState({
          orderDetail: res.data,
          orderProducts: res.data.product
        });
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
                  <img src={item.thumbnail} alt={item.name} />
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
    console.log(this.getParams);
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
                    <div className="fx justify-content-between">
                      <div>
                        <div className="fx"></div>
                      </div>
                      <div style={{ marginRight: "3em" }}>
                        <div className="fx justify-content-between">
                          <h3 className="mr--1">Subtotal</h3>
                          <h3>
                            IDR
                            {/* {formatMoneyWithoutSymbol(this.getTotalCartPrice())} */}
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
