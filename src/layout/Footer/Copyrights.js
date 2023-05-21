import React from 'react'

const Copyrights = ({text}) => {
  return (
    <div className="border-t border-white/50 py-8 px-6 md:flex md:items-center md:justify-between">
      <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
        {text}
      </p>
    </div>  )
}

export default Copyrights