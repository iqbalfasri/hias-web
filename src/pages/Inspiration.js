import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ShowMoreText from "react-show-more-text";

import "./Inspiration.scss";
import { fetchAllInspiration } from "../../src/api";

class Inspiration extends Component {
  state = {
    inspiration: []
  };

  componentDidMount() {
    fetchAllInspiration().then(res => {
      if (res.data.length !== 0) {
        this.setState({
          inspiration: res.data.inspiration
        });
      }
    });
  }

  renderInspiration = () => {
    const { inspiration } = this.state;
    if (inspiration !== null) {
      return inspiration.map((item, i) => {
        // first template
        if (i == 0) {
          return (
            <div key={i}>
              <div className="insp-template">
                <div
                  style={{ backgroundImage: `url(${item.banner})` }}
                  className="insp-template-1--image"
                ></div>
                <div className="insp-template-1--content">
                  <div className="content--max-wd">
                    <h2>Sub title</h2>
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
            </div>
          );
        }

        // second template
        if (i == 1) {
          return (
            <div key={i}>
              <div className="insp-template mb--1">
                <div className="insp-right--content">
                  <div style={{ display: "flex" }}>
                    <div className="insp-template-2--content">
                      <div className="col-md-8">
                        <div className="content--max-wd">
                          <h2>Sub title</h2>
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
            </div>
          );
        }

        // third template
        if (i == 2) {
          return (
            <div key={i}>
              <div
                style={{ marginTop: "80px" }}
                className="insp-template mt--2"
              >
                <div
                  style={{ backgroundImage: `url(${item.banner})` }}
                  className="insp-template-1--image"
                ></div>
                <div className="insp-template-3--content">
                  <div className="content--max-wd">
                    <h2>Sub title</h2>
                    <h1>{item.title}</h1>
                  </div>
                </div>
                <div className="insp-right--content">
                  <div className="mt--2">
                    <div className="col-md-12">
                      <p
                        style={{ textAlign: "right" }}
                        className="insp-1--desc"
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          <div className="section-page">{this.renderInspiration()}</div>
        </div>
      </div>
    );
  }
}

export default Inspiration;
