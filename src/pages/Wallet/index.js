import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import './index.scss'

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
                      <img src="https://via.placeholder.com/200" alt=""/>
                    </div>
                    <div className="text--center">
                      <h2>Do You Have iPaymu Account?</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde nisi voluptatum aspernatur, laboriosam consectetur, odio delectus dolor beatae inventore consequuntur sit eligendi, quod repellendus repudiandae soluta aliquam commodi eaque?</p>
                    </div>
                    <div className="fx fx-no-wrap justify-content-center">
                      <div className="mr--1">
                        <button className="btn btn--full btn--blue">Create iPaymu Account</button>
                      </div>
                      <div>
                        <button className="btn btn--full btn--primary">Create iPaymu Account</button>
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