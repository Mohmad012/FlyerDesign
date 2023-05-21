import React from 'react'
import RateSection from '../RateSection'

const Review = () => {
  return (
    <div className='flex flex-col items-start mx-2 w-full'>
      <div className='p-3 ring-1 w-full ring-gray-500 rounded-lg pb-5 flex flex-col items-start'>
        <h2 className='mb-4'>Write a review</h2>
        <RateSection
          title='Rate your seller experience'
          text='Write your review for the seller'
        />{' '}
        <RateSection
          title='Rate your delivery experience'
          text='Rate how was the delivery process'
        />{' '}
        <RateSection
          title='Evaluate how you found the product/service'
          text='Help others buy the best products'
          customClass=''
        />
      </div>
    </div>
  )
}

export default Review
