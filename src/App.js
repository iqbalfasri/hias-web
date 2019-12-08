import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/product/Category";
import SubCategory from "./pages/product/SubCategory";
import Detail from "./pages/product/Detail";
import Cart from "./pages/product/Cart";
import Checkout from "./pages/product/Checkout";
import ThankYou from "./pages/ThankYou";
import Wallet from "./pages/Wallet";
import DashboardWallet from "./pages/Wallet/Dashboard";
import Login from "./pages/auth/Login";
import Inspiration from "./pages/Inspiration";
import Search from "./pages/Search";
import Wishlist from "./pages/product/Wishlist";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/Articles/AboutUs";
import ContactUs from "./pages/Articles/ContactUs";
import FAQ from "./pages/Articles/FAQ";
import Privacy from "./pages/Articles/Privacy";
import Terms from "./pages/Articles/Terms";
import DeliveryTerms from "./pages/Articles/DeliveryTerms";
import Refund from "./pages/Articles/Refund";
import Newsletter from "./pages/Articles/Newsletter";
import StoreLocation from "./pages/Articles/StoreLocation";
import Promo from "./pages/Articles/Promo";
import DetailPromo1 from "./pages/Articles/DetailPromo1";
import Event from "./pages/Articles/Event";
import News from "./pages/Articles/News";
import Order from "./pages/product/Order";
import OrderDetail from "./pages/product/OrderDetail";
import AllProducts from './pages/product/AllProducts';

import ForgotPassword from "./pages/auth/ForgotPassword";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Modal from "./components/layout/Modal";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Register from "./pages/auth/Register";
import Checkbox from "./components/form/Checkbox";
import { withContext } from "./context/withContext";
import DetailInspiration from "./pages/Inspiration/DetailInspiration";
import Review from "./pages/Review/Review";
import AddReview from "./pages/Review/AddReview";
import AllHotProducts from "./pages/product/AllHotProducts";
import AllBestProducts from "./pages/product/AllBestProducts";

