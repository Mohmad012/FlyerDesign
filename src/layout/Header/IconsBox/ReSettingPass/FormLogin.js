import {EnvelopeIcon} from '@heroicons/react/20/solid'
import {useTranslation} from 'next-i18next'

const FormLogin = ({setOpen, setStatusPopup}) => {
  const {t} = useTranslation('common')
  return (
    <form className='space-y-6'>
      <div className='flex justify-center mb-10'>
        <h2 className='text-xl font-bold'>{t('Reset the password')} </h2>
      </div>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <EnvelopeIcon className='h-5 w-5 text-gray-400' />
        </div>
        <input
          type='email'
          placeholder={t('Email')}
          className='py-2 pl-10 pr-4 rounded-md bg-white border-gray-300 focus:outline-none focus:ring-gray-300 focus:border-gray-300 block w-full sm:text-sm border-2'
        />
      </div>

      <div className='flex justify-start gap-5 text-gray-500'>
        <button
          type='button'
          onClick={() => setOpen(false)}
          className='flex justify-center text-sm'>
          {t('Send the code')}
        </button>{' '}
        <button
          type='button'
          onClick={() => setStatusPopup('login')}
          className='flex justify-center text-sm'>
          {t('Back to login')}
        </button>
      </div>
    </form>
  )
}

export default FormLogin
