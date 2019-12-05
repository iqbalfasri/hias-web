import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings";
import ShowMoreText from "react-show-more-text";
import Swiper from "react-id-swiper";

import ProductCard from "../../components/card/Product";
import ColorSelector from "../../components/ColorSelector";
import {
  fetchProductById,
  fetchWishList,
  addToCart,
  fetchHotProduct,
  fetchVariantById,
  fetchColorById,
  updateWishList,
  removeWishlist
} from "../../api";
import { formatMoneyWithoutSymbol, getDiscount } from "../../utils/money";
import { withContext } from "../../context/withContext";
import { isLogin } from "../../utils/auth";

import "./Detail.scss";

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeDetailTab: 1,
      addToCartClicked: false,
      product: null,
      variant: null,
      colors: null,
      wishListItems: [],
      showAll: false,
      couriers: [],
      idProduct: null,
      picture: [],
      freeze: false,
      isLoved: false
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetchProductById(id).then(res => {
      this.setState({
        product: res.data[0]
      });
    });

    fetchVariantById(id).then(res => {
      if (res.data.length !== 0) {
        this.setState({
          variant: res.data
        });
      }
    });

    fetchColorById(id).then(res => {
      if (res.data.length !== 0) {
        this.setState({
          colors: res.data
        });
      }
    });

    fetchHotProduct()
      .then(res => {
        this.props.context.setHotProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    if (isLogin()) {
      fetchWishList(localStorage.getItem("userId")).then(res => {
        this.setState(
          {
            wishListItems: res.data
          },
          () => {
            let { wishListItems, product } = this.state;

            wishListItems.forEach(wish => {
              if (wish.id == product.productId) {
                this.setState({ isLoved: true });
              }
            });
          }
        );
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    // console.log(prevProps.match.params.id, "prev")
    if (id !== prevProps.match.params.id) {
      // Fetch products
      fetchProductById(id).then(res => {
        this.setState({
          product: res.data[0]
        });
      });

      // Fetch varian
      fetchVariantById(id).then(res => {
        if (res.data.length !== 0) {
          return this.setState({
            variant: res.data
          });
        }

        this.setState({
          variant: null
        });
      });

      // Fetch color
      fetchColorById(id).then(res => {
        this.setState({
          colors: res.data
        });
      });
    }

    if (prevState && prevState.wishListItems !== this.state.wishListItems) {
      fetchWishList(localStorage.getItem("userId"))
        .then(res => {
          this.setState({ wishListItems: res.data });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  isProductWishlisted(id) {
    const { wishListItems } = this.state;
    let result = false;
    for (let i = 0; i < wishListItems.length; i++) {
      if (wishListItems[i].id === id) {
        result = true;
        break;
      }
    }
    return result;
  }

  renderRelatedProduct() {
    const hotProducts = this.props.context.hotProducts;
    const products = [];
    if (hotProducts.length !== 0) {
      for (let i = 0; i < 4; i++) {
        products.push(
          <div
            className="col-md-3"
            key={`product-${hotProducts[i]}`}
            key={`related-${i}`}
          >
            <ProductCard
              thumbnail={
                hotProducts[i].thumbnail
                  ? hotProducts[i].thumbnail
                  : "https://via.placeholder.com/600x600"
              }
              loved={this.isProductWishlisted(hotProducts[i].productId)}
              id={hotProducts[i].productId}
              title={hotProducts[i].productName}
              price={hotProducts[i].price}
              discount={hotProducts[i].discount}
              category={hotProducts[i].categoryName}
              needRefreshPage={true}
            />
          </div>
        );
      }
    }
    return products;
  }

  onClickAddToCart(product) {
    if (isLogin()) {
      addToCart({
        productId: product.productId,
        cartId: localStorage.getItem("userId"),
        amount: 1
      })
        .then(res => {
          this.setState({
            addToCartClicked: true
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.props.context.setIsModalSigninPopupOpen(true);
    }
  }

  renderAddToCartButton() {
    const { product } = this.state;
    return this.state.addToCartClicked ? (
      <div className="pda--items">
        <button className="btn btn--blue">Added to Cart</button>
      </div>
    ) : (
      <div className="pda--items">
        <button
          className="btn btn--blue"
          onClick={() => this.onClickAddToCart(product)}
        >
          Tambah ke Keranjang
        </button>
      </div>
    );
  }

  renderCourier(product) {
    const { courier } = product;

    const C_JNE = require("../../assets/img/jne.jpg");
    const C_POS = require("../../assets/img/pos.png");
    const C_TIKI = require("../../assets/img/tiki.png");
    const C_HIAS = require("../../assets/img/hias-courier.jpeg");

    return (
      <>
        {courier.map(c => {
          return (
            <div className="img-detail-thumbnail">
              <img
                src={
                  c == "JNE"
                    ? C_JNE
                    : c == "POS"
                    ? C_POS
                    : c == "TIKI"
                    ? C_TIKI
                    : c == null
                    ? null
                    : C_HIAS
                }
                alt=""
                style={{ maxWidth: 70, maxHeight: 22 }}
              />
            </div>
          );
        })}
      </>
    );
  }

  renderTabContent() {
    const { activeDetailTab, product } = this.state;
    switch (activeDetailTab) {
      case 1:
        return (
          <div>
            <ShowMoreText
              lines={8}
              more="Show more"
              less="Show less"
              anchorClass=""
              onClick={this.executeOnClick}
              expanded={false}
            >
              <p>{product.overview}</p>
            </ShowMoreText>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="tab--detail">
              <div className="tab--detail-content">
                <h4>SKU </h4>
                <p>{product.productCode}</p>
              </div>
              <div className="tab--detail-content">
                <h4>Ukuran </h4>
                <p>{product.dimensions}</p>
              </div>
              <div className="tab--detail-content">
                <h4>Berat </h4>
                <p>{product.weight} Kg</p>
              </div>
              <div className="tab--detail-content">
                <h4>Deskripsi </h4>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div
            style={{
              display: "flex",
              padding: "0 10px",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            {this.renderCourier(product)}
          </div>
        );
      default:
        return null;
    }
  }

  handleWishList(id) {
    if (isLogin()) {
      this.props.context.setIsLoading(true);
      const value = {
        productId: id,
        userId: localStorage.getItem("userId")
      };
      const { wishListItems, product } = this.state;

      if (this.state.isLoved) {
        wishListItems.forEach(wish => {
          if (wish.id == product.productId) {
            let { idWishlist } = wish;
            removeWishlist(idWishlist)
              .then(res => {
                this.setState({
                  isLoved: !this.state.isLoved
                });
              })
              .catch(err => {
                console.log(err);
              })
              .finally(() => {
                this.props.context.setIsLoading(false);
              });
          }
        });
      } else {
        console.log(this.state.isLoved, "is love false");
        updateWishList(value)
          .then(res => {
            this.props.context.setWishList(value);
            this.setState({
              isLoved: !this.state.isLoved
            });
          })
          .catch(err => {
            console.log(err);
          })
          .finally(() => {
            this.props.context.setIsLoading(false);
          });
      }
    } else {
      this.props.context.setIsModalSigninPopupOpen(true);
    }
  }

  render() {
    const { product, freeze } = this.state;
    const { id } = this.props.match.params;
    const autoplay = {
      delay: 3000,
      disableOnInteraction: false
    };
    const swipperConfig = () => {
      if (!freeze) {
        return {
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          }
        };
      } else {
        return {
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        };
      }
    };

    let allPicts = product !== null ? [product.thumbnail] : [];
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
                      <h1 style={{ color: "#6c6e70" }}>
                        {product.productName}
                      </h1>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {product.discount !== null ? (
                          <h2
                            className="text--color-orange mr--1"
                            style={{ textDecoration: "line-through", fontSize: '20px' }}
                          >
                            IDR {formatMoneyWithoutSymbol(product.price)}
                          </h2>
                        ) : null}
                        <h2 className="text--color-orange">
                          IDR{" "}
                          {formatMoneyWithoutSymbol(
                            product.discount == null
                              ? product.price
                              : getDiscount(product.price, product.discount)
                          )}{" "}
                          / Item
                        </h2>
                      </div>
                    </div>
                    <div>
                      <div className="mb--1">
                        <Swiper {...swipperConfig()}>
                          {allPicts.map((image, index) => {
                            return (
                              <img
                                onClick={e => this.setState({ freeze: true })}
                                style={{
                                  width: "100%",
                                  maxHeight: "572px",
                                  objectFit: "cover"
                                }}
                                src={image}
                                alt={product.productName}
                              />
                            );
                          })}
                        </Swiper>
                      </div>
                      {/* <div className="fx fx-no-wrap align-items-center">
                        {arrayImage.map((image, i) => (
                          <div key={i} className="img-detail-thumbnail">
                            <img src={image} alt="" />
                          </div>
                        ))}
                        <div className="img-detail-thumbnail">
                          <img src={product.thumbnail} alt="" />
                        </div>
                        <div className="img-detail-thumbnail">
                          <img src={product.thumbnail} alt="" />
                        </div>
                        <div className="img-detail-thumbnail">
                          <img src={product.thumbnail} alt="" />
                        </div>
                        <div className="img-detail-thumbnail">
                          <img src={product.thumbnail} alt="" />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <div className="product-detail-actions">
                      {this.isProductWishlisted(id) ? (
                        <div className="pda--items">
                          <div
                            className="product-wish-list"
                            onClick={() => this.addToWishList(id)}
                          >
                            <span
                              className="text--size-1-5"
                              style={{ color: "#ba0001" }}
                            >
                              <FontAwesomeIcon
                                icon={this.state.isLoved ? fasHeart : faHeart}
                              />
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => this.handleWishList(id)}
                          className="pda--items"
                        >
                          <span
                            className="text--size-1-5"
                            style={{ color: "#ba0001" }}
                          >
                            <FontAwesomeIcon
                              icon={this.state.isLoved ? fasHeart : faHeart}
                            />
                          </span>
                        </div>
                      )}
                      {/* <div className="pda--items">
                        <button className="btn btn--gray">Add to Registry</button>
                      </div> */}
                      {this.renderAddToCartButton()}
                    </div>
                    <div className="rating-container">
                      <div className="mr--1">
                        <span className="mr--1">
                          <span
                            style={{ color: "#6c6e70", fontWeight: "bold" }}
                          >
                            4
                          </span>
                        </span>
                        <StarRatings
                          rating={4}
                          starDimension="15px"
                          starSpacing="5px"
                          starRatedColor="rgb(165, 208, 112)"
                        />
                      </div>
                      <div>
                        <span style={{ color: "#6c6e70" }}>Skor rata-rata</span>
                      </div>
                    </div>
                    <div className="product-detail-tab">
                      <div className="pdt--tab">
                        <div
                          className={`pdt--tab-item ${
                            this.state.activeDetailTab === 1
                              ? "pdt--tab-item-active"
                              : ""
                          }`}
                          onClick={() => this.setState({ activeDetailTab: 1 })}
                        >
                          <span style={{ color: "#6c6e70" }}>Tinjauan</span>
                        </div>
                        <div
                          className={`pdt--tab-item ${
                            this.state.activeDetailTab === 2
                              ? "pdt--tab-item-active"
                              : ""
                          }`}
                          onClick={() => this.setState({ activeDetailTab: 2 })}
                        >
                          <span style={{ color: "#6c6e70" }}>Detil</span>
                        </div>
                        <div
                          className={`pdt--tab-item ${
                            this.state.activeDetailTab === 3
                              ? "pdt--tab-item-active"
                              : ""
                          }`}
                          onClick={() => this.setState({ activeDetailTab: 3 })}
                        >
                          <span style={{ color: "#6c6e70" }}>Kurir</span>
                        </div>
                      </div>
                      <div className="pdt--tab-content">
                        {this.renderTabContent()}
                      </div>
                    </div>
                    <div className="product-detail-variant">
                      <h3 style={{ color: "#6c6e70" }}>Varian Lainnya</h3>
                      <div className="row" style={{ paddingLeft: "1.3em" }}>
                        {this.state.variant !== null
                          ? this.state.variant.map((p, index) => {
                              return (
                                <div
                                  className="col-md-4 variant-item"
                                  key={`variant-${index}`}
                                  //   onClick={() => {
                                  //     {
                                  //       window.location.reload();
                                  //     }
                                  //   }
                                  // }
                                >
                                  <Link to={`/products/detail/${p.id}`}>
                                    <div className="img-detail-thumbnail">
                                      <img
                                        src={
                                          p.thumbnail
                                            ? p.thumbnail
                                            : "https://via.placeholder.com/1400x700"
                                        }
                                        alt=""
                                      />
                                    </div>
                                    <p style={{ color: "#6c6e70" }}>
                                      {p.productName.substring(
                                        p.productName.length - 8,
                                        p.productName.length
                                      )}
                                    </p>
                                  </Link>
                                </div>
                              );
                            })
                          : "Tidak ditemukan"}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="product-detail-variant">
                        <h3 style={{ color: "#6c6e70" }}>Pilihan Warna</h3>
                        <div>
                          <ColorSelector colors={this.state.colors} />
                        </div>
                      </div>
                    </div>
                    {/*                   <div className="col-md-6">
                      <div className="product-detail-variant">
                        <h3>Tone Options</h3>
                        <div>
                          <ColorSelector />
                        </div>
                      </div>
                    </div> */}
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
                    <h1 className="section-title mt--2">Produk Terkait</h1>
                  </div>
                </div>
              </div>
              <div className="row">{this.renderRelatedProduct()}</div>
            </div>
          </section>
          {/* <section className="section-page">
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
          </section> */}
        </div>
      </div>
    ) : null;
  }
}

export default withContext(Detail);
