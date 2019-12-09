import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./DetailPromo.scss";
import "./Articles.scss";

class DetailNews extends Component {
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
        <p style={{opacity: 0.7, textAlign:"center"}}>Sumber HIAS House Official - Senin, 9 Desember 2019</p>
        <div className="banner-image-news">
          <img
            src={require("../../assets/img/news.jpeg")}
          />
        </div>
        <div className="row" style={{marginTop: 20, minHeight:150, marginRight:"auto", marginLeft:"auto", width:"50%"}}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><br/>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
    );
  }
}

export default DetailNews;
