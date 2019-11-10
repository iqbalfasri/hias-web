import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Swiper from 'react-id-swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import ProductCard from '../components/card/Product'
import InputText from '../components/form/InputText'
import Checkbox from '../components/form/Checkbox'
import ColorSelector from '../components/ColorSelector'
import { withContext } from '../context/withContext'
import { fetchBestSellerProduct, fetchHotProduct, fetchWishList } from '../api'
import { isLogin } from '../utils/auth'
import './Home.scss'

const params = {
  slideActiveClass: 'slide-product-active',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  spaceBetween: 50,
  slidesPerGroup: 1,
  slidesPerView: 3,
  centeredSlides: true,
  loop: true
}

const swiperHome = {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  slidesPerGroup: 1,
  slidesPerView: 1,
  loop: true
}

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      wishListItems: []
    }
  }

  componentDidMount () {
    fetchBestSellerProduct()
      .then((res) => {
        this.props.context.setBestProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
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
      if (wishListItems[i].idProduct === id) {
        result = true
        break;
      }
    }
    return result
  }

  renderProduct() {
    const hotProducts = this.props.context.hotProducts
    if (hotProducts.length !== 0) {
      return hotProducts.map((product) => {
        return (
          <div className="col-md-3" key={`product-${product.id}`}>
            <ProductCard thumbnail={product.thumbnail ? product.thumbnail : 'https://via.placeholder.com/600x600'} loved={this.isProductWishlisted(product.id)} id={product.id} title={product.productName} price={product.price} category={product.categoryName} />
            {/* <ProductCard thumbnail='https://via.placeholder.com/600x600' loved={this.isProductWishlisted(product.id)} id={product.id} title={product.productName} price={product.price} category={product.categoryName} /> */}
          </div>
        )
      })
    }
  }

  renderBestProduct() {
    const bestProducts = this.props.context.bestProducts
    if (bestProducts.length !== 0) {
      return (
        <Swiper {...params}>
          { bestProducts.map((product, index) => {
            return (
              <div key={product.id}>
                <div className="product-slide-with-number">
                  <img src={product.thumbnail ? product.thumbnail : 'https://via.placeholder.com/600x600'} alt=""/>
                  {/* <img src='https://via.placeholder.com/600x600' alt=""/> */}
                  <div className="product-slide-with-number-wrapper">
                    <div className="fx fx-no-wrap align-items-center">
                      <div className="product-number">
                        { index + 1 }
                      </div>
                      <div className="product-title">
                        { product.productName }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }) }
        </Swiper>
      )
    }
  }

  render() {
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>Home Page</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>
        <div className="content">
          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <Swiper {...swiperHome}>
                    <div className="slide-wrapper-home">
                      <div className="fx slide-container-hero">
                        <div className="fx-2 slide-container-home">
                          <img className="img--cover" src="https://firebasestorage.googleapis.com/v0/b/hias-apps.appspot.com/o/Product%20Banner%2FBanner%20Slide%201%2F1.png?alt=media&token=9c4ae754-5e46-4866-80ee-725e50792895" alt=""/>
                        </div>
                        <div className="fx-1 slide-container-home">
                          <img className="img--cover" src="https://firebasestorage.googleapis.com/v0/b/hias-apps.appspot.com/o/Product%20Banner%2FBanner%20Slide%201%2F2.png?alt=media&token=d56a3de3-a8a3-4f59-b7f4-ab11fd5e6461" alt=""/>
                        </div>
                        <div className="fx-1 slide-container-home">
                          <img className="img--cover" src="https://firebasestorage.googleapis.com/v0/b/hias-apps.appspot.com/o/Product%20Banner%2FBanner%20Slide%201%2F3.png?alt=media&token=f8dbb7a7-28f8-412c-a44c-0c628aeffa07" alt=""/>
                          <div className="slide-hero-cta">
                            <div className="shc">
                              <div>
                                SHOP NOW
                              </div>
                              <div>
                                <span><FontAwesomeIcon icon={faArrowRight} /></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sch--text-1">
                          <h2><i>New Collection</i></h2>
                          <h1>Chairs &amp; Stools</h1>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur <br/>Voluptates harum ill facilis nam
                          </p>
                        </div>
                      </div>              
                    </div>                    
                    <div className="slide-wrapper-home">
                      <div className="fx slide-container-hero">
                        <div className="fx-1 slide-container-home">
                          <img className="img--cover" src="https://firebasestorage.googleapis.com/v0/b/hias-apps.appspot.com/o/Product%20Banner%2FBanner%20Slide%202%2F1.png?alt=media&token=764c675a-a72d-4cb2-b1ed-c40528263369" alt=""/>
                        </div>
                        <div className="fx-1 slide-container-home">
                          <div className="slide-hero-cta">
                            <div className="shc">
                              <div>
                                ADD TO CART
                              </div>
                              <div>
                                <span><FontAwesomeIcon icon={faArrowRight} /></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="fx-1 slide-container-home">
                          <img className="img--cover" src="https://firebasestorage.googleapis.com/v0/b/hias-apps.appspot.com/o/Product%20Banner%2FBanner%20Slide%202%2F3.png?alt=media&token=fd667c13-54f4-45ad-b316-be5a29d68ac0" alt=""/>
                        </div>
                        <div className="sch--text-2">
                        <h2><i>IDR 399.000</i></h2>
                          <h1>Simple Fiber <br/>Chair.</h1>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur.<br/> Voluptates harum illo facilis nam quisquam
                          </p>
                          <div>
                          <ColorSelector />
                          </div>
                        </div>
                      </div>              
                    </div>
                    <div className="slide-wrapper-home">
                      <div className="fx slide-container-hero">
                        <div className="fx-2 slide-container-home">
                          <img className="img--cover" src="https://firebasestorage.googleapis.com/v0/b/hias-apps.appspot.com/o/Product%20Banner%2FBanner%20Slide%203%2F1.png?alt=media&token=5784d4ce-c8e2-4691-b5d8-05b667718a13" alt=""/>
                        </div>
                        <div className="fx-2 slide-container-home">
                          <img className="img-cover" src={require('../../src/assets/img/bed-banner.png')} alt=""/>
                          <div className="slide-hero-cta">
                            <div className="shc">
                              <div>
                                EXPLORE ALL
                              </div>
                              <div>
                                <span><FontAwesomeIcon icon={faArrowRight} /></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sch--text-3">
                          <h2><i>SALE OFF</i></h2>
                          <h1>Classy Bedroom<br/>Stuff</h1>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur.<br/> Voluptates harum illo facilis nam quisquam
                          </p>
                        </div>
                      </div>              
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </section>
          <section className="section-page">
            <div className="container">
              <div className="row align-items-center mb--2">
                <div className="col">
                  <div>
                    <h1 className="section-title mb--0"><span className="text--color-orange">Hot</span> Items</h1>
                  </div>
                </div>
                <div className="col">
                  <div className="text--right">
                    <Link className="text--size-12" to="/">View All</Link>
                  </div>
                </div>
              </div>
              <div className="row">
                { this.renderProduct() }
              </div>
            </div>
          </section>
          <section className="section-page">
            <div className="container">
              <div className="row align-items-center mb--2">
                <div className="col">
                  <div>
                    <h1 className="section-title mb--0"><span className="text--color-orange">Best</span> Seller</h1>
                  </div>
                </div>
                <div className="col">
                  <div className="text--right">
                    <Link className="text--size-12" to="/">View All</Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  { this.renderBestProduct() }
                </div>
              </div>
            </div>
          </section>
          <section className="section-page section-bg-gray">
            <div className="container">
              <div className="row">
                <div className="col-md-5 bg--gray vertical-align">
                  <div className="newletter-section">
                    <div>
                      <p className="mb--0"><strong>Special Offer</strong></p>
                      <h2>Subscribe Newsletter</h2>
                    </div>
                    <div className="line-divider"></div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure eius accusantium, in dolor neque facere dolores mollitia repellat quis, quam, minus officia enim ad facilis sint. Omnis, autem magni?
                    </p>
                    <div className="mt--2">
                      <div className="form--group">
                        <InputText type="text" className="form--input" placeholder="Enter email address" />
                      </div>
                      <div className="form--group">
                        <Checkbox id="check" text="I agree the terms and conditions from HIAS house." textStyle={{ color: '#fff' }} />
                      </div>
                      <div className="form--group">
                        <button className="btn btn--full btn--blue">Next Step</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 pl--0">
                  <div>
                    <img src={require('../assets/img/Banner-SignIn.png')} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="section-page">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="newletter-section">
                    <div>
                      <p className="mb--0"><strong>News</strong></p>
                      <h2>Beatiful Living</h2>
                    </div>
                    <div className="line-divider ld--blue"></div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure eius accusantium, in dolor neque facere dolores mollitia repellat quis, quam, minus officia enim ad facilis sint. Omnis, autem magni?
                    </p>
                    <div className="mt--2">                      
                      <div className="form--group">
                        <button className="btn btn--full btn--blue">Explore All Articles</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <img src={require('../assets/img/Banner-Newsletter.png')} alt=""/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="newletter-section">
                    <div>
                      <h2>Living room and lighting ideas that will inspire you this year</h2>
                    </div>
                    <div className="line-divider ld--blue"></div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure eius accusantium, in dolor neque facere dolores mollitia repellat quis, quam, minus officia enim ad facilis sint. Omnis, autem magni?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="section-page section-bg-dark download-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="text--center">
                    <div className="text--size-2 mb--1">Download <strong>Hias House</strong> Apps</div>
                    <div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                  </div>
                  <div className="fx justify-content-around button-margin">
                    <div className="home-app-store-img">
                      <img src={require('../assets/img/Download-Android.png')} alt=""/>
                    </div>
                    <div className="home-app-store-img" style={{ marginLeft: '5px' }}>
                      <img src={require('../assets/img/Download-aPPSTORE.png')} alt=""/>
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

export default withContext(Home)
