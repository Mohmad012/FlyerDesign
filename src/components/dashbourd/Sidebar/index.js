import {addCurrentComponent} from '@/lib/redux/slices/dashbourd'
import {deleteUser} from '@/lib/redux/slices/userInfo'
import {useRouter} from 'next/router'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const Sidebar = () => {
  const {locale: activeLocale} = useRouter()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user?.user)
  const {currentComponent} = useSelector(state => state.dashbourd.dashbourdData)

  const handleCurrentComponent = name =>
    dispatch(addCurrentComponent({currentComponent: name}))

  const handleSignInOut = () => {
    if (Object.keys(user ?? {})?.length) {
      dispatch(deleteUser())
      return
    }
  }
  return (
    <div className='w-1/5 overflow-hidden  relative'>
      <div className='rounded-lg h-screen w-64 text-gray-500 flex flex-col'>
        <div
          className={`p-4 border-b border-gray-200 ${
            activeLocale?.includes('ar') ? 'text-right' : ''
          }`}>
          <h2 className='text-lg text-gray-600 font-semibold'>mohmad</h2>
          <p className='text-sm '>mohmadailsia@gmail.com</p>
        </div>
        <nav className='flex-grow'>
          <ul className='p-4'>
            <li
              className={`flex py-2 gap-2 text-sm hover:text-primary-500 cursor-pointer ${
                currentComponent == 'Favorites' && 'text-primary-500'
              }`}
              onClick={() => handleCurrentComponent('Favorites')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='none'
                viewBox='0 0 32 32'>
                <path
                  fill='#EB008C'
                  d='M27.877 7.126a7.259 7.259 0 00-10.24-.013l-1.635 1.52-1.636-1.524a7.25 7.25 0 10-10.24 10.267l11.17 11.332a1 1 0 001.425 0l11.156-11.332a7.25 7.25 0 000-10.25zm-1.419 8.845L16.002 26.576 5.539 15.961a5.25 5.25 0 117.425-7.425l.025.025 2.331 2.169a1 1 0 001.363 0l2.331-2.169.025-.025a5.25 5.25 0 017.42 7.43l-.001.005z'></path>
              </svg>
              <span>Favorites</span>
            </li>
            <li
              className={`flex py-2 gap-2 text-sm hover:text-primary-500 cursor-pointer ${
                currentComponent == 'Addresses' && 'text-primary-500'
              }`}
              onClick={() => handleCurrentComponent('Addresses')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='none'
                viewBox='0 0 36 36'>
                <g clipPath='url(#clip0_717_20354)'>
                  <path
                    fill='#EB008C'
                    d='M12.699 24.525a1.124 1.124 0 001.576-.225 7.312 7.312 0 0111.7 0 1.123 1.123 0 001.868-.102 1.124 1.124 0 00-.068-1.248 9.547 9.547 0 00-3.853-3.05 5.624 5.624 0 10-7.585 0 9.546 9.546 0 00-3.862 3.05 1.124 1.124 0 00.224 1.575zm4.051-8.775a3.374 3.374 0 116.749 0 3.374 3.374 0 01-6.749 0zm13.5-12.375H10a2.25 2.25 0 00-2.25 2.25V9H5.5a1.125 1.125 0 000 2.25h2.25v5.625H5.5a1.125 1.125 0 100 2.25h2.25v5.625H5.5a1.125 1.125 0 100 2.25h2.25v3.375a2.25 2.25 0 002.25 2.25h20.25a2.25 2.25 0 002.25-2.25V5.625a2.25 2.25 0 00-2.25-2.25zm0 27H10V5.625h20.25v24.75z'></path>
                </g>
                <defs>
                  <clipPath id='clip0_717_20354'>
                    <path fill='#fff' d='M0 0H36V36H0z'></path>
                  </clipPath>
                </defs>
              </svg>
              <span>Addresses</span>
            </li>
            <li
              className={`flex py-2 gap-2 text-sm hover:text-primary-500 cursor-pointer ${
                currentComponent == 'Orders' && 'text-primary-500'
              }`}
              onClick={() => handleCurrentComponent('Orders')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='none'
                viewBox='0 0 32 31'>
                <path
                  fill='#EB008C'
                  d='M27.755 15.262a.954.954 0 01-.293.685 1.017 1.017 0 01-.707.284h-11c-.266 0-.52-.102-.708-.284a.953.953 0 01-.293-.685c0-.257.106-.503.293-.685.188-.181.442-.284.707-.284h11c.266 0 .52.103.708.284a.954.954 0 01.293.685zm-12-6.781h11c.265 0 .519-.102.707-.284a.954.954 0 00.293-.685.954.954 0 00-.293-.685 1.017 1.017 0 00-.707-.283h-11c-.266 0-.52.102-.708.283a.953.953 0 00-.293.685c0 .257.106.504.293.685.188.182.442.284.707.284zm11 13.563h-11c-.266 0-.52.102-.708.283a.954.954 0 00-.293.685c0 .257.106.504.293.685.188.182.442.284.707.284h11c.266 0 .52-.102.708-.284a.954.954 0 00.293-.685.954.954 0 00-.293-.685 1.017 1.017 0 00-.707-.284zM10.047 4.889L6.754 8.08 5.462 6.827a1.017 1.017 0 00-.708-.284c-.265 0-.52.102-.707.284a.954.954 0 00-.293.685c0 .257.105.504.293.686l2 1.937a1.002 1.002 0 00.707.284 1.027 1.027 0 00.708-.284l4-3.875a.954.954 0 00.293-.685.954.954 0 00-.293-.686 1.017 1.017 0 00-.707-.284c-.266 0-.52.103-.708.284zm0 7.75L6.754 15.83l-1.292-1.253a1.017 1.017 0 00-.708-.284c-.265 0-.52.102-.707.284a.954.954 0 00-.217 1.056c.05.118.124.225.217.315l2 1.937a1.002 1.002 0 00.707.284 1.027 1.027 0 00.708-.284l4-3.875a.954.954 0 00.293-.685.954.954 0 00-.293-.686 1.017 1.017 0 00-.707-.284c-.266 0-.52.103-.708.284zm0 7.75L6.754 23.58l-1.292-1.253a1.003 1.003 0 00-.708-.284 1.027 1.027 0 00-.707.284.967.967 0 00-.293.685.943.943 0 00.293.686l2 1.937a1.002 1.002 0 00.707.284 1.027 1.027 0 00.708-.284l4-3.875a.954.954 0 00.293-.685.954.954 0 00-.293-.686 1.017 1.017 0 00-.707-.284c-.266 0-.52.103-.708.284z'></path>
              </svg>
              <span>Orders</span>
            </li>
            <li
              className={`flex py-2 gap-2 text-sm hover:text-primary-500 cursor-pointer ${
                currentComponent == 'Returns' && 'text-primary-500'
              }`}
              onClick={() => handleCurrentComponent('Returns')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='none'
                viewBox='0 0 34 34'>
                <path
                  fill='#EB008C'
                  d='M24.438 13.813v4.25a1.062 1.062 0 01-1.063 1.062H13.19l1.374 1.373a1.064 1.064 0 01-1.158 1.734 1.064 1.064 0 01-.345-.23l-3.188-3.188a1.062 1.062 0 010-1.503l3.188-3.188a1.063 1.063 0 111.503 1.504L13.19 17h9.123v-3.188a1.062 1.062 0 112.125 0zm6.375-6.376v19.125a2.125 2.125 0 01-2.125 2.125H5.313a2.125 2.125 0 01-2.125-2.125V7.438a2.125 2.125 0 012.124-2.125h23.375a2.125 2.125 0 012.125 2.125zm-2.125 19.125V7.438H5.313v19.125h23.375z'></path>
              </svg>
              <span>Returns</span>
            </li>{' '}
            <li
              className={`flex py-2 gap-2 text-sm hover:text-primary-500 cursor-pointer ${
                currentComponent == 'FundsVoucherek' && 'text-primary-500'
              }`}
              onClick={() => handleCurrentComponent('FundsVoucherek')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='none'
                viewBox='0 0 38 29'>
                <path
                  fill='#EB008C'
                  d='M27.75 8.345v-.892C27.75 3.436 21.84.406 14 .406S.25 3.436.25 7.453v6.406c0 3.346 4.102 6.005 10 6.8v.888c0 4.017 5.91 7.047 13.75 7.047s13.75-3.03 13.75-7.047V15.14c0-3.316-3.972-5.977-10-6.796zm7.5 6.796c0 2.117-4.81 4.484-11.25 4.484-.583 0-1.16-.02-1.731-.06 3.37-1.258 5.481-3.303 5.481-5.706v-2.924c4.667.713 7.5 2.647 7.5 4.206zm-25 2.923v-3.81c1.243.165 2.496.248 3.75.246 1.254.002 2.507-.08 3.75-.247v3.81a24.861 24.861 0 01-3.75.28 24.861 24.861 0 01-3.75-.28zm15-6.458v2.253c0 1.344-1.94 2.787-5 3.663V13.78c2.017-.501 3.725-1.247 5-2.173zM14 2.969c6.44 0 11.25 2.367 11.25 4.484S20.44 11.937 14 11.937 2.75 9.57 2.75 7.454 7.56 2.97 14 2.97zM2.75 13.859v-2.253c1.275.926 2.983 1.672 5 2.173v3.743c-3.06-.876-5-2.319-5-3.663zm10 7.688v-.668a29.388 29.388 0 003.03-.029 18.7 18.7 0 001.97.602v3.758c-3.06-.876-5-2.32-5-3.663zm7.5 4.204v-3.82a28.033 28.033 0 007.5.01v3.81a25.227 25.227 0 01-7.5 0zm10-.541v-3.743c2.017-.502 3.725-1.248 5-2.173v2.253c0 1.344-1.94 2.787-5 3.663z'></path>
              </svg>
              <span>Funds Voucherek</span>
            </li>
            <li
              className={`flex py-2 gap-2 text-sm hover:text-primary-500 cursor-pointer ${
                currentComponent == 'Account' && 'text-primary-500'
              }`}
              onClick={() => handleCurrentComponent('Account')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='none'
                viewBox='0 0 32 32'>
                <path
                  fill='#DA2F88'
                  d='M28.866 26.5c-1.904-3.292-4.838-5.652-8.261-6.77a9 9 0 10-9.208 0c-3.424 1.117-6.357 3.477-8.261 6.77a1 1 0 101.731 1c2.355-4.07 6.518-6.5 11.134-6.5 4.616 0 8.779 2.43 11.134 6.5a1.001 1.001 0 001.867-.628 1 1 0 00-.136-.372zM9 12a7 7 0 117 7 7.007 7.007 0 01-7-7z'></path>
              </svg>
              <span>Account</span>
            </li>
          </ul>
          <div
            className={`border-t border-gray-200 p-4 cursor-pointer ${
              activeLocale?.includes('ar') ? 'text-right' : ''
            }`}
            onClick={handleSignInOut}>
            <span className='block py-2 gap-2 text-sm hover:text-primary-500'>
              {Object.keys(user ?? {})?.length ? 'Sign Out' : ''}
            </span>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
