import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import './Footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container footer-link-container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-link">
                <div className="footer-logo">
                  <Link to="/">
                    <img src={require('../../assets/img/MASTER_LOGO_HIAS_HOUSE_HORIZONTAL.png')} alt=""/>
                  </Link>
                </div>
                <ul>
                  <li><Link to="/">Tentang Kami</Link></li>
                  <li><Link to="/">Inspiration & Ideas</Link></li>
                  <li><Link to="/">Katalog</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-link">
                <h3 className="footer-link-title">Kontak Kami</h3>
                <ul>
                  <li><Link to="/about">Whatsapp<br/><span className="footer-sub-link">+62 0859 7893 2728</span></Link></li>
                  <li><Link to="/">Telephone<br/><span className="footer-sub-link">(021) 8923 777</span></Link></li>
                  <li><Link to="/">Email<br/><span className="footer-sub-link">halo@hias.com</span></Link></li>
                  <li><Link to="/">Hari & Jam Kerja<br/><span className="footer-sub-link">Senin - Minggu / 10:00 - 18:00</span></Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-link">
                <h3 className="footer-link-title">Layanan Pelanggan</h3>
                <ul>
                  <li><Link to="/">Hubungi Kami</Link></li>
                  <li><Link to="/">FAQ</Link></li>
                  <li><Link to="/">Kebijakan & Privasi</Link></li>
                  <li><Link to="/">Syarat & Ketentuan</Link></li>
                  <li><Link to="/">Kebijakan Pengiriman</Link></li>
                  <li><Link to="/">Kebijakan Pengembalian</Link></li>
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
            <div className="col-md-3">
              <div className="footer-link">
                <h3 className="footer-link-title">Subscribe Newsletter</h3>
                <div>
                  <div className="form--group">
                    <input type="text" placeholder="Your email address" className="form--input" />
                  </div>
                  <div>
                    <button className="btn btn--full btn--blue">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-download">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="fx align-items-center">
                  <div className="mr--1">
                    <p className="mb--0 text--color-gray text--size-14">DOWNLOAD HIAS HOUSE APP</p>
                  </div>
                  <div className="fx">
                    <span className="mr--1 app-store-icon"><img src={require('../../assets/img/Download-Android.png')} alt=""/></span>
                    <span className="app-store-icon"><img src={require('../../assets/img/Download-aPPSTORE.png')} alt=""/></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-download-icon fx justify-content-end">
                  <div><FontAwesomeIcon icon={faFacebookF} color="#fff" /></div>
                  <div><FontAwesomeIcon icon={faTwitter} color="#fff" /></div>
                  <div><FontAwesomeIcon icon={faInstagram} color="#fff" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="pt--1 pb--1">
                <div className="text--size-12 text--center text--color-gray">&copy;2019 PT Hias House Indonesia . Terms and Conditions . Privacy</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer