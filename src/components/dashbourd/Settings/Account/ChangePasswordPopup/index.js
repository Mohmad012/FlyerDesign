import {Dialog, Transition} from '@headlessui/react'
import {Fragment} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import InputWithIcon from './InputWithIcon'
import {EyeIcon, EyeSlashIcon} from '@heroicons/react/20/solid'
import {useRouter} from 'next/router'
import {handleChangePasswordApiRoute} from '@/services/dashbourd/accounts/changePassword'
import {useSelector} from 'react-redux'

function ChangePasswordPopup({isOpen, setIsOpen, onClose}) {
  const {locale} = useRouter()
  const {id: customerId} = useSelector(state => state.user?.user)
  const initialValues = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  }

  const validationSchema = Yup.object({
    currentPassword: Yup.string().required('Current Password is Required'),
    newPassword: Yup.string()
      .min(8, 'Must be at least 8 characters')
      .required('New Password is Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm Password is Required'),
  })

  const submitForm = async values => {
    try {
      const res = await handleChangePasswordApiRoute({
        locale,
        data: {customerId, ...values},
      })
    } catch (err) {}
    onClose()
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-20 overflow-y-auto'
        onClose={setIsOpen}>
        <div className='min-h-screen px-4 text-center'>
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

          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'>
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
            <div className='inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
              <Dialog.Title
                as='h3'
                className='text-lg font-medium leading-6 text-gray-900 flex items-center justify-between'>
                <button type='button' onClick={onClose}>
                  <svg width={15} height={15} viewBox='0 0 24 24'>
                    <line
                      x1='0'
                      y1='0'
                      x2='24'
                      y2='24'
                      stroke='black'
                      strokeWidth='2'
                    />
                    <line
                      x1='0'
                      y1='24'
                      x2='24'
                      y2='0'
                      stroke='black'
                      strokeWidth='2'
                    />
                  </svg>
                </button>
                <span>Change Password</span>
              </Dialog.Title>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitForm}>
                {({isSubmitting, isValid}) => (
                  <Form className='mt-4'>
                    <div className='mb-2'>
                      <label
                        htmlFor='currentPassword'
                        className='block text-sm font-medium text-gray-700'>
                        Current Password
                      </label>
                      <Field
                        type='password'
                        name='currentPassword'
                        render={({field, form}) => (
                          <InputWithIcon
                            locale={locale}
                            EyeIcon={
                              <EyeIcon className='h-5 w-5 text-gray-400' />
                            }
                            EyeSlashIcon={
                              <EyeSlashIcon className='h-5 w-5 text-gray-400' />
                            }
                            placeholder={'Enter Current Password'}
                            type='password'
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                          />
                        )}
                      />
                      <p className='text-red-500'>
                        <ErrorMessage name='currentPassword' />
                      </p>
                    </div>

                    <div className='my-10'>
                      <label
                        htmlFor='newPassword'
                        className='block text-sm font-medium text-gray-700'>
                        New Password
                      </label>
                      <Field
                        type='password'
                        name='newPassword'
                        render={({field, form}) => (
                          <InputWithIcon
                            locale={locale}
                            EyeIcon={
                              <EyeIcon className='h-5 w-5 text-gray-400' />
                            }
                            EyeSlashIcon={
                              <EyeSlashIcon className='h-5 w-5 text-gray-400' />
                            }
                            placeholder={'Enter New Password'}
                            type='password'
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                          />
                        )}
                      />
                      <p className='text-red-500'>
                        <ErrorMessage name='newPassword' />
                      </p>
                    </div>

                    <div className='mb-4'>
                      <label
                        htmlFor='confirmPassword'
                        className='block text-sm font-medium text-gray-700'>
                        Confirm Password
                      </label>
                      <Field
                        type='password'
                        name='confirmPassword'
                        render={({field, form}) => (
                          <InputWithIcon
                            locale={locale}
                            EyeIcon={
                              <EyeIcon className='h-5 w-5 text-gray-400' />
                            }
                            EyeSlashIcon={
                              <EyeSlashIcon className='h-5 w-5 text-gray-400' />
                            }
                            placeholder={'Enter Confirm Password'}
                            type='password'
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                          />
                        )}
                      />

                      <p className='text-red-500'>
                        <ErrorMessage name='confirmPassword' />
                      </p>
                    </div>

                    <div className='flex justify-end'>
                      <button
                        type='submit'
                        className='w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-500 disabled:opacity-50 disabled:pointer-events-none hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                        disabled={isSubmitting || !isValid}>
                        {isSubmitting ? 'Modifing...' : 'Modify Password'}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ChangePasswordPopup
