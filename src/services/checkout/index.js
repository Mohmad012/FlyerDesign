import { store } from "@/lib/redux"
import { setBillingAddress } from "@/lib/redux/slices/checkout"
import { axiosES } from "@/utils/axios-algolia"
import Cookies from "js-cookie"
import { getAllTokens } from "../cart"
import axios from "axios"




export const getRegions = async () => {
  const { handshake } = getAllTokens()

  let config = {
    method: 'get',
    url: '/regions/sa',
    headers: {
      'Authorization': 'Bearer ' + handshake
    }
  };
  try {
    const req = await axiosES.request(config)
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ GET Cart ERROR:', error.message)
    return error.message
  }
}

export const setShip_BillAddress = async (address) => {
  const { handshake, quote } = getAllTokens()
  const {
    region_id,
    street,
    telephone,
    city,
    firstname,
    lastname,
    email,
    region,
    region_code,
    country_id
  } = address
  const validateTelephone = telephone.length < 12 && telephone.toString().startsWith('05') ? telephone.replace('05', '9965') : telephone

  const data = {
    addressInformation: {
      shipping_address: {
        region: region.region || region,
        region_id: +region_id,
        region_code: region?.region_code || region_code,
        "country_id": country_id || "SA",
        street: Array.isArray(street) ? street : [street || 'string'],
        telephone: validateTelephone,
        city: city,
        firstname: firstname,
        lastname: lastname,
        email: email,
        postcode: 'string'
      },
      "billing_address": {
        region: region.region || region,
        region_id: +region_id,
        region_code: region?.region_code || region_code,
        "country_id": "SA",
        street: Array.isArray(street) ? street : [street || 'string'],
        telephone: validateTelephone,
        city: city,
        firstname: firstname,
        lastname: lastname,
        email: email,
        postcode:'string'
      },
      shipping_method_code: "flatrate",
      shipping_carrier_code: "flatrate"
    }
  }
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: '/cart/shippingAddress',
    headers: {
      'Authorization': 'Bearer ' + handshake,
      'quote': 'Bearer ' + quote
    },
    data: JSON.stringify(data)
  };
  try {
    const req = await axiosES(config)
    console.error('✅✅ SET BILLING AND SHIPPING ADDRESS DONE:', req.data)
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ SET BILLING AND SHIPPING ADDRESS ERROR:', error)
    return error.message
  }
}


// set shipping address
export const setShippingAddress = async (address) => {
  const { handshake, quote, mage } = getAllTokens()
  const mobile = address?.telephone?.startsWith('05') ? address?.telephone.replace('05', '9665') : address?.telephone
  let data = {
    address: {
      region_id: address?.region_id || 0,
      region_code: address?.region?.region_code,
      country_id: "SA",
      street: address?.street,
      company: address?.country_id,
      telephone: mobile,
      fax: "string",
      postcode: address?.postcode || "string",
      city: address?.city,
      firstname: address?.firstname,
      lastname: address?.lastname,
      middlename: "string",
      prefix: "string",
      suffix: "string",
      region: "region2",
      email: address?.email
    },
    "useForShipping": true
  }



  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: '/cart/billingAddress',
    headers: {
      'Authorization': 'Bearer ' + handshake,
      'quote': 'Bearer ' + quote
    },
    data: JSON.stringify(data)
  };
  if (mage) {
    config.headers.mage = 'Bearer ' + mage
  }

  try {
    const req = await axiosES(config)
    console.error('✅✅ SET SHIPPING ADDRESS DONE:', req.data)
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ SET BILLING AND SHIPPING ADDRESS ERROR:', error)
    return error.message
  }
}


// get billing address
export const getBillAddress = async (handshake, quote) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: '/cart/billingAddress',
    headers: {
      'Authorization': 'Bearer ' + handshake,
      'quote': 'Bearer ' + quote
    }
  };
  try {
    const req = await axiosES(config)
    console.log('✅✅ Get BILLING ADDRESS DONE:', req.data)
    return { data: req.data, status: req.status, error: null }
  } catch (error) {
    console.error('⚠️⚠️ Get BILLING ADDRESS ERROR:', error)
    return { data: null, status: error?.response?.status, error: error.message }
  }
}



