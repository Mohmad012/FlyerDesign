import React from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

const Share = ({link}) => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-4 mb-4 px-2 py-1'>
      <span className='text-neutral-700 text-sm'>شارك هذا العرض</span>
      <div className='flex gap-2'>
        <FacebookShareButton url={link || '/'}>
          <FacebookIcon size={28} round={false} borderRadius={8} />
        </FacebookShareButton>
        <TwitterShareButton url={link || '/'}>
          <TwitterIcon size={28} round={false} borderRadius={8} />
        </TwitterShareButton>
        <WhatsappShareButton url={link || '/'}>
          <WhatsappIcon size={28} round={false} borderRadius={8} />
        </WhatsappShareButton>
        <TelegramShareButton url={link || '/'}>
          <TelegramIcon size={28} round={false} borderRadius={8} />
        </TelegramShareButton>
      </div>
    </div>
  )
}

export default Share
