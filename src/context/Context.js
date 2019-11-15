import { createContext } from 'react'

export const Context = createContext(
  {
    context: {
      bestProducts: [],
      setBestProducts: () => {},
      hotProducts: [],
      setHotProducts: () => {},
      isModalSigninPopupOpen: false,
      setIsModalSigninPopupOpen: () => {},
      wishList: [],
      setWishList: () => {},
      user: null,
      setUser: () => {},
      isLoading: false,
      setIsLoading: () => {},
      isModalPromo: false,
      setIsModalPromo: () => {}
    }
  }
)