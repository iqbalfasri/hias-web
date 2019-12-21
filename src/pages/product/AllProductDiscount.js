import React, { Component } from "react";
import { fetchWishList, fetchProductDiscount } from "../../api";
import ProductCard from "../../components/card/Product";
import { isLogin } from "../../utils/auth";

class AllProductDiscount extends Component {
  state = {
    product: [],
    wishListItems: []
  };

  componentDidMount() {
    fetchProductDiscount().then(res => {
      this.setState({ product: res.data });
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
      if (wishListItems[i].id === id) {
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
        return (
          <div className="col-md-3" key={i}>
            <ProductCard
              thumbnail={
                product.thumbnail
                  ? product.thumbnail
                  : "https://via.placeholder.com/600x600"
              }
              loved={this.isProductWishlisted(product.id)}
              id={product.id || product.productId}
              title={product.productName}
              price={product.price}
              category={product.categoryName}
              itemStock={product.itemStock}
              discount={product.discount}
            />
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="content">
        <div className="section-page">
          <div className="container">
            <div className="row">
              <div className="col">
                <h3 className="section-title mb--1">
                  Produk <span className="text--color-orange">Diskon</span>
                </h3>
              </div>
            </div>
            <div className="row">{this.renderProduct()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllProductDiscount;
