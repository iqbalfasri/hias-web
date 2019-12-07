import React, { Component } from "react";
import axios from "axios";
import { fetchAllProducts, fetchWishList } from "../../api";
import ProductCard from "../../components/card/Product";
import { isLogin } from "../../utils/auth";

class AllHotProducts extends Component {
  state = {
    product: [],
    wishListItems: [],
    wished: false
  };

  componentDidMount() {
    fetchAllProducts().then(res => {
      this.setState({ product: res.data });
    });

    if (isLogin()) {
      fetchWishList(localStorage.getItem("userId")).then(res => {
        this.setState({
          wishListItems: res.data
        }, () => this.restructureData());
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

  renderProduct() {
    const { product } = this.state;
    if (product !== 0) {
      return product.map((product, i) => {
        console.log(this.isProductWishlisted(product.productId), "Wish value")
        return (
          <div className="col-md-3" key={i}>
            <ProductCard
              thumbnail={
                product.thumbnail
                  ? product.thumbnail
                  : "https://via.placeholder.com/600x600"
              }
              loved={this.isProductWishlisted(product.productId)}
              id={product.productId || product.id}
              title={product.productName}
              price={product.price}
              discount={product.discount}
              category={product.categoryName}
            />
          </div>
        );
      });
    }
  }

  render() {
    const { match } = this.props;
    return (
      <div className="content">
        <div className="section-page">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <h3 className="section-title mb--0">
                    Produk
                    {/* <span className="text--color-orange">Pilihan</span> */}
                  </h3>
                </div>
              </div>
            </div>
            <div className="contianer-review-list">{this.renderProduct()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllHotProducts;
