import {Fragment} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {Dialog, Transition} from '@headlessui/react'

const AddPhoneInformationPopup = ({isOpen, setIsOpen, onClose}) => {
  const initialValues = {
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',
  }

  const validationSchema = Yup.object().shape({
    digit1: Yup.string().required('Digit 1 Required'),
    digit2: Yup.string().required('Digit 2 Required'),
    digit3: Yup.string().required('Digit 3 Required'),
    digit4: Yup.string().required('Digit 4 Required'),
  })

  const handleSubmit = values => {
    const otp = values.digit1 + values.digit2 + values.digit3 + values.digit4
    console.log(`OTP received: ${otp}`)
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
            <div className='inline-block w-full h-96 max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg'>
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
              </Dialog.Title>
              <div className='flex flex-col gap-5 items-center mb-5'>
                <span className='mt-5'>Add Phone Information</span>
                <p className='w-full mx-auto text-center text-gray-400 '>
                  Please enter the PIN sent to your phone number +20-10-94534500
                </p>
              </div>
              <div className='h-40 mt-4 flex items-center justify-center'>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}>
                  {({errors, touched, isSubmitting, isValid}) => (
                    <Form className='h-40'>
                      <div className='flex justify-center mb-4'>
                        <Field
                          name='digit1'
                          className={`appearance-none border rounded mr-1 w-12 py-2 px-3 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.digit1 && touched.digit1 && 'border-red-500'
                          }`}
                          maxLength={1}
                        />
                        <Field
                          name='digit2'
                          className={`appearance-none border rounded mr-1 w-12 py-2 px-3 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.digit2 && touched.digit2 && 'border-red-500'
                          }`}
                          maxLength={1}
                        />
                        <Field
                          name='digit3'
                          className={`appearance-none border rounded mr-1 w-12 py-2 px-3 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.digit3 && touched.digit3 && 'border-red-500'
                          }`}
                          maxLength={1}
                        />
                        <Field
                          name='digit4'
                          className={`appearance-none border rounded mr-1 w-12 py-2 px-3 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.digit4 && touched.digit4 && 'border-red-500'
                          }`}
                          maxLength={1}
                        />
                      </div>
                      <div className='flex items-center justify-center'>
                        <button
                          className='w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-500 disabled:opacity-50 disabled:pointer-events-none hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                          type='submit'
                          disabled={isSubmitting || !isValid}>
                          Confirm
                        </button>
                      </div>
                      <div className='text-red-500 mt-2 flex flex-col gap-1 w-full items-center'>
                        <span>
                          <ErrorMessage name='digit1' />
                        </span>
                        <span>
                          <ErrorMessage name='digit2' />
                        </span>
                        <span>
                          <ErrorMessage name='digit3' />
                        </span>
                        <span>
                          <ErrorMessage name='digit4' />
                        </span>
                      </div>
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

export default AddPhoneInformationPopup
