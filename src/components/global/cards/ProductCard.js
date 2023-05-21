import Image from 'next/image'
import TagBadge from '../ui/badges/Tag'
import FavoriteButton from '../ui/buttons/Favorite'
import DicountBadge from '../ui/badges/Discount'
import Link from 'next/link'
import {useRouter} from 'next/router'

const ProductCard = ({
  key,
  HeightProductCard = '',
  src,
  alt,
  srcBadge,
  borderBadgeColor,
  bgBadgeColor,
  titleBadge,
  hoverBgBadgeColor,
  hoverTextBadgeColor,
  hoverBorderBadgeColor,
  classTitleProductCard = '',
  classWarningProductCard = '',
  title,
  warning = '',
  haveFav = false,
  haveBadge = false,
  haveDicount = false,
  dicountPrec = '',
  textDicount = '',
  url = '/',
}) => {
  const router = useRouter()

  const {locale: activeLocale} = router

  const handleCheckLocale = (firstCheck, secondCheck) =>
    activeLocale === 'en' ? firstCheck : secondCheck

  return (
    <div
      key={key}
      className='group relative rounded-2xl overflow-hidden shadow-lg shadow-black-100 border-r border-b border-gray-200  bg-white gap-3 '>
      <div
        className={`${HeightProductCard} relative z-10 overflow-hidden rounded-2xl rounded-b-none bg-gray-200`}>
        <Link target='_blank' href={url}>
          <Image
            width={500}
            height={500}
            src={src}
            alt={alt}
            className='h-full w-full object-cover object-center cursor-pointer'
          />
        </Link>

        {haveBadge ? (
          <TagBadge
            position='justify-start items-end ml-1 pb-1'
            borderColor={borderBadgeColor}
            bgColor={bgBadgeColor}
            textColor={titleBadge}
            textTag={titleBadge}
            hoverBgColor={hoverBgBadgeColor}
            hoverTextColor={hoverTextBadgeColor}
            hoverBorderColor={hoverBorderBadgeColor}
          />
        ) : (
          ''
        )}
        {haveFav ? <FavoriteButton /> : ''}

        {haveDicount ? (
          <div key='' className={`flex justify-start items-end ml-1 pb-1`}>
            <DicountBadge
              width={80}
              dicount={parseInt(dicountPrec)}
              text={textDicount}
              positionBxBadge='bottom-0 right-0 rotate-180'
              rotateBxText='rotate-180'
            />
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={`z-0 pt-2 pb-4 text-xs p-3 w-full mb-1`}>
        <p
          className={`text-xs font-bold text-gray-900 ${
            !warning ? 'mb-5' : ''
          } ${classTitleProductCard}`}>
          {title}
        </p>

        <div className='mt-1 flex  items-start'>
          <p
            className={`mt-1 text-xs text-primary-600 text-base flex gap-1 ${classWarningProductCard} ${handleCheckLocale(
              'pr-1',
              'pl-1'
            )} `}>
            <span
              className={`inline-block ${handleCheckLocale(
                'order-2',
                'order-1'
              )}`}>
              {warning ? (
                <Image
                  width={15}
                  height={15}
                  src='/assets/images/CataloguesOffers/time.jpg'
                  alt='time.jpg'
                  className='object-cover object-center inline-block'
                />
              ) : (
                ''
              )}
            </span>
            <span
              className={`inline-block ${handleCheckLocale(
                'order-1',
                'order-2'
              )}`}>
              {warning}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
