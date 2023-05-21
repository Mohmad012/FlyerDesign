import InputWithIcon from '@/components/header/InputWithIcon'
import {EyeIcon, EyeSlashIcon, EnvelopeIcon} from '@heroicons/react/20/solid'
import {useTranslation} from 'next-i18next'
import {useRouter} from 'next/router'

import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const FormLogin = ({setStatusPopup, handleSubmit}) => {
  const {locale} = useRouter()

  const {t} = useTranslation('common')

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('Invalid email'))
      .required(t('Email is required')),
    password: Yup.string().required(t('Password is required')),
  })
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values, {setSubmitting}) => {
        handleSubmit(values, setSubmitting)
      }}>
      {({isSubmitting}) => (
        <Form className='space-y-6'>
          <div className='flex flex-col '>
            <Field
              name='email'
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
              name='email'
              className={`text-red-500 mb-4 ${
                locale?.includes('ar') ? 'text-right' : 'text-left'
              } `}
              component='p'
            />
          </div>

          <div className='flex flex-col '>
            <Field
              name='password'
              render={({field, form}) => (
                <InputWithIcon
                  locale={locale}
                  EyeIcon={<EyeIcon className='h-5 w-5 text-gray-400' />}
                  EyeSlashIcon={
                    <EyeSlashIcon className='h-5 w-5 text-gray-400' />
                  }
                  placeholder={t('Enter your password')}
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
          </div>

          <div className='flex items-center justify-end'>
            <div className='text-sm'>
              <button
                onClick={() => setStatusPopup('reSettingPass')}
                className='font-medium text-left hover:text-primary-500'>
                {t('Forgot your password')}
              </button>
            </div>
          </div>

          <div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='flex w-full justify-center rounded-md bg-primary-600 py-2 my-10 px-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'>
              {isSubmitting ? t('Signing In') : t('Sign In')}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormLogin
