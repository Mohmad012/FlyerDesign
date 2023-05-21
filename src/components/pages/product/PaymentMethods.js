import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PaymentMethods = ({ data: paymentMethods }) => {
  return (
    <>
      <div className="my-8">
        {
          paymentMethods.map((payment, idx) => (
            <div key={idx} className=' ring-1 ring-gray-300 p-2 my-4 rounded-md flex items-center gap-2 text-sm  font-bold'>
              <Image src={payment.logo} width={60} height={30} alt={payment.title} className='object-contain' />
              <h2 className=''>
                <span>{payment.title} </span>
                <Link className='text-sky-500 hover:text-sky-600 underline px-2' href={payment.link}>اعرف المزيد</Link>
              </h2>

            </div>
          ))
        }
      </div>
    </>
  )
}

export default PaymentMethods