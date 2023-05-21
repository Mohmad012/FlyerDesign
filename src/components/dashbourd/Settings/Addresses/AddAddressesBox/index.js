import React from 'react'

const AddAddressesBox = ({setCurrentAddresses}) => {
  return (
    <div className='flex flex-col gap-5 items-start'>
      <h2 className='text-xl'>Addresses</h2>
      <p>
        Manage your saved addresses so you can quickly and easily complete
        purchases across our stores
      </p>
      <div className='bg-white  py-2 h-16 flex items-center justify-start gap-4 relative'>
        <button
          onClick={() => setCurrentAddresses('AboutAddresses')}
          className='w-52 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-500'>
          Add a new address
        </button>
      </div>
    </div>
  )
}

export default AddAddressesBox
