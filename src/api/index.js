import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchBanner = () => {
  return axios
    .get(`${BASE_URL}/getAllBanner`)
    .then((res) => {
      return res.data
    })
}

export const fetchBestSellerProduct = () => {
<<<<<<< HEAD
  return axios.get(`${BASE_URL}/product/bestSeller`).then(res => {
    return res.data;
  });
};
=======
  return axios
    .get(`${BASE_URL}/product/bestSeller`)
    .then((res) => {
      return res.data
    })
}
>>>>>>> c15ce430ffd577797f15157e0363109cedd3b9c1

export const fetchHotProduct = () => {
  return axios.get(`${BASE_URL}/product/hotItems`).then(res => {
    return res.data;
  });
};

export const updateWishList = value => {
  return axios.post(`${BASE_URL}/product/wishList`, value).then(res => {
    return res.data;
  });
};

export const fetchWishList = id => {
  return axios
    .get(`${BASE_URL}/product/wishList/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      return res.data;
    });
};

export const fetchProductById = id => {
  return axios.get(`${BASE_URL}/product/${id}`).then(res => {
    return res.data;
  });
};
export const getCart = userId => {
  return axios
    .get(`${BASE_URL}/product/hotItems`)
    .then((res) => {
      return res.data
    })
}

export const fetchAllInspiration = () => {
  return axios
    .get(`${BASE_URL}/getAllInspiration`)
    .then((res) => {
      return res.data
    })
}

export const removeProductOnCart = productId => {
  return axios
    .post(`${BASE_URL}/product/wishList`, value)
    .then((res) => {
      return res.data
    })
}

export const removeWishlist = wishListId => {
  return axios
    .get(`${BASE_URL}/product/wishList/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    .then((res) => {
      return res.data
    })
}

export const registUserToCart = userId => {
  return axios
    .get(`${BASE_URL}/product/${id}`)
    .then((res) => {
      return res.data
    })
}

export const fetchVariantById = (id) => {
  return axios
    .get(`${BASE_URL}/product/detail/${id}/variant`)
    .then((res) => {
      return res.data
    })
}

export const fetchColorById = (id) => {
  return axios
    .get(`${BASE_URL}/product/detail/${id}/color`)
    .then((res) => {
      return res.data
    })
}

export const getCart = (userId) => {
  return axios
    .get(`${BASE_URL}/product/${userId}/getCartByUserId`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    .then((res) => {
      return res.data
    })
}

export const onPlaceOrder = value => {
  return axios
    .delete(`${BASE_URL}/product/${productId}/deleteItemCart`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    .then((res) => {
      return res.data
    })
}

export const addUserAddress = value => {
  return axios
    .delete(`${BASE_URL}/product/wishList/${wishListId}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    .then((res) => {
      return res.data
    })
}

export const addToCart = async (value) => {
  axios
    .post(`${BASE_URL}/product/addToCart`, { userId: localStorage.getItem('userId') }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    .then(res => {
      return res.data;
    });
};

export const getUserAddress = userId => {
  return axios
    .post(`${BASE_URL}/product/order`, value, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    .then((res) => {
      return res.data
    })
}

export const getVANumberBNI = price => {
  return axios
    .post(`${BASE_URL}/product/userAddress`, value, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    .then((res) => {
      return res.data
    })
}



export const getVANumberCIMB = price => {
  return axios
    .get(`${BASE_URL}/product/${userId}/getUserAddressByUserId`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    .then((res) => {
      return res.data
    })
}

export const getVANumberBNI = (price) => {
  return axios
    .post('https://my.ipaymu.com/api/getbniva', {
      key: '2BC703E2-DD4C-46F4-B9A5-67295C86AB71',
      price,
      uniqid: 2019337001001,
      notify_url: 'http://websiteanda.com/notify.php'
    })
    .then((res) => {
      return res.data
    })
}

export const getVANumberCIMB = (price) => {
  return axios
    .post('https://my.ipaymu.com/api/getva', {
      key: '2BC703E2-DD4C-46F4-B9A5-67295C86AB71',
      price,
      uniqid: 201933700100,
      notify_url: 'http://websiteanda.com/notify.php'
    })
    .then((res) => {
      return res.data
    })
}

export const searchByName = (productName) => {
  return axios
    .post(`${BASE_URL}/product/searchName/${productName}`)
    .then((res) => {
      return res.data
    })
}
