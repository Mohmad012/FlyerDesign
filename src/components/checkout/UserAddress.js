import React from 'react'
import { useSelector } from 'react-redux'
import Address from './Address'
import AddAddress from './forms/AddAddress'
import { useState } from 'react'
import Modal from '../global/ui/Modal'

const UserAddress = ({t}) => {
  const [openEditAddressPopup, setOpenEditAddressPopup] = useState(false)
  const {user} = useSelector(state => state.user)
  const { billingAddress, Alladdresses } = useSelector(state => state.checkout)

  return (
    <div>
      {
        user?.id ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
              Alladdresses && Alladdresses.map((address, idx) => <Address key={idx} data={address} t={t} />)
            }
            <div className="flex items-end ">
              <button onClick={() => setOpenEditAddressPopup(true)} className='bg-gray-100 text p-4 rounded-md mb-3'>Add new address</button>
            </div>
          </div>
          :
          <div className="flex flex-wrap  gap-4 mb-4">
            {billingAddress?.length ?
              <Address data={billingAddress[0]} edit={setOpenEditAddressPopup} t={t} />
              : <div className="w-full">
                <h2 className="font-bold text-xl">Add new Address</h2>
                {<AddAddress address={billingAddress?.length ? billingAddress[0] : []} IsnewAddress={openEditAddressPopup} closeModal={setOpenEditAddressPopup} />}
              </div>
            }
          </div>
      }
      {<Modal
        show={openEditAddressPopup}
        setShow={setOpenEditAddressPopup}
      >
        <h2 className="font-bold text-xl">Change Address</h2>
        <AddAddress address={billingAddress[0]} closeModal={setOpenEditAddressPopup} />
      </Modal>}

    </div>
  )
}

export default UserAddress