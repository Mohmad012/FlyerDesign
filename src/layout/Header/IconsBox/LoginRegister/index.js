import {Fragment, useRef} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import {useTranslation} from 'next-i18next'

const LoginRegister = ({open, setOpen, setStatusPopup}) => {
  const cancelButtonRef = useRef(null)
  const {t} = useTranslation('common')

  const items = [
    'Save specials to your wishlist',
    'Get alerts on your items',
    'Add to shopping list',
  ]

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={cancelButtonRef}
        onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                <div className='flex flex-col justify-center  items-center max-w-md mx-auto bg-white  rounded-md overflow-hidden'>
                  <div className='px-4 pt-4 flex items-center justify-center'>
                    <Link href='/'>
                      <Image
                        width={50}
                        height={50}
                        className='block h-20 w-40'
                        src='/assets/logo/fotshork.svg'
                        alt='Voucherek Company logo'
                      />
                    </Link>
                  </div>
                  <div className='p-4'>
                    <h2 className='text-lg font-medium text-gray-800 mb-10 w-64 text-center'>
                      {t('With your membership in FutureShare you can')}
                    </h2>
                    <ul className='list-disc list-inside'>
                      {items.map(item => (
                        <li key={item} className='flex items-center mb-2 gap-5'>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 28 29'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M24.3676 5.88L10.3682 22.7954C10.287 22.8937 10.1905 22.9717 10.0843 23.0249C9.97804 23.0781 9.86418 23.1055 9.7492 23.1055C9.63421 23.1055 9.52036 23.0781 9.41414 23.0249C9.30792 22.9717 9.21142 22.8937 9.13016 22.7954L3.00544 15.3949C2.84126 15.1965 2.74902 14.9275 2.74902 14.6469C2.74902 14.3664 2.84126 14.0973 3.00544 13.899C3.16961 13.7006 3.39229 13.5891 3.62447 13.5891C3.85665 13.5891 4.07933 13.7006 4.24351 13.899L8.20839 18.6907C9.00822 19.6573 10.4902 19.6573 11.2901 18.6908L23.1295 4.38404C23.2937 4.18566 23.5164 4.07422 23.7486 4.07422C23.9808 4.07422 24.2034 4.18566 24.3676 4.38404C24.5318 4.58242 24.624 4.85147 24.624 5.13202C24.624 5.41257 24.5318 5.68162 24.3676 5.88Z'
                              fill='gray'
                            />
                            <path
                              d='M24.3676 5.88L10.3682 22.7954C10.287 22.8937 10.1905 22.9717 10.0843 23.0249C9.97804 23.0781 9.86418 23.1055 9.7492 23.1055C9.63421 23.1055 9.52036 23.0781 9.41414 23.0249C9.30792 22.9717 9.21142 22.8937 9.13016 22.7954L3.00544 15.3949C2.84126 15.1965 2.74902 14.9275 2.74902 14.6469C2.74902 14.3664 2.84126 14.0973 3.00544 13.899C3.16961 13.7006 3.39229 13.5891 3.62447 13.5891C3.85665 13.5891 4.07933 13.7006 4.24351 13.899L8.20839 18.6907C9.00822 19.6573 10.4902 19.6573 11.2901 18.6908L23.1295 4.38404C23.2937 4.18566 23.5164 4.07422 23.7486 4.07422C23.9808 4.07422 24.2034 4.18566 24.3676 4.38404C24.5318 4.58242 24.624 4.85147 24.624 5.13202C24.624 5.41257 24.5318 5.68162 24.3676 5.88Z'
                              stroke='gray'
                            />
                          </svg>
                          {t(item)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='p-4 flex flex-col gap-5 justify-between'>
                    <button
                      onClick={() => setStatusPopup('register')}
                      className='bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500'>
                      {t('Create New Account')}
                    </button>
                    <button
                      onClick={() => setStatusPopup('login')}
                      className='border border-pink-500 text-pink-500 py-2 px-4 rounded-md hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500'>
                      {t('Sign In')}
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default LoginRegister
