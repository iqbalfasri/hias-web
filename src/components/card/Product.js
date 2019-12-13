import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";

import { isLogin } from "../../utils/auth";
import { formatMoneyWithoutSymbol, getDiscount } from "../../utils/money";
import { withContext } from "../../context/withContext";
import { updateWishList, removeWishlist, fetchWishList } from "../../api";

import "./Product.scss";

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLovedLoading: false,
      isLoved: false,
      wishListItems: []
    };
  }

  componentDidMount() {
    if (isLogin()) {
      this.setState({ isLovedLoading: true });
      fetchWishList(localStorage.getItem("userId")).then(res => {
        this.setState(
          { wishListItems: res.data, isLovedLoading: false },
          () => {
            let { wishListItems } = this.state;
            let idProduct = this.props.id;

            wishListItems.forEach(wish => {
              if (wish.id == idProduct) {
                this.setState({ isLoved: true });
              }
            });
          }
        );
      });
    }
  }

  componentDidUpdate(prevState) {
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

  addToWishList(id) {
    if (isLogin()) {
      // this.props.context.setIsLoading(true);
      const value = {
        productId: id,
        userId: JSON.parse(localStorage.getItem("userId"))
      };

      const { wishListItems } = this.state;
      const idProduct = this.props.id;

      if (this.state.isLoved) {
        wishListItems.forEach(wish => {
          if (wish.id == idProduct) {
            let { idWishlist } = wish;

            removeWishlist(idWishlist)
              .then(res => {
                if (res.success) {
                  this.setState({
                    isLoved: false
                  });
                }
              })
              .catch(err => {
                console.log(err);
              })
              .finally(() => {
                // this.props.context.setIsLoading(false);
              });
          }
        });
      } else {
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
            // this.props.context.setIsLoading(false);
          });
      }
    } else {
      this.props.context.setIsModalSigninPopupOpen(true);
    }
  }

  renderLovedIcon() {
    const { loved, id } = this.props;
    const { isLoved } = this.state;
    return (
      <div className="product-wish-list" onClick={() => this.addToWishList(id)}>
        <span className="text--size-1-5" style={{ color: "#ba0001" }}>
          <FontAwesomeIcon icon={isLoved ? fasHeart : faHeart} />
        </span>
      </div>
    );
  }

  render() {
    const { category, title, price, id, thumbnail, discount } = this.props;

    let wrappStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    };

    let noWrappStyle = {
      display: "flex",
      alignItems: "center"
    };

    return (
      <div className="product-card">
        <Link
          to={`/products/detail/${id}`}
          onClick={() => {
            if (this.props.needRefreshPage == true) {
              window.open(`/products/detail/${id}`, "_self");
            }
          }}
        >
          <div className="product-card-image">
            <img style={{ objectFit: "contain" }} src={thumbnail} alt={title} />
          </div>
        </Link>
        <div className="fx justify-content-between product-card-footer">
          <div className="product-card-wrapper">
            <div className="fx justify-content-between fx-no-wrap">
              <Link to={`/products/detail/${id}`}>
                <div>
                  <p className="mb--0 text--color-gray">{category}</p>
                  <p className="mb--0" style={{ color: "#6c6e70" }}>
                    <strong>{title}</strong>
                  </p>
                </div>
              </Link>
              {/* Create a simple loading, */}
              {this.state.isLovedLoading ? (
                <span title="Loading..." className="text--size-1-5 pulse animated" style={{ color: "#ddd" }}>
                  <FontAwesomeIcon icon={fasHeart} />
                </span>
              ) : (
                this.renderLovedIcon()
              )}
            </div>
            <Link to={`/products/detail/${id}`}>
              <div style={this.props.isWrapPrice ? wrappStyle : noWrappStyle}>
                {/* {discount !== null ? (
                  <span
                    style={{
                      width: "30px",
                      height: "30px",
                      color: "#fff",
                      borderRadius: "15px",
                      fontSize: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#c2191f",
                      marginRight: '10px'
                    }}
                  >
                    {`${discount}%`}
                  </span>
                ) : null} */}
                {discount != null ? (
                  <p
                    className="text--color-orange mb--0 mr--1"
                    style={{
                      textDecoration: "line-through",
                      marginBottom: "0",
                      fontSize: "12px"
                    }}
                  >
                    <strong>IDR {formatMoneyWithoutSymbol(price)}</strong>
                  </p>
                ) : null}
                <p
                  className="text--color-orange mb--0"
                  style={{ margin: "0 0" }}
                >
                  <strong>
                    IDR{" "}
                    {formatMoneyWithoutSymbol(
                      discount == null ? price : getDiscount(price, discount)
                    )}
                  </strong>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withContext(ProductCard);
