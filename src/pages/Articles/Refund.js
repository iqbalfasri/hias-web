import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import axios from 'axios';

import InputText from '../../components/form/InputText'

import "./Articles.scss";

class Refund extends Component {
  state = {
    nama: "",
    noTelp: "",
    tempatPembelian: "",
    noPembelian: "",
    email: "",
    alasanPengembalian: "",
    isLoading: false,
    isSentSuccess: ""
  }

  onChangeNama = (e) => {
    this.setState({ nama: e.target.value })
  }
  onChangeNoTelp = (e) => {
    this.setState({ noTelp: e.target.value })
  }
  onChangeTempatPembelian = (e) => {
    this.setState({ tempatPembelian: e.target.value })
  }
  onChangeNoPembelian = (e) => {
    this.setState({ noPembelian: e.target.value })
  }
  onChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }
  onChangeAlasan = (e) => {
    this.setState({ alasanPengembalian: e.target.value })
  }

  sendMessage = () => {
    const { nama, noTelp, tempatPembelian, noPembelian, email, alasanPengembalian } = this.state;
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const value = {
      fullName: nama,
      phone: noTelp,
      place: tempatPembelian,
      noOrder: noPembelian,
      email: email,
      reason: alasanPengembalian
    }
    //
    this.setState({ isLoading: true })
    axios
      .post(`${BASE_URL}/product/addRefund`, value, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then((res) => {
        this.setState({ isSentSuccess: "yes" })
      })
      .catch(() => {
        this.setState({ isSentSuccess: "no" })
      })
      .finally(() => {
        this.setState({ isLoading: false })
      })
  }


  render() {
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>Kebijakan Pengembalian</title>
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
                    <li>Permintaan pengajuan pengembalian produk dilakukan maksimal 14 hari kerja setelah barang diterima.</li>
                    <li>Permintaan pengajuan pengembalian produk dilakukan maksimal 14 hari kerja setelah barang diterima.</li>
                    <li>Produk non furniture yang dapat ditukar harus dalam kemasan asli.</li>
                    <li>Apabila barang telah diverifikasi dan sudah dinyatakan dapat di kembalikan, dana akan dikembalikan maksimal 30 hari setelah diverifikasi.</li>
                  </ul>
                  <div className="row" style={{ paddingLeft: 40 }}>
                    <div className="col-md-4">
                      <div className="form--group">
                        <label htmlFor="">Nama Lengkap</label>
                        <InputText type="text" placeholder="Nama Lengkap" value={this.state.nama} onChange={this.onChangeNama} />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form--group">
                        <label htmlFor="">Nomor Telepon</label>
                        <InputText type="text" placeholder="Nomor Telepon" value={this.state.noTelp} onChange={this.onChangeNoTelp} />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form--group">
                        <label htmlFor="">Tempat Pembelian</label>
                        <InputText type="text" placeholder="Tempat Pembelian" value={this.state.tempatPembelian} onChange={this.onChangeTempatPembelian} />
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{ paddingLeft: 40 }}>
                    <div className="col-md-4">
                      <div className="form--group">
                        <label htmlFor="">No. Pembelian</label>
                        <InputText type="text" placeholder="No. Pembelian" value={this.state.noPembelian} onChange={this.onChangeNoPembelian} />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="form--group">
                        <label htmlFor="">Alamat Email</label>
                        <InputText type="text" placeholder="Alamat Email" value={this.state.email} onChange={this.onChangeEmail} />
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{ paddingLeft: 40 }}>
                    <div className="col">
                      <div className="form--group">
                        <label htmlFor="">Alasan Mengajukan Pengembalian</label>
                        <textarea className="text--area" type="text" placeholder="Tuliskan Alasan" value={this.state.alasanPengembalian} onChange={this.onChangeAlasan} />
                      </div>
                    </div>
                  </div>
                  <div style={{ paddingLeft: 40 }}>
                    <button
                      onClick={this.sendMessage}
                      className="btn btn--full btn--blue"
                      style={{ maxWidth: "100%" }}>{this.state.isLoading ? "Mengirim..." : "Submit"}</button>
                  </div>

                  {this.state.isSentSuccess === "yes" &&
                    <div className="col">
                      <p />
                      <p>Form pengembalianmu berhasil dikirim. Silakan tunggu email balasan dari kami</p>
                    </div>}
                  {this.state.isSentSuccess === "no" &&
                    <div className="col">
                      <p />
                      <p>Form pengembalianmu gagal dikirim. Kamu harus login dulu </p>
                    </div>}
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
