import Image from 'next/image'
import React from 'react'
import TrueIcon from '../icons/TrueIcon'
import OuterBox from './containers/OuterBox'
import { ImRadioChecked, ImRadioUnchecked } from 'react-icons/im'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import DebitCard from './payments/DebitCard'
import StcPay from './payments/STCPAY'

const PayMethods = ({ data: PayingOffData, t }) => {

  const [selectedDeliveryPayment, setSelectedDeliveryPayment] = useState(PayingOffData[0])
  return (
    <OuterBox title="Paying off">
      <div className="">
        <RadioGroup value={selectedDeliveryPayment} onChange={setSelectedDeliveryPayment}>
          <div className="mt-4 grid grid-cols-1 gap-y-6  sm:gap-x-4">
            {PayingOffData.map((deliveryMethod) => (
              <RadioGroup.Option
                key={deliveryMethod.id}
                value={deliveryMethod}
                className='relative flex gap-3 cursor-pointer rounded-lg p-4 focus:outline-none'>
                {({ checked, active }) => (
                  <>
                    {checked ?
                      <ImRadioChecked className="h-5 w-5 text-primary-600" aria-hidden="true" />
                      : <ImRadioUnchecked className="h-5 w-5 text-indigo-100" aria-hidden="true" />
                      }
                    <span className="flex flex-1">
                      <span className="flex flex-col w-full">
                        <RadioGroup.Label as="span" className="flex justify-between items-center">
                          <div className=" font-bold text-gray-900">{t(deliveryMethod.title)}</div>
                          <div className="mx-5">
                            <div className="w-64 flex justify-end items-center">
                              <Image
                                width={100}
                                height={50}
                                src={deliveryMethod.logo}
                                alt={deliveryMethod.id}
                                className="h-5 object-contain"
                              />
                            </div>
                          </div>
                        </RadioGroup.Label>
                        {checked && <RadioGroup.Description
                          as="span"
                          className="mt-3"
                        >
                          {deliveryMethod.value === 'stc' ? <StcPay /> : <DebitCard/> }
                        </RadioGroup.Description>}
                      </span>
                    </span>
                    <span className='pointer-events-none absolute -inset-px rounded-lg' aria-hidden="true" />
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </OuterBox>
  )
}

export default PayMethods
