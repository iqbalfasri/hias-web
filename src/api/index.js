import axios from "axios";

export const BASE_URL = "https://api-corehias.herokuapp.com";

export const fetchBanner = () => {
  return axios.get(`${BASE_URL}/getAllBanner`).then(res => {
    return res.data;
  });
};

export const fetchBestSellerProduct = () => {
  return axios.get(`${BASE_URL}/product/bestSeller`).then(res => {
    return res.data;
  });
};

export const fetchHotProduct = () => {
  return axios.get(`${BASE_URL}/product/hotItems`).then(res => {
    return res.data;
  });
};

export const fetchAllProducts = () => {
  return axios.get(`${BASE_URL}/product/getProduct`).then(res => {
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
    .get(`${BASE_URL}/product/${userId}/getCartByUserId`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      return res.data;
    });
};

export const fetchAllInspiration = () => {
  return axios.get(`${BASE_URL}/getAllInspiration`).then(res => {
    return res.data;
  });
};

export const removeProductOnCart = productId => {
  return axios
    .delete(`${BASE_URL}/product/${productId}/deleteItemCart`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      return res.data;
    });
};

export const removeWishlist = id => {
  return axios
    .delete(`${BASE_URL}/product/wishList/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      return res.data;
    });
};

export const registUserToCart = userId => {
  return axios
    .post(
      `${BASE_URL}/product/addToCart`,
      { userId: localStorage.getItem("userId") },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      }
    )
    .then(res => {
      return res.data;
    });
};

export const fetchVariantById = id => {
  return axios.get(`${BASE_URL}/product/detail/${id}/variant`).then(res => {
    return res.data;
  });
};

export const fetchColorById = id => {
  return axios.get(`${BASE_URL}/product/detail/${id}/color`).then(res => {
    return res.data;
  });
};

export const onPlaceOrder = value => {
  return axios
    .post(`${BASE_URL}/product/order`, value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      return res.data;
    });
};

export const addUserAddress = value => {
  return axios
    .post(`${BASE_URL}/product/userAddress`, value, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      return res.data;
    });
};

export const getUserAddress = userId => {
  return axios
    .get(`${BASE_URL}/product/${userId}/getUserAddressByUserId`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      return res.data;
    });
};

export const addToCart = async value => {
  return axios
    .post(`${BASE_URL}/product/addItemToCart`, value, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => {
      return res.data;
    });
};

export const getVANumberBNI = price => {
  return axios
    .post("https://my.ipaymu.com/api/getbniva", {
      key: "2BC703E2-DD4C-46F4-B9A5-67295C86AB71",
      price,
      uniqid: 2019337001001,
      notify_url: "http://websiteanda.com/notify.php"
    })
    .then(res => {
      return res.data;
    });
};

export const getVANumberCIMB = price => {
  return axios
    .post("https://my.ipaymu.com/api/getva", {
      key: "2BC703E2-DD4C-46F4-B9A5-67295C86AB71",
      price,
      uniqid: 201933700100,
      notify_url: "http://websiteanda.com/notify.php"
    })
    .then(res => {
      return res.data;
    });
};

export const searchByName = productName => {
  return axios
    .post(`${BASE_URL}/product/searchName/${productName}`)
    .then(res => {
      return res.data;
    });
};

export const fetchProductByInspirationId = id => {
  return axios.get(`${BASE_URL}/inspration/${id}/product`).then(res => {
    return res.data;
  });
};

export const fetchProductByTipsTrickId = id => {
  return axios.get(`${BASE_URL}/tips/${id}/product`).then(res => {
    return res.data;
  });
};

export const getOrderProgress = userId => {
  return axios
    .get(`${BASE_URL}/product/${userId}/getOrderByUserId`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      return res.data;
    });
};

export const getOrderById = orderId => {
  return axios
    .get(`${BASE_URL}/product/detail/${orderId}/order`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      return res.data;
    });
};

export const requestCoupon = couponCode => {
  return axios
    .get(`${BASE_URL}/product/coupon/${couponCode}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      return res.data;
    });
};

export const getCityFromRajaOngkir = () => {
  return axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://pro.rajaongkir.com/api/city`,
      {
        headers: {
          key: "51f91963f9dcefe04e54822191cf71c5"
        }
      }
    )
    .then(res => {
      return res.data;
    });
};

export const fetchOngkir = dataObj => {
  return axios
    .post(
      `https://cors-anywhere.herokuapp.com/https://pro.rajaongkir.com/api/cost`,
      dataObj,
      {
        headers: {
          "Content-Type": "application/json",
          key: "51f91963f9dcefe04e54822191cf71c5"
        }
      }
    )
    .then(res => {
      return res.data;
      // return res.data.rajaongkir.results[0].costs[0].cost[0].value;
    });
};

export const getUserProfile = token => {
  return axios
    .get(`${BASE_URL}/member/meProfile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      return res.data;
    });
};

export const userSignin = (username, password) => {
  return axios
    .post(
      `${BASE_URL}/authenticate/login`,
      { username, password },
      { headers: { "Content-Type": "application/json" } }
    )
    .then(res => {
      return res.data;
    });
};

export const userSignup = value => {
  return axios.post(`${BASE_URL}/register`, value).then(res => {
    return res.data;
  });
};

export const fetchProductPilihan = () => {
  return axios.get(`${BASE_URL}/product/productPilihan`).then(res => {
    return res.data;
  });
};

export const fetchAllProductPilihan = () => {
  return axios.get(`${BASE_URL}/product/getAllProductPilihan`).then(res => {
    return res.data;
  });
};

export const getProductByColour = (idCategory, color) => {
  return axios
    .get(`${BASE_URL}/product/${idCategory}/${color}`)
    .then(res => res.data);
};

export const getProductByDiscount = idCategory => {
  return axios
    .get(`${BASE_URL}/product/${idCategory}/diskon`)
    .then(res => res.data);
};

export const fetchRelatedProductCart = () => {
  return axios.get(`${BASE_URL}/product/popup`).then(res => res.data);
};

export const fetchProductDiscount = () => {
  return axios.get(`${BASE_URL}/product/getAllDiscount`).then(res => res.data);
};

export const fetchRelatedProductById = productId => {
  return axios.get(`${BASE_URL}/product/detail/${productId}/related`).then(res => res.data)
}

export const fetchRelatedProductByCatId = catId => {
  return axios.get(`${BASE_URL}/product/relatedCategoryId/${catId}`).then(res => res.data)
}