import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

import ProductCard from '../components/card/Product'
import { fetchWishList } from '../api'
import { isLogin } from '../utils/auth'

class Wishlist extends Component {
  constructor (props) {
    super(props)

    this.state = {
      wishListItems: []
    }
  }

  componentDidMount () {
    if (isLogin()) {
      fetchWishList(localStorage.getItem('userId'))
        .then((res) => {
          this.setState({
            wishListItems: res.data
          })
        })
    } else {
      this.props.history.push('/login')
    }
  }

  isProductWishlisted (id) {
    const { wishListItems } = this.state
    let result = false
    for (let i = 0; i < wishListItems.length; i++) {
      if (wishListItems[i].id === id) {
        result = true
        break;
      }
    }
    return result
  }

  renderProduct () {
    const { wishListItems } = this.state
    if (wishListItems.length !== 0) {
      return wishListItems.map((product) => {
        return (
          <div className="col-md-3" key={`product-${product.id}`}>
            <ProductCard thumbnail={product.thumbnail ? product.thumbnail : 'https://via.placeholder.com/600x600'} loved={this.isProductWishlisted(product.id)} id={product.id} title={product.productName} price={product.price} category={product.categoryName} />
            {/* <ProductCard thumbnail={product.thumbnail ? 'https://via.placeholder.com/600x600' : 'https://via.placeholder.com/600x600'} loved={this.isProductWishlisted(product.id)} id={product.id} title={product.productName} price={product.price} category={product.categoryName} /> */}
          </div>
        )
      })
    }
  }

  render () {
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>Wishlist</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>
        <div>
          <div className="content">
            <section className="section-page">
              <div className="container">
                <div className="row">
                  { this.renderProduct() } 
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Wishlist)