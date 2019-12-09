import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./Articles.scss";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>About US</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>

        <div>
          <div className="about-header">
            <h1>Tentang Kami</h1>
          </div>

          <div className="about-content">
            <div className="container">
              <div className="row">
                <div className="col-md-4 about-sidebar">
                  <ul>
                    <li>
                      <Link to="/about">
                        <h3 style={{ color: "#000" }}>Tentang Kami</h3>
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
                        <h3>Lokasi Kami</h3>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-8">
                  <strong><p style={{paddingTop:0}}>
                    Hi!
                    <br />
                    Terima kasih sudah berkunjung ke website Kami
                  </p>
                  </strong>
                  {/* <div className="article-image">
                    <img
                      src={require("../../assets/img/Banner-Newsletter.png")}
                      alt=""
                    />
                  </div> */}
                  <p>
                    Perkenalkan, Kami HIAS House yang dikelola oleh PT HIAS
                    Ritel Indonesia. HIAS House mulai melayani Anda pada tahun
                    2016 yang telah hadir di beberapa store di area Jakarta dan
                    Bali.
                    <br />
                    HIAS House menyediakan berbagai pilihan furnitur, home decor
                    dan perlengkapan rumah dengan mengedepankan konsep{" "}
                    <strong>
                      <i>Modern</i>
                    </strong>{" "}
                    dan{" "}
                    <strong>
                      <i>Stylish</i>
                    </strong>
                    .
                    <br />
                    <br />
                    HIAS House hadir untuk membantu Anda mewujudkan rumah impian
                    yang estetik dan berkualitas, karena Kami percaya kenyamanan
                    berawal dari rumah.
                    <br />
                    <br /> Kami menyediakan varian produk furnitur yang unik,
                    dekorasi dan perlengkapan rumah yang telah melewati proses
                    kurasi dari stylist profesional.
                    <br />
                    <br />
                    Kami menyelaraskan warna, gaya dan desain untuk menciptakan
                    harmonisasi ruang untuk menambah kenyamanan Anda. HIAS House
                    membagi kategori produk menjadi 5 departemen yaitu living,
                    bedroom, bathroom, dining dan kitchen.
                  </p>
                  <br />
                  <h3>PT Hias Ritel Indonesia</h3>
                  <p>
                    Jl. Raya Boulevard Barat Blok XC No.2A. <br />
                    Kelapa Gading, Jakarta 14240 - Indonesia
                    <br />
                    P +6221 2245 7333
                    <br />F +6221 2245 7334
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
