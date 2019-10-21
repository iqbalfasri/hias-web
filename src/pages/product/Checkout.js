import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import InputText from '../../components/form/InputText'
import Checkbox from '../../components/form/Checkbox'
import './Checkout.scss'

class Checkout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeSteps: 1
    }
  }

  renderCheckoutForm () {
    const { activeSteps } = this.state

    switch (activeSteps) {
      case 1:
        return (
          <div className="checkout-form-wrapper">
            <div className="row">
              <div className="col-md-4">
                <div className="form--group">
                  <label htmlFor="">First Name</label>
                  <InputText type="text" placeholder="First Name" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form--group">
                  <label htmlFor="">Last Name</label>
                  <InputText type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form--group">
                  <label htmlFor="">Company Name</label>
                  <InputText type="text" placeholder="Company Name" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form--group">
                  <label htmlFor="">First Name</label>
                  <InputText type="text" placeholder="First Name" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form--group">
                  <label htmlFor="">Last Name</label>
                  <InputText type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form--group">
                  <label htmlFor="">Company Name</label>
                  <InputText type="text" placeholder="Company Name" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form--group">
                  <label htmlFor="">First Name</label>
                  <InputText type="text" placeholder="First Name" />
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="form--group">
                  <label htmlFor="">First Name</label>
                  <InputText type="text" placeholder="First Name" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form--group">
                  <label htmlFor="">Last Name</label>
                  <InputText type="text" placeholder="Last Name" />
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
                  <button className="btn btn--blue" onClick={() => this.setState({ activeSteps: 2 })}>Next</button>
                </div>
              </div>
            </div>
          </div>
        )
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
            <div className="row align-items-center">
              <div className="col-4">
                <div className="checkout-image-container">
                  <div className="checkout-image">
                    <img src="https://via.placeholder.com/250" alt=""/>
                  </div>
                  <div>
                    Product Name Here
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="fx align-items-center">
                  <div className="quantity-input">
                    <input type="number" name="quantity" className="form--input form--w-content" min="1" />
                  </div>
                  <div>
                    <span>IDR 300.000</span>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-4">
                <div className="checkout-image-container">
                  <div className="checkout-image">
                    <img src="https://via.placeholder.com/250" alt=""/>
                  </div>
                  <div>
                    Product Name Here
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="fx align-items-center">
                  <div className="quantity-input">
                    <input type="number" name="quantity" className="form--input form--w-content" min="1" />
                  </div>
                  <div>
                    <span>IDR 300.000</span>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-4">
                <span>Shipping Charge</span>
              </div>
              <div className="col-4"><span><strong>FREE</strong></span></div>
              <div className="col-4"></div>
            </div>
            <div className="row mt--2">
              <div className="col">
                <div>
                  <button onClick={() => this.setState({ activeSteps: 1 })} className="btn btn--primary">Back</button>
                </div>
              </div>
              <div className="col">
                <div className="text--right">
                  <button className="btn btn--blue" onClick={() => this.setState({ activeSteps: 3 })}>Continue to Payment</button>
                </div>
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="checkout-form-wrapper">
            <div className="row">
              <div className="col-md-8">
                <div className="row justify-content-end">
                  <div className="col-6">
                    <span className="text--color-green">Your Order</span>
                  </div>
                  <div className="col-6"></div>
                </div>
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="checkout-image-container">
                      <div className="checkout-image">
                        <img src="https://via.placeholder.com/250" alt=""/>
                      </div>
                      <div>
                        Product Name Here
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="fx align-items-center">
                      <div className="quantity-input">
                        <input type="number" name="quantity" className="form--input form--w-content" min="1" />
                      </div>
                      <div>
                        <span>IDR 300.000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="checkout-image-container">
                      <div className="checkout-image">
                        <img src="https://via.placeholder.com/250" alt=""/>
                      </div>
                      <div>
                        Product Name Here
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="fx align-items-center">
                      <div className="quantity-input">
                        <input type="number" name="quantity" className="form--input form--w-content" min="1" />
                      </div>
                      <div>
                        <span>IDR 300.000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-6">
                    <span>Shipping Charge</span>
                  </div>
                  <div className="col-6"><span><strong>FREE</strong></span></div>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <div className="cat--items">
                    <div>
                      <span className="mr--1"><input type="radio" name="sort" id="paymu" /></span>
                      <label htmlFor="paymu">iPaymu Wallet</label>
                    </div>
                  </div>
                  <div className="cat--items">
                    <div>
                      <span className="mr--1"><input type="radio" name="sort" id="az" /></span>
                      <label htmlFor="az">Credit Card / Debit Card</label>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className="col">
                      <div className="form--group">
                        <label htmlFor="">First Name</label>
                        <InputText type="text" placeholder="First Name" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form--group">
                        <label htmlFor="">First Name</label>
                        <InputText type="text" placeholder="First Name" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form--group">
                        <label htmlFor="">First Name</label>
                        <InputText type="text" placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form--group">
                        <label htmlFor="">First Name</label>
                        <InputText type="text" placeholder="First Name" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form--group">
                        <label htmlFor="">First Name</label>
                        <InputText type="text" placeholder="First Name" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt--2">
              <div className="col">
                <div>
                  <button onClick={() => this.setState({ activeSteps: 2 })} className="btn btn--primary">Back</button>
                </div>
              </div>
              <div className="col">
                <div className="text--right">
                  <button className="btn btn--blue" onClick={() => this.setState({ activeSteps: 4 })}>Pay IDR 1.000.0000</button>
                </div>
              </div>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="checkout-form-wrapper">
            <div className="row mt--2">
              <div className="col">
                <div className="order-status-container">
                  <div className="order-status-wrapper orb--active">
                    <div className="order-status-box">
                      <img src={require('../../assets/img/Coupon.svg')} alt=""/>
                    </div>
                    <div className="order-status-text">
                      <span>Payment</span>
                    </div>
                  </div>
                  <div className="order-status-wrapper">
                    <div className="order-status-box">
                      <img src={require('../../assets/img/OrderPacking.svg')} alt=""/>
                    </div>
                    <div className="order-status-text">
                      <span>Packing</span>
                    </div>
                  </div>
                  <div className="order-status-wrapper">
                    <div className="order-status-box">
                      <img src={require('../../assets/img/Inbox.svg')} alt=""/>
                    </div>
                    <div className="order-status-text">
                      <span>On Delivery</span>
                    </div>
                  </div>
                  <div className="order-status-wrapper">
                    <div className="order-status-box">
                      <img src={require('../../assets/img/ItemArrived.svg')} alt=""/>
                    </div>
                    <div className="order-status-text">
                      <span>Completed</span>
                    </div>
                  </div>
                </div>
                <div className="mt--2">
                  <p className="text--center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit accusantium incidunt et explicabo illo recusandae exercitationem ullam, ea architecto! Voluptates iusto aliquid optio quam aut, consectetur accusantium placeat itaque beatae?
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--2">
              <div className="col">
                <div>
                  <button onClick={() => this.setState({ activeSteps: 3 })} className="btn btn--primary">Back</button>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  render () {
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
                      <div className={this.state.activeSteps === 1 ? 'steps-list--active' : ''}>
                        <span>Shipping Address</span>
                      </div>
                      <div className={this.state.activeSteps === 2 ? 'steps-list--active' : ''}>
                        <span>Billing Details</span>
                      </div>
                      <div className={this.state.activeSteps === 3 ? 'steps-list--active' : ''}>
                        <span>Payment</span>
                      </div>
                      <div className={this.state.activeSteps === 4 ? 'steps-list--active' : ''}>
                        <span>Order Status</span>
                      </div>
                    </div>
                    <div className="checkout-form">
                      { this.renderCheckoutForm() }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Checkout