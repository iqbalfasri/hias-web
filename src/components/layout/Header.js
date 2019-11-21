import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart, faShoppingCart, faUserCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { isLogin } from '../../utils/auth'
import { withContext } from '../../context/withContext'
import './Header.scss'
import { catchClause } from '@babel/types'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      keyword: '',
      isSticky: false,
      categories: []
    }

    this.handleSticky = this.handleSticky.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleSticky);
    const BASE_URL = "https://api-core-hias.herokuapp.com";

    //get all categories
    axios
      .get(`${BASE_URL}/product/secondSubCategory`)
      .then(res => {
        this.setState({ categories: res.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleSticky);
  }

  handleSticky() {
    if (window.scrollY > 0) {
      this.setState({
        isSticky: true
      })
      console.log('Scroll udah lebih dari 100')
    } else if (window.scrollY === 0) {
      this.setState({
        isSticky: false
      })
    }
  }

  renderCart() {
    // const cartLength = this.props.cart.length
    // return (
    //   <Link to="/cart">
    //     <div className="header-top-icon">
    //       <FontAwesomeIcon icon={faShoppingCart} color="#ccc" />
    //       <span className="cart-total">{ cartLength }</span>
    //     </div>
    //   </Link>
    // )
  }

  onLogout() {
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
    localStorage.removeItem('promo')
    window.location.href = '/'
  }

  onClickCartIcon() {
    if (isLogin()) {
      this.props.history.push('/cart')
    } else {
      this.props.context.setIsModalSigninPopupOpen(true)
    }
  }

  onClickOrderIcon() {
    if (isLogin()) {
      this.props.history.push('/order')
    } else {
      this.props.context.setIsModalSigninPopupOpen(true)
    }
  }

  onSearch(e) {
    e.preventDefault()
    const { keyword } = this.state
    if (keyword) {
      this.props.history.push(`/products/search?keyword=${keyword}`)
    } else {
      return false
    }
  }

  renderCategories = () => {
    const { categories } = this.state;

    if (categories != null) {
      return <li className="has-sub">
        <Link to="/products/1">RUANG TAMU</Link>
        <div className="sub-menu-container">
          <div className="sub-menu-title fx fx-no-wrap justify-content-between align-items-center">
            <div>
              <h3 className="mb--0">RUANG TAMU</h3>
            </div>
          </div>
          <div className="sub-menu-content fx fx-no-wrap">
            <div className="sub-menu-column">
              <div className="sub-menu-item smi--parent">
                <Link to="/products/1"><span>Furnitur</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/1"><span>Sofa</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/2"><span>Sofa Bed</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/3"><span>Sectional Sofa</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/4"><span>Kursi</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/5"><span>Recliner</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Meja</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>TV Stand</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Rak Penyimpanan</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Di Luar Ruangan</span></Link>
              </div>
            </div>
            <div className="sub-menu-column">
              <div className="sub-menu-item smi--parent">
                <Link to="/products/living"><span>Dekorasi</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Dekorasi Rumah</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Jam</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Vas</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Bingkai</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Aksesoris</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Lilin</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Cermin</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Bunga</span></Link>
              </div>
            </div>
            <div className="sub-menu-column">
              <div className="sub-menu-item smi--parent">
                <Link to="/products/living"><span>Linen</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Bantal</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Insert</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Karpet</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Keset</span></Link>
              </div>
            </div>
            <div className="sub-menu-column">
              <div className="sub-menu-item smi--parent">
                <Link to="/products/living"><span>Lampu</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Meja & Lampu Meja</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Lampu Lantai</span></Link>
              </div>
              <div className="sub-menu-item">
                <Link to="/products/living"><span>Lampu Gantung</span></Link>
              </div>
            </div>
          </div>
        </div>
      </li>
    }
  }

  renderTopIcon() {
    return isLogin() ? (
      <div className="fx align-items-center justify-content-end">
        <div className="fx mr--1 align-items-center">
          <div className="mr--1">
            <Link to="/" className="btn btn--transparent">
              <span className="text--size-12">Beranda</span>
            </Link>
          </div>
          <div>
            <button className="btn btn--transparent text--size-12">Tentang Kami</button>
          </div>
        </div>
        <div className="fx align-items-center">
          <div className="header-top-icon">
            <div className="header-top-icon--image">
              <Link to="/wishlist">
                <img src={require('../../assets/img/Wishlist.svg')} alt="" />
              </Link>
            </div>
          </div>
          <div className="header-top-icon">
            <div className="header-top-icon--image" onClick={() => this.onClickCartIcon()}>
              <img src={require('../../assets/img/Cart.svg')} alt="" />
            </div>
          </div>
          <div className="header-top-icon">
            <div className="header-top-icon--image" onClick={() => this.onClickOrderIcon()}>
              <img src={require('../../assets/img/OrderStatus.svg')} alt="" />
            </div>
          </div>
          <div className="header-top-icon">
            <div className="header-top-icon--image">
              <img src={require('../../assets/img/Inbox.svg')} alt="" />
            </div>
          </div>
          <div className="header-top-icon">
            <div className="header-top-icon--image">
              <img src={require('../../assets/img/DefaultAvatar.svg')} alt="" />
            </div>
            <div className="header--dropdown">
              <div className="hd--item">
                <Link to="/">Account</Link>
              </div>
              <div className="hd--item">
                <Link to="/wallet">Wallet</Link>
              </div>
              <div className="divider"></div>
              <div className="hd--item" onClick={() => this.onLogout()}>
                <span>Logout</span>
              </div>
            </div>
          </div>
          {this.renderCart()}
          <div className="header-top-icon header-top-icon--flag">
            <img src={require('../../assets/img/indonesia.png')} alt="" />
          </div>
        </div>
      </div>
    ) : (
        <div className="fx align-items-center justify-content-end">
          <div className="fx mr--1 align-items-center">
            <div className="mr--1">
              <Link to="/" className="btn btn--transparent">
                <span className="text--size-12">Beranda</span>
              </Link>
            </div>
            <div className="mr--1">
              <button className="btn btn--transparent text--size-12">Tentang Kami</button>
            </div>
            <div className="mr--1 align-items-center">
              <button className="btn btn--transparent text--size-12" onClick={() => this.props.context.setIsModalSigninPopupOpen(true)}>Masuk</button>
            </div>
            <div>
              <button className="btn btn--primary" onClick={() => this.props.context.setIsModalSignupPopupOpen(true)}>
                <span>Daftar</span>
              </button>
            </div>
          </div>
          <div className="fx fx align-items-center">
            <div className="header-top-icon">
              <div className="header-top-icon--image">
                <img src={require('../../assets/img/Wishlist.svg')} alt="" />
              </div>
            </div>
            <div className="header-top-icon">
              <div className="header-top-icon--image" onClick={() => this.onClickCartIcon()}>
                <img src={require('../../assets/img/Cart.svg')} alt="" />
              </div>
            </div>
            {this.renderCart()}
            <div className="header-top-icon header-top-icon--flag">
              <img src={require('../../assets/img/indonesia.png')} alt="" />
            </div>
          </div>
        </div>
      )
  }

  render() {
    console.log(this.state);
    return (
      <header className={this.state.isSticky ? 'sticky-header' : null}>
        <div className="container-fluid">
          <div className="top-header">
            <div className="row align-items-center">
              <div className="col-md-2">
                <div className="logo">
                  <Link to="/">
                    <img src={require('../../assets/img/MASTER_LOGO_HIAS_HOUSE_HORIZONTAL.png')} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="search-input-container">
                  <form onSubmit={(e) => this.onSearch(e)}>
                    <input onChange={(e) => this.setState({ keyword: e.target.value })} type="text" className="form--input" placeholder="Cari Produk Favorit Anda" />
                    <div className="search-icon">
                      <FontAwesomeIcon icon={faSearch} color="#ccc" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                {this.renderTopIcon()}
              </div>
            </div>
          </div>
        </div>
        <div className="menu-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <nav>
                  <ul>
                    <li className="has-sub">
                      <Link to="/products/1">RUANG TAMU</Link>
                      <div className="sub-menu-container">
                        <div className="sub-menu-title fx fx-no-wrap justify-content-between align-items-center">
                          <div>
                            <h3 className="mb--0">RUANG TAMU</h3>
                          </div>
                        </div>
                        <div className="sub-menu-content fx fx-no-wrap">
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/1"><span>Furnitur</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/1"><span>Sofa</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/2"><span>Sofa Bed</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/3"><span>Sectional Sofa</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/4"><span>Kursi</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/5"><span>Recliner</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Meja</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>TV Stand</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Rak Penyimpanan</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Di Luar Ruangan</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Dekorasi</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Dekorasi Rumah</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Jam</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Vas</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Bingkai</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Aksesoris</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Lilin</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Cermin</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Bunga</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Linen</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Bantal</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Insert</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Karpet</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Keset</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Lampu</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Meja & Lampu Meja</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Lampu Lantai</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Lampu Gantung</span></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="has-sub">
                      <Link to="/bed">KAMAR TIDUR</Link>
                      <div className="sub-menu-container">
                        <div className="sub-menu-title fx fx-no-wrap justify-content-between align-items-center">
                          <div>
                            <h3 className="mb--0">KAMAR TIDUR</h3>
                          </div>
                        </div>
                        <div className="sub-menu-content fx fx-no-wrap">
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Furnitur</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Bingkai Tempat Tidur</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Linen</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Sprei</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Insert</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Throw / Blanket</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Bantal</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Mattress</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Kasur</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Lampu</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Meja & Lampu Meja</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Lampu Lantai</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Lampu Gantung</span></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="has-sub">
                      <Link to="/bath">KAMAR MANDI</Link>
                      <div className="sub-menu-container">
                        <div className="sub-menu-title fx fx-no-wrap justify-content-between align-items-center">
                          <div>
                            <h3 className="mb--0">KAMAR MANDI</h3>
                          </div>
                        </div>
                        <div className="sub-menu-content fx fx-no-wrap">
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Linen</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Handuk</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Keset</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Household</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Rak</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Plasticware</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Dispenser</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Keranjang</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Tempat Sampah</span></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="has-sub">
                      <Link to="/dining">RUANG MAKAN</Link>
                      <div className="sub-menu-container">
                        <div className="sub-menu-title fx fx-no-wrap justify-content-between align-items-center">
                          <div>
                            <h3 className="mb--0">RUANG MAKAN</h3>
                          </div>
                        </div>
                        <div className="sub-menu-content fx fx-no-wrap">
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Furnitur</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Kursi</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Meja</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Tempat Penyimpanan</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Table Top</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Alat Makan</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Sendok Garpu</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Serveware</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Perlengkapan Minum</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Table Linen</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Aksesoris</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Peralatan Plastik</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Household</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Rak</span></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="has-sub">
                      <Link to="/kitchen">DAPUR</Link>
                      <div className="sub-menu-container">
                        <div className="sub-menu-title fx fx-no-wrap justify-content-between align-items-center">
                          <div>
                            <h3 className="mb--0">DAPUR</h3>
                          </div>
                        </div>
                        <div className="sub-menu-content fx fx-no-wrap">
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Household</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Rak</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Cookware & bakeware</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Tools & Accessories</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Alat Pemotong</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Peralatan Listrik</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Pedal bin</span></Link>
                            </div>
                          </div>
                          {/* <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Linen</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Cloth</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Mat</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Vase</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Furniture</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Storage</span></Link>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </li>
                    <li className="menu-header-border has-sub hs--right-edge">
                      <Link to="/">INSPIRASI</Link>
                      <div className="sub-menu-container">
                        <div className="sub-menu-title fx fx-no-wrap justify-content-between align-items-center">
                          <div>
                            <h3 className="mb--0">INSPIRASI</h3>
                          </div>
                        </div>
                        <div className="sub-menu-content">
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <Link to="/inspiration"><span className="mr--2">Ide & Inspirasi</span></Link>
                          </div>
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <Link to='/'><span className="mr--2">Tips & Trik</span></Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-header-border has-sub hs--right-edge">
                      <Link to="#">UNIT BISNIS HIAS</Link>
                      {/* <div className="sub-menu-container">
                        <div className="sub-menu-title fx fx-no-wrap justify-content-between align-items-center">
                          <div>
                            <h3 className="mb--0">HIAS Business Unit</h3>
                            <p className="mb--0">Lorem ipsum dolor sit amet</p>
                          </div>
                        </div>
                        <div className="sub-menu-content">
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <span className="mr--2"><span className="text--color-blue">HIAS</span> Make Over</span>
                            <span className="text--size-12">Learn More</span>
                          </div>
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <span className="mr--2"><span className="text--color-blue">HIAS</span> Leasing</span>
                            <span className="text--size-12">Learn More</span>
                          </div>
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <span className="mr--2"><span className="text--color-blue">HIAS</span> Organizing</span>
                            <span className="text--size-12">Learn More</span>
                          </div>
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <span className="mr--2"><span className="text--color-blue">HIAS</span> Staging</span>
                            <span className="text--size-12">Learn More</span>
                          </div>
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <span className="mr--2"><span className="text--color-blue">HIAS</span> Tour</span>
                            <span className="text--size-12">Learn More</span>
                          </div>
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <span className="mr--2"><span className="text--color-blue">HIAS</span> Gift</span>
                            <span className="text--size-12">Learn More</span>
                          </div>
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <span className="mr--2"><span className="text--color-blue">HIAS</span> Experience</span>
                            <span className="text--size-12">Learn More</span>
                          </div>
                        </div>
                      </div> */}
                    </li>
                    <li className="menu-header-border has-sub hs--right-edge">
                      <Link to="/">BERITA & ACARA</Link>
                      <div className="sub-menu-container">
                        <div className="sub-menu-title fx fx-no-wrap justify-content-between align-items-center">
                          <div>
                            <h3 className="mb--0">Inspiration</h3>
                            <p className="mb--0">Create &amp; live your unique style</p>
                          </div>
                        </div>
                        <div className="sub-menu-content">
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <Link to="/"><span className="mr--2">Promo</span></Link>
                          </div>
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <Link to='/'><span className="mr--2">Berita</span></Link>
                          </div>
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <Link to='/'><span className="mr--2">Acara</span></Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default withContext(withRouter(Header))
