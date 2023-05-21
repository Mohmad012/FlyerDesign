import { axiosES } from "@/utils/axios-algolia";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

/*
01- Create cart
02- Get cart
03- Delete cart
04- Add item to cart
05- Update cart item
06- Delete cart item
07- Apply coupon
08- delete coupon
09- Place order
10- Check cart is active or not
11- merge guest user cart to logged in user cart
*/


// 01- ============= create cart
export const createCart = async (handshake, mage) =>{
  let config = {
    method: 'get',
    url: '/cart/create',
    headers: {
      'Authorization': 'Bearer ' + handshake,
    }
  }

  if (mage){
    config.headers.mage = 'Bearer ' + mage
  }
  console.log('config', config)
  try {
    const req = await axiosES(config)
    console.log('✅✅ Created Cart ', req);
    return {data:req.data, status:req.status, error: null}
  } catch (error) {
    console.error('⚠️⚠️ Create Cart ERROR:', error)
    return {data: null, status:error?.response?.status, error:error.message}
  }
}

// 02- =============  get cart
export const getCart = async (handshake, mage, quote) => {

  let config = {
    method: 'get',
    url: '/cart',
    headers: {
      'Authorization': 'Bearer ' + handshake,
      'quote': 'Bearer ' + quote
    }
  };
  if (mage) {
    config.headers.mage = 'Bearer ' + mage
  }

  try {
    const req = await axiosES(config)
    return { data: req.data, status: req.status, error: null }
  } catch (error) {
    console.error('⚠️⚠️ GET Cart ERROR:', error.message)
    return { data: null, status: error?.response?.status, error: error.message }
  }
}

// 03- ============= Delete cart
export const DeleteCart = async (handshake, mage, quote) => {
  let config = {
    method: 'delete',
    url: '/cart/delete',
    headers: {
      'Authorization': 'Bearer ' + handshake,
      'quote': 'Bearer ' + quote
    },
  };
  if (mage) {
    config.headers.mage = 'Bearer ' + mage
  }

  try {
    const req = await axiosES(config)
    console.log('✅✅  Deleted cart', req.data);
    return { data: req.data, status: req.status, error: null }
  } catch (error) {
    console.error(' Deleted cart ERROR:', error.message)
    return { data: null, status: error?.response?.status, error: error.message }
  }
}

// 04- ============= Add item to cart
export const addItemToCart = async (handshake, mage, quote , sku, qty) => {
  console.log('handshake, mage, quote , sku, qty', handshake, mage, quote, sku, qty)
  let data = JSON.stringify({ sku, qty })
  let config = {
    method: 'post',
    url: '/cart/add',
    headers: {
      'Authorization': 'Bearer ' + handshake,
      'quote': 'Bearer ' + quote
    },
    data: data
  };
  if (mage) {
    config.headers.mage = 'Bearer ' + mage
  }

  try {
    const req = await axiosES(config)
    console.log('✅✅ add Item To Cart Done ', req.data);
    return { data: req.data, status: req.status, error: null }
  } catch (error) {
    console.error('⚠️⚠️ add Item To Cart ERROR:', error.message)
    return { data: null, status: error?.response?.status, error: error.message }
  }
}

// 05- ============= Update cart item
export const updateCartItem = async (handshake, mage, quote, itemId, qty) => {

  let data = JSON.stringify({
    qty, itemId
  }); let config = {
    method: 'put',
    url: '/cart/updateItem',
    headers: {
      'Authorization': 'Bearer ' + handshake,
      'quote': 'Bearer ' + quote
    },
    data: data
  };

  if (mage) {
    config.headers.mage = 'Bearer ' + mage
  }

  try {
    const req = await axiosES(config)
    console.log('✅✅ update Item To Cart Done ', req.data);
    return { data: req.data, status: req.status, error: null }
  } catch (error) {
    console.error('⚠️⚠️ update Item To Cart ERROR:', error.message)
    return { data: null, status: error?.response?.status, error: error.message }
  }
}

