import {EnvelopeIcon, EyeIcon, EyeSlashIcon} from '@heroicons/react/20/solid'
import {countries} from 'country-data'
import {useRouter} from 'next/router'
import {useState} from 'react'
import {useTranslation} from 'next-i18next'
import InputWithIcon from '@/components/header/InputWithIcon'

import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const initialValues = {
  phoneNumber: '',
  firstName: '',
  lastName: '',
  Email: '',
  ConfirmEmail: '',
  password: '',
  confirmPassword: '',
}

const FormRegister = ({handleSubmit, selectedCountry, setSelectedCountry}) => {
  const {locale} = useRouter()

  const [passwordError, setPasswordError] = useState(null)

  const countryList = countries.all
    .map(country => {
      return {
        name: country.name,
        code: country.countryCallingCodes[0],
        flag: country.emoji,
      }
    })
    .filter(fv => fv?.name && fv?.code && fv?.flag)

  const handleChange = event => {
    setSelectedCountry(event.target.value)
  }

  const {t} = useTranslation('common')

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required(t('Phone number is required'))
      .matches(/^[0-9]{12}$/, t('Phone number must contain exactly 12 digits')),
    firstName: Yup.string().required(t('First name is required')),
    lastName: Yup.string().required(t('Last name is required')),
    Email: Yup.string()
      .email(t('Invalid email'))
      .required(t('Email is required')),
    ConfirmEmail: Yup.string()
      .oneOf([Yup.ref('Email'), null], t('Emails must match'))
      .required(t('Confirm Email is required')),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        t(
          'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number'
        )
      )
      .required(t('Password is required')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], t('Passwords must match'))
      .required(t('Confirm Password is required')),
  })
  const passwordRequirements = [
    'Has at least 8 characters',
    'Contains at least one uppercase letter (A, B, C...)',
    'Contains at least one lowercase letter (a, b, c...)',
    'Contains at least one number (1, 2, 3...)',
  ]

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting}) => {
        handleSubmit(values, setSubmitting)
      }}>
      {({isSubmitting}) => (
        <Form className='flex flex-col gap-4 max-w-md mx-auto'>
          <div className='flex gap-2'>
            <Field
              id='phone-input'
              type='tel'
              placeholder={t('Phone Number')}
              required
              className='py-2 bg-white rounded-md border-gray-300 focus:outline-none focus:ring-gray-300 focus:border-gray-300 block w-full sm:text-sm border-2 w-full'
              name='phoneNumber'
            />

            <Field
              as='select'
              value={selectedCountry}
              onChange={handleChange}
              className='block appearance-none w-32 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
              name='country'>
              <option value={countryList[0]?.code}>
                {countryList[0]?.flag} ({countryList[0]?.code})
              </option>
              {countryList.map(country => (
                <option key={country.code} value={country.code}>
                  {country.flag} ({country.code})
                </option>
              ))}
            </Field>
          </div>
          <ErrorMessage
            name='phoneNumber'
            className={`text-red-500 mb-4 ${
              locale?.includes('ar') ? 'text-right' : 'text-left'
            } `}
            component='p'
          />
          <button
            type='button'
            disabled
            className='bg-gray-300 text-gray-500 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300'>
            {t('Send inquiry code')}
          </button>
          <div className='flex flex-col items-start gap-2 w-full'>
            <Field
              id='firstName'
              type='text'
              placeholder={t('First Name')}
              className='py-2 bg-white rounded-md border-gray-300 focus:outline-none focus:ring-gray-300 focus:border-gray-300 block w-full sm:text-sm border-2'
              name='firstName'
            />
            <ErrorMessage
              name='firstName'
              component='p'
              className='text-red-500'
            />
          </div>
          <div className='flex flex-col items-start gap-2 w-full'>
            <Field
              id='lastName'
              type='text'
              placeholder={t('Last Name')}
              className='py-2 bg-white rounded-md border-gray-300 focus:outline-none focus:ring-gray-300 focus:border-gray-300 block w-full sm:text-sm border-2'
              name='lastName'
            />
            <ErrorMessage
              name='lastName'
              component='p'
              className='text-red-500'
            />
          </div>
          <div className='flex flex-col '>
            <Field
              name='Email'
              render={({field, form}) => (
                <InputWithIcon
                  locale={locale}
                  icon={<EnvelopeIcon className='h-5 w-5 text-gray-400' />}
                  placeholder={t('Email')}
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              )}
            />
            <ErrorMessage
              name='Email'
              className={`text-red-500 mb-4 ${
                locale?.includes('ar') ? 'text-right' : 'text-left'
              } `}
              component='p'
            />
          </div>
          <div className='flex flex-col'>
            <Field
              name='ConfirmEmail'
              render={({field, form}) => (
                <InputWithIcon
                  locale={locale}
                  icon={<EnvelopeIcon className='h-5 w-5 text-gray-400' />}
                  placeholder={t('Confirm Email')}
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              )}
            />
            <ErrorMessage
              name='ConfirmEmail'
              className={`text-red-500 mb-4 ${
                locale?.includes('ar') ? 'text-right' : 'text-left'
              } `}
              component='p'
            />
          </div>
          <div className='flex flex-col'>
            <Field
              name='password'
              render={({field, form}) => (
                <InputWithIcon
                  locale={locale}
                  EyeIcon={<EyeIcon className='h-5 w-5 text-gray-400' />}
                  EyeSlashIcon={
                    <EyeSlashIcon className='h-5 w-5 text-gray-400' />
                  }
                  placeholder={t('Password')}
                  type='password'
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              )}
            />
            <ErrorMessage
              name='password'
              className={`text-red-500 mb-4 ${
                locale?.includes('ar') ? 'text-right' : 'text-left'
              } `}
              component='p'
            />
          </div>{' '}
          <div className='flex flex-col'>
            <Field
              name='confirmPassword'
              render={({field, form}) => (
                <InputWithIcon
                  locale={locale}
                  EyeIcon={<EyeIcon className='h-5 w-5 text-gray-400' />}
                  EyeSlashIcon={
                    <EyeSlashIcon className='h-5 w-5 text-gray-400' />
                  }
                  placeholder={t('Confirm Password')}
                  type='password'
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              )}
            />
            <ErrorMessage
              name='confirmPassword'
              className={`text-red-500 mb-4 ${
                locale?.includes('ar') ? 'text-right' : 'text-left'
              } `}
              component='p'
            />
          </div>
          {passwordError && (
            <p className='text-red-500 mb-4'>{passwordError}</p>
          )}
          <ul className='list-disc text-gray-500 text-xs ml-5'>
            {passwordRequirements.map((requirement, index) => (
              <li
                key={index}
                className={`mb-2 ${
                  locale?.includes('ar') ? 'text-right' : ''
                }`}>
                {t(requirement)}
              </li>
            ))}
          </ul>
          <span
            className={`ml-2 text-sm ${
              locale?.includes('ar') ? 'text-right' : 'text-left'
            }`}>
            {t('By choosing the above option, I agree to the')}{' '}
            <a href='#' className='underline'>
              {t('Terms of Use')}
            </a>{' '}
            {t('and')}{' '}
            <a href='#' className='underline'>
              {t('Privacy Statement')}
            </a>
            .
          </span>
          <label
            className={`inline-flex items-center my-5 mb-10 ${
              locale?.includes('ar') ? 'text-right' : ''
            } gap-3`}>
            <input
              type='checkbox'
              className='form-checkbox text-indigo-600 w-4'
            />
            <span className='ml-2 text-sm text-sky-600'>
              {t('Agree to terms and conditions')}
            </span>
          </label>
          <div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='flex w-full justify-center rounded-md bg-primary-600 py-2 my-10 px-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'>
              {isSubmitting ? t('Creating') : t('New Account')}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormRegister
