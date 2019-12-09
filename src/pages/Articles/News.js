import React, { Component } from "react";
import { Link } from "react-router-dom";

class News extends Component {
  render() {
    return (
      <div>
        <div className="promo-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 promo-title">
                <h1>Berita HIAS House</h1>
              </div>

              <div className="col-md-6 promo-image">
                <img
                  src={require("../../assets/img/MASTER_LOGO_HIAS_HOUSE_HORIZONTAL.png")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{width:"80%"}}>
          <div className="row">
              <div className="col-md-6">
              <div className="product-card">
                <Link to={"/DetailNews"}>
                  <div className="product-card-image">
                    <img style={{ objectFit: "fill" }} src={require("../../assets/img/news.jpeg")} alt={"Promo Hias House"} />
                  </div>
                </Link>
                <div className="fx justify-content-between product-card-footer">
                  <div className="product-card-wrapper">
                    <div className="fx justify-content-between fx-no-wrap">
                      <Link to={"/DetailNews"}>
                      <div>
                          <p className="mb--0" style={{ color: "#6c6e70" }}>
                            <strong>Contoh Berita Hias House</strong>
                          </p>
                          <p className="mb--0 text--color-gray">Sumber: HIAS House Official</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="col-md-6">
              <div className="product-card">
                <Link to={"/DetailNews"}>
                  <div className="product-card-image">
                    <img style={{ objectFit: "fill" }} src={require("../../assets/img/news2.jpg")} alt={"Promo Hias House"} />
                  </div>
                </Link>
                <div className="fx justify-content-between product-card-footer">
                  <div className="product-card-wrapper">
                    <div className="fx justify-content-between fx-no-wrap">
                      <Link to={"/DetailNews"}>
                      <div>
                          <p className="mb--0" style={{ color: "#6c6e70" }}>
                            <strong>Contoh Berita Hias House</strong>
                          </p>
                          <p className="mb--0 text--color-gray">Sumber: HIAS House Official</p>
                        </div>
                      </Link>
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

export default News;
