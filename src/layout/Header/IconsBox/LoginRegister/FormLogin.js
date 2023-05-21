import {EyeIcon, EyeSlashIcon, EnvelopeIcon} from '@heroicons/react/20/solid'

const FormLogin = ({showPassword, togglePasswordVisibility, setOpen}) => {
  return (
    <form className='space-y-6'>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <EnvelopeIcon className='h-5 w-5 text-gray-400' />
        </div>
        <input
          type='email'
          placeholder='Enter your email'
          className='py-2 pl-10 pr-4 rounded-md bg-white border-gray-300 focus:outline-none focus:ring-gray-300 focus:border-gray-300 block w-full sm:text-sm border-2'
        />
      </div>

      <div className='relative'>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder='Enter your password'
          className='py-2 bg-white rounded-md border-gray-300 focus:outline-none focus:ring-gray-300 focus:border-gray-300 block w-full sm:text-sm border-2'
        />
        <button
          type='button'
          className='absolute top-0 left-3 mt-2 mr-2'
          onClick={togglePasswordVisibility}>
          {showPassword ? (
            <EyeSlashIcon className='h-5 w-5 text-gray-400' />
          ) : (
            <EyeIcon className='h-5 w-5 text-gray-400' />
          )}
        </button>
      </div>

      <div className='flex items-center justify-end'>
        <div className='text-sm'>
          <a href='#' className='font-medium text-left hover:text-primary-500'>
            ? Forgot your password
          </a>
        </div>
      </div>

      <div>
        <button
          type='submit'
          onClick={() => setOpen(false)}
          className='flex w-full justify-center rounded-md bg-primary-600 py-2 my-10 px-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'>
          Sign in
        </button>
      </div>
    </form>
  )
}

export default FormLogin
