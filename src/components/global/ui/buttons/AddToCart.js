import CartIcon from '@/components/icons/CartIcon2'
import Spinner from '@/components/icons/SpinnerIcon'
import React from 'react'

const AddToCart = ({onClick, loading}) => {
  return (
    <div onClick={onClick} className='flex items-center justify-center gap-4 cursor-pointer text-white bg-primary-600 hover:bg-primary-500 duration-300 transition-colors rounded-md p-4 font-semibold text-xl'>

      <span>{loading ? <span className="flex items-center justify-center gap-3">
        <Spinner height={24} />
        Loading
      </span>:
        <span className='flex items-center justify-center gap-3'>
          <CartIcon height={24} />
          Add to cart
        </span>
      }
       </span>
    </div>
  )
}

export default AddToCart
