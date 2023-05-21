import React from 'react'
import SubTitleRating from '../SubTitleRating'
import Item from './Item'

const ProductRating = ({setRateCompShow, id}) => {
  return (
    <div className='flex flex-col gap-5'>
      <SubTitleRating
        setRateCompShow={setRateCompShow}
        title='تقييم المنتج'
        subTitle='ساعد الأخرين علي شراء المنتجات الأفضل'
      />
      <Item customeClass='mb-5' />
    </div>
  )
}

export default ProductRating
