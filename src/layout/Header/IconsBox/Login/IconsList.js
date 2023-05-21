import FacebookIconV2 from '@/components/icons/social/FacebookIconV2'
import GoogleIcon from '@/components/icons/social/GoogleIcon'
import TwitterIconV2 from '@/components/icons/social/TwitterIconV2'

const IconsList = () => {
  return (
    <div className='mt-6'>
      <div className='mt-6 flex justify-center'>
        <div>
          <a
            href='#'
            className='inline-flex w-full justify-center bg-white py-2 px-4 text-gray-500'>
            <span className='sr-only'>Sign in with Facebook</span>
            <FacebookIconV2 className='h-12 w-12' />
          </a>
        </div>

        <div>
          <a
            href='#'
            className='inline-flex w-full justify-center rounded-md bg-white py-2 px-4 text-gray-500'>
            <span className='sr-only'>Sign in with Twitter</span>
            <TwitterIconV2 className='h-12 w-12' />
          </a>
        </div>

        <div>
          <a
            href='#'
            className='inline-flex w-full justify-center rounded-md bg-white py-2 px-4 text-gray-500'>
            <span className='sr-only'>Sign in with Google</span>
            <GoogleIcon className='h-12 w-12' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default IconsList
