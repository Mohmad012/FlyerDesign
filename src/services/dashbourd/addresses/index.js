import {localeHandShake} from '@/services/global'
import {axiosES} from '@/utils/axios-algolia'
import axios from 'axios'
import Cookies from 'js-cookie'
import {toast} from 'react-toastify'

export const handleDelete = async params => {
  const {id, mage, token} = params
  try {
    const req = await axios(
      `${process.env.api_baseurl}/customer/address/${id}`,
      {
        method: 'DELETE',
        headers: {
          mage: `Bearer ${mage}`,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )

    return req.data
  } catch (error) {
    console.error('⚠️⚠️ DELETE ADDRESS ERROR:', error.message)
    return error.message
  }
}

export const handleGetAlladdresses = async ({locale, mage}) => {
  try {
    const {token} = await localeHandShake(locale)
    const req = await axios(
      `${process.env.api_baseurl}/customer/addresses/criteria`,
      {
        method: 'GET',
        headers: {
          mage: `Bearer ${mage}`,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ GETTING ADDRESS ERROR:', error.message)
    return error.message
  }
}

export const handleCreateNewAddress = async ({data, token, mage}) => {
  let config = {
    method: 'post',
    url: `/customer/address`,
    headers: {
      Authorization: `Bearer ${token}`,
      mage: `Bearer ${mage}`,
    },
    data: JSON.stringify(data),
  }
  try {
    const req = await axiosES.request(config)
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ CREATE NEW ADDRESS ERROR:', error.message)
    return error.message
  }
}
export const getRegions = async ({locale}) => {
  const {token} = await localeHandShake(locale)
  const mage = Cookies.get('mage')
  let config = {
    method: 'get',
    url: '/regions/sa',
    headers: {
      Authorization: `Bearer ${token}`,
      mage: `Bearer ${mage}`,
    },
  }
  try {
    const req = await axiosES.request(config)
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ GET Cart ERROR:', error.message)
    return error.message
  }
}

export const handleGetCurraddresses = async ({id, locale, mage}) => {
  const {token} = await localeHandShake(locale)
  let config = {
    method: 'get',
    url: `/customer/address/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
      mage: `Bearer ${mage}`,
    },
  }
  try {
    const req = await axiosES.request(config)
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ Getting Address ERROR:', error.message)
    return error.message
  }
}

/// routes
export const handleApiRouteDelete = async params => {
  const {id, mage, locale} = params
  const {token} = await localeHandShake(locale)
  try {
    const req = await axios.post('/api/dashbourd/addresses/delete', {
      id,
      mage,
      token,
    })
    if (req.status === 200) toast.success('Address is Deleted Successfully')
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ MAKE DELETE ADDRESS ERROR:', error.message)
    return error.message
  }
}

export const handleCreateNewAddressApiRoute = async params => {
  const mage = Cookies.get('mage')
  const {data, locale} = params
  const {token} = await localeHandShake(locale)
  try {
    const req = await axios.post('/api/dashbourd/addresses/create', {
      data,
      mage,
      token,
    })
    if (req.status === 200) toast.success('New Address is Created Successfully')
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ CREATE NEW ADDRESS IN API ROUTE ERROR:', error.message)
    return error.message
  }
}

export const handleGettingAlladdressesApiRoute = async params => {
  const mage = Cookies.get('mage')
  const {locale} = params
  try {
    const req = await axios.post('/api/dashbourd/addresses/getalladdresses', {
      locale,
      mage,
    })
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ GETTING ALL ADDRESS IN API ROUTE ERROR:', error.message)
    return error.message
  }
}

export const handleGettingCurraddressesApiRoute = async params => {
  const mage = Cookies.get('mage')
  const {locale, id} = params
  try {
    const req = await axios.post('/api/dashbourd/addresses/getcurraddresses', {
      locale,
      mage,
      id,
    })
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ CREATE NEW ADDRESS IN API ROUTE ERROR:', error.message)
    return error.message
  }
}
