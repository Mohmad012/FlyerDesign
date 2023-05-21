import {ErrorMessage} from 'formik'

const FormSelect = ({field, form, options, ...props}) => {
  return (
    <div
      className={`relative ${
        Object.hasOwn(options[0], 'code') ? 'w-24' : 'w-full'
      }`}>
      <select
        {...field}
        {...props}
        className='w-full py-2 rounded border-gray-300 outline-none ring-2 ring-gray-400'>
        {Object.hasOwn(options[0], 'code') ? (
          <>
            <option value={options[0]?.code}>{options[0]?.code}</option>
            {options.map(option => (
              <option key={option.code} value={option.code}>
                {option.code}
              </option>
            ))}
          </>
        ) : (
          <>
            <option value=''>Select City</option>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </>
        )}
      </select>

      <ErrorMessage
        name={field.name}
        component='div'
        className='mt-2 text-red-500'
      />
    </div>
  )
}

export default FormSelect
