import React, { Component } from "react";
import Helmet from "react-helmet";

import axios from "axios";

import { BASE_URL } from "../../api";

class ForgotPassword extends Component {
  state = {
    email: "",
    statusMessage: "",
    loading: false
  };

  handleForgot(e) {
    e.preventDefault();

    let { email } = this.state;

    if (!email) {
      alert("Harap masukan email");
    } else {
      this.setState({ loading: true });
      axios
        .post(`${BASE_URL}/forgot`, { email: email, confirmEmail: email })
        .then(res => {
          this.setState({
            statusMessage: res.data.data.message
          });
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  render() {
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>Lupa Password</title>
          <meta property="og:title" content="Hias Signup" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>

        <div className="content mt--2">
          <section className="section-page">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                {/* <div className="col-md-8">
                  <div>
                    <img src="https://via.placeholder.com/1000x550" alt=""/>
                  </div>
                </div> */}
                <div className="col-md-4">
                  <div>
                    <h1 className="text--center">Kamu lupa password?</h1>
                    <p className="text--size-14 text--center mb--2">
                      Silahkan masukan email, dan nanti akan dikirimkan link
                      untuk recovery password kamu.
                    </p>
                    <form
                      onSubmit={e => this.handleForgot(e)}
                      className="mt--2"
                    >
                      <div className="form--group">
                        <div className="input-wrapper">
                          <input
                            required={true}
                            type="email"
                            onChange={e =>
                              this.setState({ email: e.target.value })
                            }
                            className="form--input"
                            placeholder="Masukan email"
                          />
                        </div>
                      </div>
                      <div className="form--group mt--2">
                        <button
                          onClick={e => this.handleForgot(e)}
                          type="submit"
                          className="btn btn--full btn--blue"
                        >
                          {this.state.loading
                            ? "Mohon Tunggu ..."
                            : "Kirim Link"}
                        </button>
                      </div>
                    </form>
                    <p style={{ color: "#a5d070" }} className="text--center">
                      {this.state.statusMessage}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
