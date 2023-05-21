import {getProductsData} from '@/services/category'
import {localeHandShake} from '@/services/global'

export default async function handler(req, res) {
  const {pageNo, pageSize, categoryID, locale, currentSortFilterKeys} =
    req.query
  try {
    const resToken = await localeHandShake(locale)

    const response = await getProductsData({
      token: resToken?.token,
      categoryID,
      pageNo,
      pageSize,
      currentSortFilterKeys: currentSortFilterKeys
        ? currentSortFilterKeys
        : 'sortBy=position&sortDir=DESC',
    })

    return res.json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({message: 'Error fetching products'})
  }
}
