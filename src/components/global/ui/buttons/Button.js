import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='bg-sky-600 text-white px-4 pt-1 pb-2 rounded-full hover:bg-sky-500 transition-colors duration-300'>{text}</button>
  )
}

export default Button