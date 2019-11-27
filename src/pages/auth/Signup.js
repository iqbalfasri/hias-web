import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import Modal from '../../components/layout/Modal'
import Checkbox from '../../components/form/Checkbox'

import { registUserToCart, BASE_URL } from '../../api'
import isPhoneNumber from '../../utils/phoneValidate'

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
    try {
      e.preventDefault()
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
        .post(`${BASE_URL}/register`, {
          name,
          email,
          username: email,
          password: password,
          telp: phone
        });

      const { data } = await response;

      localStorage.setItem('token', data.data.register.token)
      localStorage.setItem('userId', data.data.register.user.id)

      if (data.success) {
        registUserToCart(localStorage.getItem('userId'))
          .then(res => {
            if (res.success) {
              window.location.href = '/thank-you'
            }
          }).catch(error => {
            console.error(error)
          })
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
      console.log(error)
    }
  }

  onChangeName (e) {
    const name = e.target.value
    this.setState({
      name
    })
  }

  onChangePhone (e) {
    const phone = isPhoneNumber(e.target.value);
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
                <div className="col-md-12">
                  <div>
                    <h3 className="text--center mb--2">Daftarkan Akun Anda</h3>
                  </div>
                  <div className="mb--2">
                    <form onSubmit={(e) => this.onSignUp(e)}>
                      <div className="form--group">
                        <input type="text" value={this.state.name} onChange={(e) => this.onChangeName(e)} className="form--input" placeholder="Nama Lengkap" />
                      </div>
                      <div className="form--group">
                        <input type="email" value={this.state.email} onChange={(e) => this.onChangeEmail(e)} className="form--input" placeholder="Email" />
                      </div>
                      <div className="form--group">
                        <input type="tel" value={this.state.phone} onChange={(e) => this.onChangePhone(e)} className="form--input" placeholder="+62" />
                      </div>
                      <div className="form--group">
                        <input type="password" value={this.state.password} onChange={(e) => this.onChangePassword(e)} className="form--input" placeholder="Masukkan Password" />
                      </div>
                      <div className="form--group">
                        <input type="password" className="form--input" placeholder="Masukkan Ulang Password" />
                      </div>
                      <div className="form--group">
                        <div className="row" style={{marginLeft:5}}>
                          <Checkbox
                            onChange={() => {
                              this.setState({ checkBoxChecked: !this.state.checkBoxChecked })
                            }}
                            isChecked={this.state.checkBoxChecked} />
                          <span style={{marginLeft:5}}>Saya setuju dengan <Link to="/terms">syarat & ketentuan</Link> dari HIAS House</span>
                        </div>
                      </div>
                      <div className="form--group">
                        <button disabled={!this.state.checkBoxChecked} type="submit" className="btn btn--full btn--blue">{ this.state.isSigningUp ? 'Membuat Akun' : 'Daftar' }</button>
                      </div>
                    </form>
                  </div>
                  <div className="divider-with-text mb--2">
                    <span className="text--size-14">Atau</span>
                  </div>
                  <div className="mt--2">
                    <div className="fx justify-content-center align-items-center">
                      <div className="mr--1">
                        <p className="mb--0 text--color-gray">Sudah punya akun?</p>
                      </div>
                      <div>
                        <a onClick={e => {
                          localStorage.setItem('promo', true)
                        }} href="/login" className="btn btn--primary">Masuk</a>
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