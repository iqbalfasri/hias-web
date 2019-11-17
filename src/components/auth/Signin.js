import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { withContext } from '../../context/withContext'
import InputText from '../form/InputText'
import Checkbox from '../form/Checkbox'

class Signin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      logging: false
    }
  }

  onLogin (e) {
    e.preventDefault()
    this.setState({
      logging: true
    })
    const { username, password } = this.state
    if (!username || !password) {
      alert('Fill the field')
    } else {
      return axios
        .post('https://api-core-hias.herokuapp.com/authenticate/login', { username, password })
        .then((res) => {
          this.props.context.setUser(res.data.data)
          localStorage.setItem('token', res.data.data.login.token)
          localStorage.setItem('userId', res.data.data.login.user.id)
          window.location.href = '/'
        })
        .catch((err) => {

        })
        .finally(() => {
          this.setState({
            logging: false
          })
        })
    }
  }

  onChangeUsername (e) {
    const username = e.target.value
    this.setState({
      username
    })
  }

  onChangePassword (e) {
    const password = e.target.value
    this.setState({
      password
    })
  }

  render () {
    return (
      <div>
        <div className="mb--2">
          <div className="logo img--center">
            <img src={require('../../assets/img/MASTER_LOGO_HIAS_HOUSE_HORIZONTAL.png')} alt=""/>
          </div>
        </div>
        <form onSubmit={(e) => this.onLogin(e)}>
          <div className="form--group">
            <InputText onChange={(e) => this.onChangeUsername(e)} value={this.state.username} type="text" placeholder="Alamat Email" />
          </div>
          <div className="form--group">
            <InputText onChange={(e) => this.onChangePassword(e)} value={this.state.password} type="password" placeholder="Kata Sandi" />
          </div>
          <div className="form--group">
            <div className="fx justify-content-between">
              <div>
                <Checkbox text="Ingat Saya" name="logged" id="keepLogged" />
              </div>
              <div>
                <span className="text--size-12 text--color-gray">Lupa Password?</span>
              </div>
            </div>
          </div>
          <div className="form--group mt--2">
            <button type="submit" className="btn btn--full btn--blue">{ this.state.logging ? 'Logging in ...' : 'Log in' }</button>
          </div>
        </form>
        <div className="divider-with-text mt--2 mb--2">
          <span className="text--size-14">Atau</span>
        </div>
        <div className="mt--2 mb--2">
          <p className="text--center">Masuk Dengan</p>
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
              <p className="mb--0 text--color-gray">Belum punya akun?</p>
            </div>
            <div>
              <Link to="/signup" onClick={() => this.props.setModalPopupSignup({ isSignupModalOpen: false })} className="btn btn--primary">Daftar</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withContext(Signin)