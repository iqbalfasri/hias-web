import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

import Modal from "../../components/layout/Modal";
import InputText from "../../components/form/InputText";
import Checkbox from "../../components/form/Checkbox";
import { addUserAddress, getUserAddress, getCart, BASE_URL } from "../../api";
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
      paymentMethodMode: 1,
      addressId: 0,
      addresses: [],
      addressSelected: null,
      selectedIndexAddress: 0,
      isModalAddress: false
    };
  }

  componentDidMount() {
    let userId = localStorage.getItem("userId");
    getCart(userId).then(res => {
      this.setState({
        cart: res.data.listItems,
        subTotal: res.data.subTotal,
        userAddress: this.state.addresses[0]
      });
    });

    getUserAddress(userId)
      .then(res => {
        this.setState({ addresses: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillReceiveProps(props) {
    let userId = localStorage.getItem("userId");
    getUserAddress(userId)
      .then(res => {
        this.setState({ addresses: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onProcessTab1() {
    this.props.context.setIsLoading(true);
    this.setState({ activeSteps: 2 }, () =>
      this.props.context.setIsLoading(false)
    );

    // addUserAddress({
    //   userId: localStorage.getItem("userId"),
    //   firstName: this.state.firstName,
    //   lastName: this.state.lastName,
    //   company: this.state.companyName,
    //   country: this.state.country,
    //   city: this.state.city,
    //   address: this.state.address,
    //   email: this.state.email,
    //   phone: this.state.phone,
    //   postCode: this.state.postalCode
    // })
    //   .then(res => {
    //     const getIdAddress = res.data.slice(-2);
    //     if (res.success) {
    //       // getUserAddress(localStorage.getItem("userId")).then(res => {
    //       //   console.log(res.data[0]);

    //       //   this.setState({ activeSteps: 2 });
    //       //   this.props.context.setIsLoading(false);
    //       // });
    //       const userAddress = {
    //         userId: localStorage.getItem("userId"),
    //         firstName: this.state.firstName,
    //         lastName: this.state.lastName,
    //         company: this.state.companyName,
    //         country: this.state.country,
    //         city: this.state.city,
    //         address: this.state.address,
    //         email: this.state.email,
    //         phone: this.state.phone,
    //         postCode: this.state.postalCode
    //       };
    //       this.setState(
    //         {
    //           userAddress: userAddress,
    //           activeSteps: 2,
    //           addressId: getIdAddress
    //         },
    //         () => this.props.context.setIsLoading(false)
    //       );
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  onProcessTab2() {
    this.props.context.setIsLoading(true);
    this.setState({ activeSteps: 3 }, () =>
      this.props.context.setIsLoading(false)
    );
    // axios
    //   .post(
    //     `${BASE_URL}/product/order`,
    //     {
    //       userId: localStorage.getItem("userId"),
    //       userAddressId: this.state.addressId,
    //       total: this.state.subTotal,
    //       subTotal: this.state.subTotal,
    //       session: null,
    //       paymentType: null,
    //       status: 0
    //     },
    //     {
    //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    //     }
    //   )
    //   .then(res => {
    //     if (res.data.success) {
    //       this.setState({ activeSteps: 3 }, () => {
    //         this.props.context.setIsLoading(false);
    //       });
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
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
          <div
            className="row align-items-center"
            style={{ padding: "10px 15px" }}
            key={index}
          >
            <div className="col-2">
              <div className="checkout-image-container">
                <div className="checkout-image">
                  <img
                    style={{ maxHeight: 70, minWidth: 70 }}
                    src={c.thumbnail}
                    alt={c.productName}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <span>{c.name}</span>
            </div>

            <div className="col-md-1">
              <span>{c.qty}</span>
            </div>

            <div className="col-md-3">
              <h5>IDR {formatMoneyWithoutSymbol(c.price)}</h5>
            </div>
          </div>
        );
      });
    }
  }

  handleAddAddress() {
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
        console.log(res);
        this.props.context.setIsLoading(false);
        this.setState({ isModalAddress: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderAddAddress() {
    return (
      <>
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
                onChange={e => this.setState({ companyName: e.target.value })}
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
                onChange={e => this.setState({ postalCode: e.target.value })}
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
        <button
          className="btn btn--full btn--blue"
          onClick={() => this.handleAddAddress()}
        >
          Simpan
        </button>
      </>
    );
  }

  renderAddressSelection() {
    if (this.state.address.length !== 0 || this.state.address !== undefined) {
      return (
        <div>
          {this.state.addresses.map((address, index) => {
            return (
              <div className="radio--input" key={address.idAddress}>
                <input
                  id={address.idAddress}
                  onChange={e =>
                    this.setState(
                      {
                        addressSelected: e.target.value,
                        selectedIndexAddress: index
                      },
                      () => {
                        localStorage.setItem(
                          "userAddress",
                          JSON.stringify(this.state.addresses[
                            this.state.selectedIndexAddress
                          ])
                        );
                      }
                    )
                  }
                  value={address.idAddress}
                  type="radio"
                  checked={
                    this.state.selectedIndexAddress == index ? true : false
                  }
                />
                <label className="box-address" htmlFor={address.idAddress}>
                  <div className="box-address--detail">
                    <h4>
                      {address.firstName} {address.lastName}
                    </h4>
                    <p>{address.address}</p>
                    <p className="phone">{address.phone}</p>
                  </div>
                </label>
              </div>
            );
          })}
        </div>
      );
    }
  }

  renderCheckoutForm() {
    const { activeSteps } = this.state;

    switch (activeSteps) {
      case 1:
        return (
          <div className="checkout-form-wrapper">
            <div className="container">
              {this.renderAddressSelection()}
              <button
                className="btn btn-full btn--gray"
                onClick={() => this.modalAddress()}
              >
                Tambah Alamat Baru
              </button>

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
        const userAddress = JSON.parse(localStorage.getItem('userAddress'))
        return (
          <div className="checkout-form-wrapper">
            <div className="row">
              <div className="col-8">
                <span className="text--color-green">Your Order</span>
                {this.renderCartDetail()}
              </div>
              <div className="col-4">
                <span className="text--color-green">Shipping Address</span>
                <div style={{ padding: "10px 0" }}>
                  <h4>{`${userAddress.firstName} ${userAddress.lastName}`}</h4>
                  <p
                    style={{ margin: "0 0" }}
                  >{`${userAddress.address}`}</p>
                </div>
              </div>
            </div>

            <div className="row" style={{ margin: "35px 0" }}>
              <div className="container">
                <h3>Shipping Method</h3>
              </div>
            </div>

            <div className="row mt--2 mb--2">
              <div className="container">
                <div className="col-md-4">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <h4 style={{ color: "#878786" }}>Shipping</h4>
                    <h4 style={{ color: "#878786" }}>IDR 400,000</h4>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <h4 style={{ color: "#878786" }}>Total Price</h4>
                    <h4 style={{ color: "#878786" }}>
                      IDR{" "}
                      {formatMoneyWithoutSymbol(
                        localStorage.getItem("subTotal")
                      )}
                    </h4>
                  </div>
                </div>
              </div>
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
                    className="btn btn--full btn--blue"
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
                      {/* <p>First Name: {this.state.userAddress.firstName}</p>
                        <p>Last Name: {this.state.userAddress.lastName}</p>
                        <p>Email: {this.state.userAddress.email}</p>
                        <p>Company: {this.state.userAddress.company}</p>
                        <p>Address: {this.state.userAddress.address}</p>
                        <p>City: {this.state.userAddress.city}</p> */}
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
      <>
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
        <Modal
          isOpen={this.state.isModalAddress}
          onCloseModal={() => this.modalAddress()}
        >
          {this.renderAddAddress()}
        </Modal>
      </>
    );
  }

  modalAddress() {
    this.setState({ isModalAddress: !this.state.isModalAddress });
  }
}

export default withContext(Checkout);
