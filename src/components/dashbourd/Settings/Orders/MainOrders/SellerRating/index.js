import SubTitleRating from '../SubTitleRating'
import Item from './Item'

const SellerRating = ({setRateCompShow}) => {
  return (
    <div className='flex flex-col gap-5'>
      <SubTitleRating
        setRateCompShow={setRateCompShow}
        title='تقييم البائع'
        subTitle='اكتب رأيك للبائع'
      />
      <Item />
      <Item customeClass='mb-5' />
    </div>
  )
}

export default SellerRating
