import React, { Component } from "react";
import { Helmet } from "react-helmet";

import "./Order.scss";
import axios from "axios";
import { BASE_URL } from "../../api";

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSteps: 1,
      orderData: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `${BASE_URL}/product/${localStorage.getItem(
          "userId"
        )}/getOrderByUserId`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }
      )
      .then(res => {
        this.setState({ orderData: res.data.data.order });
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
    return <h1></h1>;
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
          <div className="row-order row-order--item">
            <div className="content">
              <div className="order-date">
                <div className="order-circle--date">
                  <p>21 OCT</p>
                </div>
                <div>
                  <h5>ID {order.orderId}</h5>
                </div>
              </div>
            </div>
            <div className="content">
              <h5>3</h5>
            </div>
            <div className="content">
              <h5>{order.status == 0 ? "Payment" : "On Delivery"}</h5>
            </div>
          </div>
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
