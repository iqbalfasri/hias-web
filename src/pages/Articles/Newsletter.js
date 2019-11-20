import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import axios from 'axios';

import "./Articles.scss";

class Newsletter extends Component {
  state = {
    email: "",
    isSucessSubscribed: false,
    isLoading: false
  }
  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  subsribe = () => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const value = {
      email: this.state.email
    }
    this.setState({ isLoading: true })

    axios
      .post(`${BASE_URL}/product/newsLatter`, value)
      .then((res) => {
        this.setState({ isSucessSubscribed: true })
      })
      .finally(() => {
        this.setState({ isLoading: false })
      })
  }

  render() {
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>Inspiration</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>

        <div>
          <div className="about-header">
            <h1>Langganan Update & Berita</h1>
          </div>

          <div className="about-content">
            <div className="container">
              <div className="row">
                <div className="col-md-4 about-sidebar">
                  <ul>
                    <li>
                      <Link to="/about">
                        <h3>Tentang Kami</h3>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <h3>Hubungi Kami</h3>
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq">
                        <h3>FAQ</h3>
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy">
                        <h3>Kebijakan &amp; Privasi</h3>
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms">
                        <h3>Syarat &amp; Ketentuan</h3>
                      </Link>
                    </li>
                    <li>
                      <Link to="/deliveryterms">
                        <h3>Kebijakan Pengiriman</h3>
                      </Link>
                    </li>
                    <li>
                      <Link to="/refund">
                        <h3>Kebijakan Pengembalian</h3>
                      </Link>
                    </li>
                    <li>
                      <Link to="/newsletter">
                        <h3 style={{ color: "#000" }}>Langganan Update &amp; Berita</h3>
                      </Link>
                    </li>
                    <li>
                      <Link to="/storelocation">
                        <h3>Lokasi Kami</h3>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-8">
                  <div>
                    <h3 className="footer-link-title">Langganan Berita</h3>
                    <div>
                      <strong><p>Keuntungan dengan berlangganan berita HIAS House:</p></strong>
                      <ul>
                        <li>Dapat dengan mudah mendapatkan info promo produk</li>
                        <li>Selalu update dengan produk-produk terbaru HIAS House</li>
                      </ul>
                      <div className="form--group" style={{ maxWidth: "50%", marginLeft: 20 }}>
                        <input type="text" placeholder="Alamat Email" className="form--input" value={this.state.email} onChange={this.onChangeEmail} />
                      </div>
                      <div>
                        <button onClick={this.subsribe} className="btn btn--full btn--blue" style={{ maxWidth: "50%", marginLeft: 20 }}>{this.state.isLoading ? "Loading ..." : "Langganan"}</button>
                      </div>
                    </div>
                    {this.state.isSucessSubscribed &&
                      <div className="col">
                        <p />
                        <p>Kamu berhasil berlangganan newsletter hias house</p>
                      </div>}
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

export default Newsletter;
