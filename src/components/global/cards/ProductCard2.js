import React from 'react'
import WishlistIcon from '@/components/icons/WishlistIcon'
import DicountBadge from '../ui/badges/Discount'
import InfoBadge from '../ui/badges/Info'
import PriceBadge from '../ui/badges/Price'
import Button from '../ui/buttons/Button'
import {number} from 'yup'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {useDispatch, useSelector} from 'react-redux'
import {addToFavorites, deleteFromFavorites} from '@/lib/redux/slices/favorites'
import AddToCart from '../ui/buttons/AddToCart'
import {addItemToCart} from '@/services/cart'

const ProductCard = ({
  ButtonText = '',
  Size = '',
  Round = true,
  IsHeader = false,
  Image: imgUrl = '',
  Dicount = number,
  DicountText = text,
  Price = number,
  OldPrice = 0,
  InfoBadgeText = '',
  Title = '',
  currency = '',
  bgInfoBadge = '',
  borderInfoBadge = '',
  classNames = '',
  handleAddToCard = null,
  addToCard = false,
  handleOtherClick = null,

  ...product
}) => {
  const router = useRouter()
  const favoritesItems = useSelector(state => state.favorites.favoritesItems)
  const dispatch = useDispatch()
  const productUrl = product ? product?.rewrite_url : '/'
  const handleClick = () => {
    router.push(`/${productUrl}`)
    handleOtherClick && handleOtherClick()
  }

  const handleAddToFavorites = product => {
    if (Object.hasOwn(product, 'sku')) {
      if (favoritesItems[product.sku]) {
        dispatch(deleteFromFavorites({sku: product.sku}))
        return
      }
      dispatch(addToFavorites({product}))
    }
  }

  console.log({imgUrl})

  return (
    <div
      className={`w-full h-full  ${
        Size === 'lg' ? 'max-h-[35rem]' : 'max-h-72'
      } rounded-xl ${
        !Round && 'rounded-t-none'
      }  overflow-hidden shadow-lg flex flex-col ${classNames}`}>
      <div
        className={`relative ${
          Size === 'lg'
            ? IsHeader === true
              ? 'h-[288px] lg-header'
              : 'h-[324px] lg-no-header'
            : IsHeader === true
            ? 'h-[188px] sm-header'
            : 'h-[224px] sm-no-header'
        } bg-white overflow-hidden`}>
        <Image
          src={imgUrl}
          onClick={handleClick}
          width={500}
          height={500}
          alt={Title}
          className='object-contain absolute w-full h-full cursor-pointer'
        />
        {Dicount > 0 && (
          <DicountBadge
            width={80}
            dicount={parseInt(Dicount)}
            text={DicountText}
          />
        )}
        {Price && (
          <PriceBadge
            width={90}
            price={Price}
            oldPrice={OldPrice || 0}
            currency={currency}
          />
        )}
        <div
          className='cursor-pointer'
          onClick={() => handleAddToFavorites(product)}>
          <WishlistIcon
            className={`absolute top-2 right-2 text-primary-200 cursor-pointer drop-shadow-md hover:text-primary-500 ${
              favoritesItems[product.sku] && 'text-primary-500'
            } hover:scale-95 duration-300`}
            width={36}
          />
        </div>
        {InfoBadgeText ? (
          <InfoBadge
            text={InfoBadgeText}
            bgInfoBadge={bgInfoBadge}
            borderInfoBadge={borderInfoBadge}
          />
        ) : null}
      </div>
      <div className='bg-white px-3 py-2 h-16 flex items-center justify-between gap-4 relative'>
        <Link
          href={productUrl ? `/${productUrl}` : ''}
          className='font-bold text-sm text-start clamp-2 text-neutral-800 cursor-pointer'>
          {Title || ''}
        </Link>
        {Size === 'lg' && (
          <Button onClick={handleClick} size={Size} text={ButtonText} />
        )}
      </div>{' '}
      {addToCard ? (
        <AddToCart
          onClick={() => {
            addItemToCart(product.sku, 1).then(data => {
              // console.log('addItemToCart', data)
              if (data?.status === 200) {
                console.log('product is added to cart')
                // setCartItemRes(data.data)
                // queryClient.invalidateQueries('cart')

                // setTimeout(() => setShoModal(true), 500)
                // toast.success('Product added')
              }
              // toast.error(data?.msg)
            })
          }}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default ProductCard
