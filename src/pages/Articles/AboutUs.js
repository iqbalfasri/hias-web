import React, { Component } from "react";
import { Helmet } from "react-helmet";

import "./About.scss";

class AboutUs extends Component {
  render() {
    return (
      <>
        <Helmet key={Math.random()}>
          <title>Inspiration</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>

        <>
          <div className="about-header">
            <h1>Tentang Hias House</h1>
          </div>

          <div className="about-content">
            <div className="container">
              <div className="row">
                <div className="col-md-4 about-sidebar">
                  <ul>
                    <li>
                      <h3 style={{ color: "#4ec5e0" }}>Tentang Kami</h3>
                    </li>
                    <li>
                      <h3>Ide dan Inspirasi</h3>
                    </li>
                    <li>
                      <h3>Catalog</h3>
                    </li>
                    <li>
                      <h3>Hubungi Kami</h3>
                    </li>
                    <li>
                      <h3>FAQ</h3>
                    </li>
                    <li>
                      <h3>Kebijakan &amp; Privasi</h3>
                    </li>
                    <li>
                      <h3>Syarat &amp; Ketentuan</h3>
                    </li>
                    <li>
                      <h3>Kebijakan Pengiriman</h3>
                    </li>
                    <li>
                      <h3>Kebijakan Pengiriman</h3>
                    </li>
                    <li>
                      <h3>Kebijakan Pengembalian</h3>
                    </li>
                    <li>
                      <h3>Lokasi Kami</h3>
                    </li>
                  </ul>
                </div>
                <div className="col-md-8">
                  <p>
                    Hias House menyediakan berbagai pilihan furniture, dekorasi,
                    dan perlengkapan rumah dengan mengedepankan konsep Modern
                    dan Stylish yang cocok untuk keluarga masa kini yang dinamis
                    dan modern juga generasi muda yang trendi dan semua kalangan
                    urban.
                    <br />
                    <br />
                    Kami ingin membantu Anda mewujudkan rumah impian yang
                    estetik dan dapat menjadikan kami sebagai teman stylist
                    anda. Hias House menyediakan varian produk furnitur yang
                    unik, dekorasi dan perlengkapan rumah yang telah melewati
                    proses kurasi dari Home Stylist profesional. Kami
                    menyelaraskan warna, gaya dan desain untuk menciptakan
                    harmonisasi ruang dan kenyamanan Anda. HIAS House membagi
                    kategori produk menjadi 5 departemen yaitu living, bedroom,
                    bathroom, dining dan kitchen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      </>
    );
  }
}

export default AboutUs;
