import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Promo.scss";

class Promo extends Component {
  componentDidMount() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

  render() {
    return (
      <div>
        <div className="promo-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 promo-title">
                <h1>Promo HIAS House</h1>
              </div>

              <div className="col-md-6 promo-image">
                <img
                  src={require("../../assets/img/MASTER_LOGO_HIAS_HOUSE_HORIZONTAL.png")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <div className="row">
            <div className="col-md-4">
              <div className="product-card">
                <Link to={"/DetailPromo1"}>
                  <div className="product-card-image">
                    <img style={{ objectFit: "cover" }} src={require("../../assets/img/evoucher.jpg")} alt={"Promo Hias House"} />
                  </div>
                </Link>
                <div className="fx justify-content-between product-card-footer">
                  <div className="product-card-wrapper">
                    <div className="fx justify-content-between fx-no-wrap">
                      <Link to={"/"}>
                        <div>
                          <p className="mb--0" style={{ color: "#6c6e70" }}>
                            <strong>VOUCHER IDR 25.000</strong>
                          </p>
                          <p className="mb--0 text--color-gray">5 - 20 Desember 2019</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-card">
                <Link to={"/DetailPromo2"}>
                  <div className="product-card-image">
                    <img style={{ objectFit: "cover" }} src={require("../../assets/img/evoucher2.jpg")} alt={"Promo Hias House"} />
                  </div>
                </Link>
                <div className="fx justify-content-between product-card-footer">
                  <div className="product-card-wrapper">
                    <div className="fx justify-content-between fx-no-wrap">
                      <Link to={"/"}>
                      <div>
                          <p className="mb--0" style={{ color: "#6c6e70" }}>
                            <strong>Diskon Akhir Tahun Sampai 80% Untuk Semua Produk HIAS House*</strong>
                          </p>
                          <p className="mb--0 text--color-gray">1 - 30 Desember 2019</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Promo;
