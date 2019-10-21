import React, { Component } from 'react'
import { Context } from './Context'

export default class ContextProvider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      bestProducts: [],
      setBestProducts: this.setBestProducts,
      hotProducts: [],
      setHotProducts: this.setHotProducts,
      isModalSigninPopupOpen: false,
      setIsModalSigninPopupOpen: this.setIsModalSigninPopupOpen,
      wishList: [],
      setWishList: this.setWishList,
      user: null,
      setUser: this.setUser,
    }
  }

  setBestProducts = (bestProducts) => {
    this.setState({ bestProducts })
  }

  setHotProducts = (hotProducts) => {
    this.setState({ hotProducts })
  }

  setIsModalSigninPopupOpen = (value) => {
    this.setState({ isModalSigninPopupOpen: value })
  }

  setWishList = (wishList) => {
    this.setState({ wishList: [...this.state.wishList, wishList] })
  }

  setUser = (user) => {
    this.setState({ user })
  }

  render () {
    return (
      <Context.Provider value={{
        context: {
          ...this.state
        }
      }}>
        { this.props.children }
      </Context.Provider>
    )
  }
}