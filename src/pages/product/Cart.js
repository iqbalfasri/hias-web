import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import InputText from '../../components/form/InputText'

class Cart extends Component {
  render () {
    return (
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
                      <tbody>
                        <tr>
                          <th scope="row">
                            <div className="table-product-image-wrapper align-items-center">
                              <div>
                                X
                              </div>
                              <div className="table-product-image">
                                <img src="https://via.placeholder.com/550x550" alt=""/>
                              </div>
                              <div>
                                <span>Product name here</span>
                              </div>
                            </div>
                          </th>
                          <td>
                            <span>IDR 300.000</span>
                          </td>
                          <td>
                            <input type="number" name="quantity" className="form--input" min="1" />
                          </td>
                          <td>
                            <span><strong>IDR 300.000</strong></span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="table-product-image-wrapper align-items-center">
                              <div>
                                X
                              </div>
                              <div className="table-product-image">
                                <img src="https://via.placeholder.com/550x550" alt=""/>
                              </div>
                              <div>
                                <span>Product name here</span>
                              </div>
                            </div>
                          </th>
                          <td>
                            <span>IDR 300.000</span>
                          </td>
                          <td>
                            <input type="number" name="quantity" className="form--input" min="1" />
                          </td>
                          <td>
                            <span><strong>IDR 300.000</strong></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="fx justify-content-between">
                    <div>
                      <div className="fx">
                        <InputText type="text" placeholder="Coupon" />
                        <div className="ml--1">
                          <button className="btn btn--primary">Apply</button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="fx justify-content-between">
                        <h2 className="mr--1">Subtotal</h2>
                        <h2>IDR 1.000.000</h2>
                      </div>
                      <div className="fx justify-content-between">
                        <h2 className="mr--1">Shipping</h2>
                        <h2>Free</h2>
                      </div>
                    </div>
                  </div>
                  <div className="total-card-cart-wrapper">
                    <div className="total-card-cart">
                      <div>
                        <h2>Total amount IDR 1.000.000</h2>
                      </div>
                      <div>
                        <Link className="btn btn--blue btn--full" to="/checkout">Proceed to Checkout</Link>
                      </div>
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

export default Cart