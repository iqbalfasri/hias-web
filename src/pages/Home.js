import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faAlignCenter } from "@fortawesome/free-solid-svg-icons";

import ProductCard from "../components/card/Product";
import InputText from "../components/form/InputText";
import Checkbox from "../components/form/Checkbox";
import ColorSelector from "../components/ColorSelector";
import { withContext } from "../context/withContext";
import {
  fetchBestSellerProduct,
  fetchHotProduct,
  fetchWishList,
  fetchBanner,
  fetchAllInspiration,
  fetchProductPilihan
} from "../api";
import { isLogin } from "../utils/auth";
import detectMobile from "../utils/window";
import "./Home.scss";

const params = {
  slideActiveClass: "slide-product-active",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  spaceBetween: detectMobile() ? 20 : 50,
  slidesPerGroup: 1,
  slidesPerView: detectMobile() ? 1 : 3,
  centeredSlides: detectMobile() ? false : true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
};

const swiperBanner = {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  slidesPerGroup: 1,
  slidesPerView: 1,
  // loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
};

const swiperHome = {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  slidesPerGroup: 1,
  slidesPerView: 1,
  loop: true
};

const swiperInspiration = {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  spaceBetween: 20,
  slidesPerView: detectMobile() ? 1 : 4,
  // loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wishListItems: [],
      banner: [],
      inspiration: [],
      productPilihan: []
    };
  }

  componentDidMount() {
    fetchBestSellerProduct()
      .then(res => {
        this.props.context.setBestProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    fetchHotProduct()
      .then(res => {
        this.props.context.setHotProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    fetchBanner()
      .then(res => {
        this.setState({
          banner: res.data.banner
        });
      })
      .catch(err => {
        console.log(err);
      });

    fetchAllInspiration()
      .then(res => {
        this.setState({
          inspiration: res.data.inspiration
        });
      })
      .catch(err => {
        console.log(err);
      });

    fetchProductPilihan().then(res => {
      this.setState({ productPilihan: res.data });
    });

    if (isLogin()) {
      fetchWishList(localStorage.getItem("userId")).then(res => {
        this.setState({
          wishListItems: res.data
        });
      });
    }
  }

  isProductWishlisted(id) {
    const { wishListItems } = this.state;
    let result = false;
    for (let i = 0; i < wishListItems.length; i++) {
      if (wishListItems[i].id == id) {
        result = true;
        break;
      }
    }
    return result;
  }

  renderBanner = () => {
    const { banner } = this.state;
    if (banner.length > 0) {
      return (
        <Swiper {...swiperBanner}>
          {banner.map((b, i) => {
            return (
              <div className="slide-wrapper-home" key={i}>
                <div className="fx slide-container-home">
                  <img
                    className="img--cover"
                    src={b.imageUrl}
                    onClick={() => {
                      window.open(b.link, "_blank");
                    }}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </Swiper>
      );
    }
  };

  renderProduct() {
    const { productPilihan } = this.state;
    if (productPilihan.length !== 0) {
      return productPilihan.map(product => {
        return (
          <div className="col-md-3" key={`product-${product.productId}`}>
            <ProductCard
              thumbnail={product.thumbnail}
              loved={this.isProductWishlisted(product.productId)}
              id={product.productId}
              title={product.productName}
              price={product.price}
              discount={product.discount}
              category={product.categoryName}
              itemStock={product.itemStock}
            />
          </div>
        );
      });
    }
  }

  renderOnlyProduct() {
    const { hotProducts } = this.props.context;
    if (hotProducts.length !== 0) {
      return hotProducts.map(product => {
        return (
          <div className="col-md-3" key={`product-${product.productId}`}>
            <ProductCard
              thumbnail={product.thumbnail}
              loved={this.isProductWishlisted(product.productId)}
              id={product.productId}
              title={product.productName}
              price={product.price}
              discount={product.discount}
              category={product.categoryName}
              itemStock={product.itemStock}
            />
          </div>
        );
      });
    }
  }

  renderBestProduct() {
    const bestProducts = this.props.context.bestProducts;
    if (bestProducts.length !== 0) {
      return (
        <Swiper {...params}>
          {bestProducts.map((product, index) => {
            return (
              <div className="product-slide-with-number" key={index}>
                <ProductCard
                  thumbnail={product.thumbnail}
                  loved={this.isProductWishlisted(product.id)}
                  id={product.id}
                  title={product.productName}
                  price={product.price}
                  discount={product.discount}
                  category={product.categoryName}
                  itemStock={product.itemStock}
                />
              </div>
            );
          })}
        </Swiper>
      );
    }
  }

  renderInspiration = () => {
    const { inspiration } = this.state;
    if (inspiration !== undefined) {
      console.log(inspiration, "Total Insipration");
      if (inspiration.length !== 0) {
        return (
          <Swiper {...swiperInspiration}>
            {inspiration.map((item, i) => {
              return (
                <div className="product-slide-with-number" key={i}>
                  <div className="product-card">
                    <Link
                      key={i}
                      to={{
                        pathname: `/inspiration/detail/${item.id}`,
                        state: {
                          description: item.description
                        }
                      }}
                    >
                      <div className="product-card-image">
                        <img
                          style={{ objectFit: "cover" }}
                          src={
                            item.banner != null
                              ? item.banner
                              : "https://via.placeholder.com/600x600"
                          }
                          alt=""
                        />
                      </div>
                      <div className="fx justify-content-between product-card-footer">
                        <div className="product-card-wrapper">
                          <div className="fx justify-content-between fx-no-wrap">
                            <div>
                              <p className="mb--0 text--color-black">
                                <strong>{item.title}</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </Swiper>
        );
      }
    }
  };

  render() {
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>HIAS House - Beranda</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>
        <div className="content">
          <section>
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col"
                  style={{ paddingRight: 0, paddingLeft: 0 }}
                >
                  {this.renderBanner()}
                </div>
              </div>
            </div>
          </section>
          <section className="section-page">
            <div className="container">
              <div className="row align-items-center mb--2">
                <div className="col">
                  <div>
                    <h3
                      style={{ color: "#6c6e70" }}
                      className="section-title mb--0"
                    >
                      Produk
                    </h3>
                  </div>
                </div>
                <div className="col">
                  <div className="text--right">
                    <Link className="text--size-12" to="/products/all">
                      Lihat semua
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">{this.renderOnlyProduct()}</div>
            </div>
          </section>
          <section className="section-page">
            <div className="container">
              <div className="row align-items-center mb--2">
                <div className="col">
                  <div>
                    <h3
                      style={{ color: "#6c6e70" }}
                      className="section-title mb--0"
                    >
                      Produk{" "}
                      <span className="text--color-orange">Terlaris</span>
                    </h3>
                  </div>
                </div>
                <div className="col">
                  <div className="text--right">
                    <Link className="text--size-12" to="/products/best">
                      Lihat semua
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">{this.renderBestProduct()}</div>
              </div>
            </div>
          </section>
          <section className="section-page">
            <div className="container">
              <div className="row align-items-center mb--2">
                <div className="col">
                  <div>
                    <h3
                      style={{ color: "#6c6e70" }}
                      className="section-title mb--0"
                    >
                      Produk <span className="text--color-orange">Pilihan</span>
                    </h3>
                  </div>
                </div>
                <div className="col">
                  <div className="text--right">
                    <Link className="text--size-12" to="/products/hot">
                      Lihat semua
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">{this.renderProduct()}</div>
            </div>
          </section>
          <section className="section-page">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col">
                  <img
                    src={require("../assets/img/banner-promo.jpeg")}
                    alt=""
                    style={{
                      maxWidth: "100%",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="section-page">
            <div className="container">
              <div className="row align-items-center mb--2">
                <div className="col">
                  <div>
                    <h3
                      style={{ color: "#6c6e70" }}
                      className="section-title mb--0"
                    >
                      Inspirasi{" "}
                      <span className="text--color-blue">HIAS House</span>
                    </h3>
                  </div>
                </div>
                <div className="col">
                  <div className="text--right">
                    <Link className="text--size-12" to="/inspiration">
                      View All
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">{this.renderInspiration()}</div>
              </div>
            </div>
          </section>
          {/* <section className="section-page">
            <div className="container">
              <div className="row mb--2">
                <div className="col">
                  <div>
                    <h3 className="section-title mb--0 text--center">
                      Kenapa Memilih{" "}
                      <span className="text--color-blue">HIAS?</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="row text--center benefit-content">
                <div className="col-md-4">
                  <div>
                    <img
                      src={require("../assets/img/home-icon-03.png")}
                      style={{
                        width: 120,
                        marginLeft: "auto",
                        marginRight: "auto"
                      }}
                    />
                    <h3>Design Penuh Gaya & Terkini</h3>
                    <p>
                      Kami menyesuaikan design dengan tren dan perkembangan
                      terkini.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <img
                      src={require("../assets/img/home-icon-02.png")}
                      style={{
                        width: 120,
                        marginLeft: "auto",
                        marginRight: "auto"
                      }}
                    />
                    <h3>Produk Berkualitas Terbaik</h3>
                    <p>
                      Komitmen kami hanya menyediakan produk-produk terbaik baik
                      lokal ataupun import bagi anda.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <img
                      src={require("../assets/img/home-icon-01.png")}
                      style={{
                        width: 120,
                        marginLeft: "auto",
                        marginRight: "auto"
                      }}
                    />
                    <h3>Kemudahan dalam Pembayaran</h3>
                    <p>Tersedia cicilan 0% untuk bank-bank tertentu.</p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
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
    );
  }
}

export default withContext(Home);
