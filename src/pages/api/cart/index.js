import { DeleteCart, addItemToCart, applyCoupon, createCart, deleteCartItem, deleteCoupon, getCart, isActiveCart, mergeMaskedCart, placeOrder, updateCartItem } from '@/services/cart/cart';
import cookie from 'cookie';

const handleCart = async (req, res) => {
  const { handshake, mage, quote } = req.headers.cookie ? cookie.parse(req.headers.cookie) : {}
  const reqMethod = req.query.m
  const { sku, qty, itemId, couponCode, method, email, userId } = req.body
  console.log('****** ', { handshake, mage, quote, sku, qty, itemId, couponCode, userId })

  if (reqMethod === 'createCart') {
    const { data, status, error } = await createCart(handshake, mage)
    return res.status(status).json({ data, error, status })
  }

  if (reqMethod === 'getCart') {
    const { data, status, error } = await getCart(handshake, mage, quote)
    return res.status(status).json({ data, error, status })
  }

  if (reqMethod === 'deleteCart') {
    const { data, status, error } = await DeleteCart(handshake, mage, quote)
    return res.status(status).json({ data, error, status })
  }

  if (reqMethod === 'addItemToCart') {
    const { data, status, error } = await addItemToCart(handshake, mage, quote, sku, qty)
    return res.status(status).json({ data, error, status })
  }

  if (reqMethod === 'updateItemToCart') {
    const { data, status, error } = await updateCartItem(handshake, mage, quote, itemId, qty)
    return res.status(status).json({ data, error, status })
  }

  if (reqMethod === 'deleteCartItem') {
    const { data, status, error } = await deleteCartItem(handshake, mage, quote, itemId)
    return res.status(status).json({ data, error, status })
  }

  if (reqMethod === 'applyCoupon') {
    const { data, status, error } = await applyCoupon(handshake, mage, quote, couponCode)
    return res.status(status).json({ data, error, status })
  }

  if (reqMethod === 'deleteCoupon') {
    const { data, status, error } = await deleteCoupon(handshake, mage, quote, couponCode)
    return res.status(status).json({ data, error, status })
  }

  if (reqMethod === 'placeOrder') {
    const { data, status, error } = await placeOrder(handshake, mage, quote, couponCode, method, email)
    return res.status(status).json({ data, error, status })
  }

  if (reqMethod === 'is_active') {
    const { data, status, error } = await isActiveCart(handshake, quote)
    return res.status(status).json({ data, error, status })
  }

  if (reqMethod === 'assign-masked-quote-to-customer') {
    const { data, status, error } = await mergeMaskedCart(handshake,mage, quote, userId)
    return res.status(status).json({ data, error, status })
  }

}

export default handleCart