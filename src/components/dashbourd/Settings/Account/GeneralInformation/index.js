import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import FormInput from '../FormInput'
import {handleGeneralInformationApiRoute} from '@/services/dashbourd/accounts/GeneralInformation'
import InputWithIcon from './InputWithIcon'
import {EyeIcon, EyeSlashIcon} from '@heroicons/react/20/solid'
import {useSelector} from 'react-redux'
import {useRouter} from 'next/router'

const GeneralInformation = () => {
  const {id: customerId} = useSelector(state => state.user?.user)
  const {locale} = useRouter()
  const initialValues = {
    firstName: '',
    lastName: '',
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is Required'),
    lastName: Yup.string().required('Last Name is Required'),
  })

  const submitForm = async values => {
    let newValues = {customerId, ...values}
    try {
      const res = await handleGeneralInformationApiRoute({
        locale,
        data: newValues,
      })
      if (typeof res?.response === 'object' && res?.response?.data) {
        onClose()
      }
    } catch (err) {}
  }

  return (
    <div className='w-full ring-1 w-full ring-gray-500 rounded-lg mt-10 px-4 pt-5 pb-10'>
      <h2 className='mb-7 text-2xl font-semibold text-gray-700'>
        General Information
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}>
        {({isSubmitting, isValid}) => (
          <Form>
            <div className='flex w-full gap-10'>
              <div className='mb-4 w-full flex flex-col'>
                <label htmlFor='lastName' className='block font-medium '>
                  Last Name
                </label>
                <div className='flex w-full'>
                  <Field id='lastName' name='lastName' component={FormInput} />
                </div>
              </div>
              <div className='mb-4 w-full flex flex-col'>
                <label htmlFor='firstName' className='block font-medium'>
                  First Name
                </label>
                <div className='flex w-full'>
                  <Field
                    id='firstName'
                    name='firstName'
                    component={FormInput}
                  />
                </div>
              </div>
              <div className='mt-1 w-full w-full flex flex-col'>
                <label
                  htmlFor='currentPassword'
                  className='block text-sm font-medium text-gray-700'>
                  Current Password
                </label>
                <Field
                  type='password'
                  name='currentPassword'
                  className=' w-full mt-2'
                  render={({field, form}) => (
                    <InputWithIcon
                      locale={locale}
                      EyeIcon={<EyeIcon className='h-5 w-5 text-gray-400' />}
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
            </div>
            <div className='flex justify-end mt-10'>
              <button
                type='submit'
                disabled={isSubmitting || !isValid}
                className='py-2 px-4 text-white bg-primary-500 disabled:bg-gray-500 disabled:cursor-not-allowed rounded hover:bg-primary-600'>
                {isSubmitting ? 'Updating...' : 'Updating Data'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default GeneralInformation
