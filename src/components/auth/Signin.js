import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { withContext } from '../../context/withContext'
import InputText from '../form/InputText'
import Checkbox from '../form/Checkbox'
import Modal from '../../components/layout/Modal'

class Signin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      logging: false,
      showModal: false
    }
  }

  async onLogin (e) {
    e.preventDefault()

    try {
      this.setState({
        logging: true
      })
      const { username, password } = this.state

      if (!username || !password) {
        alert('Fill the field')
      } else {
        const response = await axios
          .post(`${process.env.REACT_APP_BASE_URL}/authenticate/login`, { username, password })

        const { data } = response
        if (data.success) {
          this.props.context.setUser(data.data)
          localStorage.setItem('token', data.data.login.token)
          localStorage.setItem('userId', data.data.login.user.id)
          window.location.href = '/'
        }

        // if email and password doesn't match
        if (data.error.errorCode == 500) {
          this.setState({
            showModal: true
          })
        }

        this.setState({
          logging: false
        })
      }
    } catch (error) {
      console.log(error)
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
            <InputText onChange={(e) => this.onChangeUsername(e)} value={this.state.username} type="text" placeholder="Email Address" />
          </div>
          <div className="form--group">
            <InputText onChange={(e) => this.onChangePassword(e)} value={this.state.password} type="password" placeholder="Password" />
          </div>
          <div className="form--group">
            <div className="fx justify-content-between">
              <div>
                <Checkbox text="Keep me Logged in" name="logged" id="keepLogged" />
              </div>
              <div>
                <span className="text--size-12 text--color-gray">Forgot Password?</span>
              </div>
            </div>
          </div>
          <div className="form--group mt--2">
            <button type="submit" className="btn btn--full btn--blue">{ this.state.logging ? 'Logging in ...' : 'Log in' }</button>
          </div>
        </form>
        <div className="divider-with-text mt--2 mb--2">
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
              <p className="mb--0 text--color-gray">Not have an Account?</p>
            </div>
            <div>
              <Link to="/signup" onClick={() => this.props.setModalPopupSignup({ isSignupModalOpen: false })} className="btn btn--primary">Register</Link>
            </div>
          </div>
        </div>
        <Modal onCloseModal={() => this.setState({ showModal: false })} isOpen={this.state.showModal}>
          <h3 style={{ textAlign: 'center', color: "#DD4B39" }}>Email and Password doesn't match.</h3>
        </Modal>
      </div>
    )
  }
}

export default withContext(Signin)