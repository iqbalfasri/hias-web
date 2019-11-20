import React, { Component } from "react";
import { Helmet } from "react-helmet";

import InputText from "../../components/form/InputText";
import Checkbox from "../../components/form/Checkbox";
import {
  addUserAddress,
  getUserAddress,
  getCart,
  getVANumberBNI,
  getVANumberCIMB
} from "../../api";
import { withContext } from "../../context/withContext";
import { formatMoneyWithoutSymbol } from "../../utils/money";
import "./Checkout.scss";

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSteps: 1,
      firstName: "",
      lastName: "",
      companyName: "",
      country: "",
      city: "",
      postalCode: "",
      address: "",
      email: "",
      phone: "",
      userAddress: null,
      cart: [],
      subTotal: 0,
      vaBNI: null,
      vaCIMB: null,
      paymentMethodMode: 1
    };
  }

  componentDidMount() {
    getCart(localStorage.getItem("userId")).then(res => {
      this.setState({
        cart: res.data.listItems,
        subTotal: res.data.subTotal
      });
    });
  }

  onProcessTab2() {
    this.props.context.setIsLoading(true);
    Promise.all([
      getVANumberCIMB(this.state.subTotal).then(res => {
        this.setState({
          vaCIMB: res.va
        });
      })
    ]).then(() => {
      this.props.context.setIsLoading(false);
      this.setState({ activeSteps: 3 });
    });
  }

  onProcessTab1() {
    this.props.context.setIsLoading(true);
    addUserAddress({
      userId: localStorage.getItem("userId"),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      company: this.state.companyName,
      country: this.state.country,
      city: this.state.city,
      address: this.state.address,
      email: this.state.email,
      phone: this.state.phone,
      postCode: this.state.postalCode
    })
      .then(res => {
        if (res.success) {
          // getUserAddress(localStorage.getItem("userId")).then(res => {
          //   console.log(res.data[0]);

          //   this.setState({ activeSteps: 2 });
          //   this.props.context.setIsLoading(false);
          // });
          this.setState({
            userAddress: res.data[0],
            activeSteps: 2
          }, () => this.props.context.setIsLoading(false));
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderPaymentMethod() {
    if (this.state.paymentMethodMode === 1) {
      return (
        <div className="fx justify-content-between align-items-center">
          <div>
            <img
              width="150px"
              src={require("../../assets/img/cimb.png")}
              alt=""
            />
          </div>
          <div>
            <span>
              <strong>{this.state.vaCIMB}</strong>
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="row">
            <div className="col">
              <div className="form--group">
                <label htmlFor="">Name on Card</label>
                <InputText type="text" placeholder="Name on Card" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form--group">
                <label htmlFor="">Card Number</label>
                <InputText type="text" placeholder="Card Number" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form--group">
                <label htmlFor="">Valid Through</label>
                <InputText type="text" placeholder="Valid Through" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form--group">
                <label htmlFor="">CVV</label>
                <InputText type="text" placeholder="CVV" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form--group">
                <label htmlFor="">Email Address</label>
                <InputText type="text" placeholder="Email Address" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  renderCartDetail() {
    if (this.state.cart.length !== 0) {
      return this.state.cart.map((c, index) => {
        return (
          <div className="row align-items-center" key={index}>
            <div className="col-4">
              <div className="checkout-image-container">
                <div className="checkout-image">
                  <img
                    style={{ maxHeight: 70, minWidth: 70 }}
                    src={c.thumbnail}
                    alt=""
                  />
                </div>
                <div>{c.name}</div>
              </div>
            </div>
            <div className="col-4">
              <div className="fx align-items-center">
                <div className="quantity-input">
                  <span>{c.qty}</span>
                </div>
                <div>
                  <span>IDR {formatMoneyWithoutSymbol(c.price)}</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>
                <p>First Name: {this.state.userAddress.firstName}</p>
                <p>Last Name: {this.state.userAddress.lastName}</p>
                <p>Email: {this.state.userAddress.email}</p>
                <p>Company: {this.state.userAddress.company}</p>
                <p>Address: {this.state.userAddress.address}</p>
                <p>City: {this.state.userAddress.city}</p>
              </div>
            </div>
          </div>
        );
      });
    }
  }

  renderCheckoutForm() {
    const { activeSteps } = this.state;

    switch (activeSteps) {
      case 1:
        return (
          <div className="checkout-form-wrapper">
            <div className="row">
              <div className="col-md-4">
                <div className="form--group">
                  <label htmlFor="">First Name</label>
                  <InputText
                    onChange={e => this.setState({ firstName: e.target.value })}
                    value={this.state.firstName}
                    type="text"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form--group">
                  <label htmlFor="">Last Name</label>
                  <InputText
                    onChange={e => this.setState({ lastName: e.target.value })}
                    value={this.state.lastName}
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form--group">
                  <label htmlFor="">Company Name</label>
                  <InputText
                    onChange={e =>
                      this.setState({ companyName: e.target.value })
                    }
                    value={this.state.companyName}
                    type="text"
                    placeholder="Company Name"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form--group">
                  <label htmlFor="">Country</label>
                  <InputText
                    onChange={e => this.setState({ country: e.target.value })}
                    value={this.state.country}
                    type="text"
                    placeholder="Country"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form--group">
                  <label htmlFor="">City</label>
                  <InputText
                    onChange={e => this.setState({ city: e.target.value })}
                    value={this.state.city}
                    type="text"
                    placeholder="City"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form--group">
                  <label htmlFor="">Postal Code</label>
                  <InputText
                    onChange={e =>
                      this.setState({ postalCode: e.target.value })
                    }
                    value={this.state.postalCode}
                    type="text"
                    placeholder="Postal Code"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form--group">
                  <label htmlFor="">Address</label>
                  <InputText
                    onChange={e => this.setState({ address: e.target.value })}
                    value={this.state.address}
                    type="text"
                    placeholder="Address"
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="form--group">
                  <label htmlFor="">Email Address</label>
                  <InputText
                    onChange={e => this.setState({ email: e.target.value })}
                    value={this.state.email}
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form--group">
                  <label htmlFor="">Phone</label>
                  <InputText
                    onChange={e => this.setState({ phone: e.target.value })}
                    value={this.state.phone}
                    type="text"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form--group">
                  <Checkbox id="step1check" text="save Shipping Detail?" />
                </div>
              </div>
            </div>
            <div className="row mt--2">
              <div className="col">
                <div>
                  <button className="btn btn--primary">Back</button>
                </div>
              </div>
              <div className="col">
                <div className="text--right">
                  <button
                    className="btn btn--blue"
                    onClick={() => this.onProcessTab1()}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="checkout-form-wrapper">
            <div className="row justify-content-end">
              <div className="col-4">
                <span className="text--color-green">Your Order</span>
              </div>
              <div className="col-4"></div>
              <div className="col-4">
                <span className="text--color-green">Shipping Address</span>
              </div>
            </div>
            {this.renderCartDetail()}
            <div className="row justify-content-end">
              <div className="col-4">
                <span>Shipping Charge</span>
              </div>
              <div className="col-4">
                <span>
                  <strong>FREE</strong>
                </span>
              </div>
              <div className="col-4"></div>
            </div>
            <div className="row mt--2">
              <div className="col">
                <div>
                  <button
                    onClick={() => this.setState({ activeSteps: 1 })}
                    className="btn btn--primary"
                  >
                    Back
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="text--right">
                  <button
                    className="btn btn--blue"
                    onClick={() => this.onProcessTab2()}
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="checkout-form-wrapper">
            <div className="row">
              <div className="col-md-8">
                <div className="row justify-content-end mb--2">
                  <div className="col-6">
                    <span className="mb--1 text--color-green">Your Order</span>
                  </div>
                  <div className="col-6"></div>
                </div>
                <div className="row align-items-center">
                  <div className="col-6">
                    <p>Total Price</p>
                  </div>
                  <div className="col-6">
                    <p>IDR {formatMoneyWithoutSymbol(this.state.subTotal)}</p>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-6">
                    <p className="mb--1 text--color-green">Shipping Address</p>
                    <div>
                      <p>First Name: {this.state.userAddress.firstName}</p>
                      <p>Last Name: {this.state.userAddress.lastName}</p>
                      <p>Email: {this.state.userAddress.email}</p>
                      <p>Company: {this.state.userAddress.company}</p>
                      <p>Address: {this.state.userAddress.address}</p>
                      <p>City: {this.state.userAddress.city}</p>
                    </div>
                  </div>
                  <div className="col-6"></div>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <div className="cat--items">
                    <div>
                      <span className="mr--1">
                        <input
                          checked={this.state.paymentMethodMode === 1}
                          onChange={() =>
                            this.setState({ paymentMethodMode: 1 })
                          }
                          type="radio"
                          name="sort"
                          id="paymu"
                        />
                      </span>
                      <label htmlFor="paymu">iPaymu Wallet</label>
                    </div>
                  </div>
                  <div className="cat--items">
                    <div>
                      <span className="mr--1">
                        <input
                          checked={this.state.paymentMethodMode === 2}
                          onChange={() =>
                            this.setState({ paymentMethodMode: 2 })
                          }
                          type="radio"
                          name="sort"
                          id="az"
                        />
                      </span>
                      <label htmlFor="az">Credit Card / Debit Card</label>
                    </div>
                  </div>
                </div>
                <div>{this.renderPaymentMethod()}</div>
              </div>
            </div>
            <div className="row mt--2">
              <div className="col">
                <div>
                  <button
                    onClick={() => this.setState({ activeSteps: 2 })}
                    className="btn btn--primary"
                  >
                    Back
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="text--right">
                  <button
                    className="btn btn--blue"
                    onClick={() => this.setState({ activeSteps: 4 })}
                  >
                    Pay IDR {formatMoneyWithoutSymbol(this.state.subTotal)}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="checkout-form-wrapper">
            <div className="row mt--2">
              <div className="col">
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
                      <img src={require("../../assets/img/Inbox.svg")} alt="" />
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
                <div className="mt--2">
                  <p className="text--center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odit accusantium incidunt et explicabo illo recusandae
                    exercitationem ullam, ea architecto! Voluptates iusto
                    aliquid optio quam aut, consectetur accusantium placeat
                    itaque beatae?
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--2">
              <div className="col">
                <div>
                  <button
                    onClick={() => this.setState({ activeSteps: 3 })}
                    className="btn btn--primary"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    console.log(this.state.userAddress);
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>Checkout Page</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>
        <div className="content">
          <section className="section-page">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div>
                    <div className="checkout-steps-list">
                      <div
                        className={
                          this.state.activeSteps === 1
                            ? "steps-list--active"
                            : ""
                        }
                      >
                        <span>Shipping Address</span>
                      </div>
                      <div
                        className={
                          this.state.activeSteps === 2
                            ? "steps-list--active"
                            : ""
                        }
                      >
                        <span>Billing Details</span>
                      </div>
                      <div
                        className={
                          this.state.activeSteps === 3
                            ? "steps-list--active"
                            : ""
                        }
                      >
                        <span>Payment</span>
                      </div>
                      <div
                        className={
                          this.state.activeSteps === 4
                            ? "steps-list--active"
                            : ""
                        }
                      >
                        <span>Order Status</span>
                      </div>
                    </div>
                    <div className="checkout-form">
                      {this.renderCheckoutForm()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withContext(Checkout);
