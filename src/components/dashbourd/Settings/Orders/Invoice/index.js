import React from 'react'
import ItemInvoice from './ItemInvoice'

const Invoice = ({
  subtotal_incl_tax,
  shipping_amount,
  tax_amount,
  grand_total,
}) => {
  return (
    <div className='flex flex-col items-start mx-2 mt-7 w-full'>
      <div className='p-3 ring-1 w-full ring-gray-500 rounded-lg pb-5'>
        <h2 className='mb-4'>order invoice</h2>
        <ItemInvoice
          title='Subtotal(4 products)'
          text={`${subtotal_incl_tax} SAR`}
        />
        {/* <ItemInvoice title='I saved' text='125 SAR' /> */}
        <ItemInvoice
          title='Shipping'
          text={`${shipping_amount ? `SAR ${shipping_amount}` : 'free'} `}
          customTextClass='text-green-500'
        />
        <ItemInvoice title='value added tax' text={`${tax_amount} SAR`} />
        <hr />
        <ItemInvoice
          title='Total'
          text={`${grand_total} SAR`}
          customTitleClass='font-bold'
          customTextClass='font-bold'
        />
      </div>
    </div>
  )
}

export default Invoice
