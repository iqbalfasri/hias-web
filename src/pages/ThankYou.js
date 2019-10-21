import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

class ThankYou extends Component {
  render () {
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>Thank You Page</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>
        <div className="content">
          <section className="section-page">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="mb--2">
                    <div className="img--center logo">
                      <img src={require('../assets/img/MASTER_LOGO_HIAS_HOUSE_HORIZONTAL.png')} alt=""/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div>
                    <img src={require('../assets/img/Registration-success.png')} alt=""/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <div className="mb--2">
                      <h1>CONGRATULATIONS!</h1>
                      <h3>Your HIAS account has been successfully registered.</h3>
                    </div>
                    <div className="mb--2">
                      <p className="text--color-gray">
                        Please check your email and confirm registration
                      </p>
                    </div>
                    <div>
                      <Link to="/" className="btn btn--blue">Back to HIAS Website</Link>
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

export default ThankYou