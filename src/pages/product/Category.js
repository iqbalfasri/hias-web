import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faMinusSquare,
  faPlusSquare,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

import ProductCard from "../../components/card/Product";
import Checkbox from "../../components/form/Checkbox";
import { fetchHotProduct, fetchWishList, BASE_URL } from "../../api";
import { withContext } from "../../context/withContext";
import { isLogin } from "../../utils/auth";

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wishListItems: [],
      products: [],
      categoryId: props.match.params.category
    };
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

  renderProduct() {
    const { products } = this.state;
    if (products.length !== 0) {
      return products.map(product => {
        return (
          <div className="col-md-3" key={`product-${product.id}`}>
            <ProductCard
              thumbnail={
                product.thumbnail
                  ? product.thumbnail
                  : "https://via.placeholder.com/600x600"
              }
              loved={this.isProductWishlisted(product.id)}
              id={product.id}
              title={product.productName}
              price={product.price}
              category={product.categoryName}
            />
          </div>
        );
      });
    }
  }

  componentDidMount() {
    const { category } = this.props.match.params;
    const categoryId = category;

    axios
      .get(`${BASE_URL}/product/categoryId/${categoryId}`)
      .then(res => {
        console.log(res.data.data);
        this.setState({ products: res.data.data });
      })
      .catch(error => {
        console.log(error);
      });
    if (isLogin()) {
      fetchWishList(localStorage.getItem("userId")).then(res => {
        this.setState({
          wishListItems: res.data
        });
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.category !== nextProps.match.params.category) {
      axios
        .get(
          `${BASE_URL}/product/categoryId/${nextProps.match.params.category}`
        )
        .then(
          res => {
            this.setState({ products: res.data.data });
          },
          () => console.log(this.state.products)
        )
        .catch(error => console.log(error));
    }
  }

  handleLowToHigh(props) {
    axios
      .get(`${BASE_URL}/product/${props.match.params.category}/priceLow`)
      .then(res => {
        this.setState({ products: res.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleHighToLow(props) {
    axios
      .get(`${BASE_URL}/product/${props.match.params.category}/priceHigh`)
      .then(res => {
        this.setState({ products: res.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleZtoA(props) {
    axios
      .get(`${BASE_URL}/product/${props.match.params.category}/priceHigh`)
      .then(res => {
        this.setState({ products: res.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleLast(props) {
    axios
      .get(`${BASE_URL}/product/${props.match.params.category}/last`)
      .then(res => {
        this.setState({ products: res.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleNewest(props) {
    axios
      .get(`${BASE_URL}/product/${props.match.params.category}/newest`)
      .then(res => {
        this.setState({ products: res.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="content">
        <Helmet key={Math.random()}>
          <title>Living Page</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>
        <div className="content">
          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div>
                    {/* <div>
                      <h2>LIVING</h2>
                    </div>
                    {/* <div className="cat-container">
                      <div>
                        <div className="cat-list cl--parent">
                          <span className="mr--1">
                            <strong>Furniture</strong>
                          </span>
                          <span>
                            <FontAwesomeIcon icon={faAngleDown} />
                          </span>
                        </div>
                        <div className="cl--child">
                          <div className="cl--item">Sofa</div>
                          <div className="cl--item">Sleeper Sofa</div>
                          <div className="cl--item">Sectional Sofa</div>
                          <div className="cl--item">Chair</div>
                          <div className="cl--item">Recliner</div>
                          <div className="cl--item">Table</div>
                          <div className="cl--item">TV Stand</div>
                        </div>
                      </div>
                      <div>
                        <div className="cat-list cl--parent">
                          <span className="mr--1">
                            <strong>Decoration</strong>
                          </span>
                          <span>
                            <FontAwesomeIcon icon={faAngleDown} />
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="cat-list cl--parent">
                          <span className="mr--1">
                            <strong>Lenon</strong>
                          </span>
                          <span>
                            <FontAwesomeIcon icon={faAngleDown} />
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="cat-list cl--parent">
                          <span className="mr--1">
                            <strong>Table</strong>
                          </span>
                          <span>
                            <FontAwesomeIcon icon={faAngleDown} />
                          </span>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="cat-container mt--2">
                      <div className="cat--title">
                        <span className="text--color-gray">
                          FILTER PRODUK
                        </span>
                      </div>
                      <div className="cat--sub-title">
                        <span className="mr--1">
                          <strong>BERDASARKAN WARNA</strong>
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faMinusSquare} />
                        </span>
                      </div>
                      <div>
                        <div className="cat--items">
                          <Checkbox
                            id="red"
                            text="Merah"
                            textStyle={{ fontSize: "14px" }}
                          />
                        </div>
                        <div className="cat--items">
                          <Checkbox
                            id="blue"
                            text="Biru"
                            textStyle={{ fontSize: "14px" }}
                          />
                        </div>
                        <div className="cat--items">
                          <Checkbox
                            id="green"
                            text="Hijau"
                            textStyle={{ fontSize: "14px" }}
                          />
                        </div>
                        <div className="cat--items">
                          <Checkbox
                            id="black"
                            text="Hitam"
                            textStyle={{ fontSize: "14px" }}
                          />
                        </div>
                        <div className="cat--items">
                          <Checkbox
                            id="white"
                            text="Putih"
                            textStyle={{ fontSize: "14px" }}
                          />
                        </div>
                      </div>
                    </div> */}
                    <div className="cat-container mt--2">
                      <div className="cat--title">
                        <span className="text--color-gray">URUTAN PRODUK</span>
                      </div>
                      <div className="cat--sub-title">
                        <span className="mr--1">
                          <strong>URUTAN BERDASARKAN</strong>
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faMinusSquare} />
                        </span>
                      </div>
                      <div>
                        <div className="cat--items">
                          <div>
                            <span className="mr--1">
                              <input
                                type="radio"
                                name="sort"
                                id="lth"
                                onClick={() => this.handleLowToHigh(this.props)}
                              />
                            </span>
                            <label htmlFor="lth">
                              Harga Terendah ke Tinggi
                            </label>
                          </div>
                        </div>
                        <div className="cat--items">
                          <div>
                            <span className="mr--1">
                              <input
                                type="radio"
                                name="sort"
                                id="htl"
                                onClick={() => this.handleHighToLow(this.props)}
                              />
                            </span>
                            <label htmlFor="htl">Harga Tinggi ke Rendah</label>
                          </div>
                        </div>
                        <div className="cat--items">
                          <div>
                            <span className="mr--1">
                              <input type="radio" name="sort" id="az" />
                            </span>
                            <label htmlFor="az">A ke Z</label>
                          </div>
                        </div>
                        <div className="cat--items">
                          <div>
                            <span className="mr--1">
                              <input
                                type="radio"
                                name="sort"
                                id="za"
                                onClick={() => this.handleZtoA(this.props)}
                              />
                            </span>
                            <label htmlFor="za">Z ke A</label>
                          </div>
                        </div>
                        <div className="cat--items">
                          <div>
                            <span className="mr--1">
                              <input
                                type="radio"
                                name="sort"
                                id="ne"
                                onClick={() => this.handleLast(this.props)}
                              />
                            </span>
                            <label htmlFor="ne">Baru ke Lama</label>
                          </div>
                        </div>
                        <div className="cat--items">
                          <div>
                            <span className="mr--1">
                              <input
                                type="radio"
                                name="sort"
                                id="en"
                                onClick={() => this.handleNewest(this.props)}
                              />
                            </span>
                            <label htmlFor="en">Lama ke Baru</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="row mt--2">
                    <div className="col">
                      <p>
                        <strong>
                          Menampilkan {this.state.products.length} produk
                        </strong>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      {/* <h3 className="text--size-12">
                        Menampilkan 10 Produk untuk Sofa
                      </h3> */}
                    </div>
                  </div>
                  <div className="row">{this.renderProduct()}</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withContext(Category);
