import {useField} from 'formik'
import React from 'react'

const Input = ({label, classNames, cols, ...props}) => {
  const [field, meta, helpers] = useField(props)

  return (
    <div className={cols}>
      <label
        htmlFor='email'
        className='block text-sm font-medium leading-6 text-gray-900'>
        {label}
      </label>
      <div className='mt-2'>
        <input
          className={`block w-full rounded-md border-0 py-2 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 ${classNames}`}
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className='text-sm text-red-500 mt-1'>{meta.error}</div>
        ) : null}
      </div>
    </div>
  )
}

export default Input
