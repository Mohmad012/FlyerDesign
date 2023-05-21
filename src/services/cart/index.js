
import { store } from "@/lib/redux";
import { deleteCart, getAllCartItems } from "@/lib/redux/slices/cart";
import axios from "axios";
import Cookies from "js-cookie";

export const getAllTokens = () => {
  const TOKEN = Cookies.get('handshake')
  const QUOTE = Cookies.get('quote')
  const MAGE = Cookies.get('mage')
  return { handshake: TOKEN, quote: QUOTE, mage: MAGE }

}





export const CREATE_CART = async () =>{
  const req = await axios.get('/api/cart?m=createCart')
  return req.data
}

export const GET_CART = async () =>{
  const req = await axios.get('/api/cart?m=getCart')
  if(req.data){
    store.dispatch(getAllCartItems(req?.data?.data))
  }
  return req.data
}

export const DELETE_CART = async () =>{
  const req = await axios.delete('/api/cart?m=deleteCart')
  if(req.data){
    store.dispatch(deleteCart())
  }
  return req.data
}

export const ADD_ITEM_TO_CART = async (sku, qty) =>{
  const req = await axios.post('/api/cart?m=addItemToCart', {sku, qty})
  return req.data
}

export const UPDATE_ITEM_TO_CART = async (itemId, qty) =>{
  const req = await axios.post('/api/cart?m=updateItemToCart', {itemId, qty})
  return req.data
}

export const DELETE_CART_ITEM = async (itemId) =>{
  console.log('itemId', itemId)
  const req = await axios.post('/api/cart?m=deleteCartItem', {itemId})
  return req.data
}

export const APPLY_COUPON = async (couponCode) =>{
  console.log('couponCode', couponCode)
  const req = await axios.post('/api/cart?m=applyCoupon', {couponCode})
  console.log(req)
  return req.data
}

export const DELETE_COUPON = async (couponCode) =>{
  console.log('couponCode', couponCode)
  const req = await axios.post('/api/cart?m=deleteCoupon', {couponCode})
  return req.data
}

export const PLACE_ORDER = async (method, email) =>{
  console.log('method, email', method, email)
  const req = await axios.post('/api/cart?m=placeOrder', {method, email})
  return req.data
}

export const IS_ACTIVE_CART = async () =>{
  const req = await axios.get('/api/cart?m=is_active')
  return req.data
}

export const MERGE_MASKED_CART = async (userId) =>{
  console.log('userId',userId)
  const req = await axios.post('/api/cart?m=assign-masked-quote-to-customer', {userId})
  return req.data
}
