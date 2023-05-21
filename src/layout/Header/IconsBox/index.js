// libs
import {useEffect, useState, Fragment} from 'react'
import {Popover} from '@headlessui/react'
import {useDispatch, useSelector} from 'react-redux'
import {useQueryClient} from 'react-query'
import dynamic from 'next/dynamic'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import {useRouter} from 'next/router'

// functions
import {classNames} from '@/utils/global'
import {deleteUser} from '@/lib/redux/slices/userInfo'

// components
import NavCartPopup from '@/components/pages/Cart/popup/NavCart'
import UserIcon from '@/components/icons/UserIcon'
import WishlistIcon from '@/components/icons/WishlistIcon'
import CartIcon from '@/components/icons/CartIcon'
import GiftboxIcon from '@/components/icons/GiftboxIcon'
import Cookies from 'js-cookie'
import {deleteAddresses} from '@/lib/redux/slices/checkout'
import {CREATE_CART, createCart} from '@/services/cart'
import {deleteCart} from '@/lib/redux/slices/cart'

// components with not server side rendering
const Login = dynamic(() => import('./Login'), {ssr: false})
const Register = dynamic(() => import('./Register'), {ssr: false})
const LoginRegister = dynamic(() => import('./LoginRegister'), {ssr: false})
const ReSettingPass = dynamic(() => import('./ReSettingPass'), {ssr: false})

const LeftBox = () => {
  const {cartItems} = useSelector(state => state.cart)
  const user = useSelector(state => state.user?.user)
  const login = useSelector(state => state.login?.login)
  const queryClient = useQueryClient()
  const {locale, push} = useRouter()
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [statusPopup, setStatusPopup] = useState('loginRegister')
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    setUserInfo(user)
  }, [user])

  const firstname = userInfo?.firstname

  console.log('login', login)

  const handleUserInfo = () => {
    if (!Object.keys(userInfo ?? {})?.length) {
      return (
        <button
          onClick={() => {
            setOpen(true)
            setStatusPopup('loginRegister')
          }}
          className='border-2 border-primary-500 p-1 flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
          <UserIcon className='h-6 w-6 text-primary-500' />
        </button>
      )
    } else {
      return (
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button
              dir={locale?.includes('ar') ? 'ltr' : ''}
              className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
              {firstname?.length > 10
                ? firstname?.slice(0, 10) + '...'
                : firstname}
              <ChevronDownIcon
                className='-mr-1 h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'>
            <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='py-1'>
                <Menu.Item>
                  {({active}) => (
                    <>
                      <button
                        onClick={() => {
                          dispatch(deleteUser())
                          dispatch(deleteAddresses())
                          dispatch(deleteCart())
                          Cookies.remove('quote')
                          Cookies.remove('mage')
                          setUserInfo(null)
                          queryClient.removeQueries('cart')
                          CREATE_CART()
                        }}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}>
                        Log Out
                      </button>

                      <button
                        onClick={() => {
                          push('/dashboard')
                        }}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}>
                        Dashboard
                      </button>
                    </>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )
    }
  }
  const handleShowPopup = () => {
    if (statusPopup === 'loginRegister') {
      return (
        <LoginRegister
          setStatusPopup={setStatusPopup}
          open={open}
          setOpen={setOpen}
        />
      )
    } else if (statusPopup === 'reSettingPass') {
      return (
        <ReSettingPass
          setStatusPopup={setStatusPopup}
          open={open}
          setOpen={setOpen}
        />
      )
    } else if (statusPopup === 'register') {
      return (
        <Register
          setStatusPopup={setStatusPopup}
          open={open}
          setOpen={setOpen}
        />
      )
    } else if (statusPopup === 'login' || login === 'login') {
      return (
        <Login setStatusPopup={setStatusPopup} open={open} setOpen={setOpen} />
      )
    }
  }

  return (
    <>
      <div className='hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center'>
        <div className='flex gap-3'>
          {handleUserInfo()}

          <button className='border-2 border-primary-500 p-1 flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
            <WishlistIcon className='h-6 w-6 text-primary-500' />
          </button>
          <Popover className='flow-root text-sm relative border-2 border-primary-500 p-1 outline-none rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
            <Popover.Button className='group -m-2 flex items-center p-2'>
              <CartIcon className='h-6 w-6 text-primary-500' />
              <span className='absolute -top-2 -right-2 text-[10px] text-white bg-primary-500 w-5 h-5 rounded-full flex items-center justify-center overflow-hidden'>
                {cartItems?.length || 0}
              </span>
              <span className='sr-only'>items in cart, view bag</span>
            </Popover.Button>
            <NavCartPopup cart={cartItems} queryClient={queryClient} />
          </Popover>

          <button className='border-2 border-primary-500 p-1 flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
            <GiftboxIcon className='h-6 w-6 text-primary-500' />
          </button>
        </div>
      </div>
      {handleShowPopup()}
    </>
  )
}

export default LeftBox
