import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container footer-link-container">
          <div className="row">
            <div className="col-md-3" style={{ maxWidth: "20%" }}>
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
                  <li>
                    <Link to="/about">Tentang Kami</Link>
                  </li>
                  <li>
                    <Link to="/inspiration">Inspiration & Ideas</Link>
                  </li>
                  <li>
                    <Link to="/catalog">Katalog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3" style={{ maxWidth: "20%" }}>
              <div className="footer-link">
                <h3 className="footer-link-title">Kontak Kami</h3>
                <ul>
                  <li>
                    <Link to="/about">
                      Whatsapp
                      <br />
                      <span className="footer-sub-link">+62 811-1088-488</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Email
                      <br />
                      <span className="footer-sub-link">
                        marketing@hias.co.id
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Layanan Konsumen
                      <br />
                      <span className="footer-sub-link">
                        Senin - Minggu / 09:00 - 18:00 WIB Termasuk hari libur
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Jam Operasional Outlet
                      <br />
                      <span className="footer-sub-link">
                        Senin - Minggu / 10:00 - 22:00 WIB
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3" style={{ maxWidth: "20%" }}>
              <div className="footer-link">
                <h3 className="footer-link-title">Layanan Pelanggan</h3>
                <ul>
                  <li>
                    <Link to="/contact">Hubungi Kami</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Kebijakan & Privasi</Link>
                  </li>
                  <li>
                    <Link to="/terms">Syarat & Ketentuan</Link>
                  </li>
                  <li>
                    <Link to="/deliveryterms">Kebijakan Pengiriman</Link>
                  </li>
                  <li>
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
            <div className="col-md-3" style={{ minWidth: "40%" }}>
              <div className="footer-link-address">
                <h3 className="footer-link-title">Lokasi Kami</h3>
                <div className="row">
                  <div className="col-md-4">
                    <div>
                      <ul>
                        <li>
                          <Link to="/">
                            <span style={{ fontWeight: "normal" }}>
                              JAKARTA
                            </span>
                            <br />
                            <span style={{ fontWeight: "bold" }}>
                              Fanda’s Senopati 66
                            </span>
                            <span className="footer-sub-link">
                              <br /> Lt. 3 SCBD
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span style={{ fontWeight: "bold" }}>
                              Pondok Indah
                            </span>
                            <br />
                            <span className="footer-sub-link">
                              JL. Metro Pondok Indah TB27, No. 167
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span style={{ fontWeight: "bold" }}>
                              Kelapa Gading
                            </span>
                            <br />
                            <span className="footer-sub-link">
                              JL. Boulevard Barat Raya Blok XC No. 2A
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <ul>
                        <li>
                          <Link to="/">
                            <span style={{ fontWeight: "normal" }}>
                              TANGERANG
                            </span>
                            <br />
                            <span style={{ fontWeight: "bold" }}>
                              Supermall Karawaci
                            </span>
                            <br />
                            <span className="footer-sub-link">
                              UG Floor JL. Boulevard Diponegoro 105 Karawaci
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span style={{ fontWeight: "normal" }}>BOGOR</span>
                            <br />
                            <span style={{ fontWeight: "bold" }}>
                              Botani Square
                            </span>
                            <br />
                            <span className="footer-sub-link">
                              LG Floor JL. Raya Padjajaran No. 69-71
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <ul>
                        <li>
                          <Link to="/">
                            <span style={{ fontWeight: "normal" }}>BALI</span>
                            <br />
                            <span style={{ fontWeight: "bold" }}>
                              Level 21 Bali
                            </span>
                            <br />
                            <span className="footer-sub-link">
                              JL. Teuku Umar No. 1 Dauh Puri Klod Denpasar Baru
                            </span>
                          </Link>
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
              <div className="col-md-4">
                <div className="fx justify-content-center">
                  <div className="fx align-items-center">
                    <div className="footer-download-icon fx">
                      <p className="mr--1 mb--0 text--size-12">
                        Metode Cicilan 0%
                      </p>
                      <img
                        style={{ width: 47.2, height: 15, marginRight: 10 }}
                        src={require("../../assets/img/bca.png")}
                        alt=""
                      />
                      <img
                        style={{ width: 50, height: 15, marginRight: 10 }}
                        src={require("../../assets/img/cimb.png")}
                        alt=""
                      />
                      <img
                        style={{ width: 30, height: 15, marginRight: 10 }}
                        src={require("../../assets/img/mastercard.svg")}
                        alt=""
                      />
                      <img
                        style={{ width: 30, height: 15 }}
                        src={require("../../assets/img/visa.png")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fx justify-content-end">
                  <div className="fx align-items-center">
                    <div className="footer-download-icon fx justify-content-end align-items-center">
                      <p className="mr--1 mb--0 text--size-12">Temukan Kami</p>
                      <div>
                        <a
                          target="_blank"
                          href="https://www.facebook.com/HiasID"
                        >
                          <FontAwesomeIcon icon={faFacebookF} color="#fff" />
                        </a>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          href="https://www.instagram.com/hiashouse"
                        >
                          <FontAwesomeIcon icon={faInstagram} color="#fff" />
                        </a>
                      </div>
                      <div>
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
              <div className="pt--1 pb--1">
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
