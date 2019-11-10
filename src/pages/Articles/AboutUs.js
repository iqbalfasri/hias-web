import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

// import '../../assets/scss/inspiration.scss'

class AboutUs extends Component {

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
              <div className="col-md-8">
                <div>
                  <h1>About <span style={{color:"#46C5E2"}}>Hias House</span></h1>
                  <p style={{color:"#8b8b8b", marginBottom:20}} className="mb--0">Lorem ipsum dolor sit amet consectetur.</p>
                  <p style={{textAlign:"justify"}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, rerum? Consectetur, commodi labore? Sint corrupti dignissimos dolore optio vero minima accusantium nostrum nam, quia esse, quos ipsa autem fugiat quaerat.
                  </p>
                  <img style={{marginTop: "0,5em", marginBottom: "1em"}} src={require('../../assets/img/Banner-Newsletter.png')} alt=""/>
                  <h2 style={{marginBottom:20}}><i>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</i></h2>
                  <div className="row" style={{textAlign:"justify"}}>
                    <div className="col-md-6">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, rerum? Consectetur, commodi labore? Sint corrupti dignissimos dolore optio vero minima accusantium nostrum nam, quia esse, quos ipsa autem fugiat quaerat.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, rerum? Consectetur, commodi labore? Sint corrupti dignissimos dolore optio vero minima accusantium nostrum nam, quia esse, quos ipsa autem fugiat quaerat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
              </div>
              <div className="col-md-4">
                <div>
                  <div className="mb--1" style={{marginBottom:30}}>
                    <div className="fx fx-no-wrap">
                      <div>
                        <div className="inspiration-number">
                          01
                        </div>
                      </div>
                      <div className="ml--1">
                        <h1>Vision</h1>
                        <p className="mb--0">Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb--1">
                    <div className="fx fx-no-wrap">
                      <div>
                        <div className="inspiration-number">
                          02
                        </div>
                      </div>
                      <div className="ml--1">
                        <h1>Mission</h1>
                        <p className="mb--0">Lorem ipsum dolor sit amet consectetur</p>
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

export default AboutUs