import React, { Component } from "react";
import moment from "moment";
import axios from "axios";

import StarRatings from "react-star-ratings";

import "./Review.scss";

import { BASE_URL } from "../../api";
class Review extends Component {
  state = {
    review: []
  };

  componentDidMount() {
    axios.get(`${BASE_URL}/adm/product/getAllTestimoni`).then(res => {
      if (res.data.data.listTestimoni.length !== 0) {
        this.setState({
          review: res.data.data.listTestimoni
        });
      }
    });
  }

  renderReview() {
    return this.state.review.map(r => (
      <>
        <div className="customer-review mb--1">
          <div>
            <span className="mr--1">
              <strong>{r.fullName}</strong>
            </span>
            <span>
              <StarRatings
                rating={r.rating}
                starDimension="15px"
                starSpacing="5px"
                starRatedColor="#4cc5e0"
              />
            </span>
          </div>
          <div>
            <span className="text--color-gray">
              {moment(r.date).format("LL")}
            </span>
          </div>
        </div>
        <div className="customer-review-container">
          <div className="customer-review-wrapper">
            <div>
              <div className="cr-rating-head"></div>
              <div>
                <p>{r.comment}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    ));
  }

  render() {
    return (
      <div className="content">
        <div className="section-page">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <h2>Testimoni Pelanggan</h2>
                  <p>Testimoni pelanggan yang telah belanja di hias house</p>
                </div>
              </div>
              <div className="col-md-8">{this.renderReview()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
