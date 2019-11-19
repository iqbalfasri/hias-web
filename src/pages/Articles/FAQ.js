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

									<button class="accordion">Apakah Hias house melayani jasa perakitan dan pengiriman produk?</button>
									<div class="panel">
										<p>
										Hias House melayani jasa perakitan dan pengiriman produk. Dengan pembelanjaan minimal 2
juta rupiah, customer sudah mendapatkan pengiriman gratis untuk area jabodetabek dan
perakitan gratis.
										</p>
									</div>

									<button class="accordion">Berapa lama estimasi pengiriman produk?</button>
									<div class="panel">
										<p>
										Pesanan akan diproses 2 x 24 jam. Lama pengiriman produk furniture di area jabodetabek yaitu 5-7 hari kerja setelah pesanan diproses, sedangkan untuk area di luar jabodetabek disesuaikan dengan tujuan dan layanan yang dipilih oleh customer. Pesanan non furniture akan dikirim sesuai dengan pilihan service yang customer pilih.
										</p>
									</div>    

									<button class="accordion">Berapa biaya yang harus saya keluarkan untuk pengiriman produk?</button>
									<div class="panel">
										<p>
										Apabila customer berbelanja dengan minimal 2 juta rupiah, maka tidak akan dikenakan
biaya pengiriman di area Jabodetabek (Jakarta, Bogor, Depok, Tangerang, dan Bekasi). Namun apabila pembelanjaan kurang dari 2 juta rupiah maka akan dikenakan biaya pengiriman 50 ribu per kilometer dari titik pengiriman yaitu store Hias House kelapa gading.
										</p>
									</div>    

									<button class="accordion">Kapan barang yang saya pesan akan dirakit?</button>
									<div class="panel">
										<p>
										Barang dapat dirakit sebelum dan sesudah pengiriman. Apabila customer memilih
untuk perakitan sesudah pengiriman, proses pengiriman dan perakitan akan dilakukan di hari yang berbeda. Maksimal jadwal perakitan adalah 7 hari kerja setelah barang diterima oleh customer. Layanan perakitan hanya berlaku di hari dan jam kerja.
										</p>
									</div>    

									<button class="accordion">Ada berapa metode pengiriman produk?</button>
									<div class="panel">
										<p>
										Pengiriman produk furniture akan dikirim oleh kurir toko kami dan pengiriman produk non
furniture akan dilakukan oleh kurir yang bekerja sama dengan kami seperti jne.
										</p>
									</div>    

									<button class="accordion">Berapa biaya yang saya keluarkan untuk perakitan?</button>
									<div class="panel">
										<p>
										Apabila customer berbelanja dengan minimal 2 juta rupiah, maka tidak akan dikenakan biaya
perakitan di area Jabodetabek (Jakarta, Bogor, Depok, Tangerang, dan Bekasi). Namun apabila pembelanjaan kurang dari 2 juta rupiah maka akan dikenakan biaya perakitan 150 ribu per barang untuk area Jabodetabek.
										</p>
									</div>    

									<button class="accordion">Bagaimana jika produk yang saya terima tidak sesuai dengan yang saya pesan?</button>
									<div class="panel">
										<p>
										Jika produk yang anda terima tidak sesuai dengan yang anda pesan maka produk dapat ditukar dan
dikembalikan. Produk akan ditukar dengan produk yang sesuai dengan pesanan anda, apabila produk yang anda tukar tidak ready stock maka produk akan ditukar dengan barang lain atau uang akan dikembalikan.
										</p>
									</div>    

									<button class="accordion">Apakah produk yang saya beli dapat ditukar dan dikembalikan?</button>
									<div class="panel">
										<p>
										Produk yang dapat ditukar dan dikembalikan adalah produk yang mengalami kerusakan pada saat
pengiriman atau apabila produk yang anda terima tidak sesuai dengan apa yang anda pesan.
										</p>
									</div>    

									<button class="accordion">Apakah produk yang saya beli memiliki garansi?</button>
									<div class="panel">
										<p>
										Produk yang mendapatkan garansi hanyalah produk furniture saja. Pemberian garansi terhadap produk
furniture terhitung 6 bulan setelah barang diterima oleh konsumen.
										</p>
									</div>    

									<button class="accordion">Bagaimana cara saya menghubungi customer service?</button>
									<div class="panel">
										<p>
										Anda dapat melihat dari webstore kami atau app Hias House pada bagian Hubungi Kami atau anda dapat menghubungi customer service kami langsung melalui chatbot yang ada pada webstore kami. Melalui chatbot tersebut customer service kami akan membantu anda mengenai pertanyaan-pertanyaan mengenai Hias House.
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
