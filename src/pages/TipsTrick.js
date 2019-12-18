import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";

import "./TipsTrick.scss";

import { BASE_URL } from "../../src/api";

class TipsTrick extends Component {
  state = {
    tipsTrick: []
  };

  componentDidMount() {
    axios
      .get(`${BASE_URL}/getAllTips`)
      .then(res => {
        this.setState({ tipsTrick: res.data.data.tips });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderTipsTrick = () => {
    const { tipsTrick } = this.state;
    if (tipsTrick !== null) {
      return tipsTrick.map((item, i) => {
        // first template
        if (i == 0) {
          return (
            <Link
              key={i}
              to={{
                pathname: `/tips-trick/detail/${item.id}`,
                state: {
                  description: item.description
                }
              }}
            >
              <div className="insp-template">
                <div
                  style={{ backgroundImage: `url(${item.banner})` }}
                  className="insp-template-1--image"
                ></div>
                <div className="insp-template-1--content">
                  <div className="content--max-wd">
                    <h2 style={{ color: "#333" }}>Tips &amp; Trick</h2>
                    <h1>{item.title}</h1>
                  </div>
                </div>
                <div className="insp-right--content">
                  <div style={{ display: "flex" }} className="mt--2">
                    <div className="col-md-3">
                      <p className="insp-1--desc">{item.description}</p>
                    </div>
                    <div className="col-md-3">
                      <img
                        className="insp-1--img-content-top mb--2"
                        src={item.banner}
                      />
                      <img
                        className="insp-1--img-content-top"
                        src={item.banner}
                      />
                    </div>
                    <div className="col-md-3">
                      <img style={{ width: "100%" }} src={item.banner} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        }

        // second template
        if (i == 1) {
          return (
            <Link
              key={i}
              to={{
                pathname: `/tips-trick/detail/${item.id}`,
                state: {
                  description: item.description
                }
              }}
            >
              <div className="insp-template mb--1">
                <div className="insp-right--content">
                  <div style={{ display: "flex" }}>
                    <div className="insp-template-2--content">
                      <div className="col-md-8">
                        <div className="content--max-wd">
                          <h2 style={{ color: "#333" }}>Tips &amp; Trick</h2>
                          <h1>{item.title}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt--2">
                    <div style={{ display: "flex" }}>
                      <div className="col-md-4">
                        <img src={item.banner} />
                      </div>
                      <div className="col-md-4">
                        <img src={item.banner} />
                      </div>
                      <div className="col-md-4">
                        <div
                          style={{ backgroundImage: `url(${item.banner})` }}
                          className="insp-tempate-2vertical--img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="insp-template-2--content mt--2">
                    <div className="col-md-8">
                      <div className="content--max-wd">
                        <p className="insp-2--desc">
                          <ShowMoreText
                            lines={5}
                            more="Lihat lebih banyak"
                            less="Lihat lebih sedikit"
                          >
                            {item.description}
                          </ShowMoreText>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        }

        // third template
        if (i == 2) {
          return (
            <Link
              key={i}
              to={{
                pathname: `/tips-trick/detail/${item.id}`,
                state: {
                  description: item.description
                }
              }}
            >
              <div
                style={{ marginTop: "80px", marginBottom: "80px" }}
                className="insp-template mt--2"
              >
                <div
                  style={{ backgroundImage: `url(${item.banner})` }}
                  className="insp-template-3--image"
                ></div>
                <div className="insp-template-3--content">
                  <div className="content--max-wd" style={{ maxWidth: "70vw" }}>
                    <h2 style={{ color: "#fff" }}>Tips &amp; Trick</h2>
                    <h1>{item.title}</h1>
                  </div>
                </div>
                <div className="insp-right--content">
                  <div className="mt--2">
                    <div className="col-md-12">
                      <p
                        style={{ textAlign: "right", paddingRight: "50px" }}
                        className="insp-1--desc"
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        }

        if (i == 3) {
          return (
            <Link
              key={i}
              to={{
                pathname: `/tips-trick/detail/${item.id}`,
                state: {
                  description: item.description
                }
              }}
            >
              <div className="insp-template">
                <div
                  style={{ backgroundImage: `url(${item.banner})` }}
                  className="insp-template-1--image"
                ></div>
                <div className="insp-template-1--content">
                  <div className="content--max-wd">
                    <h2 style={{ color: "#333" }}>Tips &amp; Trick</h2>
                    <h1>{item.title}</h1>
                  </div>
                </div>
                <div className="insp-right--content">
                  <div style={{ display: "flex" }} className="mt--2">
                    <div className="col-md-3">
                      <p className="insp-1--desc">{item.description}</p>
                    </div>
                    <div className="col-md-3">
                      <img
                        className="insp-1--img-content-top mb--2"
                        src={item.banner}
                      />
                      <img
                        className="insp-1--img-content-top"
                        src={item.banner}
                      />
                    </div>
                    <div className="col-md-3">
                      <img style={{ width: "100%" }} src={item.banner} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        }

        if (i == 4) {
          return (
            <Link
              key={i}
              to={{
                pathname: `/tips-trick/detail/${item.id}`,
                state: {
                  description: item.description
                }
              }}
            >
              <div className="insp-template">
                <div
                  style={{ backgroundImage: `url(${item.banner})` }}
                  className="insp-template-1--image"
                ></div>
                <div className="insp-template-1--content">
                  <div className="content--max-wd">
                    <h2>Tips &amp; Trick</h2>
                    <h1>{item.title}</h1>
                  </div>
                </div>
                <div className="insp-right--content">
                  <div style={{ display: "flex" }} className="mt--2">
                    <div className="col-md-3">
                      <p className="insp-1--desc">{item.description}</p>
                    </div>
                    <div className="col-md-3">
                      <img
                        className="insp-1--img-content-top mb--2"
                        src={item.banner}
                      />
                      <img
                        className="insp-1--img-content-top"
                        src={item.banner}
                      />
                    </div>
                    <div className="col-md-3">
                      <img style={{ width: "100%" }} src={item.banner} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        }

        return null;
      });
    }
  };

  render() {
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>Inspiration</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>
        <div className="content">
          <div className="" style={{ margin: "0 50px", position: "absolute" }}>
            <div className="mt--2">
              <h2 style={{ fontWeight: "bold" }}>
                <i>HIAS House</i>
              </h2>
              <h2 style={{ fontWeight: "bold" }}>Tips &amp; Trick</h2>
              <p style={{ maxWidth: "300px" }}>
                HIAS House mempersembahkan tips &amp; trick untuk
                mempercantik hunian anda.
              </p>
            </div>
            <div
              style={{ width: "50%", height: "10px", backgroundColor: "#333" }}
            />
          </div>
          <div className="section-page">{this.renderTipsTrick()}</div>
        </div>
      </div>
    );
  }
}

export default TipsTrick;
