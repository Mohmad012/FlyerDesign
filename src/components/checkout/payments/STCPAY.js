import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import OtpModal from '../modals/OTPModal'
import { mobileNumberValidation } from '@/utils/validation/checkout'
import { getStcPayOtp } from '@/services/checkout'
import { toast } from 'react-toastify'
import Spinner from '@/components/icons/SpinnerIcon'

const StcPay = () => {
  const [openModal, setOpenModal] = useState(false)
  const [paymentRefs, setPaymentRefs] = useState({})
  return (
    <>
      <Formik className='bg-gray-200 p-4 rounded-lg'
        initialValues={{ mobile: '' }}
        validationSchema={mobileNumberValidation}
        onSubmit={({mobile}, { resetForm, setSubmitting }) => {
          setSubmitting(true);
          console.log(mobile)
          getStcPayOtp(mobile).then(res =>{
            console.log('get stcpay',res)
            if(res?.data?.status) {
             toast.info('Otp send successfully')
              setPaymentRefs({mobile,...res?.data?.result})
              setTimeout(() => {
                setOpenModal(true)
                resetForm();
              }, 300);
              setSubmitting(false)
            }else{
              toast.error(res?.data?.message)
              setSubmitting(false)
            }
          })
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form>
            <label htmlFor="mobile" className="block font-bold leading-6 text-gray-900 ">
              Enter Mobile number
            </label>
            <div className="relative mt-2 flex">
              <Field
                disabled={isSubmitting}
                type="text"
                name="mobile"
                id="mobile"
                className="block relative w-full rounded-md border-0 py-4 px-7 ml-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 text-left"
                placeholder="Enter mobile number"
                aria-describedby="mobile"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center w-16 bg-gray-100">
                <span className="text-gray-500" id="country-key">
                  966+
                </span>
              </div>
            </div>
              {touched.mobile && errors.mobile && <div className='text-red-400 text-sm'>{errors.mobile}</div>}
            <button disabled={isSubmitting} type='submit' className='mt-4 flex items-center justify-center rounded-lg bg-primary-600 active:bg-primary-500 hover:bg-primary-500 w-full text-xl text-white p-4'>{isSubmitting ? <span className="flex items-center justify-center gap-2">

              <Spinner/>
              <span>Loading...</span>
            </span> :'Confirm'}</button>
          </Form>
        )}
      </Formik>
      <OtpModal data={paymentRefs} isOpen={openModal} onClose={setOpenModal} />
    </>
  )
}

export default StcPay