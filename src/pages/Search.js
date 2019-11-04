import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

import ProductCard from '../components/card/Product'
import { searchByName, fetchWishList } from '../api'
import { isLogin } from '../utils/auth'

class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products: [],
      wishListItems: []
    }
  }

  componentDidMount () {
    const { keyword } = queryString.parse(this.props.location.search)
    searchByName(keyword)
      .then((res) => {
        this.setState({
          products: res.data
        })
      })

    if (isLogin()) {
      fetchWishList(localStorage.getItem('userId'))
        .then((res) => {
          this.setState({
            wishListItems: res.data
          })
        })
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
    const { products } = this.state
    if (products !== 0) {
      return products.map((product) => {
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
          <title>Product Detail</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>
        <div>
          <div className="content">
            <section className="section-page">
              <div className="container">
                <div className="row mb--2">
                  <div className="col">
                    <p><strong>Showing {this.state.products.length} results for "{queryString.parse(this.props.location.search).keyword}"</strong></p>
                  </div>
                </div>
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

export default withRouter(Search)