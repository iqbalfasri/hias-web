import { createContext } from 'react'

export const Context = createContext(
  {
    context: {
      bestProducts: [],
      setBestProducts: () => {},
      hotProducts: [],
      setHotProducts: () => {},
      isModalSigninPopupOpen: false,
      setIsModalSigninPopupOpen: () => { },
      isModalSignupPopupOpen: false,
      setIsModalSignupPopupOpen: () => { },
      wishList: [],
      setWishList: () => {},
      isLoading: false,
      setIsLoading: () => {},
      isModalPromo: false,
      setIsModalPromo: () => { },
      totalCart: 0,
      setTotalCart: () => { },
      subTotal: null,
      setSubTotal: () => { },
      userProfile: null,
      setUserProfile: () => { },
      userId: null,
      setUserId: () => { }
    }
  }
)