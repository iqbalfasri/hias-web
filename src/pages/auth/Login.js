import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Signin from '../../components/auth/Signin'

class Login extends Component {
  render () {
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>Login</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>
        <div className="content">
          <section className="section-page">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div>
                    <img src="https://via.placeholder.com/1000x550" alt=""/>
                  </div>
                </div>
                <div className="col-md-4">
                  <Signin />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Login