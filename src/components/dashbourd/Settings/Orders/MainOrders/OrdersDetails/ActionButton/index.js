import React from 'react'

const ActionButton = ({text, handleClick}) => {
  return (
    <button
      onClick={handleClick}
      className='py-2 px-4 text-gray-500 ring-1 ring-primary-500 rounded hover:bg-primary-600 hover:text-white'>
      {text}
    </button>
  )
}

export default ActionButton
