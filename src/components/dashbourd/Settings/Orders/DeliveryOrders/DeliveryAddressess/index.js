const DeliveryAddressess = ({addressessInfo}) => {
  return (
    <div className='flex flex-col items-start mx-2 mb-7'>
      <div className='p-3 ring-1 w-full ring-gray-500 rounded-lg pb-10'>
        <div className='flex justify-between'>
          <h3 className='flex items-center justify-between'>
            <span className=' font-semibold'>Delivery Addressess</span>
          </h3>
        </div>
        <div className='flex flex-col items-start my-3'>
          <h3 className='mb-3'>
            {addressessInfo?.firstname} {addressessInfo?.lastname}
          </h3>
          {/* <p>2715 Ash Dr. San Jose, South Dakota 83475</p> */}
        </div>
        <div className='flex gap-2 items-center'>
          <span>{addressessInfo?.telephone}</span>
          <span className='text-green-600'>Verified</span>
        </div>
      </div>
    </div>
  )
}

export default DeliveryAddressess
