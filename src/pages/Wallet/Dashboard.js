import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class DashboardWallet extends Component {
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
              <div className="row align-items-end">
                <div className="col-md-4">
                  <div>
                    <div className="mb--1">
                      <img src="https://via.placeholder.com/150" alt=""/>
                    </div>
                    <div>
                      <h2>Your Balance</h2>
                      <h1>IDR 2.450.000</h1>
                    </div>
                    <div className="fx">
                      <div className="mr--1">
                        <button className="btn btn--full btn--blue">Top up</button>
                      </div>
                      <div>
                        <button className="btn btn--full btn--primary">Withdraw</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col">
                      <div>
                        <h2>Transaction History</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="box-wallet">
                        <div className="mb--2">
                          <span className="text--size-12">21 August 2019</span>
                        </div>
                        <div>
                          <p className="mb--0">Simple Table</p>
                          <h3 className="mb--0">IDR 399.000</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="box-wallet">
                        <div className="mb--2">
                          <span className="text--size-12">21 August 2019</span>
                        </div>
                        <div>
                          <p className="mb--0">Simple Table</p>
                          <h3 className="mb--0">IDR 399.000</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="box-wallet">
                        <div className="mb--2">
                          <span className="text--size-12">21 August 2019</span>
                        </div>
                        <div>
                          <p className="mb--0">Simple Table</p>
                          <h3 className="mb--0">IDR 399.000</h3>
                        </div>
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

export default DashboardWallet