import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart, faShoppingCart, faUserCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { isLogin } from '../../utils/auth'
import { withContext } from '../../context/withContext'
import './Header.scss'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      keyword: ''
    }
  }

  renderCart () {
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

  onLogout () {
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
    localStorage.removeItem('promo')
    window.location.href = '/'
  }

  onClickCartIcon () {
    if (isLogin()) {
      this.props.history.push('/cart')
    } else {
      this.props.context.setIsModalSigninPopupOpen(true)
    }
  }

  onSearch (e) {
    e.preventDefault()
    const { keyword } = this.state
    if (keyword) {
      this.props.history.push(`/products/search?keyword=${keyword}`)
    } else {
      return false
    }
  }

  renderTopIcon () {
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
            <img src={require('../../assets/img/Wishlist.svg')} alt=""/>
            </Link>
            </div>
          </div>
          <div className="header-top-icon">
            <div className="header-top-icon--image" onClick={() => this.onClickCartIcon()}>
              <img src={require('../../assets/img/Cart.svg')} alt=""/>
            </div>
          </div>
          <div className="header-top-icon">
            <div className="header-top-icon--image">
              <img src={require('../../assets/img/OrderStatus.svg')} alt=""/>
            </div>
          </div>
          <div className="header-top-icon">
            <div className="header-top-icon--image">
              <img src={require('../../assets/img/Inbox.svg')} alt=""/>
            </div>
          </div>
          <div className="header-top-icon">
            <div className="header-top-icon--image">
              <img src={require('../../assets/img/DefaultAvatar.svg')} alt=""/>
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
          { this.renderCart() }
          <div className="header-top-icon header-top-icon--flag">
            <img src={require('../../assets/img/indonesia.png')} alt=""/>
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
              <img src={require('../../assets/img/Wishlist.svg')} alt=""/>
            </div>
          </div>
          <div className="header-top-icon">
            <div className="header-top-icon--image" onClick={() => this.onClickCartIcon()}>
              <img src={require('../../assets/img/Cart.svg')} alt=""/>
            </div>
          </div>
          { this.renderCart() }
          <div className="header-top-icon header-top-icon--flag">
            <img src={require('../../assets/img/indonesia.png')} alt=""/>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="top-header">
            <div className="row align-items-center">
              <div className="col-md-2">
                <div className="logo">
                  <Link to="/">
                    <img src={require('../../assets/img/MASTER_LOGO_HIAS_HOUSE_HORIZONTAL.png')} alt=""/>
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
                { this.renderTopIcon() }
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
                      <Link to="/products/living">RUANG TAMU</Link>
                      <div className="sub-menu-container">
                        <div className="sub-menu-title fx fx-no-wrap justify-content-between align-items-center">
                          <div>
                            <h3 className="mb--0">LIVING</h3>
                            <p className="mb--0">Create &amp; live your unique style</p>
                          </div>
                        </div>
                        <div className="sub-menu-content fx fx-no-wrap">
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Furniture</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Sofa</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Sleeper Sofa</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Sectional Sofa</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Chair</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Recliner</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Table</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>TV Stand</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Storage</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Outdoor</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Decoration</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Home Decoration</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Clock</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Vase</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Frame</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Accessories</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Candles</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Mirror</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Flower</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Linen</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Cushion</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Insert</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Carpet</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Mat</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Lighting</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Table & Desk Lamp</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Floor lamp</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Pendant lamp</span></Link>
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
                            <h3 className="mb--0">BED</h3>
                            <p className="mb--0">Create &amp; live your unique style</p>
                          </div>
                        </div>
                        <div className="sub-menu-content fx fx-no-wrap">
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Furniture</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Bed Frame</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Linen</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Bed Sheet</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Insert</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Throw / blanket</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Pillow</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Mattress</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Mattress</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Lighting</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Table & Desk lamp</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Floor lamp</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Pendant lamp</span></Link>
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
                            <h3 className="mb--0">BATH</h3>
                            <p className="mb--0">Create &amp; live your unique style</p>
                          </div>
                        </div>
                        <div className="sub-menu-content fx fx-no-wrap">
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Linen</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Towel</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Mat</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Household</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Rack</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Plasticware</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Dispenser</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Basket</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Pedal bin</span></Link>
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
                            <h3 className="mb--0">DINING</h3>
                            <p className="mb--0">Create &amp; live your unique style</p>
                          </div>
                        </div>
                        <div className="sub-menu-content fx fx-no-wrap">
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Furniture</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Chair</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Table</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Storage</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Table Top</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Dinnerware</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Flatware</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Serveware</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Drinkware</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Table linen</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Accessories</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Plasticware</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Household</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Rack</span></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="has-sub">
                      <Link to="/kitchen">PERALATAN DAPUR</Link>
                      <div className="sub-menu-container">
                        <div className="sub-menu-title fx fx-no-wrap justify-content-between align-items-center">
                          <div>
                            <h3 className="mb--0">KITCHEN</h3>
                            <p className="mb--0">Create &amp; live your unique style</p>
                          </div>
                        </div>
                        <div className="sub-menu-content fx fx-no-wrap">
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/living"><span>Household</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Rack</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Cookware & bakeware</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Tools & Accessories</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Cutlery</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Appliances & Electric</span></Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/living"><span>Pedal bin</span></Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
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
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-header-border has-sub hs--right-edge">
                      <Link to="/">INSPIRASI</Link>
                      <div className="sub-menu-container">
                        <div className="sub-menu-title fx fx-no-wrap justify-content-between align-items-center">
                          <div>
                            <h3 className="mb--0">Inspiration</h3>
                            <p className="mb--0">Create &amp; live your unique style</p>
                          </div>
                        </div>
                        <div className="sub-menu-content fx fx-no-wrap">
                          <div className="mr--2">
                            <div className="mb--1 inspiration-menu-image">
                              <img src={require('../../assets/img/image-1.png')} alt=""/>
                            </div>
                            <div>
                            <p>Inspiration &amp; Ideas</p>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                          </div>
                          <div>
                            <div className="mb--1 inspiration-menu-image">
                              <img src={require('../../assets/img/Image-2.png')} alt=""/>
                            </div>
                            <div>
                              <p>Meet Our Designers</p>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
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
                            <Link to="/promo"><span className="mr--2">Promo</span></Link>
                          </div>
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <Link to='/news'><span className="mr--2">Berita</span></Link>
                          </div>
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <Link to='/event'><span className="mr--2">Acara</span></Link>
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
