import {axiosES} from '@/utils/axios-algolia'
import axios from 'axios'

/*
==== 1---> Handshake api
==== 2---> Verify user api
==== 4---> Get single product by sku
==== 5---> Get products bulk by skus
*/

// 1- handShake current user locale and city
export const localeHandShake = async locale => {
  const transformLocale = locale.toLowerCase().replaceAll('-', '_')
  try {
    const req = await axios(process.env.api_baseurl + '/handshake', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        store: transformLocale,
      }),
    })
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ Handshake ERROR:', error.message)
    return error.message
  }
}

// 2- Verify user api
export const verifyUser = async token => {
  try {
    const req = await axiosES('/verify', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ Token ERROR:', error.message)
    return error.message
  }
}

// 3- Get single product by SKU
export const getSingleProductBySku = async (sku, token) => {
  try {
    const req = await axiosES.get(`/search/get-product-by-sku?sku=${sku}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ GET PRODUCT ERROR:', error.message)
    return error.message
  }
}

// 4- Get products bulk by SKUs
export const getProductsBulkBySKU = async (skuBulk, token) => {
  const transformSKus = skuBulk
    ? skuBulk.map(sku => 'sku=' + sku).join('&')
    : ''
  try {
    const req = await axiosES.get(
      `/search/v2/get-products-by-skus?${transformSKus}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ GET PRODUCTS ERROR:', error.message)
    return error.message
  }
}
