import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import StarRatings from 'react-star-ratings'

import ProductCard from '../../components/card/Product'
import ColorSelector from '../../components/ColorSelector'
import { fetchProductById, fetchWishList, addToCart, fetchHotProduct } from '../../api'
import { formatMoneyWithoutSymbol } from '../../utils/money'
import { withContext } from '../../context/withContext'
import { isLogin } from '../../utils/auth'

class Detail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeDetailTab: 1,
      addToCartClicked: false,
      product: null,
      wishListItems: []
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    fetchProductById(id)
      .then((res) => {
        this.setState({
          product: res.data[0]
        })
      })

    fetchHotProduct()
      .then((res) => {
        this.props.context.setHotProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
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

  renderRelatedProduct () {
    const hotProducts = this.props.context.hotProducts
    const products = []
    if (hotProducts.length !== 0) {
      for (let i = 0;i < 4;i++) {
        products.push((
          <div className="col-md-3" key={`product-${hotProducts[i]}`}>
            <ProductCard thumbnail={hotProducts[i].thumbnail ? hotProducts[i].thumbnail : 'https://via.placeholder.com/600x600'} loved={this.isProductWishlisted(hotProducts[i].id)} id={hotProducts[i].id} title={hotProducts[i].productName} price={hotProducts[i].price} category={hotProducts[i].categoryName} />
          </div>
        ))
      }
    }
    return products
  }

  onClickAddToCart (product) {
    if (isLogin()) {
      addToCart({
        productId: product.id,
        userId: localStorage.getItem('userId'),
        amount: 2
      })
        .then((res) => {
          this.setState({
            addToCartClicked: true
          })
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      this.props.context.setIsModalSigninPopupOpen(true)
    }
  }

  renderAddToCartButton () {
    const { product } = this.state
    return this.state.addToCartClicked ? (
      <div className="pda--items">
        <button className="btn btn--blue">Added to Cart</button>
      </div>
    ) : (
      <div className="pda--items">
        <button className="btn btn--blue" onClick={() => this.onClickAddToCart(product)}>Add to Cart</button>
      </div>
    )
  }

  renderTabContent () {
    const { activeDetailTab, product } = this.state
    switch(activeDetailTab) {
      case 1:
        return (
          <div>
            <p>{ product.overview }</p>
          </div>
        )
      case 2:
        return (
          <div>
            <p>{ product.descriptiom }</p>
          </div>
        )
      case 3:
        return (
          <div>
            <p>{ product.courier }</p>
          </div>
        )
      default:
        return null
    }
  }

  render () {
    const { product } = this.state
    const { id } = this.props.match.params
    return product !== null ? (
      <div>
        <Helmet key={Math.random()}>
          <title>Product Detail</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>
        <div className="content">
          <section className="section-page">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div>
                    <div>
                      <h1>{ product.productName }</h1>
                      <h2 className="text--color-orange">IDR {formatMoneyWithoutSymbol(product.price)} / each</h2>
                    </div>
                    <div>
                      <div className="mb--1">
                        <img src={product.thumbnail ? product.thumbnail : 'https://via.placeholder.com/1400x700'} alt=""/>
                      </div>
                      <div className="fx fx-no-wrap align-items-center">
                        <div className="img-detail-thumbnail">
                          <img src={product.thumbnail ? product.thumbnail : 'https://via.placeholder.com/1400x700'} alt=""/>
                        </div>
                        <div className="img-detail-thumbnail">
                          <img src={product.thumbnail ? product.thumbnail : 'https://via.placeholder.com/1400x700'} alt=""/>
                        </div>
                        <div className="img-detail-thumbnail">
                          <img src={product.thumbnail ? product.thumbnail : 'https://via.placeholder.com/1400x700'} alt=""/>
                        </div>
                        <div className="img-detail-thumbnail">
                          <img src={product.thumbnail ? product.thumbnail : 'https://via.placeholder.com/1400x700'} alt=""/>
                        </div>
                        <div>
                          <ColorSelector />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <div className="product-detail-actions">
                      { this.isProductWishlisted(id) ? (
                        <div className="pda--items">
                          <span className="text--size-1-5"><FontAwesomeIcon icon={fasHeart} /></span>
                        </div>
                      ) : (
                        <div className="pda--items">
                          <span className="text--size-1-5"><FontAwesomeIcon icon={faHeart} /></span>
                        </div>
                      ) }
                      {/* <div className="pda--items">
                        <button className="btn btn--gray">Add to Registry</button>
                      </div> */}
                      { this.renderAddToCartButton() }
                    </div>
                    <div className="rating-container">
                      <div className="mr--1">
                        <span className="mr--1"><strong>4</strong></span>
                        <StarRatings
                          rating={4}
                          starDimension='15px'
                          starSpacing='5px'
                          starRatedColor='rgb(165, 208, 112)'
                        />
                      </div>
                      <div>
                        <span>Average Score</span>
                      </div>
                    </div>
                    <div className="product-detail-tab">
                      <div className="pdt--tab">
                        <div className={`pdt--tab-item ${this.state.activeDetailTab === 1 ? 'pdt--tab-item-active' : ''}`} onClick={() => this.setState({ activeDetailTab: 1 })}>
                          <span>Overview</span>
                        </div>
                        <div className={`pdt--tab-item ${this.state.activeDetailTab === 2 ? 'pdt--tab-item-active' : ''}`} onClick={() => this.setState({ activeDetailTab: 2 })}>
                          <span>Details</span>
                        </div>
                        <div className={`pdt--tab-item ${this.state.activeDetailTab === 3 ? 'pdt--tab-item-active' : ''}`} onClick={() => this.setState({ activeDetailTab: 3 })}>
                          <span>Courier</span>
                        </div>
                      </div>
                      <div className="pdt--tab-content">
                        { this.renderTabContent() }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-page">
            <div className="container">
              <div className="row align-items-center mb--2">
                <div className="col">
                  <div>
                    <h1 className="section-title mb--0">Related Product</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                { this.renderRelatedProduct() }
              </div>
            </div>
          </section>
          <section className="section-page">
            <div className="container">
              <div className="row align-items-center mb--2">
                <div className="col">
                  <div>
                    <h1 className="section-title mb--0">Customer Reviews</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="mb--1">
                    <div className="customer-review">
                      <div>
                        <span className="mr--1"><strong>Filter</strong></span>
                        <span className="mr--1"><strong>Sort :</strong> Default</span>
                      </div>
                      <div>
                        <span><strong>Rating Details</strong></span>
                      </div>
                    </div>
                  </div>
                  <div className="customer-review-container">
                    <div className="customer-review-wrapper">
                      <div className="cr--avatar">
                        <div className="img--rounded">
                          <img src="https://via.placeholder.com/100" alt=""/>
                        </div>
                      </div>
                      <div>
                        <div className="cr-rating-head">
                          <div>
                            <span className="mr--1"><strong>Herved</strong> rated it</span>
                            <span>
                              <StarRatings
                                rating={4}
                                starDimension='15px'
                                starSpacing='5px'
                                starRatedColor='#ef8b67'
                              />
                            </span>
                          </div>
                          <div>
                            <span className="text--color-gray">Nov 15, 2019</span>
                          </div>
                        </div>
                        <div>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum animi perspiciatis velit assumenda suscipit in, fugiat porro expedita eveniet dolorum placeat cumque soluta, exercitationem recusandae error quaerat quos consectetur doloremque!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil animi voluptatum sequi dicta aspernatur praesentium harum assumenda! Iusto ullam obcaecati fugit, reiciendis, et at, porro laudantium autem alias aliquid nemo.
                          </p>
                          <span className="text--color-orange">Read More</span>
                        </div>
                      </div>
                    </div>
                    <div className="customer-review-wrapper">
                      <div className="cr--avatar">
                        <div className="img--rounded">
                          <img src="https://via.placeholder.com/100" alt=""/>
                        </div>
                      </div>
                      <div>
                        <div className="cr-rating-head">
                          <div>
                            <span className="mr--1"><strong>Herved</strong> rated it</span>
                            <span>
                              <StarRatings
                                rating={4}
                                starDimension='15px'
                                starSpacing='5px'
                                starRatedColor='#ef8b67'
                              />
                            </span>
                          </div>
                          <div>
                            <span className="text--color-gray">Nov 15, 2019</span>
                          </div>
                        </div>
                        <div>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum animi perspiciatis velit assumenda suscipit in, fugiat porro expedita eveniet dolorum placeat cumque soluta, exercitationem recusandae error quaerat quos consectetur doloremque!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil animi voluptatum sequi dicta aspernatur praesentium harum assumenda! Iusto ullam obcaecati fugit, reiciendis, et at, porro laudantium autem alias aliquid nemo.
                          </p>
                          <span className="text--color-orange">Read More</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    ) : null
  }
}

export default withContext(Detail)