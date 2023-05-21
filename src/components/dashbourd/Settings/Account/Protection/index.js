import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
// import {countries} from 'country-data'
// import FormSelect from '../FormSelect'
import FormInput from '../FormInput'
import {useState} from 'react'
import ChangePasswordPopup from '../ChangePasswordPopup'
import ChangeEmailPopup from '../ChangeEmailPopup'
import ChangePhoneNumberPopup from '../ChangePhoneNumberPopup'
import AddPhoneInformationPopup from '../ChangePhoneNumberPopup/AddPhoneInformationPopup'

const Protection = () => {
  const [isChangePasswordPopup, setChangePasswordPopup] = useState(false)
  const [isChangeEmailPopup, setChangeEmailPopup] = useState(false)
  const [isChangePhoneNumberPopup, setChangePhoneNumberPopup] = useState(false)
  const [isAddPhoneInformationPopup, setAddPhoneInformationPopup] =
    useState(false)

  const handleOpenChangePasswordPopup = () => {
    setChangePasswordPopup(true)
  }

  const handleCloseChangePasswordPopup = () => {
    setChangePasswordPopup(false)
  }

  const handleOpenChangeEmailPopup = () => {
    setChangeEmailPopup(true)
  }

  const handleCloseChangeEmailPopup = () => {
    setChangeEmailPopup(false)
  }

  const handleOpenChangePhoneNumberPopup = () => {
    setChangePhoneNumberPopup(true)
  }

  const handleCloseChangePhoneNumberPopup = () => {
    setChangePhoneNumberPopup(false)
  }

  const handleOpenAddPhoneInformationPopup = () => {
    setAddPhoneInformationPopup(true)
  }

  const handleCloseAddPhoneInformationPopup = () => {
    setAddPhoneInformationPopup(false)
  }

  const initialValues = {
    mobileNumber: '',
    countryCode: '',
    email: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    mobileNumber: Yup.number()
      .required('Required')
      .positive('Please enter a positive number')
      .integer('Please enter an integer'),
    countryCode: Yup.string().required('Country Code is Required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  })

  const submitForm = values => {
    console.log(values)
  }

  // const countryList = countries.all
  //   .map(country => {
  //     return {
  //       name: country.name,
  //       code: country.countryCallingCodes[0],
  //     }
  //   })
  //   .filter(fv => fv?.name && fv?.code)
  return (
    <div className='w-full ring-1 w-full ring-gray-500 rounded-lg mt-10 px-4 pt-5 pb-10 mb-5'>
      <h2 className='mb-7 text-2xl font-semibold text-gray-700'>Protection</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}>
        <Form>
          <div className='flex w-full gap-10'>
            {/* <div className='mb-4 flex flex-col items-start w-full'>
              <label htmlFor='mobileNumber' className='block mb-1 font-medium'>
                Mobile Number
              </label>
              <div className='flex'>
                <div className=''>
                  <Field
                    id='countryList'
                    name='countryList'
                    component={FormSelect}
                    options={countryList}
                  />
                </div>
                <div className=''>
                  <Field
                    id='mobileNumber'
                    name='mobileNumber'
                    component={FormInput}
                  />
                </div>
              </div>
            </div> */}
            <div className='mb-4 w-full flex flex-col items-start'>
              <label htmlFor='password' className='block mb-1 font-medium '>
                Password
              </label>
              <div className='flex w-full'>
                <Field
                  id='password'
                  name='password'
                  type='password'
                  disabled
                  component={FormInput}
                />
              </div>
            </div>{' '}
            <div className='mb-4 w-full flex flex-col items-start'>
              <label htmlFor='email' className='block mb-1 font-medium '>
                Email
              </label>
              <div className='flex w-full'>
                <Field
                  id='email'
                  name='email'
                  type='email'
                  disabled
                  component={FormInput}
                />
              </div>
            </div>
          </div>
          <div className='flex justify-end gap-3 mt-10'>
            <button className='py-2 px-4 text-red-500 underline'>
              Delete Account
            </button>{' '}
            <button
              onClick={handleOpenChangePhoneNumberPopup}
              className='py-2 px-4 text-primary-500 ring-1 ring-gray-500 rounded hover:bg-primary-600 hover:text-white'>
              Change Phone
            </button>{' '}
            <button
              onClick={handleOpenChangeEmailPopup}
              className='py-2 px-4 text-primary-500 ring-1 ring-gray-500 rounded hover:bg-primary-600 hover:text-white'>
              Change Email
            </button>{' '}
            <button
              onClick={handleOpenChangePasswordPopup}
              className='py-2 px-4 text-primary-500 ring-1 ring-gray-500 rounded hover:bg-primary-600 hover:text-white'>
              Change Password
            </button>
          </div>
        </Form>
      </Formik>
      <ChangePasswordPopup
        isOpen={isChangePasswordPopup}
        setIsOpen={setChangePasswordPopup}
        onClose={handleCloseChangePasswordPopup}
      />{' '}
      <ChangeEmailPopup
        isOpen={isChangeEmailPopup}
        setIsOpen={setChangeEmailPopup}
        onClose={handleCloseChangeEmailPopup}
      />{' '}
      <ChangePhoneNumberPopup
        isOpen={isChangePhoneNumberPopup}
        setIsOpen={setChangePhoneNumberPopup}
        onClose={handleCloseChangePhoneNumberPopup}
        handleOpenAddPhoneInformationPopup={handleOpenAddPhoneInformationPopup}
      />{' '}
      <AddPhoneInformationPopup
        isOpen={isAddPhoneInformationPopup}
        setIsOpen={setAddPhoneInformationPopup}
        onClose={handleCloseAddPhoneInformationPopup}
      />
    </div>
  )
}

export default Protection
