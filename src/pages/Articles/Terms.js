import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

import "./Articles.scss";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faStripe, faStripeS, faDashcube } from "@fortawesome/free-brands-svg-icons";

class Terms extends Component {
  render() {
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>Syarat & Ketentuan</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>

        <div>
          <div className="about-header">
            <h1>Syarat & Ketentuan</h1>
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
                        <h3 style={{ color: "#000" }}>Syarat &amp; Ketentuan</h3>
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
                  <ol type="1">
                    <li>Kredit toko</li>
                    <li>Pengembalian , penukaran dan jaminan</li>
                    <li>Ketetapan foto produk</li>
                    <li>Tanggung jawab</li>
                    <li>Proses pembayaran</li>
                    <li>Hak kekayaan intelektual</li>
                    <li>Tautan ke website</li>
                    <li>Privasi dan keamanan</li>
                    <li>Pengakhiran akun</li>
                    <li>Hak cipta</li>
                    <li>Saran dan pertanyaan</li>
                  </ol>
                  <p style={{paddingTop:0}}><strong>Selamat datang di HIASHouse.com!</strong><br/><br/>
                  Terima kasih telah mengunjungi website Kami. Silahkan untuk membaca syarat dan ketentuan ini dengan seksama. Dengan Anda menggunakan dan berbelanja website Kami, bahwa pengguna dianggap telah mengerti dan memahami mengenai syarat dan ketentuan yang telah ditentukan. Jika Pengguna tidak menyetujui sebagian dan/ seluruh dari isi syarat dan ketentuan yang telah ditentukan, maka Pengguna harap berhenti mengakses dan menggunakan HIASHouse.com</p>
                  <strong><p style={{paddingTop:0}}>1. Definisi</p></strong>
                  <ol type="1">
                    <li>
                    Syarat dan ketentuan ini merupakan suatu perjanjian yang mengatur hak, kewajiban dan tanggung jawab pengguna dan HIAS House.
                    </li>
                    <li>
                    Pengguna adalah pihak yang menggunakan layanan dari HIAS House.
                    </li>
                    <li>
                    Pembeli adalah Pengguna aktif yang melakukan transaksi pembayaran di situs HIASHouse.com
                    </li>
                    <li>
                    Data pribadi merupakan data pengguna yang sudah didaftarkan untuk dapat melakukan pemesanan di
                    HIASHouse.com
                    </li>
                    <li>
                    Akun terdiri dari data pribadi dari pengguna, yang berisikan email, nomor telepon, alamat serta lainnya.
                    </li>
                    <li>
                    Kebijakan privasi berguna untuk memberitahukan dan menjabarkan hak dan kewajiban dari pengguna.
                    </li>
                    <li>
                    Tarif adalah sejumlah harga yang harus dibayarkan oleh pembeli.
                    </li>
                    <li>
                    Konfirmasi adalah pada saat pembeli melakukan pembelian maka HIAS House akan melakukan verifikasi
                    atau pengecekan terhadap pembayaran Anda.
                    </li>
                  </ol>
                  <strong><p style={{paddingTop:0}}>2. Syarat dan Ketentuan Promosi</p></strong>
                  <ol type="1">
                    <li>
                    Promo yang dibuat oleh HIAS house yang diharuskan menyertakan voucher diskon, Pengguna hanya dapat menggunakannya satu kali dan tidak dapat digabungkan dengan voucher atau promo yang lainnya. Voucher diskon yang menyertakan potongan harga tidak dapat ditukarkan dengan uang tunai.
                    </li>
                    <li>
                    Setiap promo yang berlaku, hanya berlaku dalam satu transaksi dengan nama Pengguna yang sama dan dengan alamat pengiriman tujuan yang sama tidak dapat dipisah menjadi lebih dari satu transaksi.
                    </li>
                    <li>
                    Melakukan pembatalan transaksi merupakan hak dari HIAS House jika terbukti voucher tidak valid atau tidak sesuai dengan syarat dan ketentuan yang telah ditetapkan.
                    </li>
                    <li>
                    Peraturan yang telah dibuat ini dapat berubah sewaktu-waktu tanpa pemberitahuan dari HIAS House sebelumnya. Pengguna diharapkan untuk melihat syarat dan ketentuan yang berlaku.
                    </li>
                  </ol>
                  <strong><p style={{paddingTop:0}}>3. Rincian Harga dan Ketentuan Pajak</p></strong>
                  <p style={{paddingTop:0}}>
                  Harga yang tertera pada situs adalah dalam mata uang Indonesia yaitu Indonesia Rupiah. Harga yang tertera pada situs HIASHouse.com sudah termasuk harga pajak, Anda tidak akan dikenakan biaya tambahan untuk pajak.
                  </p>
                  <strong><p style={{paddingTop:0}}>4. Pengiriman Barang</p></strong>
                  <ol type="1">
                    <li>
                    Pengiriman barang yang terdapat di HIASHouse.com wajib menggunakan jasa perusahaan ekspedisi yang telah mendapatkan verifikasi rekanan dari HIAS House.
                    </li>
                    <li>
                    Kebijakan yang terdapat dalam proses pengiriman barang melalui kurir yang bukan dari HIAS House kurir sepenuhnya bukan diatur oleh HIAS House melainkan sepenuhnya wewenang dari penyedia jasa layanan pengiriman tersebut.
                    </li>
                    <li>
                    Permasalahan yang terjadi pada setiap proses pengiriman barang oleh penyedia jasa layanan pengiriman barang adalah tanggung jawab penyedia jasa layanan pengiriman tersebut.
                    </li>
                  </ol>
                  <strong><p style={{paddingTop:0}}>5. Tarif Pengiriman</p></strong>
                  <ol type="1">
                    <li>
                    HIAS House memberikan fasilitas pengiriman secara gratis kepada pembeli yang melakukan pembelanjaan dengan minimal pembelanjaan 5 juta rupiah untuk furnitur dan 2 juta rupiah untuk non furniture. Pembebasan biaya pengiriman hanya berlaku untuk pengiriman di area Jabodetabek.
                    </li>
                    <li>
                    Apabila pembeli melakukan pembelanjaan kurang dari 5 juta rupiah untuk furnitur dan pembelanjaan kurang 2 juta rupiah untuk non furnitur, maka Pembeli dikenakan tarif untuk pengiriman sesuai dengan ketentuan dari rekanan kurir yang dipilih oleh Pembeli.
                    </li>
                    <li>
                    Produk furnitur semua akan dikirim dari warehouse HIAS House.
                    </li>
                    <li>
                    Produk non furnitur semua akan dikirim dari store HIAS House Kelapa Gading.
                    </li>
                  </ol>
                  <strong><p style={{paddingTop:0}}>6. Proses Pembayaran</p></strong>
                  <ol type="1">
                    <li>
                    Pengguna dapat memilih proses pembayaran melalui kartu debit, kartu kredit, bank transfer dan ipaymu.
                    </li>
                    <li>
                    Pengguna yang melakukan pembayaran melalui kartu debit atau kartu kredit wajib untuk menggunakan
                    kartu debit atau kartu kredit milik pribadi. HIAS House tidak bertanggung jawab apabila terjadi penipuan.
                    </li>
                    <li>
                    HIAS House akan melindungi informasi pada kartu debit dan kartu kredit Anda. Hias House tidak akan
                    mengakses seluruh informasi dari kartu debit dan kartu kredit Anda.
                    </li>
                    <li>
                    Pembeli wajib untuk segera melakukan pembayaran maksimal 24 jam setelah Pembeli melakukan check
                    out. HIAS House berhak untuk melakukan pembatalan pemesanan apabila Pembeli tidak melakukan
                    pembayaran pada waktu yang telah disediakan.
                    </li>
                    <li>
                    Pembeli wajib untuk melakukan pembayaran dengan nominal yang sesuai dengan jumlah tagihan beserta
                    dengan kode unik yang tertera (apabila ada) pada halaman pembayaran pada situs Kami. Apabila Pembeli melakukan kesalahan pada pembayaran yang tidak sesuai, maka HIAS House tidak bertanggung jawab atas kerugian yang dapat Pembeli alami.
                    </li>
                    <li>
                    Apabila Anda sudah melakukan pembayaran, maka HIAS House akan mengkonfirmasi pembayaran Anda melalui email yang telah Anda daftarkan.
                    </li>
                  </ol>
                  <strong><p style={{paddingTop:0}}>7. Cicilan 0%</p></strong>
                  <ol type="1">
                    <li>
                    Pembayaran cicilan 0% hanya dilakukan melalui pembayaran melakukan kartu kredit dan home credit.
                    </li>
                    <li>
                    Pembayaran cicilan 0% berlaku untuk bank yang tertera dibawah ini dengan jangka waktu yang tertera
                    sebagai berikut:
                    </li>
                  </ol>
                  <div className="row">
                    <div className="col-md-6 bank-list">
                      <strong><p style={{paddingTop:0}}>Bank</p></strong>
                      <ul>
                        <li>
                          <img
                            src={require("../../assets/img/bca.png")}
                            alt=""
                            style={{width:90}}
                          />
                        </li>
                        <li>
                          <img
                            src={require("../../assets/img/mandiri.png")}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require("../../assets/img/bni.png")}
                            alt=""
                            style={{width:90}}
                          />
                        </li>
                        <li>
                          <img
                            src={require("../../assets/img/bri.png")}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require("../../assets/img/ocbc.png")}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require("../../assets/img/panin.png")}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require("../../assets/img/permata.png")}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require("../../assets/img/home-credit-logo.png")}
                            alt=""
                            style={{width:90}}
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-2 bank-list">
                      <strong><p style={{paddingTop:0}}>3X</p></strong>
                      <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faTimes}
                          color="#ff0000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-2 bank-list">
                      <strong><p style={{paddingTop:0}}>6X</p></strong>
                      <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-2 bank-list">
                      <strong><p style={{paddingTop:0}}>12X</p></strong>
                      <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faTimes}
                          color="#ff0000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faTimes}
                          color="#ff0000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faTimes}
                          color="#ff0000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faCheck}
                          color="#000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                        <li>
                        <FontAwesomeIcon
                          icon={faTimes}
                          color="#ff0000"
                          style={{ marginLeft: 20 }}
                        />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <strong><p style={{paddingTop:0}}>8. Pengembalian Barang</p></strong>
                  <ol type="1">
                    <li>
                    Pembeli hanya dapat mengembalikan barang yang rusak karena cacat produksi, bukan rusak karena pemakaian.
                    </li>
                    <li>
                    Pembeli diwajibkan untuk mengisi complaint form terlebih dahulu untuk dapat mengembalikan barang.
                    </li>
                    <li>
                    Permintaan pengajuan pengembalian produk wajib dilakukan maksimal 7 hari kerja setelah barang diterima
                    oleh Pembeli.
                    </li>
                    <li>
                    Produk furnitur dan non furnitur yang dapat ditukar harus dalam kondisi yang orisinil dan prima. Sebelum
                    dilakukan penukaran barang, barang dilakukan verifikasi oleh team HIAS House sebelum barang
                    dinyatakan dapat dikembalikan.
                    </li>
                    <li>
                    Apabila sudah mendapatkan verifikasi pengembalian barang, maka Pembeli hanya dapat menukar dengan
                    barang yang sama.
                    </li>
                    <li>
                    Apabila produk dengan barang yang sama habis atau tidak ada, maka Pembeli dapat menukarkannya
                    dengan barang lain atau produk dengan harga yang sama, atau dengan barang yang lebih mahal namun
                    Pembeli wajib membayarkan selisih harga.
                    </li>
                    <li>
                    Apabila Pembeli menukar dengan produk dengan harga yang lebih murah, maka HIAS House tidak dapat
                    mengembalikan selisih dari harga barang tersebut.
                    </li>
                  </ol>
                  <strong><p style={{paddingTop:0}}>9. Ketepatan Foto Produk</p></strong>
                  <p style={{paddingTop:0}}>
                  HIAS House mengupayakan foto atau gambar yang terdapat pada situs HIASHouse.com dapat mempresentasikan warna yang akurat dari produk tersebut. Namun dapat terjadi kemungkinan yang dapat terjadi yang membuat warna dapat berbeda dengan yang asli seperti lighting atau warna kayu yang tidak memungkinan warna tidak bisa 100% akurat.
                  </p>
                  <strong><p style={{paddingTop:0}}>10. Perlindungan Data Pribadi</p></strong>
                  <p style={{paddingTop:0}}>
                  Pengguna dapat melihat pada <a href="/privacy">Kebijakan Privasi</a> yang juga berlaku pada syarat dan ketentuan ini.
                  </p>
                  <strong><p style={{paddingTop:0}}>11. Hak Kekayaan Intelektual</p></strong>
                  <p style={{paddingTop:0}}>
                  Semua konten yang berada di HIASHouse.com seperti teks, grafik, logo, tombol ikon, gambar dan digital download milik HIAS House dilindungi oleh hukum hak cipta dan perjanjian. Anda tidak diperbolehkan menggunakan teks, grafik, logo, tombol ikon, gambar dan digital download tanpa persetujuan tertulis dari HIAS House.
                  <br/><br/>Jika Anda menampilkan, menyalin, menggunakan dan mengunduh sebagian dan/ seluruh bagian dari situs Kami, Anda telah melanggar syarat dan ketentuan yang berlaku, oleh karena itu hak Anda untuk dapat menggunakan situs Kami akan Kami hentikan.
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

export default Terms;
