import {Fragment, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import FormLogin from './FormLogin'
import IconsList from './IconsList'
import {useTranslation} from 'next-i18next'
import {handleLoginApiRoute} from '@/services/header'
import {useRouter} from 'next/router'
import {useDispatch} from 'react-redux'
import {addUser} from '@/lib/redux/slices/userInfo'
import { getAllAddress } from '@/lib/redux/slices/checkout'

const Login = ({open, setOpen, setStatusPopup}) => {
  const cancelButtonRef = useRef(null)
  const {t} = useTranslation('common')
  const {locale} = useRouter()
  const dispatch = useDispatch()

  const handleSubmit = async (values, setSubmitting) => {
    try {
      const res = await handleLoginApiRoute({
        email: values.email,
        password: values.password,
        locale,
      })
      dispatch(addUser(res))
      dispatch(getAllAddress(res?.addresses))

      setOpen(false)
    } catch (error) {
      console.log('error', error)
    } finally {
      setSubmitting(false)
    }
  }

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
                <div>
                  <div className='flex min-h-full flex-col justify-center '>
                    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md pb-10'>
                      <div className='bg-white shadow sm:rounded-lg '>
                        <FormLogin
                          handleSubmit={handleSubmit}
                          setStatusPopup={setStatusPopup}
                          setOpen={setOpen}
                        />

                        <IconsList />

                        <div className='flex items-center justify-center mt-10'>
                          <div className='text-sm'>
                            <button
                              onClick={() => setStatusPopup('register')}
                              className='font-medium text-left text-sky-600'>
                              {t('Create New Account')}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Login
