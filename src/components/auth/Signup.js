import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";

import Modal from "../layout/Modal";
import Checkbox from "../form/Checkbox";

import { registUserToCart, BASE_URL, userSignup } from "../../api";
import { isPhoneNumber } from "../../utils/inputValidations";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      phone: "",
      isSigningUp: false,
      showModal: false,
      checkBoxChecked: false
    };
  }

  async onSignUp(e) {
    try {
      e.preventDefault();
      this.setState({
        isSigningUp: true
      });

      const { name, email, phone, password, confirmPassword } = this.state;

      if (!phone || !password || !confirmPassword || !email || !name) {
        alert("Fill the field");
      } else if (password !== confirmPassword) {
        alert("Password yang dimasukan tidak sama");
      } else if (phone.length < 11) {
        alert("Harap masukan nomor telepon dengan benar");
      } else {
        const response = await axios.post(`${BASE_URL}/register`, {
          name,
          email,
          username: email,
          password: password,
          telp: `0${phone}`
        });

        const { data } = await response;

        if (data.success) {
          localStorage.setItem("token", data.data.register.token);
          localStorage.setItem("userId", data.data.register.user.id);
          localStorage.setItem(
            "userProfile",
            JSON.stringify(data.data.register.user)
          );

          registUserToCart(localStorage.getItem("userId"))
            .then(res => {
              if (res.success) {
                localStorage.setItem("promo", "true");
                window.location.href = "/thank-you";
              }
            })
            .catch(error => {
              console.error(error);
            });
        } else {
          this.setState({ showModal: true });
        }
      }

      this.setState({
        isSigningUp: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  onChangeName(e) {
    const name = e.target.value;
    this.setState({
      name
    });
  }

  onChangePhone(e) {
    const phone = isPhoneNumber(e.target.value);
    this.setState({
      phone
    });
  }

  onChangeEmail(e) {
    const email = e.target.value;
    this.setState({
      email
    });
  }

  onChangePassword(e) {
    const password = e.target.value;
    this.setState({
      password
    });
  }

  onChangeConfirmPassword(e) {
    const confirmPassword = e.target.value;
    this.setState({
      confirmPassword
    });
  }

  render() {
    return (
      <div>
        <div>
          <h3 className="text--center mb--2">Daftarkan Akun Anda</h3>
        </div>
        <div className="mb--2">
          <form onSubmit={e => this.onSignUp(e)}>
            <div className="form--group">
              <input
                type="text"
                value={this.state.name}
                onChange={e => this.onChangeName(e)}
                className="form--input"
                placeholder="Nama Lengkap"
              />
            </div>
            <div className="form--group">
              <input
                type="email"
                value={this.state.email}
                onChange={e => this.onChangeEmail(e)}
                className="form--input"
                placeholder="Email"
              />
            </div>
            <div className="form--group">
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  width: "100%",
                  padding: "5px",
                  border: "1px solid #ccc",
                  borderRadius: "5px"
                }}
              >
                <span style={{ padding: "0 10px" }}>+62</span>
                <input
                  style={{
                    width: "100%",
                    outline: "none",
                    padding: "5px",
                    margin: " 0 0",
                    border: "none"
                  }}
                  type="tel"
                  value={this.state.phone}
                  onChange={e => this.onChangePhone(e)}
                  placeholder="e.g 821xxxxxxx"
                />
              </div>
            </div>
            <div className="form--group">
              <input
                minLength={8}
                type="password"
                value={this.state.password}
                onChange={e => this.onChangePassword(e)}
                className="form--input"
                placeholder="Masukkan Password"
              />
            </div>
            <div className="form--group">
              <input
                minLength={8}
                type="password"
                value={this.state.confirmPassword}
                onChange={e => this.onChangeConfirmPassword(e)}
                className="form--input"
                placeholder="Masukkan Ulang Password"
              />
            </div>
            <div className="form--group">
              <div className="row" style={{ marginLeft: 5 }}>
                <Checkbox
                  onChange={() => {
                    this.setState({
                      checkBoxChecked: !this.state.checkBoxChecked
                    });
                  }}
                  isChecked={this.state.checkBoxChecked}
                />
                <span style={{ marginLeft: 5 }}>
                  Saya setuju dengan <Link to="/terms">syarat & ketentuan</Link>{" "}
                  dari HIAS House
                </span>
              </div>
            </div>
            <div className="form--group">
              <button
                disabled={!this.state.checkBoxChecked}
                type="submit"
                className="btn btn--full btn--blue"
              >
                {this.state.isSigningUp ? "Membuat Akun" : "Daftar"}
              </button>
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
              <a
                onClick={e => {
                  localStorage.setItem("promo", true);
                }}
                href="/login"
                className="btn btn--primary"
              >
                Masuk
              </a>
            </div>
          </div>
        </div>
        <Modal
          onCloseModal={() => this.setState({ showModal: false })}
          isOpen={this.state.showModal}
        >
          <h3 style={{ textAlign: "center", color: "#DD4B39" }}>
            Username or Email already exist.
          </h3>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Signup);
