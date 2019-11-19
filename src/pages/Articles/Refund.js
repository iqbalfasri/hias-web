import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

import InputText from '../../components/form/InputText'

import "./Articles.scss";

class Refund extends Component {
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
            <h1>Kebijakan Pengembalian</h1>
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
                        <h3 >Kebijakan Pengiriman</h3>
                      </Link>
                    </li>
                    <li>
                      <Link to="/refund">
                        <h3 style={{ color: "#000" }}>Kebijakan Pengembalian</h3>
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
                  <ul>
                    <li>Mengisi complaint form.</li>
                    <li>Permintaan pengajuan pengembalian produk dilakukan maksimal 14 hari kerja setelah barang
diterima.</li>
                    <li>Permintaan pengajuan pengembalian produk dilakukan maksimal 14 hari kerja setelah barang
diterima.</li>
                    <li>Produk non furniture yang dapat ditukar harus dalam kemasan asli.</li>
                    <li>Apabila barang telah diverifikasi dan sudah dinyatakan dapat di kembalikan, dana akan
dikembalikan maksimal 30 hari setelah diverifikasi.</li>
                  </ul>
                  <div className="row" style={{paddingLeft:40}}>
                    <div className="col-md-4">
                      <div className="form--group">
                        <label htmlFor="">Nama Lengkap</label>
                        <InputText type="text" placeholder="Nama Lengkap" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form--group">
                        <label htmlFor="">Nomor Telepon</label>
                        <InputText type="text" placeholder="Nomor Telepon" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form--group">
                        <label htmlFor="">Tempat Pembelian</label>
                        <InputText type="text" placeholder="Tempat Pembelian" />
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{paddingLeft:40}}>
                    <div className="col-md-4">
                      <div className="form--group">
                        <label htmlFor="">No. Pembelian</label>
                        <InputText type="text" placeholder="No. Pembelian" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="form--group">
                        <label htmlFor="">Alamat Email</label>
                        <InputText type="text" placeholder="Alamat Email" />
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{paddingLeft:40}}>
                    <div className="col">
                      <div className="form--group">
                        <label htmlFor="">Alasan Mengajukan Complaint</label>
                        <textarea className="text--area" type="text" placeholder="Tuliskan Alasan"/>
                      </div>
                    </div>
                  </div>
                  <div style={{paddingLeft:40}}>
                    <button className="btn btn--full btn--blue" style={{maxWidth:"100%"}}>Submit</button>
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

export default Refund;
