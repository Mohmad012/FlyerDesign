import SubTitleRating from '../SubTitleRating'
import Item from './Item'

const DeliveryRating = ({setRateCompShow}) => {
  return (
    <div className='flex flex-col gap-5'>
      <SubTitleRating
        setRateCompShow={setRateCompShow}
        title='تقييم التوصيل'
        subTitle='قيّم كيف كانت عملية التوصيل'
      />
      <Item />
      <Item />
      <Item customeClass='mb-5' />
    </div>
  )
}

export default DeliveryRating
