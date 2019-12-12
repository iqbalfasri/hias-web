import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings";
import "./Review.scss";

class Review extends Component {
  // state = {
  //   review: []
  // };

  // componentDidMount() {
  //   const BASE_URL = process.env.REACT_APP_BASE_URL;
  //   axios
  //     .get(`${BASE_URL}/product/discussion/2`, {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  //     })
  //     .then(res => {
  //       console.log(res);
  //       if (res.data.length !== 0) {
  //         this.setState({
  //           review: res.data.data
  //         });
  //       }
  //     });
  // }

  // renderReview = () => {
  //   const { review } = this.state;
  //   if (review !== null) {
  //     return review.map((item, i) => {
  //       return (
  //         <div class="review-item" key={i}>
  //           <div className="icon">
  //             <FontAwesomeIcon icon={faUserCircle} style={{ height: "24px" }} />
  //           </div>
  //           <div>
  //             <h3>{item.user.fullName}</h3>
  //             <p>{item.discussion !== null ? item.discussion : "-"}</p>
  //           </div>
  //         </div>
  //       );
  //     });
  //   }
  // };

  render() {
    // console.log(this.state);
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
              <div className="col-md-8">
                  <div className="customer-review mb--1">
                    <div>
                      <span className="mr--1"><strong>Naufal</strong></span>
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
                  <div className="customer-review-container">
                    <div className="customer-review-wrapper">
                      <div>
                        <div className="cr-rating-head">
                        </div>
                        <div>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum animi perspiciatis velit assumenda suscipit in, fugiat porro expedita eveniet dolorum placeat cumque soluta, exercitationem recusandae error quaerat quos consectetur doloremque!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil animi voluptatum sequi dicta aspernatur praesentium harum assumenda! Iusto ullam obcaecati fugit, reiciendis, et at, porro laudantium autem alias aliquid nemo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="customer-review mb--1">
                    <div>
                      <span className="mr--1"><strong>Naufal</strong></span>
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
                  <div className="customer-review-container">
                    <div className="customer-review-wrapper">
                      <div>
                        <div className="cr-rating-head">
                        </div>
                        <div>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum animi perspiciatis velit assumenda suscipit in, fugiat porro expedita eveniet dolorum placeat cumque soluta, exercitationem recusandae error quaerat quos consectetur doloremque!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil animi voluptatum sequi dicta aspernatur praesentium harum assumenda! Iusto ullam obcaecati fugit, reiciendis, et at, porro laudantium autem alias aliquid nemo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
