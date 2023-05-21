import {Dialog, Transition} from '@headlessui/react'
import Image from 'next/image'
import React from 'react'
import {Fragment} from 'react'
import QRCode from './QRCode'

const InvoicePopup = ({open, setOpen}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        // initialFocus={cancelButtonRef}
        onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                <div className='flex flex-col gap-10'>
                  <div className='w-full flex flex-col ring-1 w-full ring-primary-500 rounded-lg px-4 py-3'>
                    <Image
                      width={50}
                      height={50}
                      className='block h-10 w-auto mx-auto'
                      src='/assets/logo/Voucherek-Logo_en.svg'
                      alt='Your Company'
                    />
                    <div className='flex justify-between mt-10'>
                      <div className='flex flex-col gap-2'>
                        <p className='text-primary-500'>
                          Congratulation , Tarek fahd
                        </p>
                        <p>Order No.: VCK -0000015</p>
                        <p>Date : 1 April 2023</p>
                        <p>Order Status : Coupon activated</p>
                      </div>
                      <QRCode />
                    </div>

                    <div className='text-white bg-primary-600 text-sm py-2 px-2 rounded-lg mt-5'>
                      Order confirmation successfull, voucher vaild till 23
                      April 2023
                    </div>
                  </div>

                  <div className='w-full flex flex-col ring-1 w-full ring-primary-500 rounded-lg px-4 py-3'>
                    <div className='w-full flex flex-col'>
                      {/* <table className='w-full table-auto border border-collapse rounded-lg'>
                        <tr>
                          <td className='w-auto py-2 px-4 border border-gray-400 text-primary-500 font-bold'>
                            Deal
                          </td>
                          <td className='w-[1rem] py-2 px-4 border border-gray-400 text-primary-500 font-bold'>
                            Amount
                          </td>
                        </tr>
                        <tr>
                          <td className='w-auto py-2 px-4 border border-gray-400 text-sm'>
                            Thermal insulation for small and medium cars
                          </td>
                          <td className='w-[2rem] py-2 px-4 border border-gray-400'>
                            3
                          </td>
                        </tr>
                      </table> */}

                      <div className='flex flex-col border rounded-xl w-full'>
                        <div className='flex flex-row w-full'>
                          <div className='w-2/3 p-2 border border-gray-400 rounded-tl-lg '>
                            Deal
                          </div>
                          <div className='w-1/3 p-2 border border-gray-400 rounded-tr-lg text-center'>
                            Amount
                          </div>
                        </div>
                        <div className='flex flex-row w-full'>
                          <div className='w-2/3 p-2 border border-gray-400 rounded-bl-lg text-sm'>
                            Thermal insulation for small and medium cars
                          </div>
                          <div className='w-1/3 p-2 border border-gray-400 rounded-br-lg text-center'>
                            3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default InvoicePopup
