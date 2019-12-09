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
                <p style={{paddingTop:0}}>Dengan adanya kebijakan privasi ini, kami, PT. Hias Ritel Indonesia menghargai dan melindungi privasi Pengguna. Kebijakan Privasi ini memberikan informasi bagi Pengguna, bagaimana kami mengumpulkan dan pengolahan data Pengguna. HIAS House tidak akan menggunakan data Pengguna tanpa persetujuan dari Pengguna.
                <br/><br/>Apabila Pengguna mengakses dan menggunakan situs HIAS House, pengguna telah menyepakati dan menyetujui kebijakan privasi ini. Kebijakan Privasi ini dapat berubah sewaktu-waktu oleh karena itu kami sarankan untuk membaca kebijakan privasi dengan seksama.</p>
                <strong><p>Kebujakan Privasi</p></strong>
                  <ol type="!">
                    <li>
                    Pengumpulan Data Pengguna
                    </li>
                    <li>
                    Penggunaan Data Pengguna
                    </li>
                    <li>
                    Pengungkapan Data Pengguna
                    </li>
                    <li>
                    Penarikan Persetujuan
                    </li>
                    <li>
                    Cookie
                    </li>
                    <li>
                    Verifikasi Pembayaran
                    </li>
                    <li>
                    enyimpanan dan Penghapusan Data Pengguna
                    </li>
                    <li>
                    Promosi Email
                    </li>
                    <li>
                    Pembaruan Kebijakan Privasi
                    </li>
                  </ol>
                  <strong><p>1. Pengumpulan Data Pengguna</p></strong>
                  <p style={{paddingTop:0}}>HIAS House mengumpulkan data Pengguna bertujuan untuk memproses transaksi Pengguna dan memperlancar proses penggunaan situs, serta tujuan-tujuan lainnya selama diizinkan. Adapun proses data Pengguna yang dikumpulkan sebagai berikut:</p>
                  <ul>
                    <li>
                    Data Pengguna yang diserahkan langsung oleh pengguna saat membuat atau memperbarui akun, termasuk diantaranya nama Pengguna, alamat email, nomor telepon, password, alamat dan foto profil Pengguna.
                    </li>
                    <li>
                    Saat Pengguna menghubungi layanan konsumen HIAS House.
                    </li>
                    <li>
                    Melakukan interaksi dengan melalui diskusi produk, ulasan, dan rating.
                    </li>
                    <li>
                    Mempergunakan layanan-layanan pada situs seperti transaksi yang detail, diantaranya jenis, jumlah dan
                    alamat pengiriman, kanal pembayaran yang digunakan, jumlah transaksi, tanggal dan waktu transaksi,
                    serta detail transaksi lainnya.

                    </li>
                    <li>
                    Mengisi data-data pembayaran pada saat Pengguna melakukan aktivitas transaksi pembayaran melalui
                    situs, termasuk data rekening bank, kartu kredit, virtual account, instant payment dan internet banking.
                    </li>
                    <li>
                    Data lokasi riil atau pekerjaannya seperti alamat IP, lokasi Wifi, geolocation, dan sebagainya.
                    </li>
                    <li>
                    Data Pengguna yang diserahkan langsung oleh Pengguna saat membuat atau memperbarui akun,
                    termasuk diantaranya nama Pengguna, alamat email, nomor telepon, password, alamat dan foto profil Pengguna.
                    </li>
                  </ul>
                  <strong><p>3. Pengungkapan Data Pengguna</p></strong>
                  <p style={{paddingTop:0}}>
                  HIAS House menjamin tidak adanya penjualan, pengalihan dan peminjaman data konsumen pada pihak ketiga tanpa seizin pengguna, kecuali:</p>
                  <ul>
                    <li>
                    Adanya kebutuhan untuk pengungkapan data konsumen kepada mitra atau pihak ketiga lain yang membantu HIAS House dalam menyajikan layanan dan memproses segala aktivitas Pengguna dalam Situs, termasuk proses transaksi, verifikasi pembayaran, pengiriman produk, dan lain-lain.
                    </li>
                    <li>
                    Adanya kebutuhan komunikasi antara mitra usaha HIAS House (seperti penyedia logistik, pembayaran, dan lain-lain) dengan konsumen dalam hal penyelesaian kendala maupun hal-hal lainnya.
                    </li>
                  </ul>
                  <strong><p>4. Penarikan Persetujuan</p></strong>
                  <p style={{paddingTop:0}}>
                  Apabila Anda mengalami keberatan terhadap pengumpulan data, penggunaan data dan pengungkapan data pengguna yang telah HIAS House jabarkan sebelumnya, maka Anda dapat menarik persetujuan Anda, dengan menghubungi Kami melalui detail kontak Kami yang tertera pada website. Perlu Kami ingatkan, apabila Anda menarik persetujuan terhadap pengumpulan data, penggunaan data dan pengungkapan data Pengguna, maka kami mungkin tidak dapat kembali memberikan layanan kami kepada Anda. kami tidak akan bertanggung jawab kepada Anda atas setiap kerugian atau kerusakan yang timbul dari atau terkait penghentian layanan tersebut.
                  </p>
                  <strong><p>5. Cookie</p></strong>
                  <p style={{paddingTop:0}}>
                  Cookie merupakan perangkat yang ada di dalam browser Anda untuk merekam dan menyimpan kegiatan Anda sebelumnya pada website yang anda kunjungi. Dengan adanya cookie, situs kami akan lebih mudah untuk mendeteksi peminatan Anda yang dapat membantu kami dalam menyesuaikan konten agar sesuai dengan minat yang Anda sukai. Walaupun secara otomatis perangkat komputer Pengguna akan menerima cookie, Pengguna dapat menentukan pilihan untuk melakukan modifikasi melalui pengaturan browser Pengguna yaitu dengan memilih untuk menolak cookie (pilihan ini dapat membatasi layanan optimal pada saat melakukan akses ke situs).
                  </p>
                  <strong><p>6. Verifikasi Pembayaran</p></strong>
                  <p style={{paddingTop:0}}>
                  HIAS House memuat beberapa aktivitas tertentu ke situs web lain seperti gerbang pembayaran (Payment Gateway) untuk yang menggunakan kartu kredit. HIAS House menggunakan Sprint sebagai pihak ketiga yang akan membantu memverifikasi kartu kredit untuk kenyamanan dan kemudahan Anda. Sprint hanya akan memverifikasikan kartu kredit kepada bank Anda. Harap diketahui bahwa kami tidak bertanggung jawab atas praktik privasi situs web lain tersebut dan menyarankan Anda untuk membaca pernyataan privasi dari masing- masing situs web yang Anda kunjungi yang mengumpulkan informasi pribadi.
                  </p>
                  <strong><p>7. Penyimpanan dan Penghapusan Data Pengguna</p></strong>
                  <p style={{paddingTop:0}}>
                  HIAS House akan menyimpan dan melindungi informasi kepemilikan data Pengguna selama Pengguna mempunyai akun yang tetap aktif. HIAS House berhak untuk menghapus data kepemilikan pengguna sesegera mungkin setelah diasumsikan bahwa penyimpanan tersebut tidak lagi memenuhi tujuan pengumpulan data pribadi, dan tidak diperlukan lagi untuk tujuan bisnis apa pun.
                  </p>
                  <strong><p>8. Promosi Email</p></strong>
                  <p style={{paddingTop:0}}>
                  Kami menggunakan e-mail untuk mengabarkan informasi dan penawaran khusus kepada Pelanggan HIAS House.
                  <br/><br/>Jika Anda memilih untuk tidak menerima email dari kami, Anda bisa mengklik tautan "unsubscribe" pada e-mail yang Anda terima dan Anda akan otomatis tidak diikutsertakan dari milis kami.
                  </p>
                  <strong><p>9. Pembaruan Kebijakan Privasi</p></strong>
                  <p style={{paddingTop:0}}>
                  HIAS House mempunyai hak untuk melakukan perubahan atau pembaruan terhadap kebijakan privasi ini. Pengguna diharapkan untuk membaca dan memeriksa halaman kebijakan privasi untuk melihat dan mengetahui perubahan apapun. Dengan menggunakan situs atau layanan yang kami sediakan, Anda setuju dengan pengumpulan, penggunaan, penyingkapan dan pengolahan data pribadi Anda sebagaimana diatur dalam Kebijakan Privasi ini.
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

export default Privacy;
