import { CREATE_CART, getAllTokens } from "@/services/cart"
import { getToken } from "@/services/global"
import Cookies from "js-cookie"

export const getCurrentCity = locale => {
  if (locale.includes('dam')) return 'dammam'
  else if (locale.includes('jed')) return 'jeddah'
  else if (locale.includes('ruh')) return 'riyadh'
  return 'all-cities'
}

export const groupBy = function (arr, key) {
  return arr.reduce(function (group, item) {
    ; (group[item[key]] = group[item[key]] || []).push(item)
    return group
  }, {})
}
export const hadleFilterStructureData = productsWithSubCategoryData => {
  const filterKeys = []

  for (const key in productsWithSubCategoryData?.filters) {
    if (productsWithSubCategoryData?.filters[key]?.buckets?.length) {
      filterKeys.push({
        title: key,
        list: productsWithSubCategoryData?.filters[key]?.buckets,
      })
    }
  }

  return filterKeys
}


// Generate handshake, quote and merge guest cart to auth user
const { handshake, quote, mage } = getAllTokens()
export const checkTokens = async (currentLocale, prevLocale) => {
  if (!handshake || prevLocale.current !== currentLocale) {
    await getToken(currentLocale)
  } else {

    if (!quote || quote === 'undefined') {
       await CREATE_CART().then(res => {
        if(res?.status === 200 && res.error === null){
          Cookies.set('quote', res?.data?.quote)
        }
         console.log('CREATE_CART 1',res)
       })
    }

  }


}

/*
1 ====> Check handshake found or generate new handshake
2 ====>
3 ====>
4 ====>
5 ====>
5 ====>
6 ====>
7 ====>
*/