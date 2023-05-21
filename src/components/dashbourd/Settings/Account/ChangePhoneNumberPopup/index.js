import {Fragment} from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import {Dialog, Transition} from '@headlessui/react'
import {countries} from 'country-data'
import FormInput from './FormInput'
import FormSelect from '../FormSelect'

const ChangePhoneNumberPopup = ({
  isOpen,
  setIsOpen,
  onClose,
  handleOpenAddPhoneInformationPopup,
}) => {
  const initialValues = {
    countryList: '',
    mobileNumber: '',
  }

  const validationSchema = Yup.object().shape({
    countryList: Yup.string().required('Country Code is Required'),
    mobileNumber: Yup.number()
      .required('Required')
      .positive('Please enter a positive number')
      .integer('Please enter an integer'),
  })

  const submitForm = values => {
    console.log(values)
    onClose()
    handleOpenAddPhoneInformationPopup()
  }

  const countryList = countries.all
    .map(country => {
      return {
        name: country.name,
        code: country.countryCallingCodes[0],
        // flag: country.emoji,
      }
    })
    .filter(fv => fv?.name && fv?.code)

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
                <span>Change Phone Number</span>
              </Dialog.Title>
              <div className='flex flex-col gap-5 items-start mb-5'>
                <p className='w-full mx-auto text-center my-5 text-gray-400'>
                  Add phone information
                </p>
              </div>
              <div className='mt-4'>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={submitForm}>
                  {({isSubmitting, isValid}) => (
                    <Form className=' w-full '>
                      <div className='flex w-full gap-10 items-end justify-end'>
                        <div className='mb-4 flex flex-col items-end w-full'>
                          <label
                            htmlFor='mobileNumber'
                            className='block mb-1 font-medium'>
                            New Phone Number
                          </label>
                          <div className='flex w-full'>
                            <div className='w-1/4'>
                              <Field
                                id='countryList'
                                name='countryList'
                                component={FormSelect}
                                options={countryList}
                              />
                            </div>
                            <div className='w-3/4'>
                              <Field
                                id='mobileNumber'
                                name='mobileNumber'
                                component={FormInput}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        type='submit'
                        className='w-full mt-5  flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-500 disabled:opacity-50 disabled:pointer-events-none hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                        disabled={isSubmitting || !isValid}>
                        Send verification code
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ChangePhoneNumberPopup
