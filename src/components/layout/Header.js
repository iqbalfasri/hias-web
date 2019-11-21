import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faShoppingCart,
  faUserCircle,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import { isLogin } from "../../utils/auth";
import { withContext } from "../../context/withContext";

import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      isSticky: false,
      categoriesMain: [],
      categoriesSub: [],
      categoriesSecondSub: [],
      totalCart: 0
    };

    this.handleSticky = this.handleSticky.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleSticky);
    const BASE_URL = "https://api-core-hias.herokuapp.com";

    //get all categories
    axios
      .get(`${BASE_URL}/product/mainCategory`)
      .then(res => {
        this.setState({ categoriesMain: res.data.data });
      })
      .catch(error => {
        console.log(error);
      });
    //
    axios
      .get(`${BASE_URL}/product/subCategory`)
      .then(res => {
        this.setState({ categoriesSub: res.data.data });
      })
      .catch(error => {
        console.log(error);
      });
    //
    axios
      .get(`${BASE_URL}/product/secondSubCategory`)
      .then(res => {
        this.setState({ categoriesSecondSub: res.data.data });
      })
      .catch(error => {
        console.log(error);
      });


  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleSticky);
  }

  handleSticky() {
    if (window.scrollY > 0) {
      this.setState({
        isSticky: true
      })
      //console.log('Scroll udah lebih dari 100')
    } else if (window.scrollY === 0) {
      this.setState({
        isSticky: false
      });
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
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("promo");
    window.location.href = "/";
  }

  onClickCartIcon() {
    if (isLogin()) {
      this.props.history.push("/cart");
    } else {
      this.props.context.setIsModalSigninPopupOpen(true);
    }
  }

  onClickOrderIcon() {
    if (isLogin()) {
      this.props.history.push("/order");
    } else {
      this.props.context.setIsModalSigninPopupOpen(true);
    }
  }

  onSearch(e) {
    e.preventDefault();
    const { keyword } = this.state;
    if (keyword) {
      this.props.history.push(`/products/search?keyword=${keyword}`);
    } else {
      return false;
    }
  }



  renderCategories = () => {
    const { categoriesMain, categoriesSub, categoriesSecondSub } = this.state;

    if (categoriesMain != undefined && categoriesSub != undefined && categoriesSecondSub != undefined) {

      return categoriesMain.map((itemMain, i) => {
        let uniqueSub = categoriesSub.filter((itemSub) => itemMain.mainCategoryName === itemSub.MainCategory.mainCategoryName)
        return (
          <li className="has-sub" key={i}>
            <Link to="">{itemMain.mainCategoryName.toUpperCase()}</Link>
            <div className="sub-menu-container">
              <div className="sub-menu-title fx fx-no-wrap justify-content-between align-items-center">
                <div>
                  <h3 className="mb--0">{itemMain.mainCategoryName}</h3>
                </div>
              </div>
              <div className="sub-menu-content fx fx-no-wrap">
                {uniqueSub.map((itemSub, i1) => {
                  let chosenSub2 = categoriesSecondSub.filter((itemSub2) => itemSub2.mainCategory.mainCategoryName && itemSub2.subCategory.mainCategoryName === itemSub.subCategoryName)
                  return (
                    <div className="sub-menu-column" key={i1}>
                      <div className="sub-menu-item smi--parent">
                        <Link to=""><span>{itemSub.subCategoryName}</span></Link>
                      </div>
                      {chosenSub2.map((itemSub2, i2) => {
                        return (
                          <div className="sub-menu-item" key={i2}>
                            <Link to={`/products/${itemSub2.id}`}><span>{itemSub2.secondSubCategoryName}</span></Link>
                          </div>
                        )
                      })}
                    </div>)
                })}
              </div>
            </div>
          </li>
        )
      })
    }
  };

  renderCartCount() {
    return this.props.context.totalCart === 0 ? null : (
      <div className="cart--count">{this.props.context.totalCart}</div>
    );
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
            <button className="btn btn--transparent text--size-12">
              Tentang Kami
            </button>
          </div>
        </div>
        <div className="fx align-items-center">
          <div className="header-top-icon">
            <div className="header-top-icon--image">
              <Link to="/wishlist">
                <img src={require("../../assets/img/Wishlist.svg")} alt="" />
              </Link>
            </div>
          </div>
          <div className="header-top-icon">
            {this.renderCartCount()}
            <div
              className="header-top-icon--image"
              onClick={() => this.onClickCartIcon()}
            >
              <img src={require("../../assets/img/Cart.svg")} alt="" />
            </div>
          </div>
          <div className="header-top-icon">
            <div
              className="header-top-icon--image"
              onClick={() => this.onClickOrderIcon()}
            >
              <img src={require("../../assets/img/OrderStatus.svg")} alt="" />
            </div>
          </div>
          <div className="header-top-icon">
            <div className="header-top-icon--image">
              <img src={require("../../assets/img/Inbox.svg")} alt="" />
            </div>
          </div>
          <div className="header-top-icon">
            <div className="header-top-icon--image">
              <img src={require("../../assets/img/DefaultAvatar.svg")} alt="" />
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
            <img src={require("../../assets/img/indonesia.png")} alt="" />
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
              <button className="btn btn--transparent text--size-12">
                Tentang Kami
            </button>
            </div>
            <div className="mr--1 align-items-center">
              <button
                className="btn btn--transparent text--size-12"
                onClick={() => this.props.context.setIsModalSigninPopupOpen(true)}
              >
                Masuk
            </button>
            </div>
            <div>
              <button
                className="btn btn--primary"
                onClick={() => this.props.context.setIsModalSignupPopupOpen(true)}
              >
                <span>Daftar</span>
              </button>
            </div>
          </div>
          <div className="fx fx align-items-center">
            <div className="header-top-icon">
              <div className="header-top-icon--image">
                <img src={require("../../assets/img/Wishlist.svg")} alt="" />
              </div>
            </div>
            <div className="header-top-icon">
              <div
                className="header-top-icon--image"
                onClick={() => this.onClickCartIcon()}
              >
                <img src={require("../../assets/img/Cart.svg")} alt="" />
              </div>
            </div>
            {this.renderCart()}
            <div className="header-top-icon header-top-icon--flag">
              <img src={require("../../assets/img/indonesia.png")} alt="" />
            </div>
          </div>
        </div>
      );
  }

  render() {

    return (
      <header className={this.state.isSticky ? "sticky-header" : null}>
        <div className="container-fluid">
          <div className="top-header">
            <div className="row align-items-center">
              <div className="col-md-2">
                <div className="logo">
                  <Link to="/">
                    <img
                      src={require("../../assets/img/MASTER_LOGO_HIAS_HOUSE_HORIZONTAL.png")}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="search-input-container">
                  <form onSubmit={e => this.onSearch(e)}>
                    <input
                      onChange={e => this.setState({ keyword: e.target.value })}
                      type="text"
                      className="form--input"
                      placeholder="Cari Produk Favorit Anda"
                    />
                    <div className="search-icon">
                      <FontAwesomeIcon icon={faSearch} color="#ccc" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6">{this.renderTopIcon()}</div>
            </div>
          </div>
        </div>
        <div className="menu-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <nav>
                  <ul>
                    {this.renderCategories()}
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
                            <Link to="/inspiration">
                              <span className="mr--2">Ide & Inspirasi</span>
                            </Link>
                          </div>
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <Link to="/">
                              <span className="mr--2">Tips & Trik</span>
                            </Link>
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
                            <p className="mb--0">
                              Create &amp; live your unique style
                            </p>
                          </div>
                        </div>
                        <div className="sub-menu-content">
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <Link to="/">
                              <span className="mr--2">Promo</span>
                            </Link>
                          </div>
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <Link to="/">
                              <span className="mr--2">Berita</span>
                            </Link>
                          </div>
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <Link to="/">
                              <span className="mr--2">Acara</span>
                            </Link>
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
    );
  }
}

export default withContext(withRouter(Header));
