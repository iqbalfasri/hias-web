import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { withContext } from "../../context/withContext";
import InputText from "../form/InputText";
import Checkbox from "../form/Checkbox";
import Modal from "../../components/layout/Modal";
import { userSignin, BASE_URL } from "../../api";

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "" || localStorage.getItem("sugestLatestLogin"),
      password: "",
      logging: false,
      showModal: false,
      errorMessage: ""
    };
  }

  async onLogin(e) {
    try {
      e.preventDefault();

      this.setState({
        logging: true
      });

      const { username, password } = this.state;

      if (!username || !password) {
        alert("Fill the field");
      } else {
        const response = await axios.post(
          `${BASE_URL}/authenticate/login`,
          { username, password },
          { headers: { "Content-Type": "application/json" } }
        );

        const { data } = await response;

        if (data.success) {
          localStorage.setItem("token", data.data.login.token);
          localStorage.setItem("userId", data.data.login.user.id);
          localStorage.setItem(
            "userProfile",
            JSON.stringify(data.data.login.user)
          );
          localStorage.setItem(
            "sugestLatestLogin",
            data.data.login.user.userName
          );
          window.location.href = "/";
        } else {
          this.setState({
            showModal: true,
            errorMessage: data.error.errorMessage
          });
        }
      }

      this.setState({
        logging: false
      });
    } catch (error) {
      this.setState({ logging: false });
    }
  }

  onChangeUsername(e) {
    const username = e.target.value;
    this.setState({
      username
    }, () => localStorage.removeItem('sugestLatestLogin'));
  }

  onChangePassword(e) {
    const password = e.target.value;
    this.setState({
      password
    });
  }

  render() {
    return (
      <div>
        <h3 className="text--center">Silahkan Masuk ke Akun Anda</h3>
        <p className="text--size-14 text--center mb--2">
          Silahkan masuk ke akun Anda untuk menyelesaikan pembayaran dengan data
          pribadi Anda
        </p>
        <form onSubmit={e => this.onLogin(e)}>
          <div className="form--group">
            <InputText
              type="email"
              onChange={e => this.onChangeUsername(e)}
              value={
                this.state.username
              }
              placeholder="Alamat Email"
            />
          </div>
          <div className="form--group">
            <InputText
              onChange={e => this.onChangePassword(e)}
              value={this.state.password}
              type="password"
              placeholder="Kata Sandi"
            />
          </div>
          <div className="form--group">
            <div className="fx justify-content-between">
              <div>
                <Checkbox text="Ingat Saya" name="logged" id="keepLogged" />
              </div>
              <div>
                <span className="text--size-12 text--color-gray">
                  <a style={{ color: "#46C5E2" }} href="/forgot-password">
                    Lupa password?
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="form--group mt--2">
            <button type="submit" className="btn btn--full btn--blue">
              {this.state.logging ? "Mohon Tunggu ..." : "Masuk"}
            </button>
          </div>
        </form>
        <div className="divider-with-text mt--2 mb--2">
          <span className="text--size-12">Atau</span>
        </div>
        <div className="mt--2">
          <div className="fx justify-content-center align-items-center">
            <div className="mr--1">
              <p className="mb--0 text--color-gray">Belum punya akun?</p>
            </div>
            <div>
              <a
                onClick={() => {
                  localStorage.setItem("promo", "true");
                  this.props.context.setIsModalPromo(false);
                }}
                href="/signup"
                className="btn btn--primary"
              >
                Daftar
              </a>
            </div>
          </div>
        </div>
        <Modal
          onCloseModal={() => this.setState({ showModal: false })}
          isOpen={this.state.showModal}
        >
          <h3 style={{ textAlign: "center", color: "#DD4B39" }}>
            {this.state.errorMessage}
          </h3>
        </Modal>
      </div>
    );
  }
}

export default withContext(Signin);
