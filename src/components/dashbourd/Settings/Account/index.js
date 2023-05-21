import GeneralInformation from './GeneralInformation'
import Protection from './Protection'

const Account = () => {
  return (
    <div className='flex flex-col px-1'>
      <div className='flex flex-col gap-5 items-start'>
        <h2 className='text-xl text-primary-500 font-semibold'>Account</h2>
        <p className='text-gray-500'>
          Manage your details, view your status, change your password
        </p>
      </div>
      <GeneralInformation />
      <Protection />
    </div>
  )
}

export default Account
