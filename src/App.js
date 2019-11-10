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
import AboutUs from "./pages/Articles/AboutUs"
import FAQ from './pages/Articles/FAQ'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Modal from './components/layout/Modal'
import Signin from './components/auth/Signin'
import { withContext } from './context/withContext'

class App extends Component {
  render () {
    const { isModalSigninPopupOpen, setIsModalSigninPopupOpen, isLoading } = this.props.context
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/about" component={AboutUs}/>
          <Route path="/faq" component={FAQ}/>
          <Route path="/thank-you" component={ThankYou}/> 
          <Route path="/wallet" component={Wallet} exact={true} /> 
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/inspiration" component={Inspiration} />
          <Route path="/wallet/dashboard" component={DashboardWallet}/>          
          <Route path="/products/search" component={Search} exact={true} />
          <Route path="/products/detail/:id" component={Detail} exact={true} />
          <Route path="/products/:category" component={Category} exact={true} />
          <Route path="/products/:category/:subCategory" component={SubCategory} />
          <Route component={NotFound}/>
        </Switch>
        <Footer />
        <Modal isOpen={isModalSigninPopupOpen} onCloseModal={() => setIsModalSigninPopupOpen(false)}>
          <Signin />
        </Modal>
        <Modal isOpen={isLoading}>
          <h1 className="text--center mb--0">
            PROCESSING...
          </h1>
        </Modal>
      </div>
    )
  }
}

export default withContext(App)
