import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import './Inspiration.scss'

class Inspiration extends Component {
  render () {
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
                    <h2><i>HIAS House Presents</i></h2>
                    <h2>Inspiration &amp; Ideas</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, rerum? Consectetur, commodi labore? Sint corrupti dignissimos dolore optio vero minima accusantium nostrum nam, quia esse, quos ipsa autem fugiat quaerat.
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div>
                    <div>
                      Trending Style
                    </div>
                    <div>
                      Living room inspiration
                    </div>
                    <div>
                      Kitchen Design &amp; Ideas
                    </div>
                    <div>
                      Garden Inspiration
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div>
                    <div className="mb--1">
                      <div className="mb--1">
                        <img src={require('../assets/img/Banner-SignIn.png')} alt=""/>
                      </div>
                      <div className="fx fx-no-wrap">
                        <div>
                          <div className="inspiration-number">
                            01
                          </div>
                        </div>
                        <div className="ml--1">
                          <h1>Living Room Inspiration</h1>
                          <p className="mb--0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facere cum odio recusandae enim praesentium assumenda magnam dignissimos consequuntur, a illum iure non eum voluptates quam, culpa quasi earum obcaecati?</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb--1">
                      <div className="mb--1">
                        <div className="row">
                          <div className="col-6">
                            <img src={require('../assets/img/Banner-SignIn.png')} alt=""/>
                          </div>
                          <div className="col-6">
                            <img src={require('../assets/img/Banner-SignIn.png')} alt=""/>
                          </div>
                        </div>
                      </div>
                      <div className="fx fx-no-wrap">
                        <div>
                          <div className="inspiration-number">
                            02
                          </div>
                        </div>
                        <div className="ml--1">
                          <h1>Home Sweet Home</h1>
                          <p className="mb--0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facere cum odio recusandae enim praesentium assumenda magnam dignissimos consequuntur, a illum iure non eum voluptates quam, culpa quasi earum obcaecati?</p>
                        </div>
                      </div>
                    </div>
                  </div>
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