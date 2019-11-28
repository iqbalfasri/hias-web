import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

import "./Articles.scss";

class StoreLocation extends Component {
  render() {
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>Lokasi Kami</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>

        <div>
          <div className="about-header">
            <h1>Lokasi Kami</h1>
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
                        <h3>Langganan Update &amp; Berita</h3>
                      </Link>
                    </li>
                    <li>
                      <Link to="/storelocation">
                        <h3 style={{ color: "#000" }}>Lokasi Kami</h3>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-8">
                  <h3 className="footer-link-title">Lokasi Kami</h3>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="store-location">
                        <ul>
                          <li className="mb--2">Jakarta<br/>Fanda’s Senopati 66 lt. 3 SCBD<br />0878-2088-8321</li>
                          <li>Jakarta<br/>Pondok Indah<br/> JL. Metro Pondok Indah TB27, No. 167<br />(021) 22457333</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div>
                        <ul>
                          <li className="mb--2">Jakarta<br/>Kelapa Gading<br/> JL. Boulevard Barat Raya Blok XC No. 2A<br />(021) 22457333</li>
                          <li>Tangerang<br/>Supermall Karawaci UG Floor JL. Boulevard Diponegoro 105 Karawaci<br />(021) 54200454</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div>
                        <ul>
                          <li className="mb--2">Bogor<br/>Botani Square LG Floor JL. Raya Padjajaran No. 69-71<br />0251-8400 669</li>
                          <li>Bali<br/>Level 21 Bali JL. Teuku Umar No. 1 Dauh Puri Klod Denpasar Baru<br />0361-3352195</li>
                        </ul>
                      </div>
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

export default StoreLocation;
