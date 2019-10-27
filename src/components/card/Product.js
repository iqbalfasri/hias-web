import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faChevronRight, faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'

import { isLogin } from '../../utils/auth'
import { formatMoneyWithoutSymbol } from '../../utils/money'
import { withContext } from '../../context/withContext'
import { updateWishList } from '../../api'

import './Product.scss'

class ProductCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoved: false
    }
  }

  addToWishList(id) {
    if (isLogin()) {
      const value = {
        productId: id,
        userId: localStorage.getItem('userId')
      }
      updateWishList(value)
        .then((res) => {
          this.props.context.setWishList(value)
          this.setState({
            isLoved: true
          })
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      this.props.context.setIsModalSigninPopupOpen(true)
    }
  }

  renderLovedIcon () {
    const { loved, id } = this.props
    const { isLoved } = this.state
    return loved || isLoved ? (
      <div className="product-wish-list">
        <span className="text--size-1-5"><FontAwesomeIcon icon={fasHeart} /></span>
      </div>  
    ) : (
      <div className="product-wish-list" onClick={() => this.addToWishList(id)}>
        <span className="text--size-1-5"><FontAwesomeIcon icon={faHeart} /></span>
      </div>  
    )
  }

  render() {
    const { category, title, price, id, thumbnail } = this.props
    return (
        <div className="product-card">
          <Link to={`/products/detail/${id}`}>
            <div className="product-card-image">
              {/* <img src={thumbnail} alt=""/> */}
              <img src={require('../../assets/img/Banner-SignIn.png')} alt=""/>
            </div>
          </Link>
          <div className="fx justify-content-between product-card-footer">
            <div className="product-card-wrapper">
              <div className="fx justify-content-between fx-no-wrap">
                <Link to={`/products/detail/${id}`}>
                  <div>
                    <p className="mb--0 text--color-gray">{ category }</p>
                    <p className="mb--0 text--color-black"><strong>{ title }</strong></p>
                  </div>
                </Link>
                { this.renderLovedIcon() }
              </div>
              <Link to={`/products/detail/${id}`}>
                <p className="text--color-orange mb--0"><strong>IDR{ formatMoneyWithoutSymbol(price) }</strong></p>
              </Link>
            </div>
          </div>
        </div>
    )
  }
}

export default withContext(ProductCard)