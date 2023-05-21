import { useTranslation } from 'next-i18next'
import React from 'react'

const LinkList = ({title, list}) => {
  const { t } = useTranslation('common')

  return (
    <div className="mb-8">
      <h3 className="text-md capitalize font-bold leading-6 text-white">{t(title)}</h3>
      <ul role="list" className="mt-6 space-y-1">
        {list.map((item) => (
          <li key={item.title}>
            <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
              {t(item.title)}
            </a>
          </li>
        ))}
      </ul>
    </div>  )
}

export default LinkList