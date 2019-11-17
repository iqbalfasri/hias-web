import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Swiper from 'react-id-swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faAlignCenter } from '@fortawesome/free-solid-svg-icons'

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

const swiperInspiration = {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  slidesPerGroup: 4,
  slidesPerView: 4,
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
          <div className="col-md-3" key={`product-${product.productId}`}>
            {/* <ProductCard thumbnail={product.thumbnail ? product.thumbnail : 'https://via.placeholder.com/600x600'} loved={this.isProductWishlisted(product.productId)} id={product.productId} title={product.productName} price={product.price} category={product.categoryName} /> */}
            {/* <ProductCard thumbnail='https://via.placeholder.com/600x600' loved={this.isProductWishlisted(product.id)} id={product.id} title={product.productName} price={product.price} category={product.categoryName} /> */}
            <ProductCard thumbnail={require('../../src/assets/img/TES-ITEM-4.jpg')} loved={this.isProductWishlisted(product.productId)} id={product.productId} title={product.productName} price={product.price} category={product.categoryName} />
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
              <div key={`product-${product.productId}`}>
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

  renderInspiration() {
    const bestProducts = this.props.context.bestProducts
    if (bestProducts.length !== 0) {
      return (
        <Swiper {...swiperInspiration}>
          { bestProducts.map((product, index) => {
            return (
              <div className="text--center" key={product.id}>
                  {/* <img src='https://via.placeholder.com/600x600' alt="" /> */}
                  <img style={{maxWidth:"80%", display:"inline"}} src="https://firebasestorage.googleapis.com/v0/b/hias-apps.appspot.com/o/Product%20Banner%2FBanner%20Slide%201%2F1.png?alt=media&token=9c4ae754-5e46-4866-80ee-725e50792895" alt=""/>
                  <div className="inspiration-title">
                    Lorem Ipsum Dolor Sit Amet.
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
                <div className="col" style={{paddingRight:0, paddingLeft:0}}>
                  <Swiper {...swiperHome}>
                    <div className="slide-wrapper-home">
                      <div className="fx slide-container-home">
                        <img className="img--cover" src="https://firebasestorage.googleapis.com/v0/b/hias-apps.appspot.com/o/Product%20Banner%2FBanner%20Slide%201%2F1.png?alt=media&token=9c4ae754-5e46-4866-80ee-725e50792895" alt=""/>
                      </div>              
                    </div>
                    <div className="slide-wrapper-home">
                      <div className="fx slide-container-home">
                        <img className="img--cover" src="https://firebasestorage.googleapis.com/v0/b/hias-apps.appspot.com/o/Product%20Banner%2FBanner%20Slide%201%2F1.png?alt=media&token=9c4ae754-5e46-4866-80ee-725e50792895" alt=""/>
                      </div>              
                    </div>
                    <div className="slide-wrapper-home">
                      <div className="fx slide-container-home">
                        <img className="img--cover" src="https://firebasestorage.googleapis.com/v0/b/hias-apps.appspot.com/o/Product%20Banner%2FBanner%20Slide%201%2F1.png?alt=media&token=9c4ae754-5e46-4866-80ee-725e50792895" alt=""/>
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
                    <h3 className="section-title mb--0">Produk <span className="text--color-orange">Pilihan</span></h3>
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
                    <h3 className="section-title mb--0">Produk <span className="text--color-orange">Terlaris</span></h3>
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
          <section className="section-page">
            <div className="container">
              <div className="row align-items-center mb--2">
                <div className="col">
                  <div>
                    <h3 className="section-title mb--0">Inspirasi <span className="text--color-blue">HIAS House</span></h3>
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
                  { this.renderInspiration() }
                </div>
              </div>
            </div>
          </section>
          <div className="section-page">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div>
                    <img src={require('../assets/img/0-percent.jpg')} alt=""/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="newletter-section">
                    <div>
                      <p className="mb--0"><strong>Eksklusif dari HIAS HOUSE</strong></p>
                      <h2>Metode Pembayaran dengan <span style={{color:"orange"}}>Cicilan 0%</span></h2>
                    </div>
                    <div className="line-divider ld--blue"></div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure eius accusantium, in dolor neque facere dolores mollitia repellat quis, quam, minus officia enim ad facilis sint. Omnis, autem magni?
                    </p>
                    <div className="mt--2">                      
                      <div className="form--group">
                        <button className="btn btn--full btn--blue">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <section className="section-page section-bg-dark download-section">
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
          </section> */}
        </div>
      </div>
    )
  }
}

export default withContext(Home)
