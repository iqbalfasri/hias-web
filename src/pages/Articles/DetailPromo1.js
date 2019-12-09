import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./DetailPromo.scss";
import "./Articles.scss";

class DetailPromo1 extends Component {
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
      <div className="align-items-center" style={{paddingTop:30}}>
        <h3 className="text--center">Diskon Akhir Tahun Sampai 80% Untuk Semua Produk HIAS House</h3>
        <div className="banner-image-promo">
          <img
            src={require("../../assets/img/evoucher2.jpg")}
          />
        </div>
        <div className="row" style={{marginTop: 20, minHeight:150, marginRight:"auto", marginLeft:"auto", width:"50%"}}>
          <div className="col-md-4" style={{backgroundColor:"#46C5E2", padding: 20}}>
           <h1 style={{color:"#fff", fontWeight:"bold"}}>Info<br/>Promo</h1>
          </div>
          <div className="col-md-8" style={{backgroundColor:"#f8f8f8", padding: 20}}>
            <strong><p>Tanggal Berlaku: </p></strong><p>12 November - 31 Desember 2019</p>
            <strong><p>Kode Promo: </p></strong><p>-</p>
          </div>
          <button class="accordion" style={{marginTop: 30, fontWeight:"bold"}}>Keterangan Lebih Lanjut</button>
									<div class="panel">
										<p style={{marginTop: 30}}>
										Promo YEAR END SALE UP TO 80% untuk semua produk HIAS House dan
selama persediaan masih ada. Dan berlaku untuk penggunaaan voucher diskon tambahan.
										</p>
									</div>
        </div>
      </div>
    );
  }
}

export default DetailPromo1;
