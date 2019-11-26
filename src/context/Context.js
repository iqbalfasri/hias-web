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
      user: null,
      setUser: () => {},
      isLoading: false,
      setIsLoading: () => {},
      isModalPromo: false,
      setIsModalPromo: () => { },
      totalCart: 0,
      setTotalCart: () => { },
      subTotal: null,
      setSubTotal: () => { }
    }
  }
)