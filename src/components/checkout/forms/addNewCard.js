import Button from '@/components/global/ui/buttons/ButtonXl'
import { Switch } from '@headlessui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const AddNewCard = ({ onSubmit, onCancel, t}) => {
  const [enabled, setEnabled] = useState(false)
  const {locale} = useRouter()
  const cardNumRef = useRef()
  const cardExpRef = useRef()
  const cardCCVRef = useRef()

  return (
    <form onSubmit={e =>{
      e.preventDefault()
      const cardData = {
        type:'VISA',
        card_number:cardNumRef.current.value,
        expire: cardExpRef.current.value,
        ccv: cardCCVRef.current.value,
        saveCardData: enabled
      }
      console.log(cardData)
      if (cardData.card_number && cardData.expire && cardData.ccv){
        console.log('cardData', cardData)
        onSubmit(cardData)
      }else alert('card inputs is required')
    }}>
      <section aria-labelledby="payment-heading" className="my-4">
        <div
          onClick={() => onCancel(false)}
          className="flex items-end text-sky-500 cursor-pointer">
          <MdKeyboardArrowRight fontSize={20} />
          <span>Back</span>
        </div>
        <div className="mt-6 grid grid-cols-8 gap-x-4 gap-y-6">
          <div className="col-span-8">
            <label htmlFor="card-number" className="block mb-2 font-bold text-gray-700">
              Card number
            </label>
            <div className="mt-1">
              <input
                ref={cardNumRef}
                type="text"
                maxLength={16}
                minLength={16}
                id="card-number"
                name="card-number"
                autoComplete="cc-number"
                placeholder='**** **** **** ****'
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-4 text-lg"
              />
            </div>
          </div>

          <div className="col-span-4 md:col-span-3">
            <label htmlFor="expiration-date" className="block mb-2 font-bold text-gray-700">
              Expiration date (MM/YY)
            </label>
            <div className="mt-1">
              <input
                ref={cardExpRef}
                maxLength={4}
                type="text"
                name="expiration-date"
                id="expiration-date"
                autoComplete="cc-exp"
                placeholder='YY/MM'
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-4 text-lg"
              />
            </div>
          </div>

          <div className="col-span-4 md:col-span-2">
            <label htmlFor="cvc" className="block mb-2 font-bold text-gray-700">
              CVC
            </label>

            <div className="mt-1 relative">
              <div className="group w-6 h-6 flex items-center justify-center absolute z-10 top-1/2 -translate-y-1/2 left-2">
                <FaQuestionCircle className=' text-lg text-gray-300 cursor-pointer' />
                <div className="hidden group-hover:flex flex-col justify-center gap-4 items-center absolute top-6 left-1/2 -translate-x-1/2 rounded-md shadow-lg bg-white p-4 w-40">
                  <p className='text-sm font-bold text-gray-500'>{t('cvv_alert')}</p>
                  <Image
                    src='/assets/images/checkout/card.svg'
                    width={48}
                    height={32}
                    alt='card cvv'
                    className='w-16 h-12 object-contain'
                  />
                </div>
              </div>
              <input
                ref={cardCCVRef}
                type="text"
                name="cvc"
                id="cvc"
                maxLength={3}
                autoComplete="csc"
                placeholder='***'
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-4 text-lg"
              />
            </div>
          </div>
          <div className="col-span-8 bg-white p-4 rounded-lg">
            <Switch.Group as="div" className="flex items-center justify-between">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={classNames(
                  enabled ? 'bg-primary-600' : 'bg-gray-200',
                  'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 ml-4'
                )}
              >
                <span
                  aria-hidden="true"
                  className={classNames(
                    enabled ? locale.startsWith('ar') ? '-translate-x-5' : 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>

              <span className="flex flex-grow flex-col">
                <Switch.Label as="span" className="text-sm font-medium leading-6 text-gray-900" passive>
                  تذكر هذه البطاقة
                </Switch.Label>
                <Switch.Description as="span" className="text-sm text-gray-500">
                  ستقوم فوتشرك بتخزين بيانات هذه البطاقة بأمان للاستمتاع بتجربة دفع اسرع لن يتم تسجيل رقم CVV
                </Switch.Description>
              </span>

            </Switch.Group>
          </div>
        </div>
        <Button text='Add my card' />
      </section>
    </form>
  )
}

export default AddNewCard