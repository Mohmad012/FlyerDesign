import React from 'react'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import TrueIcon from '../icons/TrueIcon'
import { useDispatch } from 'react-redux'
import { changeAddress } from '@/lib/redux/slices/checkout'
import { setShip_BillAddress } from '@/services/checkout'
import { toast } from 'react-toastify'

const Address = ({t, data: address, edit, children}) => {
  const dispatch = useDispatch()
  console.log('address', address)
  const handleShippingAddress = async () =>{
    setShip_BillAddress(address).then(data => {
      data?.msg === 'Shipping address saved' ? toast.success(data?.msg) : null
    })
    dispatch(changeAddress(address?.id))
  }

  return (
    <>
      {address ? (
        <div
          onClick={handleShippingAddress}
          className={`ring-1 ${
            address?.default_shipping ? 'ring-primary-500' : 'ring-gray-300'
          } rounded-xl p-4 mb-4 w-full ${children && 'mt-10'}`}>
          <div className='flex justify-between titleBox mb-2'>
            <h2
              className={`flex gap-1 items-center font-bold ${
                children && 'justify-between w-full'
              }`}>
              <div className='flex gap-1 items-center font-bold'>
                <HiOutlineLocationMarker />
                <span className='text-primary-500'>{t('home')}</span>
              </div>
              {children ? children : ''}
            </h2>
            {edit && (
              <button onClick={() => edit(true)} className='text-sky-500'>
                {t('change')}
              </button>
            )}
          </div>
          <div className='flex flex-col gap-3'>
            <span>{address?.firstname + ' ' + address?.lastname}</span>
            <p className='text-sm'>
              <span>
                {address?.postcode !== 'string' ? address?.postcode + ',' : ''}
              </span>
              <span>{address?.street}, </span>
              <span>{address?.city}, </span>
              <span>
                {address?.region?.region
                  ? address?.region?.region
                  : address?.region}
              </span>
            </p>

            <span
              className={`flex gap-3 items-center ${
                locale?.includes('ar') ? 'justify-end' : 'justify-start'
              } `}>
              <span className='text-xs'>{address?.telephone}</span>
              <TrueIcon className='text-primary-500' />
            </span>
          </div>
        </div>
      ) : (
        <div className=''>error</div>
      )}
    </>
  )
}

export default Address
