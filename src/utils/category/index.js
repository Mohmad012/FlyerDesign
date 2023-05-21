export const handleSwitchPageDirection = locale => {
  let dir = locale?.includes('ar') ? 'rtl' : 'ltr'
  let lang = locale?.includes('ar') ? 'ar' : 'en'
  document.querySelector('html').setAttribute('dir', dir)
  document.querySelector('html').setAttribute('lang', lang)
}

export const loadMoreProducts = async params => {
  const {
    pageNo,
    setPageNo,
    setIsVisible,
    mutation,
    categoryID,
    locale,
    currentSortFilterKeys,
    setCurrentProducts,
  } = params
  const nextPage = pageNo + 1
  setPageNo(nextPage)
  try {
    setIsVisible(true)
    await mutation.mutateAsync({
      pageNo: nextPage,
      categoryID,
      locale,
      currentSortFilterKeys,
    })
    if (!mutation?.isLoading) {
      if (mutation?.data?.data?.pages != nextPage) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    mutation?.data?.data?.products &&
      setCurrentProducts(prev => [...prev, ...mutation?.data?.data?.products])
  } catch (error) {
    console.log('Error when fetching more products in scrolling')
    setIsVisible(false)
  }
}
