import Image from 'next/image'
import React from 'react'
import ProductCarousel from './Product-carousel'
import Title from '../Title'
import Button from '../ui/buttons/Button'
import SafePrice from '../ui/badges/SafePrice'
import DicountBadge from '../ui/badges/Discount'
import WishlistIcon from '@/components/icons/WishlistIcon'
import PriceBadge from '../ui/badges/Price'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {addToFavorites, deleteFromFavorites} from '@/lib/redux/slices/favorites'

const FeaturedCarousel = ({t, data: heroProduct}) => {
  const router = useRouter()
  const favoritesItems = useSelector(state => state.favorites.favoritesItems)
  const dispatch = useDispatch()
  const productUrl = heroProduct ? heroProduct?.sku : '/'
  const handleClick = () => router.push(`/${productUrl}`)
  const SavedAmount =
    heroProduct?.prices_with_tax?.original_price -
    heroProduct?.prices_with_tax?.price

  const handleAddToFavorites = product => {
    if (Object.hasOwn(product, 'sku')) {
      if (favoritesItems[product.sku]) {
        dispatch(deleteFromFavorites({sku: product.sku}))
        return
      }
      dispatch(addToFavorites({product}))
    }
  }
  return (
    <div className=' h-full mb-0 relative'>
      <ProductCarousel
        data={heroProduct}
        styles={{height: 'calc(100% - 8rem)'}}
        onClick={handleClick}
      />
      <DicountBadge
        width={120}
        text={t('Discount')}
        dicount={
          (1 -
            heroProduct?.prices_with_tax?.price /
              heroProduct?.prices_with_tax?.original_price) *
          100
        }
      />
      <div
        className='cursor-pointer'
        onClick={() => handleAddToFavorites(heroProduct)}>
        <WishlistIcon
          className={`absolute top-2 right-2 text-primary-200 cursor-pointer drop-shadow-md hover:text-primary-500 ${
            favoritesItems[heroProduct.sku] && 'text-primary-500'
          } hover:scale-95 duration-300`}
          width={36}
        />
      </div>
      <PriceBadge
        price={heroProduct?.prices_with_tax?.price}
        oldPrice={heroProduct?.prices_with_tax?.original_price}
        currency={t('sar')}
        classNames='bottom-32 w-44 h-[65px]'
      />
      <div className='h-32 px-3'>
        <div className='flex justify-between items-center'>
          <div>
            <Title
              onClick={handleClick}
              style=' clamp-1 py-px my-px text-lg cursor-pointer'
              title={heroProduct?.name}
            />
            <p
              className='text-sm clamp-1'
              dangerouslySetInnerHTML={{
                __html:
                  heroProduct?.short_description ||
                  heroProduct?.description ||
                  null,
              }}
            />
          </div>
          <div className='w-28 text-end'>
            <Button onClick={handleClick} text={t('show')} />
          </div>
        </div>
        <div
          className={`w-full mt-2 flex ${
            SavedAmount > 0 ? 'justify-between' : 'justify-end'
          } items-end`}>
          <SafePrice
            amount={
              SavedAmount?.length > 5 ? SavedAmount.toFixed(2) : SavedAmount
            }
            t={t}
            className='scale-100 gap-2 cursor-pointer'
          />

          <Image
            src={
              process.env.webUrl + '/media/avatar/' + heroProduct?.seller_logo
            }
            width={80}
            height={40}
            className='object-contain'
            alt='logo'
          />
        </div>
      </div>
    </div>
  )
}
export default FeaturedCarousel
