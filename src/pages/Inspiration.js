import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import './Inspiration.scss'
import { fetchAllInspiration } from '../../src/api'

class Inspiration extends Component {
  state = {
    inspiration: []
  }

  componentDidMount() {
    fetchAllInspiration()
      .then((res) => {
        if (res.data.length !== 0) {
          this.setState({
            inspiration: res.data.inspiration
          })
        }
      })
  }
  renderInspiration = () => {
    const { inspiration } = this.state;
    if (inspiration !== null) {
      return inspiration.map((item, i) => {
        return (
          <div key={i}>
            <div className="mb--1">
              <div className="mb--1">
                <img src={item.banner} alt="" />
              </div>
              <div className="fx fx-no-wrap">
                <div>
                  <div className="inspiration-number">
                    {i + 1}
                  </div>
                </div>
                <div className="ml--1">
                  <h1>{item.title}</h1>
                  <p className="mb--0">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })
    }

  }



  render() {
    console.log(this.state)
    return (
      <div>
        <Helmet key={Math.random()}>
          <title>Inspiration</title>
          <meta property="og:title" content="Hias Homepage" />
          <meta name="description" content="Hias" />
          <meta name="robots" content="index, nofollow" />
        </Helmet>
        <div className="content">
          <div className="section-page">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <h2><i>HIAS House</i></h2>
                    <h2>Ide &amp; Inspirasi</h2>
                    <p>
                      Hias House mempersembahkan ide dan inspirasi untuk hunian anda
                    </p>
                  </div>
                </div>
                <div className="col-md-8" >
                  {this.renderInspiration()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Inspiration