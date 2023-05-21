import React from 'react'

const Button = ({onClick, text, isDisabled}) => {
  return (
    <button disabled={isDisabled} onClick={onClick} className={`w-full my-4 cursor-pointer text-white bg-primary-600 hover:bg-primary-500 duration-300 transition-colors rounded-md p-3 font-semibold text-xl ${isDisabled && 'bg-primary-300 hover:bg-primary-300 cursor-not-allowed'}`}>
      {text || ''}
    </button>
  )
}

export default Button