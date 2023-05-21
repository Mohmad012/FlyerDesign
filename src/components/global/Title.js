import React from 'react'

const Title = ({
  title = '',
  style = 'text-xl'

}) => {
  return (
    <h2 className={'my-4 py-4 font-bold ' + style}>{title || ''}</h2>
  )
}

export default Title