import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import InputText from '../../components/form/InputText'

import { getCart, removeProductOnCart, onPlaceOrder } from '../../api'
import { isLogin } from '../../utils/auth'
import { formatMoneyWithoutSymbol } from '../../utils/money'
import { withContext } from '../../context/withContext'

class Cart extends Component {
  constructor (props) {
    super(props)

    this.state = {
      carts: [],
      cartsQuantity: []
    }
  }

  componentDidMount () {
    const userId = localStorage.getItem('userId')
    if (!isLogin()) {
      this.props.history.push('/login')
    }
    getCart(userId)
      .then((res) => {
        if (res.data.listItems) {
          this.setState({
            carts: res.data.listItems
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  onChangeQuantity (e, index) {
    const value = e.target.value
    const quantity = this.state.cartsQuantity
    quantity[index] = value
    this.setState({
      cartsQuantity: quantity
    })
  }

  onRemoveCart (index, productId) {
    this.props.context.setIsLoading(true)
    removeProductOnCart(productId)
      .then((res) => {
        console.log(res)
        const newList = this.state.carts
        newList.splice(index, 1)
        this.setState({
          carts: newList
        })
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        this.props.context.setIsLoading(false)
      })
  }

  renderCart () {
    if (this.state.carts.length !== 0) {
      return this.state.carts.map((cart, index) => {
        const quantity = this.state.cartsQuantity[index] || 1
        return (
          <tr key={`${cart.idItems}-${index}`}>
            <th scope="row">
              <div className="table-product-image-wrapper align-items-center">
                <div style={{ cursor: 'pointer' }} onClick={() => this.onRemoveCart(index, cart.productId)}>
                  X
                </div>
                <div className="table-product-image">
                  {/* <img src="https://via.placeholder.com/550x550" alt=""/> */}
                  <img src={cart.thumbnail} alt=""/>
                </div>
                <div>
                  <span>{ cart.name }</span>
                </div>
              </div>
            </th>
            <td>
              <span>IDR {formatMoneyWithoutSymbol(cart.price)}</span>
            </td>
            <td>
              <input style={{ width: '50px' }} onChange={(e) => this.onChangeQuantity(e, index)} value={quantity} type="number" name="quantity" className="form--input" min="1" />
            </td>
            <td>
              <span><strong>IDR {formatMoneyWithoutSymbol(quantity * cart.price)}</strong></span>
            </td>
          </tr>
        )
      })
    }
  }

  getTotalCartPrice () {
    const { cartsQuantity, carts } = this.state
    let total = 0
    for (let i = 0; i < carts.length; i++) {
      const itemAmount = cartsQuantity[i] || 1
      total = total + ( itemAmount * carts[i].price)
    }
    return total
  }

  onCheckout () {
    onPlaceOrder({
      cartId: localStorage.getItem('userId'),
      subTotal: this.getTotalCartPrice(),
      status : ""
    })
    .then((res) => {
      this.props.history.push('/checkout')
    })
  }

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
                        { this.renderCart() }
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
                    <div style={{marginRight:"3em"}}>
                      <div className="fx justify-content-between">
                        <h3 className="mr--1">Subtotal</h3>
                        <h3>IDR {formatMoneyWithoutSymbol(this.getTotalCartPrice())}</h3>
                      </div>
                      <div className="fx justify-content-between">
                        <h3 className="mr--1">Shipping</h3>
                        <h3>Free</h3>
                      </div>
                    </div>
                  </div>
                  <div className="total-card-cart-wrapper">
                    <div className="total-card-cart">
                      <div>
                        <h3>Total amount IDR {formatMoneyWithoutSymbol(this.getTotalCartPrice())}</h3>
                      </div>
                      <div>
                        <button onClick={() => this.onCheckout()} className="btn btn--blue btn--full">Proceed to Checkout</button>
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

export default withContext(Cart)