import React from 'react'

const InfoBadge = ({text, topCenter = false , bgInfoBadge, borderInfoBadge = "ring-info-500 ring-2" , textInfoBadge = "text-info-1000"}) => {
  return (
    <div className={`bg-info-500/50   ${bgInfoBadge} ${textInfoBadge} rounded-full  absolute ${topCenter ? 'mt-4 mx-auto left-3 right-0 w-fit' : 'bottom-2 left-2'} ${topCenter ? 'text-base py-1 px-3' : 'text-xs py-1 px-3'}  font-bold ${borderInfoBadge}`}>
      {text || ''}
    </div>
  )
}

export default InfoBadge