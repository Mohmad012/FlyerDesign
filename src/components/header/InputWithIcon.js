import {Field} from 'formik'
import {useState} from 'react'

function InputWithIcon({
  icon,
  placeholder,
  type = 'text',
  onChange,
  value,
  locale,
  EyeSlashIcon,
  EyeIcon,
  name,
}) {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='relative'>
      <div
        className={`absolute inset-y-0 ${
          locale?.includes('ar') ? 'left-3' : 'right-3'
        }  flex items-center pointer-events-none`}>
        {icon}
      </div>

      <Field
        type={
          type === 'password' ? (showPassword ? 'text' : 'password') : 'text'
        }
        placeholder={placeholder}
        name={name}
        className='py-2 bg-white w-full rounded-md border-gray-300 focus:outline-none focus:ring-gray-300 focus:border-gray-300 block w-full sm:text-sm border-2'
      />
      {type === 'password' && (
        <button
          type='button'
          className={`absolute top-0 ${
            locale?.includes('ar') ? 'left-3' : 'right-3'
          } mt-2 `}
          onClick={togglePasswordVisibility}>
          {showPassword ? EyeSlashIcon : EyeIcon}
        </button>
      )}
    </div>
  )
}

export default InputWithIcon
