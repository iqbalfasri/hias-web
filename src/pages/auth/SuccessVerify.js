import React, { Component } from "react";
import Helmet from "react-helmet";

import VerifImage from "../../assets/img/Verifikasi-01.png";

class SuccessVerify extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Success verifikasi email</title>
        </Helmet>
        <div className="content mt--2" style={{ margin: "120px 0" }}>
          <div className="container">
            <center>
              <h1>Selamat, akun kamu telah ter-verifikasi.</h1>
            </center>
            <div>
              <center>
                <img src={VerifImage} />
              </center>
            </div>
            <div>
              <center>
                <a href="/" className="btn btn--blue">
                  Lanjutkan Belanja
                </a>
              </center>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SuccessVerify;
