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
      isModalSignupPopupOpen: false,
      setIsModalSignupPopupOpen: this.setIsModalSignupPopupOpen,
      wishList: [],
      setWishList: this.setWishList,
      isLoading: false,
      setIsLoading: this.setIsLoading,
      isModalPromo: false,
      setIsModalPromo: this.setIsModalPromo,
      totalCart: 0,
      setTotalCart: this.setTotalCart,
      userProfile: null,
      setUserProfile: this.setUserProfile,
      userId: null,
      setUserId: this.setUserId
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

  setIsModalSignupPopupOpen = (value) => {
    this.setState({ isModalSignupPopupOpen: value })
  }

  setWishList = (wishList) => {
    this.setState({ wishList: [...this.state.wishList, wishList] })
  }

  setUserProfile = (userProfile) => {
    this.setState({ userProfile: userProfile })
  }

  setIsLoading = (isLoading) => {
    this.setState({ isLoading })
  }

  setIsModalPromo = (isModalPromo) => {
    this.setState({ isModalPromo })
  }

  setTotalCart = (total) => {
    this.setState({ totalCart: total })
  }

  setUserId = (userId) => {
    this.setState({ userId })
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