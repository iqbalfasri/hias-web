import React, { Component } from "react";
import Helmet from "react-helmet";
import axios from "axios";

import InputText from "../../components/form/InputText";

import { BASE_URL } from "../../api";

class ChangePassword extends Component {
  state = {
    email: "",
    newPassword: "",
    confirmNewPassword: ""
  };

  componentDidMount() {
    const url = window.location.href;
    const getUrl = new URL(url);
    const getEmail = getUrl.searchParams.get("email");

    console.log(getEmail)

    // create validation
    if (!getEmail) {
      window.location.href = "/login";
      return;
    }

    // setState email
    this.setState({
      email: getEmail
    });
  }

  handleChangePassword(e) {
    e.preventDefault();
    let { newPassword, confirmNewPassword } = this.state;

    // validation

    if (!newPassword || !confirmNewPassword) {
      alert("Harap masukan password baru");
    }

    if (newPassword !== confirmNewPassword) {
      alert("Password yang dimasukan tidak sama.");
    } else {
      // Process to change password
      let { email, newPassword, confirmNewPassword } = this.state;
      axios
        .post(`${BASE_URL}/change`, {
          username: email,
          password: newPassword,
          confirmationPassword: confirmNewPassword
        })
        .then(res => {
          const status = res.data.status;
          if (status) {
            window.location.href = '/';
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Ganti password</title>
        </Helmet>
        <div className="content">
          <section className="section-page">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-4">
                  <div>
                    <h3 className="text--center">Ganti password</h3>
                  </div>
                  <form onSubmit={e => this.handleChangePassword(e)}>
                    <div className="form--group mt--2">
                      <InputText
                        type="password"
                        onChange={e =>
                          this.setState({ newPassword: e.target.value })
                        }
                        value={this.state.newPassword}
                        placeholder="Masukan password baru"
                      />
                    </div>
                    <div className="form--group mt--1">
                      <InputText
                        type="password"
                        onChange={e =>
                          this.setState({ confirmNewPassword: e.target.value })
                        }
                        value={this.state.confirmNewPassword}
                        placeholder="Konfirmasi password baru"
                      />
                    </div>
                    <div className="form--group mt--2">
                      <button
                        className="btn btn--blue btn--full"
                        onClick={e => this.handleChangePassword(e)}
                      >
                        Ganti password sekarang
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ChangePassword;