// stc-pay send otp
export const getStcPayOtp = async (mobile) => {
  const { handshake, quote } = getAllTokens()

  const checkQuote = quote?.match(/^\d+$/)
  let data = JSON.stringify({
    "mobile": mobile,
    "quoteId": quote,
    "isMask": !checkQuote
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: '/stc-pay/get-otp',
    headers: {
      'Authorization': 'Bearer ' + handshake,
    },
    data: data
  };
  try {
    const req = await axiosES(config)
    console.error('✅✅ SEND STCPAY OTP DONE:', req.data)
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ SEND STCPAY OTP ERROR:', error)
    return error.message
  }
}

// stc-pay verify otp
export const verifyStcPayOtp = async ({ otp, params }) => {
  const { handshake, quote } = getAllTokens()

  const { paymentReference, OtpReference, mobile } = params
  console.log(params)
  const checkQuote = quote?.match(/^\d+$/)
  let data = {
    otp: otp.join(""),
    otpReference: OtpReference,
    paymentReference: paymentReference,
    mobile: mobile,
    quoteId: quote,
    isMask: !checkQuote,
  };

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: '/stc-pay/verify-otp',
    headers: {
      'Authorization': 'Bearer ' + handshake,
    },
    data: JSON.stringify(data)
  };
  try {
    const req = await axiosES(config)
    console.error('✅✅ VERIFED STCPAY OTP DONE:', req.status)
    return { data: req.data, status: req.status }
  } catch (error) {
    console.error('⚠️⚠️ VERIFED STCPAY OTP ERROR:', error)
    return error.message
  }
}



// ============>


export const payfortSetPaymentMethodByQuote = async (handshake, mage, quote, email) => {

  let data = JSON.stringify({
    email,
    paymentMethod: {
      method: "aps_fort_cc"
    }
  })
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'cart/payfortSetPaymentMethodByQuote',
    headers: {
      'quote': 'Bearer ' + quote,
      'Authorization': 'Bearer ' + handshake,
      'Content-Type': 'application/json'
    },
    data: data
  };


  if (mage) {
    config.headers.mage = 'Bearer ' + mage
  }

  try {
    const req = await axiosES(config)
    console.error('✅✅ PAYFORT SET PAYMENT METHOD BY QUOTE DONE:', req.status)
    return { data: req.data, status: req.status, error: null }
  } catch (error) {
    console.error('⚠️⚠️ PAYFORT SET PAYMENT METHOD BY QUOTE ERROR:', error)
    return { data: null, status: error?.response?.status, error: error.message }
  }
}


// getPayfortSettingsByQuote
export const getPayfortSettingsByQuote = async (handshake,mage, quote) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `/cart/getPayfortSettingsByQuote/${quote}`,
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
    console.info('✅✅ Get BILLING ADDRESS DONE:', req.data)
    return { data: req.data, status: req.status, error: null }
  } catch (error) {
    console.error('⚠️⚠️ Get BILLING ADDRESS ERROR:', error)
    return { data: null, status: error?.response?.status, error: error.message }
  }
}

/*
=========================> CHECKOUT API ROUTES FUNCTIONS <=========================
=========================> CHECKOUT API ROUTES FUNCTIONS <=========================
=========================> CHECKOUT API ROUTES FUNCTIONS <=========================
*/

export const BILLINGADDRESS = async () => {
  const req = await axios.get('/api/checkout?m=getBillingAddress')
  return req.data
}

export const PAYFORTSETPAYMENTMETHODBYQUOTE = async (email) => {
  const req = await axios.post('/api/checkout?m=setpayfortSetPaymentMethodByQuote', { email })
  return req.data
}

export const GETPAYFORTSETTINGSBYQUOTE = async () => {
  const req = await axios.get('/api/checkout?m=getPayfortSettingsByQuote')
  return req.data
}