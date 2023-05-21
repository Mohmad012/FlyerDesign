import axios from 'axios'

export const getProductsData = async params => {
  const {
    token,
    categoryID,
    pageSize = 29,
    pageNo = 0,
    currentSortFilterKeys = 'sortBy=position&sortDir=DESC',
  } = params
  try {
    const req = await axios(
      `${process.env.api_baseurl}/facets/category/${categoryID}?pageSize=${pageSize}&pageNo=${pageNo}&${currentSortFilterKeys}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ GET PRODUCTS ERROR:', error.message)
    return error.message
  }
}

export const categoriesData = async token => {
  try {
    const req = await axios(`${process.env.api_baseurl}/categories`, {
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

export const getSortedFilteredProductsData = async params => {
  const {token, url} = params
  try {
    const req = await axios(`${process.env.api_baseurl}/${url}`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return req.data
  } catch (error) {
    console.error('⚠️⚠️ GET PRODUCTS ERROR:', error.message)
    return error.message
  }
}

export const fetchSortingFilteringProductsData = async params => {
  const {locale, url} = params
  try {
    const req = await axios.post('/api/sortingfilteringproductsdata/category', {
      locale,
      url,
    })

    return req.data
  } catch (error) {
    console.error('⚠️⚠️ GET PRODUCTS ERROR:', error.message)
    return error.message
  }
}

export const fetchGetMoreProducts = async params => {
  const {nextPage, categoryID, locale, currentSortFilterKeys} = params

  return axios.get(
    `/api/getMoreProducts?pageNo=${nextPage}&pageSize=29&categoryID=${categoryID}&locale=${locale}&currentSortFilterKeys=${currentSortFilterKeys}`
  )
}