import { getCart } from "./api";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      username: "",
      password: "",
      phone: "",
      isSigningUp: false,
      totalCart: 0
    };
  }

  componentDidMount() {
    const promo = localStorage.getItem("promo");
    if (!promo) {
      this.props.context.setIsModalPromo(true);
    }

    // get total cart
    let userId = localStorage.getItem("userId");
    if (userId !== null) {
      getCart(userId)
        .then(res => {
          this.props.context.setTotalCart(res.data.listItems.length);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  onCloseModalPromo() {
    localStorage.setItem("promo", "true");
    this.props.context.setIsModalPromo(false);
  }

  handleLogout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("userProfile");
    window.location.href = "/";
  }

  render() {
    const {
      isModalSigninPopupOpen,
      setIsModalSigninPopupOpen,
      isModalSignupPopupOpen,
      setIsModalSignupPopupOpen,
      isLoading,
      isModalPromo,
      modalLogout,
      setModalLogout
    } = this.props.context;

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/faq" component={FAQ} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/deliveryterms" component={DeliveryTerms} />
          <Route path="/refund" component={Refund} />
          <Route path="/newsletter" component={Newsletter} />
          <Route path="/storelocation" component={StoreLocation} />
          <Route path="/thank-you" component={ThankYou} />
          <Route path="/wallet" component={Wallet} exact={true} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/inspiration" component={Inspiration} exact={true} />
          <Route path="/inspiration/detail/:id" component={DetailInspiration} />
          <Route path="/wallet/dashboard" component={DashboardWallet} />
          <Route path="/products/hot" component={AllHotProducts} exact={true} />
          <Route path="/products/all" component={AllProducts} exact={true} />
          <Route
            path="/products/best"
            component={AllBestProducts}
            exact={true}
          />
          <Route path="/products/search" component={Search} exact={true} />
          <Route path="/products/detail/:id" component={Detail} exact={true} />
          <Route
            path="/products/:category"
            component={Category}
            exact={false}
          />
          <Route
            path="/products/:category/:subCategory"
            component={SubCategory}
          />
          <Route path="/order" component={Order} exact={true} />
          <Route path="/order/detail/:id" component={OrderDetail} />
          <Route path="/promo" component={Promo} />
          <Route path="/DetailPromo1" component={DetailPromo1} />
          <Route path="/news" component={News} />
          <Route path="/event" component={Event} />
          <Route path="/review" component={Review} exact={true} />
          <Route path="/review/add" component={AddReview} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        <Modal
          isOpen={isModalSigninPopupOpen}
          onCloseModal={() => setIsModalSigninPopupOpen(false)}
        >
          <div style={{ padding: "3em" }}>
            <Signin />
          </div>
        </Modal>
        <Modal
          isOpen={isModalSignupPopupOpen}
          onCloseModal={() => setIsModalSignupPopupOpen(false)}
        >
          <Signup />
        </Modal>
        <Modal isOpen={isLoading}>
          <h1 className="text--center mb--0">PROCESSING...</h1>
        </Modal>
        <Modal
          isOpen={isModalPromo}
          onCloseModal={() => this.onCloseModalPromo()}
        >
          <Signup />
        </Modal>
        <Modal isOpen={modalLogout} onCloseModal={() => setModalLogout(false)}>
          <h3 className="text--center mb-2">Apakah anda yakin ingin keluar?</h3>
          <div className="row align-items-center" style={{ justifyContent: "space-evenly" }}>
            <button className="btn btn--blue" onClick={() => this.handleLogout()}>Iya</button>
            <button className="btn btn--primary" onClick={() => setModalLogout(false)}>Tidak</button>
          </div>
        </Modal>
        <div
          className="align-items-center"
          style={{
            width: "100%",
            height: 30,
            position: "fixed",
            bottom: 0,
            backgroundColor: "#6d6e70",
            color: "#fff",
            zIndex: 100
          }}
        >
          <marquee
            style={{
              height: "100%",
              paddingTop: 5,
              display: "flex",
              flexDirection: "row",
              whiteSpace: "no-wrap",
              overflow: "hidden"
            }}
          >
            <h3
              className="text--size-14 mr--2"
              style={{
                display: "inline-block",
                animation: "marquee 8s linear infinite"
              }}
            >
              Masukkan kode promo 'WEBSTOREHIASYUK' untuk mendapatkan potongan
              harga senilai IDR 25.000
            </h3>
            <h3
              className="text--size-14 mr--2"
              style={{
                display: "inline-block",
                animation: "marquee 8s linear infinite"
              }}
            >
              YEAR END SALE UP TO 80% ALL ITEM
            </h3>
            <h3
              className="text--size-14 mr--2"
              style={{
                display: "inline-block",
                animation: "marquee 8s linear infinite"
              }}
            >
              Produk Terbaru: Set Soffa Allete dengan harga IDR 2.500.000
            </h3>
            <h3
              className="text--size-14 mr--2"
              style={{
                display: "inline-block",
                animation: "marquee 8s linear infinite"
              }}
            >
              Masukkan kode promo 'WEBSTOREHIASYUK' untuk mendapatkan potongan
              harga senilai IDR 25.000
            </h3>
            <h3
              className="text--size-14 mr--2"
              style={{
                display: "inline-block",
                animation: "marquee 8s linear infinite"
              }}
            >
              YEAR END SALE UP TO 80% ALL ITEM
            </h3>
            <h3
              className="text--size-14 mr--2"
              style={{
                display: "inline-block",
                animation: "marquee 8s linear infinite"
              }}
            >
              Produk Terbaru: Set Soffa Allete dengan harga IDR 2.500.000
            </h3>
            <h3
              className="text--size-14 mr--2"
              style={{
                display: "inline-block",
                animation: "marquee 8s linear infinite"
              }}
            >
              Masukkan kode promo 'WEBSTOREHIASYUK' untuk mendapatkan potongan
              harga senilai IDR 25.000
            </h3>
            <h3
              className="text--size-14 mr--2"
              style={{
                display: "inline-block",
                animation: "marquee 8s linear infinite"
              }}
            >
              YEAR END SALE UP TO 80% ALL ITEM
            </h3>
            <h3
              className="text--size-14 mr--2"
              style={{
                display: "inline-block",
                animation: "marquee 8s linear infinite"
              }}
            >
              Produk Terbaru: Set Soffa Allete dengan harga IDR 2.500.000
            </h3>
            <h3
              className="text--size-14 mr--2"
              style={{
                display: "inline-block",
                animation: "marquee 8s linear infinite"
              }}
            >
              Masukkan kode promo 'WEBSTOREHIASYUK' untuk mendapatkan potongan
              harga senilai IDR 25.000
            </h3>
            <h3
              className="text--size-14 mr--2"
              style={{
                display: "inline-block",
                animation: "marquee 8s linear infinite"
              }}
            >
              YEAR END SALE UP TO 80% ALL ITEM
            </h3>
            <h3
              className="text--size-14 mr--2"
              style={{
                display: "inline-block",
                animation: "marquee 8s linear infinite"
              }}
            >
              Produk Terbaru: Set Soffa Allete dengan harga IDR 2.500.000
            </h3>
            <h3
              className="text--size-14 mr--2"
              style={{
                display: "inline-block",
                animation: "marquee 8s linear infinite"
              }}
            >
              Masukkan kode promo 'WEBSTOREHIASYUK' untuk mendapatkan potongan
              harga senilai IDR 25.000
            </h3>
            <h3
              className="text--size-14 mr--2"
              style={{
                display: "inline-block",
                animation: "marquee 8s linear infinite"
              }}
            >
              YEAR END SALE UP TO 80% ALL ITEM
            </h3>
            <h3
              className="text--size-14 mr--2"
              style={{
                display: "inline-block",
                animation: "marquee 8s linear infinite"
              }}
            >
              Produk Terbaru: Set Soffa Allete dengan harga IDR 2.500.000
            </h3>
          </marquee>
        </div>
      </div>
    );
  }
}

export default withContext(App);
