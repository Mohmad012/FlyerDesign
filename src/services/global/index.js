import {axiosES} from '@/utils/axios-algolia'
import axios from 'axios'
import Cookies from 'js-cookie'

// get home page structure data
export const getHomePageStracture = async () => {
  try {
    const getStructure = await axios.get(
      'https://v2.voucherek.com/media/json/home.json'
    )
    return getStructure.data
  } catch (error) {
    return error
  }
}

export const localeHandShake = async locale => {
  const transformLocale = locale.toLowerCase().replaceAll('-', '_')
  // process.env.NEXT_PUBLIC_API_BASEURL
  // console.log('url', process.env.NEXT_PUBLIC_API_BASEURL + '/handshake')
  try {
    const req = await axios.post(
      process.env.NEXT_PUBLIC_API_BASEURL + '/handshake',
      {
        store: transformLocale,
      }
    )
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ Handshake ERROR:', error.message)
    return error.message
  }
}

export const getCategoryData = async token => {
  if (token) {
    try {
      const req = await axios(process.env.api_baseurl + '/categories', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      return req.data
    } catch (error) {
      console.error('⚠️⚠️ GET PRODUCTS ERROR:', error.message)
      return error.message
    }
  }
}

// get token from API endpoint handshake
export const getToken = async locale => {
  try {
    const {data} = await axios(`/api/handshake?locale=${locale}`)
    data.token && Cookies.set('handshake', data.token)
    return data.token
  } catch (error) {
    console.error('⚠️⚠️ GET Token ERROR:', error.message)
    return null
  }
}
