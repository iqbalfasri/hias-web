import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Category from './pages/product/Category'
import SubCategory from './pages/product/SubCategory'
import Detail from './pages/product/Detail'
import Cart from './pages/product/Cart'
import Checkout from './pages/product/Checkout'
import ThankYou from './pages/ThankYou'
import Wallet from './pages/Wallet'
import DashboardWallet from './pages/Wallet/Dashboard'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Inspiration from './pages/Inspiration'
import Search from './pages/Search'
import Wishlist from './pages/Wishlist'
import NotFound from './pages/NotFound'
import AboutUs from './pages/Articles/AboutUs'
import ContactUs from './pages/Articles/ContactUs'
import FAQ from './pages/Articles/FAQ'
import Privacy from './pages/Articles/Privacy'
import Terms from './pages/Articles/Terms'
import DeliveryTerms from './pages/Articles/DeliveryTerms'
import Refund from './pages/Articles/Refund'
import Newsletter from './pages/Articles/Newsletter'
import StoreLocation from './pages/Articles/StoreLocation'
import Promo from './pages/Articles/Promo'
import Event from './pages/Articles/Event'
import News from './pages/Articles/News'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Modal from './components/layout/Modal'
import Signin from './components/auth/Signin'
import Checkbox from './components/form/Checkbox'
import { withContext } from './context/withContext'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      phone: '',
      isSigningUp: false
    }
  }

  componentDidMount () {
    const promo = localStorage.getItem('promo')
    if (!promo) {
      this.props.context.setIsModalPromo(true)
    }
  }

  onCloseModalPromo () {
    localStorage.setItem('promo', 'true')
    this.props.context.setIsModalPromo(false)
  }

  render () {
    const {
      isModalSigninPopupOpen,
      setIsModalSigninPopupOpen,
      isModalSignupPopupOpen,
      setIsModalSignupPopupOpen,
      isLoading,
      isModalPromo
    } = this.props.context

    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/about" component={AboutUs}/>
          <Route path="/contact" component={ContactUs}/>
          <Route path="/faq" component={FAQ}/>
          <Route path="/privacy" component={Privacy}/>
          <Route path="/terms" component={Terms}/>
          <Route path="/deliveryterms" component={DeliveryTerms}/>
          <Route path="/refund" component={Refund}/>
          <Route path="/newsletter" component={Newsletter}/>
          <Route path="/storelocation" component={StoreLocation}/>
          <Route path="/thank-you" component={ThankYou}/>
          <Route path="/wallet" component={Wallet} exact={true} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/inspiration" component={Inspiration} />
          <Route path="/wallet/dashboard" component={DashboardWallet}/>
          <Route path="/products/search" component={Search} exact={true} />
          <Route path="/products/detail/:id" component={Detail} exact={true} />
          <Route path="/products/:category" component={Category} exact={false} />
          <Route path="/products/:category/:subCategory" component={SubCategory} />
          <Route path="/promo" component={Promo} />
          <Route path="/news" component={News} />
          <Route path="/event" component={Event} />
          <Route component={NotFound}/>
        </Switch>
        <Footer />
        <Modal isOpen={isModalSigninPopupOpen} onCloseModal={() => setIsModalSigninPopupOpen(false)}>
          <div style={{ padding: '3em' }}>
            <Signin />
          </div>
        </Modal>
        <Modal isOpen={isModalSignupPopupOpen} onCloseModal={() => setIsModalSignupPopupOpen(false)}>
          <Signup />
        </Modal>
        <Modal isOpen={isLoading}>
          <h1 className="text--center mb--0">
            PROCESSING...
          </h1>
        </Modal>
        <Modal big isOpen={isModalPromo} onCloseModal={() => this.onCloseModalPromo()}>
          <div className="row">
            <div className="col-md-4">
              <h3 className="mb--1">
                Regist Your <span style={{color:"#46C5E2"}}>HIAS HOUSE</span> Account
              </h3>
              <div className="mb--2">
                <form onSubmit={(e) => this.onSignUp(e)}>
                  <div className="form--group">
                    <input type="text" value={this.state.name} onChange={(e) => this.onChangeName(e)} className="form--input" placeholder="Full Name" />
                  </div>
                  <div className="form--group">
                    <input type="email" value={this.state.email} onChange={(e) => this.onChangeEmail(e)} className="form--input" placeholder="Email" />
                  </div>
                  <div className="form--group">
                    <input type="tel" value={this.state.phone} onChange={(e) => this.onChangePhone(e)} className="form--input" placeholder="+62" />
                  </div>
                  <div className="form--group">
                    <input type="password" value={this.state.password} onChange={(e) => this.onChangePassword(e)} className="form--input" placeholder="Type your password" />
                  </div>
                  <div className="form--group">
                    <input type="password" className="form--input" placeholder="re-type your password" />
                  </div>
                  <div className="form--group">
                    <Checkbox text="I agree the terms and conditions from HIAS house." />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form--group">
                        <button type="submit" className="btn btn--full btn--blue">Create Account</button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form--group">
                        <button type="submit" className="btn btn--full btn--border">I think, later</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="promo-section">
                <div>
                  <p className="mb--0" style={{color:"orange"}}><strong>HOT PROMO</strong></p>
                  <h2>Kitchen Set 2019</h2>
                </div>
                <div className="line-divider ld--blue"></div>
                <div>
                  <img src={require('./assets/img/Banner-Newsletter.png')} alt=""/>
                </div>
                <div className="mt--2">
                  <div className="form--group">
                    <button className="btn btn--full btn--blue">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="news-section">
              <div>
                <h2>Beatiful Living</h2>
              </div>
              <div className="line-divider ld--blue"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure eius accusantium.
              </p>
              <div className="mt--2 mb--2">
                <div className="form--group">
                  <button className="btn btn--full btn--blue">Explore All Articles</button>
                </div>
              </div>
            </div>
            <div className="footer-link">
              <h3 className="footer-link-title">Subscribe Newsletter</h3>
              <div>
                <div className="form--group">
                  <input type="text" placeholder="Your email address" className="form--input" />
                </div>
                <div>
                  <button className="btn btn--full btn--blue">Subscribe</button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default withContext(App)
