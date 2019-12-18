import React, { Component } from "react";

import {
  fetchProductByInspirationId,
  fetchWishList,
  BASE_URL
} from "../../api";
import { withContext } from "../../context/withContext";
import { isLogin } from "../../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

import InputText from "../../components/form/InputText";
import "./addReview.scss";

class AddReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      reviewText: "",
      isLoading: false,
      isSentSucces: ""
    };
  }

  componentDidMount() {}

  onChangeRating = i => {
    this.setState({
      rating: i
    });
  };
  onChangeReviewText = e => {
    this.setState({
      reviewText: e.target.value
    });
  };

  renderRating = () => {
    const { rating } = this.state;

    return (
      <div>
        <FontAwesomeIcon
          size="2x"
          color="#46C5E2"
          icon={rating < 1 ? farStar : fasStar}
          onClick={() => {
            this.onChangeRating(1);
          }}
        />
        <FontAwesomeIcon
          size="2x"
          color="#46C5E2"
          icon={rating < 2 ? farStar : fasStar}
          onClick={() => {
            this.onChangeRating(2);
          }}
        />
        <FontAwesomeIcon
          size="2x"
          color="#46C5E2"
          icon={rating < 3 ? farStar : fasStar}
          onClick={() => {
            this.onChangeRating(3);
          }}
        />
        <FontAwesomeIcon
          size="2x"
          color="#46C5E2"
          icon={rating < 4 ? farStar : fasStar}
          onClick={() => {
            this.onChangeRating(4);
          }}
        />
        <FontAwesomeIcon
          size="2x"
          color="#46C5E2"
          icon={rating < 5 ? farStar : fasStar}
          onClick={() => {
            this.onChangeRating(5);
          }}
        />
      </div>
    );
  };

  sendMessage1 = () => {
    const { rating, reviewText } = this.state;
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const userId = parseInt(localStorage.getItem("userId"), 10);
    const valueDiscussion = {
      userId: userId,
      productId: 2,
      discussion: reviewText
    };
    const valueRating = {
      productId: 2,
      userId: userId,
      rating: rating
    };
    //

    this.setState({ isLoading: true });
    axios
      .post(`${BASE_URL}/product/discussion`, valueDiscussion, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      })
      .then(res => {
        console.log("berhasil");
      })
      .catch(() => {
        this.setState({ isSentSuccess: "no", isLoading: false });
      });
  };

  sendMessage = () => {
		const { rating, reviewText } = this.state;

		if (!reviewText) {
			alert("Review tidak boleh kosong!");
			return;
		}

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    axios
      .post(
        `${BASE_URL}/product/addTestimoni`,
        { userId: userId, rating: rating, comment: reviewText },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(res => {
        alert("Testimoni berhasil ditambahkan");
        window.location.href = "/review";
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <div className="content">
          <section className="section-page">
            <div className="container">
              <div className="col-md-12">
                <center>
                  <h3>Add Reviews</h3>
                  <p>
                    Tambahkan testimoni pengalamanmu saat belanja di Hias house
                  </p>
                </center>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form--group">
                      <center>
                        <label htmlFor="">Rating</label>
                        <div>{this.renderRating()}</div>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form--group">
                      <label htmlFor="">Review</label>
                      <textarea
                        className="text--area"
                        type="text"
                        placeholder="Tuliskan Review"
                        value={this.state.reviewText}
                        onChange={this.onChangeReviewText}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={this.sendMessage}
                    className="btn btn--full btn--blue"
                    style={{ maxWidth: "100%" }}
                  >
                    {this.state.isLoading ? "Mengirim..." : "Submit"}
                  </button>
                </div>

                {this.state.isSentSuccess === "yes" && (
                  <div className="col">
                    <p />
                    <p>Review anda berhasil disimpan</p>
                  </div>
                )}
                {this.state.isSentSuccess === "no" && (
                  <div className="col">
                    <p />
                    <p>Review anda gagal disimpan. </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withContext(AddReview);
