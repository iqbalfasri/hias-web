import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'

import { BASE_URL, getOrderProgress } from "../../api";

import "./Order.scss";

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSteps: 1,
      orderData: []
    };
  }

  componentDidMount() {
    let getUserId = localStorage.getItem("userId");
    getOrderProgress(getUserId)
      .then(res => {
        let orderData = res.data.order;
        this.setState({ orderData });
      })
      .catch(error => {
        console.log(error);
      });
  }

  _onProgress() {
    return (
      <>
        <div className="row-order">
          <div className="content">
            <h4>ORDER ID</h4>
          </div>
          <div className="content">
            <h4>TOTAL PRODUCT</h4>
          </div>
          <div className="content">
            <h4>STATUS</h4>
          </div>
        </div>

        {this.renderEachOrder(this.state.orderData)}
      </>
    );
  }

  _history() {
    return (
      <>
        <div className="row-order">
          <div className="content">
            <h4>ORDER ID</h4>
          </div>
          <div className="content">
            <h4>TOTAL PRODUCT</h4>
          </div>
          <div className="content">
            <h4>STATUS</h4>
          </div>
        </div>

        {this.renderEachOrder(this.state.orderData)}
      </>
    );
  }

  renderOrderStatus() {
    let { activeSteps } = this.state;
    switch (activeSteps) {
      case 1:
        return this._onProgress();

      case 2:
        return this._history();

      default:
        return null;
    }
  }

  renderEachOrder(data) {
    if (data !== undefined) {
      return this.state.orderData.map(order => {
        return (
          <a
            key={order.orderId}
            href={`/order/detail/${order.orderId}`}
            className="row row-order row-order--link"
          >
            {/* Order Id */}
            <div className="row row-flex row-order--id-wrapper">
              <div className="order-circle--date">
                <p>21 Oct</p>
              </div>
              <div>
                <p>ID {order.orderId}</p>
              </div>
            </div>

            {/* Total product */}
            <div className="row-flex">
              <p>{this.state.orderData.length} Product</p>
            </div>

            {/* Status */}
            <div className="row-flex">
              <p>Waiting for Payment</p>
            </div>
          </a>
        );
      });
    }
  }

  render() {
    return (
      <>
        <div className="content">
          <Helmet key={Math.random()}>
            <title>Order Page</title>
            <meta property="og:title" content="Hias Homepage" />
            <meta name="description" content="Hias" />
            <meta name="robots" content="index, nofollow" />
          </Helmet>

          <div className="content">
            <section className="section-page">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="order-steps-list">
                      <div
                        className={
                          this.state.activeSteps == 1
                            ? "steps-list--active"
                            : null
                        }
                      >
                        <span
                          style={{
                            fontSize: 14,
                            color:
                              this.state.activeSteps == 1
                                ? "#5CC8E5"
                                : "#717171"
                          }}
                          onClick={() => this.setState({ activeSteps: 1 })}
                        >
                          On Progress
                        </span>
                      </div>
                      <div
                        className={
                          this.state.activeSteps == 2
                            ? "steps-list--active"
                            : null
                        }
                      >
                        <span
                          style={{
                            fontSize: 14,
                            color:
                              this.state.activeSteps == 2
                                ? "#5CC8E5"
                                : "#717171"
                          }}
                          onClick={() => this.setState({ activeSteps: 2 })}
                        >
                          History
                        </span>
                      </div>
                    </div>
                    <div className="order-status-content">
                      {this.renderOrderStatus()}
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

export default Order;
