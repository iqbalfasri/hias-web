import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

import "./Articles.scss";

class Privacy extends Component {
  render() {
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>Kebijakan & Privasi</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>

        <div>
          <div className="about-header">
            <h1>Kebijakan & Privasi</h1>
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
                        <h3 style={{ color: "#000" }}>Kebijakan &amp; Privasi</h3>
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
                  <strong><p>Pengumpulan data pengguna</p></strong>
                  <ul>
                    <li>
                    Data pengguna yang diserahkan langsung oleh pengguna saat membuat atau memperbarui akun, termasuk diantaranya nama pengguna, alamat email, nomor telepon, password, alamat dan foto profil pengguna.
                    </li>
                    <li>
                    Menghubungi layanan konsumen Hias House.
                    </li>
                    <li>
                    Melakukan interaksi dengan melalui diskusi produk, ulasan, dan rating.
                    </li>
                    <li>
                    Mempergunakan layanan-layanan pada Situs seperti transaksi yang detail, diantaranya jenis,
                  jumlah dan alamat pengiriman, kanal pembayaran yang digunakan, jumlah transaksi, tanggal
                  dan waktu transaksi, serta detail transaksi lainnya.
                    </li>
                    <li>
                    Mengisi data-data pembayaran pada saat pengguna melakukan aktivitas transaksi
                  pembayaran melalui Situs, termasuk data rekening bank, kartu kredit, virtual account, instant payment dan internet banking.
                    </li>
                    <li>
                    Data lokasi riil atau pekerjaannya seperti alamat IP, lokasi Wi-Fi, geo-location, dan sebagainya Data berupa waktu dari setiap aktivitas Pengguna, termasuk aktivitas pendaftaran, login, transaksi, dan lainnya.
                    </li>
                    <li>
                    Data pengguna yang diserahkan langsung oleh pengguna saat membuat atau memperbarui akun, termasuk diantaranya nama pengguna, alamat email, nomor telepon, password, alamat dan foto profil pengguna.
                    </li>
                    <li>
                    Data penggunaan atau preferensi Pengguna, diantaranya interaksi Pengguna dalam menggunakan Situs, pilihan yang disimpan, serta pengaturan yang dipilih. Data tersebut diperoleh menggunakan cookies, pixel tags, dan teknologi serupa yang menciptakan dan mempertahankan pengenal unik
                    </li>
                    <li>
                    Data catatan (log), diantaranya catatan pada server yang menerima data seperti alamat IP perangkat, tanggal dan waktu akses, fitur aplikasi atau laman yang dilihat, proses kerja aplikasi dan aktivitas sistem lainnya, jenis peramban, dan/atau situs atau layanan pihak ketiga yang<br/>
                  Anda gunakan sebelum berinteraksi dengan Situs.
                    </li>
                  </ul>
                  <strong><p>Penggunaan data</p></strong>
                  <ul>
                    <li>
                    Memproses segala bentuk permintaan, aktivitas maupun transaksi yang dilakukan oleh
Pengguna melalui Situs, termasuk untuk keperluan pengiriman produk kepada Pengguna.
                    </li>
                    <li>
                    Membantu Pengguna pada saat berkomunikasi dengan layanan konsumen hias house untuk mengatasi permasalahan konsumen, mengarahkan pertanyaan petugas layanan konsumen agar tepat untuk mengatasi permasalahan dan mengawasi tanggapan layanan konsumen Hias
House.
                    </li>
                    <li>
                    Menghubungi Pengguna melalui email atau telepon untuk membantu atau menyelesaikan
proses transaksi maupun proses penyelesaian masalah.
                    </li>
                    <li>
                    Melakukan monitoring terhadap transaksi-transaksi yang mencurigakan atau transaksi yang
terindikasi mengandung unsur kecurangan atau pelanggaran terhadap Syarat dan Ketentuan atau ketentuan hukum yang berlaku, serta melakukan tindakan-tindakan yang diperlukan sebagai tindak lanjut dari hasil monitoring transaksi tersebut.
                    </li>
                  </ul>
                  <strong><p>Pengungkapan Data Pribadi</p></strong>
                  <p>Hias House menjamin tidak adanya penjualan, pengalihan dan peminjaman data konsumen pada pihak ketiga tanpa seizin pengguna, kecuali:</p>
                  <ul>
                    <li>
                    Dibutuhkan adanya pengungkapan data konsumen kepada mitra atau pihak ketiga lain yang membantu Hias House dalam menyajikan layanan pada Situs dan memproses segala bentuk aktivitas konsumen dalam Situs, termasuk memproses transaksi, verifikasi pembayaran, pengiriman produk, dan lain-lain.
                    </li>
                    <li>
                    Dibutuhkan adanya komunikasi antara mitra usaha Hias House (seperti penyedia logistik, pembayaran, dan lain-lain) dengan konsumen dalam hal penyelesaian kendala maupun hal-hal lainnya.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Privacy;
