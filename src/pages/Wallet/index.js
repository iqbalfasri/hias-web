import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import './index.scss'
import { createRequire } from 'module'

class Wallet extends Component {
  render () {
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>My Wallet</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>
        <div className="content">
          <section className="section-page">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div>
                    <div className="mb--1 img--center">
                      <img style={{width:350}} src={require('../../assets/img/ipaymu.png')} alt=""/>
                    </div>
                    <div className="text--center mb--2">
                      <h2>Sudah punya akun iPaymu?</h2>
                    </div>
                    <div className="fx fx-no-wrap justify-content-center">
                      <div className="mr--1">
                        <button className="btn btn--full btn--blue">Buat akun iPaymu</button>
                      </div>
                      <div>
                        <button className="btn btn--full btn--primary">Sudah punya akun</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Wallet