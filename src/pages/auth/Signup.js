import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import Modal from '../../components/layout/Modal'
import Checkbox from '../../components/form/Checkbox'

class Signup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      phone: '',
      isSigningUp: false,
      showModal: false,
      checkBoxChecked: false
    }
  }

  async onSignUp(e) {
    e.preventDefault()
    try {
      this.setState({
        isSigningUp: true
      })

      const {
        name,
        email,
        phone,
        password
      } = this.state;

      if (!phone || !password || !email || !name) {
        alert('Fill the field')
      }
      const response = await axios
        .post(`${process.env.REACT_APP_BASE_URL}/register`, {
          name,
          email,
          username: email,
          password: password,
          telp: phone
        });

      const { data } = response

      if (data.success) {
        localStorage.setItem('token', data.data.register.token)
        localStorage.setItem('userId', data.data.register.user.id)
        window.location.href = '/thank-you'
      }

      // if email is exist
      if (data.error.errorCode == 500) {
        this.setState({
          showModal: true
        })
      }

      this.setState({
        isSigningUp: false
      })
    } catch (error) {
      console.log(error);
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
                    <div className="img--center logo">
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
                        <div className="row" style={{marginLeft:5}}>
                          <Checkbox
                            onChange={() => {
                              this.setState({ checkBoxChecked: !this.state.checkBoxChecked })
                            }}
                            isChecked={this.state.checkBoxChecked} />
                          <span style={{marginLeft:5}}>I agree the <Link>terms and conditions</Link> from HIAS house.</span>
                        </div>
                      </div>
                      <div className="form--group">
                        <button disabled={!this.state.checkBoxChecked} type="submit" className="btn btn--full btn--blue">{ this.state.isSigningUp ? 'Creating Account' : 'Next Step' }</button>
                      </div>
                    </form>
                  </div>
                  <div className="divider-with-text mb--2">
                    <span className="text--size-14">or</span>
                  </div>
                  <div className="mt--2 mb--2">
                    <p className="text--center">Sign in with</p>
                    <div className="fx justify-content-center align-items-center">
                      <div className="mr--1">
                        <img width="50px" src={require('../../assets/img/fb.png')} alt=""/>
                      </div>
                      <div className="ml--1">
                        <img width="50px" src={require('../../assets/img/gmail.png')} alt=""/>
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
        <Modal onCloseModal={() => this.setState({ showModal: false })} isOpen={this.state.showModal}>
          <h3 style={{ textAlign: 'center', color: "#DD4B39" }}>Username or Email already exist.</h3>
        </Modal>
      </div>
    )
  }
}

export default withRouter(Signup)