import React from 'react'
import WishlistIcon from '@/components/icons/WishlistIcon'
import DicountBadge from '../ui/badges/Discount'
import InfoBadge from '../ui/badges/Info'
import PriceBadge from '../ui/badges/Price'
import Button from '../ui/buttons/Button'

const HeroProductCard = ({ currency, ButtonText, Round = true, Image: src, Dicount, DicountText, Price, OldPrice, InfoBadgeText, Title , bgInfoBadge , borderInfoBadge , textInfoBadge }) => {
  return (
    <div className={`w-full h-full rounded-xl ${!Round && 'rounded-t-none'}  overflow-hidden shadow-lg flex flex-col justify-between hero_product`}>
      <div
        className='relative bg-cover transition-all duration-300 image min-h-[320px] h-full'
        style={{backgroundImage:`url(${src})`}}
        >
        {Dicount && <DicountBadge
          width={110}
          dicount={Dicount}
          text={DicountText}
        />}
        {Price && <PriceBadge width={130} price={Price} oldPrice={OldPrice} currency={currency} />}
        <WishlistIcon className='absolute top-2 right-2 text-white cursor-pointer drop-shadow-md hover:scale-95 duration-300' width={36} />
        {InfoBadgeText ? <InfoBadge topCenter={true} text={InfoBadgeText} bgInfoBadge={bgInfoBadge} borderInfoBadge={borderInfoBadge} textInfoBadge={textInfoBadge} /> : null}
      </div>
      <div className="bg-white px-3 py-2 h-24 flex items-center justify-between gap-4 relative">
        <div className="text-start">
          <h3 className="font-bold clamp-1 text-neutral-800">{Title || ''}</h3>
          <p className="clamp-1 text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime eius recusandae sapiente voluptate ratione.</p>
        </div>
        <Button text={ButtonText} />
      </div>
    </div>
  )
}

export default HeroProductCard