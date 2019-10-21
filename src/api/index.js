import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL

export const fetchBestSellerProduct = () => {
  return axios
          .get(`${BASE_URL}/product/bestSeller`)
          .then((res) => {
            return res.data
          })
}

export const fetchHotProduct = () => {
  return axios
          .get(`${BASE_URL}/product/hotItems`)
          .then((res) => {
            return res.data
          })
}

export const updateWishList = (value) => {
  return axios
          .post(`${BASE_URL}/product/wishList`, value)
          .then((res) => {
            return res.data
          })
}

export const fetchWishList = (id) => {
  return axios
          .get(`${BASE_URL}/product/wishList/${id}`)
          .then((res) => {
            return res.data
          })
}

export const fetchProductById = (id) => {
  return axios
          .get(`${BASE_URL}/product/${id}`)
          .then((res) => {
            return res.data
          })
}

export const addToCart = (value) => {
  return axios
          .post(`${BASE_URL}/product/addToCart`, value)
          .then((res) => {
            return res.data
          })
}