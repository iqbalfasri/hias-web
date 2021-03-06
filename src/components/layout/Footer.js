import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faWhatsapp,
  fa
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";
import { faClock, faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container footer-link-container">
          <div className="row">
            <div className="col-md-3 col-6 block-1">
              <div className="footer-link">
                <div className="footer-logo">
                  <Link to="/">
                    <img
                      src={require("../../assets/img/footer-logo-08.png")}
                      alt=""
                    />
                  </Link>
                </div>
                <ul>
                  <li style={{ marginBottom: 21 }}>
                    <Link to="/about">Tentang Kami</Link>
                  </li>
                  <li style={{ marginBottom: 21 }}>
                    <Link to="/inspiration">Ide & Inspirasi</Link>
                  </li>
                  <li>
                    <Link to="/catalog">Katalog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-6 block-2">
              <div className="footer-link">
                <h3 className="footer-link-title">Kontak Kami</h3>
                <ul>
                  <li className="mb--2">
                    <a
                      target="_blank"
                      href="https://wa.me/082211990890/?text=urlencodedtext"
                    >
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        color="#fff"
                        style={{ marginRight: 4 }}
                      />
                      Whatsapp
                      <br />
                      <span className="footer-sub-link">+62 822-1199-0890</span>
                    </a>
                  </li>
                  <li className="mb--2">
                    <a href="mailto:cs@hias.co.id">
                      <FontAwesomeIcon
                        icon={faEnvelopeOpen}
                        color="#fff"
                        style={{ marginRight: 4 }}
                      />
                      Email
                      <br />
                    </a>
                    <a href="mailto:cs@hias.co.id" className="footer-sub-link">
                      cs@hias.co.id
                    </a>
                  </li>
                  <li className="mb--2">
                    <span>
                      <FontAwesomeIcon
                        icon={faPhone}
                        color="#fff"
                        style={{ marginRight: 4 }}
                      />
                      Layanan Konsumen
                      <br />
                      <span className="footer-sub-link">
                        Senin - Minggu / 09:00 - 18:00 WIB Termasuk hari libur
                      </span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon
                        icon={faClock}
                        color="#fff"
                        style={{ marginRight: 4 }}
                      />
                      Jam Operasional Outlet
                      <br />
                      <span className="footer-sub-link">
                        Senin - Minggu / 10:00 - 22:00 WIB
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-6 block-3">
              <div className="footer-link">
                <h3 className="footer-link-title">Layanan Pelanggan</h3>
                <ul>
                  <li style={{ marginBottom: 21 }}>
                    <Link to="/contact">Hubungi Kami</Link>
                  </li>
                  <li style={{ marginBottom: 21 }}>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li style={{ marginBottom: 21 }}>
                    <Link to="/privacy">Kebijakan & Privasi</Link>
                  </li>
                  <li style={{ marginBottom: 21 }}>
                    <Link to="/terms">Syarat & Ketentuan</Link>
                  </li>
                  <li style={{ marginBottom: 21 }}>
                    <Link to="/deliveryterms">Kebijakan Pengiriman</Link>
                  </li>
                  <li style={{ marginBottom: 21 }}>
                    <Link to="/refund">Kebijakan Pengembalian</Link>
                  </li>
                  <li>
                    <Link to="/newsletter">Langganan Update & Berita</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-md-3">
              <div className="footer-link">
                <h3 className="footer-link-title">Store Locator</h3>
                <div>
                  <div className="embed-responsive embed-responsive-21by9">
                    <ul>
                      <li><FontAwesomeIcon icon={faFacebookF} color="#fff" /><Link to="/">About Us</Link></li>
                      <li><FontAwesomeIcon icon={faFacebookF} color="#fff" /><Link to="/">Contact Us</Link></li>
                      <li><FontAwesomeIcon icon={faFacebookF} color="#fff" /><Link to="/">Policies</Link></li>
                      <li><FontAwesomeIcon icon={faFacebookF} color="#fff" /><Link to="/">Carreers</Link></li>
                    </ul>
                    <iframe title="map" className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15280232.095561456!2d73.70786939112547!3d20.770021297460445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sid!4v1571575935306!5m2!1sen!2sid"></iframe>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-3">
              <div className="footer-link">
                <h3 className="footer-link-title">Langganan Berita</h3>
                <div>
                  <div className="form--group">
                    <input type="text" placeholder="Alamat Email" className="form--input" />
                  </div>
                  <div>
                    <button className="btn btn--full btn--blue">Langganan</button>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-md-3 col-6 block-4">
              <div className="footer-link-address">
                <h3 className="footer-link-title">Lokasi Kami</h3>
                <div className="row">
                  <div className="col-md-4">
                    <div>
                      <ul>
                        <li>
                          <div>
                            <span
                              style={{
                                fontSize: "10px",
                                fontWeight: "bold",
                                textDecoration: "underline"
                              }}
                            >
                              JAKARTA
                            </span>
                            <br />
                            <span
                              style={{ fontWeight: "bold", fontSize: "10px" }}
                            >
                              Fanda’s Senopati 66
                            </span>
                            <span className="footer-sub-link">
                              <br /> Lt. 3 SCBD
                              <br />
                            </span>
                            <p
                              style={{
                                marginTop: 0,
                                marginBottom: 0,
                                lineHeight: "26px"
                              }}
                              className="footer-sub-link"
                            >
                              +62 878-2088-8321
                            </p>
                          </div>
                        </li>
                        <li className="mt--05">
                          <div>
                            <span
                              style={{
                                fontSize: "10px",
                                fontWeight: "bold"
                              }}
                            >
                              Pondok Indah
                            </span>
                            <br />
                            <span className="footer-sub-link">
                              JL. Metro Pondok Indah TB27, No. 167
                              <br />
                            </span>
                            <p
                              style={{
                                marginTop: 0,
                                marginBottom: 0,
                                lineHeight: "26px"
                              }}
                              className="footer-sub-link"
                            >
                              +62 21-2245-7333
                            </p>
                          </div>
                        </li>
                        <li className="mt--05">
                          <div>
                            <span
                              style={{
                                fontSize: "10px",
                                fontWeight: "bold"
                              }}
                            >
                              Kelapa Gading
                            </span>
                            <br />
                            <span className="footer-sub-link">
                              JL. Boulevard Barat Raya Blok XC No. 2A
                              <br />
                            </span>
                            <p
                              style={{
                                marginTop: 0,
                                marginBottom: 0,
                                lineHeight: "26px"
                              }}
                              className="footer-sub-link"
                            >
                              +62 21-2245-7333
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <ul>
                        <li>
                          <div>
                            <span
                              style={{
                                fontSize: "10px",
                                fontWeight: "bold",
                                textDecoration: "underline"
                              }}
                            >
                              TANGERANG
                            </span>
                            <br />
                            <span
                              style={{ fontWeight: "bold", fontSize: "10px" }}
                            >
                              Supermall Karawaci
                            </span>
                            <br />
                            <span className="footer-sub-link">
                              UG Floor JL. Boulevard Diponegoro 105 Karawaci
                              <br />
                            </span>
                            <p
                              style={{
                                marginTop: 0,
                                marginBottom: 0,
                                lineHeight: "26px"
                              }}
                              className="footer-sub-link"
                            >
                              +62 21-5420-0454
                            </p>
                          </div>
                        </li>
                        <li className="mt--05">
                          <div>
                            <span
                              style={{
                                fontSize: "10px",
                                fontWeight: "bold",
                                textDecoration: "underline"
                              }}
                            >
                              BOGOR
                            </span>
                            <br />
                            <span
                              style={{ fontWeight: "bold", fontSize: "10px" }}
                            >
                              Botani Square
                            </span>
                            <br />
                            <span className="footer-sub-link">
                              LG Floor JL. Raya Padjajaran No. 69-71
                              <br />
                            </span>
                            <p
                              style={{
                                marginTop: 0,
                                marginBottom: 0,
                                lineHeight: "26px"
                              }}
                              className="footer-sub-link"
                            >
                              +62 251-8400-669
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <ul>
                        <li>
                          <div>
                            <span
                              style={{
                                fontSize: "10px",
                                fontWeight: "bold",
                                textDecoration: "underline"
                              }}
                            >
                              BALI
                            </span>
                            <br />
                            <span
                              style={{ fontWeight: "bold", fontSize: "10px" }}
                            >
                              Level 21 Bali
                            </span>
                            <br />
                            <span className="footer-sub-link">
                              JL. Teuku Umar No. 1 Dauh Puri Klod Denpasar Baru
                              <br />
                            </span>
                            <p
                              style={{
                                marginTop: 0,
                                marginBottom: 0,
                                lineHeight: "26px"
                              }}
                              className="footer-sub-link"
                            >
                              +62 361-3352-195
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-download">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="fx align-items-center">
                  <div className="fx">
                    <span className="mr--1 app-store-icon">
                      <img
                        src={require("../../assets/img/Download-Android.png")}
                        alt=""
                      />
                    </span>
                    <span className="app-store-icon">
                      <img
                        src={require("../../assets/img/Download-aPPSTORE.png")}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="fx justify-content-center">
                  <div className="fx align-items-center">
                    <div className="footer-download-icon fx align-items-center">
                      <p className="mr--1 mb--0 text--size-12">
                        Metode Cicilan 0%
                      </p>
                      <img
                        style={{ width: "55%", height: 17, marginRight: 10 }}
                        src={require("../../assets/img/logo-payment.png")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="fx justify-content-end">
                  <div className="fx align-items-center">
                    <div className="footer-download-icon fx justify-content-end align-items-center">
                      <p className="mr--1 mb--0 text--size-12">Temukan Kami</p>
                      <div className="circle--social">
                        <a
                          className="footer--social-icon"
                          target="_blank"
                          href="https://www.facebook.com/HiasID"
                        >
                          <FontAwesomeIcon icon={faFacebookF} color="#fff" />
                        </a>
                      </div>
                      <div className="circle--social">
                        <a
                          className="footer--social-icon"
                          target="_blank"
                          href="https://www.instagram.com/hiashouse"
                        >
                          <FontAwesomeIcon icon={faInstagram} color="#fff" />
                        </a>
                      </div>
                      <div className="circle--social">
                        <FontAwesomeIcon icon={faYoutube} color="#fff" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="pt--1 pb--3">
                <div className="text--size-12 text--center text--color-white">
                  &copy;2019 PT Hias Ritel Indonesia
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