// 06- ============= Delete cart item
export const deleteCartItem = async (handshake, mage, quote, itemId) => {
  let data = JSON.stringify({ itemId })
  let config = {
    method: 'delete',
    url: '/cart/deleteItem',
    headers: {
      'Authorization': 'Bearer ' + handshake,
      'quote': 'Bearer ' + quote
    },
    data: data
  };
  if (mage) {
    config.headers.mage = 'Bearer ' + mage
  }

  try {
    const req = await axiosES(config)
    console.log('✅✅ Item Deleted from cart', req.data);
    return { data: req.data, status: req.status, error: null }
  } catch (error) {
    console.error('⚠️⚠️Item Deleted from cart ERROR:', error.message)
    return { data: null, status: error?.response?.status, error: error.message }
  }
}
// 07- ============= Apply coupon code
export const applyCoupon = async (handshake, mage, quote, couponCode) => {

  let data = JSON.stringify({ couponCode })
  let config = {
    method: 'put',
    url: '/cart/applyCoupon',
    headers: {
      'Authorization': 'Bearer ' + handshake,
      'quote': 'Bearer ' + quote
    },
    data: data
  };
  if (mage) {
    config.headers.mage = 'Bearer ' + mage
  }

  try {
    const req = await axiosES(config)
    console.log('✅✅ Coupon applied', req.data);
    return { data: req.data, status: req.status, error: null }
  } catch (error) {
    console.error('⚠️⚠️Coupon applying ERROR:', error.message, error.response.status)
    return { data: null, status: error?.response?.status, error: error.message }
  }
}
// 08- ============= Delete coupon
export const deleteCoupon = async (handshake, mage, quote,couponCode) => {

  let data = JSON.stringify({ couponCode })
  let config = {
    method: 'delete',
    url: '/cart/deleteCoupon',
    headers: {
      'Authorization': 'Bearer ' + handshake,
      'quote': 'Bearer ' + quote
    },
    data: data
  };
  if (mage) {
    config.headers.mage = 'Bearer ' + mage
  }

  try {
    const req = await axiosES(config)
    console.log('✅✅ Delete coupon successfully', req);
    return { data: req.data, status: req.status, error: null }
  } catch (error) {
    console.error('⚠️⚠️Delete coupon ERROR:', error.message)
    return { data: null, status: error?.response?.status, error: error.message }
  }
}

// 09- ============= Place order
export const placeOrder = async (handshake, mage, quote, method, email) => {
  let data = JSON.stringify({
    email,
    paymentMethod: {
      method
    }
  })
  let config = {
    method: 'post',
    url: '/cart/placeOrder',
    maxBodyLength: Infinity,
    headers: {
      'Authorization': 'Bearer ' + handshake,
      'quote': 'Bearer ' + quote
    },
    data: data
  };
  if (mage) {
    config.headers.mage = 'Bearer ' + mage
  }

  try {
    const req = await axiosES(config)
    console.log('✅✅ add Item To Cart Done ', req);
    return { data: req.data, status: req.status, error: null }
  } catch (error) {
    console.error('⚠️⚠️ add Item To Cart ERROR:', error)
    return { data: null, status: error?.response?.status, error: error.message }
  }
}

// 10- ============= Check cart is active or not
export const isActiveCart = async (handshake, quote) => {
  const checkQuote = quote?.match(/^\d+$/)
  try {
    const req = await axiosES.get(`/mstore/quote/is_active/${quote}/${checkQuote ? '0' : '1'}`, {
      headers: {
        'Authorization': `Bearer ${handshake}`
      }
    })
    return { data: req.data, status: req.status, error: null }
  } catch (error) {
    console.error(error);
    return { data: null, status: error?.response?.status, error: error.message }
  }
}

// 11- ============= merge guest user cart to logged in user cart
export const mergeMaskedCart = async (handshake, mage, quote, userId) => {

  try {
    const req = await axiosES.get(`mstore/assign-masked-quote-to-customer/${userId}/${quote}`, {
      headers: {
        'Authorization': 'Bearer ' + handshake,
        'mage': 'Bearer ' + mage
      }
    })
    console.log('mergeMaskedCart', req?.data)
    return { data: req.data, status: req.status, error: null }
  } catch (error) {
    console.error(error);
    return { data: null, status: error?.response?.status, error: error.message }
  }
}
// 12- ============= Delete cart