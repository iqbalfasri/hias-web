import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import Checkbox from '../../components/form/Checkbox'

class Signup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      phone: ''
    }
  }

  onSignUp (e) {
    e.preventDefault()
    const {
      name,
      email,
      phone,
      password
    } = this.state


    if (!phone || !password || !email || !name) {
      alert('Fill the field')
    } else {
      return axios
        .post('https://afternoon-coast-09606.herokuapp.com/register', {
          name,
          email,
          username: name,
          password: password,
          telp : phone
        })
        .then((res) => {
          localStorage.setItem('token', res.data.data.register.token)
          localStorage.setItem('userId', res.data.data.register.user.id)
          window.location.href = '/thank-you'
        })
    }
  }

  onChangeName (e) {
    const name = e.target.value
    this.setState({
      name
    })
  }

  onChangePhone (e) {
    const phone = e.target.value
    this.setState({
      phone
    })
  }

  onChangeEmail (e) {
    const email = e.target.value
    this.setState({
      email
    })
  }

  onChangePassword (e) {
    const password = e.target.value
    this.setState({
      password
    })
  }

  render() {
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>Signup Page</title>
          <meta property="og:title" content="Hias Signup" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>
        <div className="content">
          <section className="section-page">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <div className="mb--2">
                    <div className="img--center">
                      <img src="https://via.placeholder.com/150" alt=""/>
                    </div>
                  </div>
                  <div>
                    <h1 className="text--center">SIGN UP YOUR ACCOUNT</h1>
                  </div>
                  <div className="mb--2">
                    <form onSubmit={(e) => this.onSignUp(e)}>
                      <div className="form--group">
                        <input type="text" value={this.state.name} onChange={(e) => this.onChangeName(e)} className="form--input" placeholder="Full Name" />
                      </div>
                      <div className="form--group">
                        <input type="email" value={this.state.email} onChange={(e) => this.onChangeEmail(e)} className="form--input" placeholder="Email" />
                      </div>
                      <div className="form--group">
                        <input type="tel" value={this.state.phone} onChange={(e) => this.onChangePhone(e)} className="form--input" placeholder="+62" />
                      </div>
                      <div className="form--group">
                        <input type="password" value={this.state.password} onChange={(e) => this.onChangePassword(e)} className="form--input" placeholder="Type your password" />
                      </div>
                      <div className="form--group">
                        <input type="password" className="form--input" placeholder="re-type your password" />
                      </div>
                      <div className="form--group">
                        <Checkbox text="I agree the terms and conditions from HIAS house." />
                      </div>
                      <div className="form--group">
                        <button type="submit" className="btn btn--full btn--blue">Next Step</button>
                      </div>
                    </form>
                  </div>
                  <div className="divider-with-text mb--2">
                    <span className="text--size-14">or</span>
                  </div>
                  <div className="mt--2 mb--2">
                    <p className="text--center">Sign in with</p>
                    <div className="fx justify-content-center">
                      <div className="mr--1">
                        <img src="https://via.placeholder.com/50" alt=""/>
                      </div>
                      <div className="ml--1">
                        <img src="https://via.placeholder.com/50" alt=""/>
                      </div>
                    </div>
                  </div>
                  <div className="mt--2">
                    <div className="fx justify-content-center align-items-center">
                      <div className="mr--1">
                        <p className="mb--0 text--color-gray">Already have an account?</p>
                      </div>
                      <div>
                        <Link to="/login" className="btn btn--primary">Login</Link>
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

export default withRouter(Signup)