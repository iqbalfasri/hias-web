import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

import "./Articles.scss";

class FAQ extends Component {
	componentDidMount() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }
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
            <h1>FAQ</h1>
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
                        <h3 style={{ color: "#000" }}>FAQ</h3>
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
									<button class="accordion">Apakah Hias House itu?</button>
									<div class="panel">
										<p>
										Hias House menyediakan berbagai pilihan furniture, dekorasi, dan perlengkapan rumah
dengan mengedepankan konsep Modern dan Stylish yang cocok untuk keluarga masa kini yang
dinamis dan modern juga generasi muda yang trendi dan semua kalangan urban.
										</p>
									</div>

									<button class="accordion">Bagaimana cara berbelanja di Hias House?</button>
									<div class="panel">
										<p>
										● Daftarkan diri sebagai pengguna webstore hias<br/>
										● Pilih produk yang anda inginkan<br/>
										● Tentukan jumlah kuantitas barang yang anda perlukan<br/>
										● Tambahkan ke dalam keranjang belanja anda<br/>
										● Hitung estimasi pengiriman anda dengan memasukkan alamat tujuan anda <br/>
										● Lanjut ke pembayaran dan pilih metode pembayaran sesuai dengan yang anda inginkan
										</p>
									</div>

									<button class="accordion">Apa saja metode pembayaran yang ditawarkan oleh HIAS House?</button>
									<div class="panel">
										<p>
										Metode pembayaran yang disediakan oleh HIAS House adalah bank transfer, Ipaymu, home
credit dan aeon voucher
										</p>
									</div>  

									<button class="accordion">Bagaimana cara mengajukan kredit di HIAS House?</button>
									<div class="panel">
										<p>
										Belum ada update
										</p>
									</div>  

									<button class="accordion">Bagaimana cara konfirmasi pembayaran di HIAS House?</button>
									<div class="panel">
										<p>
										Untuk kenyaman customer, HIAS House akan mengirimkan email ke email pengguna untuk mengkonfirmasi apabila customer telah berhasil melakukan pembayaran.
										</p>
									</div>  

									<button class="accordion">Bagaimana cara melihat status pesanan saya?</button>
									<div class="panel">
										<p>
										Anda dapat melihat dari website atau app Hias House, setelah itu anda dapat menuliskan
nomor pesanan anda pada tempat yang disediakan, maka anda dapat melihat pesanan anda sudah sampai mana.
										</p>
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

export default FAQ;
