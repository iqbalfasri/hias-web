import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";

import Signup from "../../components/auth/Signup";

import { registUserToCart, BASE_URL, userSignup } from "../../api";
import { isPhoneNumber } from "../../utils/inputValidations";

class Register extends Component {
  render() {
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>Signup Page</title>
          <meta property="og:title" content="Hias Signup" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>

        <div className="content">
          <section className="section-page">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <Signup />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
