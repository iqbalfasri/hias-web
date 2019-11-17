import React, { Component } from "react";

import "./Promo.scss";

class Promo extends Component {
  render() {
    return (
      <>
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

        <div className="promo-content">
          <h1>CONTENT</h1>
        </div>
      </>
    );
  }
}

export default Promo;
