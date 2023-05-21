import TagIcon from '@/components/icons/TagIcon'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {number, string} from 'yup'

const SafePrice = ({
  amount = number,
  className = string,
}) => {
  const {t} = useTranslation('common')
  if (amount > 0) {
    return (
      <div
        className={`rounded-md ring-1 ring-primary-500 bg-gray-200 px-4 py-1 flex justify-center gap-2 items-end text-primary-500 ${className}`}>
        <TagIcon width={16} />
        <span className='text-neutral-800'>{t('safe')}:</span>
        <span className='font-bold'>
          {amount?.toFixed(2)}{' '}
          <small>{t('sar')}</small>
        </span>
      </div>
    )
  }
  return null
}

export default SafePrice
