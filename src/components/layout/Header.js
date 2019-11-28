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

import { getCart } from "./../../api";

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

  componentDidUpdate(prevProps) {
    let userId = localStorage.getItem("userId");
    if (userId !== null) {
      getCart(userId)
        .then(res => {
          prevProps.context.setTotalCart(res.data.listItems.length || 0);
        })
        .catch(error => {
          // console.log(error);
        });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleSticky);
  }

  handleSticky() {
    if (window.scrollY > 0) {
      this.setState({
        isSticky: true
      });
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
    localStorage.removeItem("userProfile");
    window.location.href = "/";
  }

  onClickCartIcon() {
    if (isLogin()) {
      this.props.history.push("/cart");
    } else {
      this.props.context.setIsModalSigninPopupOpen(true);
    }
  }

  onClickWishIcon() {
    if (isLogin()) {
      this.props.history.push("/wishlist");
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

    if (
      categoriesMain != undefined &&
      categoriesSub != undefined &&
      categoriesSecondSub != undefined
    ) {
      return categoriesMain.map((itemMain, i) => {
        let uniqueSub = categoriesSub.filter(
          itemSub =>
            itemMain.mainCategoryName === itemSub.MainCategory.mainCategoryName
        );
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
                  let chosenSub2 = categoriesSecondSub.filter(
                    itemSub2 =>
                      itemSub2.mainCategory.mainCategoryName &&
                      itemSub2.subCategory.mainCategoryName ===
                        itemSub.subCategoryName
                  );
                  return (
                    <div className="sub-menu-column" key={i1}>
                      <div className="sub-menu-item smi--parent">
                        <Link to="">
                          <span>{itemSub.subCategoryName}</span>
                        </Link>
                      </div>
                      {chosenSub2.map((itemSub2, i2) => {
                        return (
                          <div className="sub-menu-item" key={i2}>
                            <Link to={`/products/${itemSub2.id}`}>
                              <span>{itemSub2.secondSubCategoryName}</span>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </li>
        );
      });
    }
  };

  renderCartCount(totalCart) {
    return this.props.context.totalCart == 0 ? null : (
      <div className="cart--count">{this.props.context.totalCart}</div>
    );
  }

  handleTest() {
    let arr = [];
    let arrObj = [
      {
        productName: "Yoman barang",
        thumbnailUrl: "https:kldfkk",
        price: 1000000,
        qty: 2
      },
      {
        productName: "Mie ayam 2",
        thumbnailUrl: "https:kldfkk",
        price: 1000000,
        qty: 2
      }
    ];

    let newObj = {};
    arrObj.forEach((obj, index) => {
      arr.push({
        productName: `\"${obj.productName}\"`,
        thumbnailUrl: `\"${obj.thumbnailUrl}\"`
      });
    });

    // arr.push(newObj)
    // localStorage.setItem('testObj', newObj)
    console.log(JSON.stringify(arr));

    // console.log(obj)
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
            <Link to="/about" className="btn btn--transparent">
              <span className="text--size-12">Tentang Kami</span>
            </Link>
          </div>
        </div>
        <div className="fx align-items-center">
          <div className="header-top-icon">
            <div className="header-top-icon--image">
              <Link to="/wishlist" title="Wishlist">
                <img src={require("../../assets/img/Wishlist.svg")} alt="" />
              </Link>
            </div>
          </div>
          <div className="header-top-icon">
            {this.renderCartCount()}
            <div
              className="header-top-icon--image"
              onClick={() => this.onClickCartIcon()}
              title="Cart"
            >
              <img src={require("../../assets/img/Cart.svg")} alt="" />
            </div>
          </div>
          <div className="header-top-icon">
            <div
              className="header-top-icon--image"
              onClick={() => (window.location.href = "/order")}
              title="Order Status"
            >
              <img src={require("../../assets/img/Inbox.svg")} alt="" />
            </div>
          </div>
          <div className="header-top-icon">
            <div className="header-top-icon--profile">
              <div className="header-top-icon--image">
                <img
                  style={{ width: 26, height: 26 }}
                  src={require("../../assets/img/DefaultAvatar.svg")}
                  alt=""
                />
              </div>
              <p>
                Hi, {JSON.parse(localStorage.getItem("userProfile")).fullName}
              </p>
            </div>
            <div className="header--dropdown">
              <div className="hd--item">
                <Link to="/wallet">Wallet</Link>
              </div>
              <div className="divider"></div>
              <div className="hd--item" onClick={() => this.onLogout()}>
                <span>Keluar</span>
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
            <button
              onClick={() => (window.location.href = "/about")}
              className="btn btn--transparent text--size-12"
            >
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
          <div className="fx fx align-items-center">
            <div className="header-top-icon">
              <div
                className="header-top-icon--image"
                onClick={() => this.onClickWishIcon()}
                title="Wishlist"
              >
                <img src={require("../../assets/img/Wishlist.svg")} alt="" />
              </div>
            </div>
            <div className="header-top-icon">
              <div
                className="header-top-icon--image"
                onClick={() => this.onClickCartIcon()}
                title="Cart"
              >
                <img src={require("../../assets/img/Cart.svg")} alt="" />
              </div>
            </div>
          </div>
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
                      src={require("../../assets/img/MASTER_LOGO_HIAS_HOUSE_HORIZONTAL.jpeg")}
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
                              <Link to="/products/1">
                                <span>Furnitur</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/1">
                                <span>Sofa</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/2">
                                <span>Sofa Bed</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/3">
                                <span>Sofa Modular</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/4">
                                <span>Kursi</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/5">
                                <span>Kursi Santai</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/6">
                                <span>Meja</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/7">
                                <span>Penyangga TV</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/8">
                                <span>Rak Penyimpanan</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/9">
                                <span>Luar Ruangan</span>
                              </Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/10">
                                <span>Dekorasi</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/11">
                                <span>Dekorasi Rumah</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/12">
                                <span>Jam</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/13">
                                <span>Vas</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/14">
                                <span>Bingkai</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/15">
                                <span>Aksesoris</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/16">
                                <span>Lilin</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/17">
                                <span>Cermin</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/18">
                                <span>Bunga</span>
                              </Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/19">
                                <span>Linen</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/20">
                                <span>Bantal</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/21">
                                <span>Bantal Sofa</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/22">
                                <span>Karpet</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/23">
                                <span>Keset</span>
                              </Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/24">
                                <span>Lampu</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/25">
                                <span>Lampu Meja</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/26">
                                <span>Lampu Lantai</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/27">
                                <span>Lampu Gantung</span>
                              </Link>
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
                              <Link to="/products/28">
                                <span>Furnitur</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/29">
                                <span>Bingkai Tempat Tidur</span>
                              </Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/30">
                                <span>Linen</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/31">
                                <span>Set Sprei</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/32">
                                <span>Bantal</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/33">
                                <span>Selimut</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/34">
                                <span>Bantal</span>
                              </Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/35">
                                <span>Matras</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/36">
                                <span>Matras</span>
                              </Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/37">
                                <span>Lampu</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/38">
                                <span>Lampu Meja</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/39">
                                <span>Lampu Lantai</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/40">
                                <span>Lampu Gantung</span>
                              </Link>
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
                              <Link to="/products/41">
                                <span>Linen</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/42">
                                <span>Handuk</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/43">
                                <span>Keset Kamar Mandi</span>
                              </Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/44">
                                <span>Perlengkapan Kamar Mandi</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/45">
                                <span>Rak</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/46">
                                <span>Peralatan Plastik</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/47">
                                <span>Dispenser</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/48">
                                <span>Keranjang</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/49">
                                <span>Tempat Sampah</span>
                              </Link>
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
                              <Link to="/products/50">
                                <span>Furnitur</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/51">
                                <span>Kursi Makan</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/52">
                                <span>Meja</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/53">
                                <span>Kabinet Ruang Makan</span>
                              </Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/54">
                                <span>Perlengkapan Ruang Makan</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/55">
                                <span>Peralatan Makan</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/56">
                                <span>Sendok Garpu</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/57">
                                <span>Peralatan Saji</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/58">
                                <span>Perlengkapan Minum</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/59">
                                <span>Linen Meja</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/60">
                                <span>Aksesoris</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/61">
                                <span>Peralatan Plastik</span>
                              </Link>
                            </div>
                          </div>
                          <div className="sub-menu-column">
                            <div className="sub-menu-item smi--parent">
                              <Link to="/products/62">
                                <span>Perlengkapan Lain</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/63">
                                <span>Rak</span>
                              </Link>
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
                              <Link to="/products/64">
                                <span>Peralatan Dapur</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/65">
                                <span>Rak</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/66">
                                <span>Alat Masak</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/67">
                                <span>Aksesoris</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/68">
                                <span>Alat Pemotong</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/69">
                                <span>Peralatan Listrik</span>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/products/70">
                                <span>Tempat Sampah</span>
                              </Link>
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
                            <Link to="#">
                              <span className="mr--2">Ide & Inspirasi</span>
                            </Link>
                          </div>
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <Link to="#">
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
                            <h3 className="mb--0">BERITA & ACARA</h3>
                          </div>
                        </div>
                        <div className="sub-menu-content">
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <Link to="#">
                              <span className="mr--2">Promo</span>
                            </Link>
                          </div>
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <Link to="#">
                              <span className="mr--2">Berita</span>
                            </Link>
                          </div>
                          <div className="sub-menu-item smi--parent align-items-center fx fx-no-wrap justify-content-between">
                            <Link to="#">
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
