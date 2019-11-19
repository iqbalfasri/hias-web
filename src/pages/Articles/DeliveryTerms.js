import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

import "./Articles.scss";

class DeliveryTerms extends Component {
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
            <h1>Kebijakan Pengiriman</h1>
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
                        <h3 style={{ color: "#000" }}>Kebijakan Pengiriman</h3>
                      </Link>
                    </li>
                    <li>
                      <Link to="/refund">
                        <h3>Kebijakan Pengembalian</h3>
                      </Link>
                    </li>
                    <li>
                      <Link to="/newsletter">
                        <h3>Langganan Update &amp; Berita</h3>
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
                  <div className="row">
                    <div className="col-md-6">
                      <strong><p>Furniture</p></strong>
                      <ul>
                        <li>
                          Dikirim dari warehouse.
                        </li>
                        <li>
                          Pembelanjaan minimal 5 juta rupiah maka tidak akan dikenakan biaya pengiriman di area jabodetabek di luar jabodetabek akan dikenakan biaya pengiriman tergantung dari tujuan dan volume barang.
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <strong><p>Non Furniture</p></strong>
                      <ul>
                        <li>
                          Dikirim dari store Hias House Kelapa Gading.
                        </li>
                        <li>
                          Pengiriman memakai jasa kurir yang bekerja sama dengan Hias House seperti jne.
                        </li>
                      </ul>
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

export default DeliveryTerms;
