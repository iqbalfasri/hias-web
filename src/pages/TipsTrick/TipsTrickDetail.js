import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings";
import ShowMoreText from "react-show-more-text";

import "./TipsTrickDetail.scss";

import ProductCard from "../../components/card/Product";
import ColorSelector from "../../components/ColorSelector";
import { fetchProductByInspirationId, fetchWishList, fetchProductByTipsTrickId } from "../../api";
import { formatMoneyWithoutSymbol } from "../../utils/money";
import { withContext } from "../../context/withContext";
import { isLogin } from "../../utils/auth";

class TipsTrickDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tipsTrick: null,
      wishListItems: []
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

  componentDidMount() {
    const { id } = this.props.match.params;
    fetchProductByTipsTrickId(id).then(res => {
      console.log(res, "Data detail");
      this.setState({
        tipsTrick: res.data
      });
    });

    if (isLogin()) {
      fetchWishList(localStorage.getItem("userId")).then(res => {
        this.setState({
          wishListItems: res.data
        });
      });
    }
  }

  renderProduct = () => {
    const { tipsTrick } = this.state;
    if (tipsTrick.product !== undefined) {
      return tipsTrick.product.map(p => {
        return (
          <div className="col-md-3" key={`product-${p.productId}`}>
            <ProductCard
              thumbnail={
                p.thumbnail
                  ? p.thumbnail
                  : "https://via.placeholder.com/600x600"
              }
              loved={this.isProductWishlisted(p.productId)}
              id={p.productId}
              title={p.productName}
              price={p.price}
              category={""}
              itemStock={p.itemStock}
            />
          </div>
        );
      });
    }
  };

  render() {
    const { tipsTrick } = this.state;
    const { id } = this.props.match.params;
    if (tipsTrick !== null) {
      return tipsTrick.product !== undefined ? (
        <div>
          <Helmet key={Math.random()}>
            <title>Tips &amp; Trick</title>
            <meta property="og:title" content="Hias Homepage" />
            <meta name="description" content="Hias" />
            <meta name="robots" content="index, nofollow" />
          </Helmet>
          <div className="content">
            <section className="section-page">
              <div className="container">
                <div
                  className="banner-inspiration"
                  style={{ backgroundImage: `url(${tipsTrick.banner}` }}
                  alt=""
                ></div>
              </div>
              <div className="container">
                <h1 color="#333" style={{ textAlign: "center", fontSize: 32, margin: '30px 0 ' }}>
                  {tipsTrick.title}
                </h1>
                <p style={{ textAlign: 'justify' }}>{this.props.location.state.description}</p>
              </div>
              <section className="section-page">
                <div className="container">
                  <div className="row align-items-center mb--2">
                    <div>
                      <h3 className="section-title mb--0">
                        Produk{" "}
                        <span className="text--color-orange">Terkait</span>
                      </h3>
                    </div>
                  </div>
                  <div className="row">{this.renderProduct()}</div>
                </div>
              </section>
            </section>
          </div>
        </div>
      ) : (
        <div className="content">
          <section className="section-page">
            <div className="container">
              <div className="row align-items-center mb--2">
                <h3 className="section-title mb--0">
                  Tips Trick tidak ditemukan{" "}
                </h3>
              </div>
            </div>
          </section>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withContext(TipsTrickDetail);
