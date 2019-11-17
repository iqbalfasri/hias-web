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
import { fetchHotProduct, fetchWishList } from "../../api";
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
      .get(`${process.env.REACT_APP_BASE_URL}/product/categoryId/${categoryId}`)
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

  
  componentWillReceiveProps(props) {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/product/categoryId/${props.match.params.category}`
      )
      .then(res => {
        console.log(res.data.data);
        this.setState({ products: res.data.data });
      })
      .catch(error => console.log(error));
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
                    <div>
                      <h2>LIVING</h2>
                    </div>
                    <div className="cat-container">
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
                    </div>
                    <div className="cat-container">
                      <div className="cat--title">
                        <span className="text--color-gray">
                          FILTER PRODUCTS
                        </span>
                      </div>
                      <div className="cat--sub-title">
                        <span className="mr--1">
                          <strong>BASED ON COLOR</strong>
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faMinusSquare} />
                        </span>
                      </div>
                      <div>
                        <div className="cat--items">
                          <Checkbox
                            id="red"
                            text="Red"
                            textStyle={{ fontSize: "14px" }}
                          />
                        </div>
                        <div className="cat--items">
                          <Checkbox
                            id="blue"
                            text="Blue"
                            textStyle={{ fontSize: "14px" }}
                          />
                        </div>
                        <div className="cat--items">
                          <Checkbox
                            id="green"
                            text="Green"
                            textStyle={{ fontSize: "14px" }}
                          />
                        </div>
                        <div className="cat--items">
                          <Checkbox
                            id="black"
                            text="Black"
                            textStyle={{ fontSize: "14px" }}
                          />
                        </div>
                        <div className="cat--items">
                          <Checkbox
                            id="white"
                            text="White"
                            textStyle={{ fontSize: "14px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="cat-container">
                      <div className="cat--title">
                        <span className="text--color-gray">SORT PRODUCTS</span>
                      </div>
                      <div className="cat--sub-title">
                        <span className="mr--1">
                          <strong>BASED ON PRODUCTS</strong>
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faMinusSquare} />
                        </span>
                      </div>
                      <div>
                        <div className="cat--items">
                          <div>
                            <span className="mr--1">
                              <input type="radio" name="sort" id="lth" />
                            </span>
                            <label htmlFor="lth">Price Low to High</label>
                          </div>
                        </div>
                        <div className="cat--items">
                          <div>
                            <span className="mr--1">
                              <input type="radio" name="sort" id="htl" />
                            </span>
                            <label htmlFor="htl">Price High to Low</label>
                          </div>
                        </div>
                        <div className="cat--items">
                          <div>
                            <span className="mr--1">
                              <input type="radio" name="sort" id="az" />
                            </span>
                            <label htmlFor="az">A to Z</label>
                          </div>
                        </div>
                        <div className="cat--items">
                          <div>
                            <span className="mr--1">
                              <input type="radio" name="sort" id="za" />
                            </span>
                            <label htmlFor="za">Z to A</label>
                          </div>
                        </div>
                        <div className="cat--items">
                          <div>
                            <span className="mr--1">
                              <input type="radio" name="sort" id="ne" />
                            </span>
                            <label htmlFor="ne">Newest to Eldest</label>
                          </div>
                        </div>
                        <div className="cat--items">
                          <div>
                            <span className="mr--1">
                              <input type="radio" name="sort" id="en" />
                            </span>
                            <label htmlFor="en">Eldest to Newest</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    <div className="col">
                      <h3 className="text--size-12">
                        Menampilkan 10 Produk untuk Sofa
                      </h3>
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
