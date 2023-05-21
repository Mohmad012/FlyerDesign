import ProductCard from '@/components/global/cards/ProductCard2'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'

const Favorites = () => {
  const {locale} = useRouter()
  const favoritesItems = useSelector(state => state.favorites.favoritesItems)
  const handleAddToCard = product => {
    console.log('sku', product?.sku)
  }

  // console.log('favoritesItems', favoritesItems)
  // console.log(
  //   'Object.values(favoritesItems ?? {})',
  //   Object.values(favoritesItems ?? {})
  // )

  return (
    <div className=' flex flex-col max-h-[52rem] overflow-y-auto px-5'>
      <h2 className='text-2xl font-semibold text-primary-500 mb-20'>
        Favorite
      </h2>
      <div
        className={`flex gap-5 flex-wrap ${
          locale?.includes('ar') && 'justify-end'
        }`}>
        {Object.values(favoritesItems ?? {})?.map(item => (
          <div className=' flex gap-5  w-80' key={item?.sku}>
            <ProductCard
              // IsHeader={false}
              Size='lg'
              Image={`${process.env.webUrl}/media/catalog/item/${item?.image[0]}`}
              Dicount={
                (1 -
                  item?.prices_with_tax?.price /
                    item?.prices_with_tax?.original_price) *
                100
              }
              // DicountText={t('Discount up to')}
              DicountText='Discount up to'
              Price={item?.prices_with_tax?.price}
              OldPrice={item?.prices_with_tax?.original_price}
              // InfoBadgeText={t('Top rated')}
              InfoBadgeText='Top rated'
              Title={item?.name}
              // currency={t('sar')}
              currency='sar'
              // ButtonText={t('show')}
              ButtonText='show'
              addToCard={true}
              handleAddToCard={handleAddToCard}
              {...item}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
