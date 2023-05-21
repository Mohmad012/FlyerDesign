import {axiosAlgolia} from '@/utils/axios-algolia'
import {urls, headers} from '@/utils/home/types'
import axios from 'axios'


export const getProductsBulkBySKU = async (
  currentIndex,
  skuBulk,
) => {
  const data = JSON.stringify({
    query: skuBulk,
    removeWordsIfNoResults: 'allOptional',
    restrictSearchableAttributes: ['sku'],
    typoTolerance: false,
    hitsPerPage: 36
  })
  try {
    const req = await axiosAlgolia.post(`/${currentIndex}/query`, data)
    return req.data
  } catch (error) {
    return error.message
  }
}


export const getAmazingDiscountsProductsOnHomePage = async (sku) => {

  const params = {
    query:sku,
    removeWordsIfNoResults:"allOptional",
    restrictSearchableAttributes:["sku"],
    typoTolerance:false
  }
  const queryString = new URLSearchParams(params).toString()

  try {
    const getProducts = await axios.post(urls.productBaseUrl,
    JSON.stringify({
        'params': queryString
    }),
    {
      headers
    })

    return getProducts.data

  } catch (error) {
    return error.message
  }
}