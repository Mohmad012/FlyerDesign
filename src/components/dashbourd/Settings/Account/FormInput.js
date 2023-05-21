import {ErrorMessage, Field} from 'formik'

const FormInput = ({field, form, ...props}) => {
  const handleClearInput = () => {
    form.setFieldValue(field.name, '')
  }

  return (
    <div className='relative w-full'>
      <Field
        {...field}
        {...props}
        className='w-full py-2 px-2 rounded border-gray-300 focus:outline-none ring-1 ring-gray-400'
      />
      <ErrorMessage
        name={field.name}
        component='div'
        className='mt-2 text-red-500'
      />
    </div>
  )
}

export default FormInput
