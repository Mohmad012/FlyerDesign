import PhoneIcon from '@/components/icons/PhoneIcon'
import { useTranslation } from 'next-i18next'
import React from 'react'

const AboutInfo = ({ socialLinks }) => {
  const { t } = useTranslation('common')

  return (
    <div>
      <h3 className="text-md capitalize font-bold leading-6 text-white flex flex-row justify-start gap-2">
        <span> {t('call us')}</span>
        <span>920012341</span>
        <PhoneIcon className='h-6' />
      </h3>
      <div role="list" className="mt-6 space-y-1">
        <p className="text-sm leading-6 text-gray-400 font-bold" >8:00 {t('am')}  {t('to')} 5:00 {t('pm')}</p>
        <p className="text-sm leading-6 text-gray-400 font-bold" >{t('voucherek address')}</p>
      </div>
      <h3 className="text-md capitalize font-bold leading-6 text-white flex flex-row justify-start gap-2 mt-4"> {t('follow us')}
      </h3>
      <div className="flex flex-row items-end gap-4 space-y-4">
        {
          socialLinks.map(({ icon, href }, idx) => (
            <a className="text-sm leading-6 text-gray-300 hover:text-white" key={idx} href={href}>{icon}</a>
          ))
        }
      </div>
    </div>
  )
}

export default AboutInfo