import React, { Component } from 'react'
import { addToCart, fetchWishList } from '../../api'
import ProductCard from '../../components/card/Product'
import { isLogin } from '../../utils/auth'


class Wishlist extends Component {
    state = {
        wishListItems: []
    }

    componentDidMount() {
        if (isLogin()) {
            fetchWishList(localStorage.getItem('userId'))
                .then((res) => {
                    this.setState({
                        wishListItems: res.data
                    })
                })
        } else {
            this.props.history.push('/login')
        }
    }

    isProductWishlisted(id) {
        const { wishListItems } = this.state
        let result = false
        for (let i = 0; i < wishListItems.length; i++) {
            if (wishListItems[i].id === id) {
                result = true
                break;
            }
        }
        return result
    }

    renderProduct() {
        const { wishListItems } = this.state
        if (wishListItems !== 0) {
            return wishListItems.map((product, i) => {
                return (
                    <div className="col-md-3" key={i}>
                        <div style={{ height: "320px" }}>
                            <ProductCard thumbnail={product.thumbnail ? product.thumbnail : 'https://via.placeholder.com/600x600'} loved={this.isProductWishlisted(product.id)} id={product.id} title={product.productName} price={product.price} category={product.categoryName} />
                        </div>
                        <div className="pda--items" >
                            {/* <button
                                style={{ display: "block", margin: "12px auto" }}
                                className="btn btn--blue" onClick={() => this.onClickAddToCart(product)}>Tambah ke Keranjang</button> */}
                        </div>
                    </div >
                )
            })
        } else{
            return(
              <div style={{width:'100%', height:'50%'}}>
              <img style={{width:350, marginLeft:'auto', marginRight:'auto', opacity:0.7}} src={require('../../assets/img/empty-state-01.png')}/>
            </div>
            )
        }
    }

    onClickAddToCart(product) {
        if (isLogin()) {
            addToCart({
                productId: product.productId,
                cartId: localStorage.getItem('userId'),
                amount: 1
            })
                .then((res) => {
                    this.setState({
                        addToCartClicked: true
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            this.props.context.setIsModalSigninPopupOpen(true)
        }
    }



    render() {
        return (
            <div className="content">
                <div className="section-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div>
                                    <h3 className="section-title mb--0">Wishlist </h3>
                                </div>
                            </div>
                        </div>
                        <div className="contianer-review-list" >
                            {this.renderProduct()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wishlist