import React, { Component } from "react";

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
          <div className="container">
            <h1>CONTENT</h1>
          </div>
        </div>

        <div className="container" style={{ marginBottom: 250 }}>
          <h1>example dropdown</h1>

          <div>
            <button class="accordion">Section 1</button>
            <div class="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button class="accordion">Section 2</button>
            <div class="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Promo;
