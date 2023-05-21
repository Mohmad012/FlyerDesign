import { useTranslation } from 'next-i18next'
import React from 'react'

const NewsLetter = () => {
  const { t } = useTranslation('common')

  return (
    <div className="mt-10 xl:mt-0 bg-neutral-600 px-8 md:px-24 py-8 flex flex-col justify-center md:justify-start md:flex-row items-center gap-8">
      <h2 className="text-lg font-bold leading-6 text-white mb-0">{t('join us')}</h2>
      <form className="my-4 sm:flex gap-4 w-full md:max-w-lg items-center">
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-2 text-gray-500 font-bold shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2  focus:ring-primary-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full mb"
          placeholder={t('email address')}
        />
        <div className=" sm:mt-0 sm:ml-4 sm:flex-shrink-0 mt-4">
          <button
            type="submit"
            className="flex w-44 md:w-full items-center justify-center rounded-md bg-transparent py-2 px-6 text-sm font-bold text-white shadow-sm hover:ring-primary-500 hover:bg-primary-400
            ring-2  ring-gray-400 hover-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mb"
          >
            {t('subscribe')}
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewsLetter