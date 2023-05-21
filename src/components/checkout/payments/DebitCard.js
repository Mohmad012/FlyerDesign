import { addNewCart, selectCard, setCCV } from '@/lib/redux/slices/checkout';
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaQuestionCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import AddNewCard from '../forms/addNewCard';
import SavedCards from '../modals/SavedCards'

const DebitCard = () => {
  const {t} = useTranslation('checkout')
  const [showModal, setShowModal] = useState(false);
  const [isNewCard, setIsNewCard] = useState(false);
  const { cards, currentCard } = useSelector(state => state.checkout)
  const dispatch = useDispatch()
  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      {!isNewCard && <div className="flex flex-col gap-4 rounded-xl mb-1  ">
        {cards?.length &&

          <div className="flex items-center justify-between gap-2">
            <span className="text-gray-700 font-bold text-md">{t('Choose_from_the_saved_cards')}</span>
            <button onClick={() => setShowModal(true)} className="text-primary-500 text-sm">{t('Choose_another_saved_card')}</button>
            <SavedCards data={cards} show={showModal} setShow={setShowModal} t={t} />
          </div>
        }
        {currentCard?.card_number &&
          <>
            <div className="bg-white rounded-xl flex justify-between items-center gap-4">
              <div className="flex items-center gap-4 px-4">
                <Image
                  width={200}
                  height={40}
                  src="/assets/images/checkout/mada.jpg"
                  alt="paymentsImg"
                  className="w-10 h-6 object-contain"
                />
                <span className=" text-gray-500 font-bold">{t('It_ends_with_the_number')} {String(currentCard.card_number).slice(-4)}</span>
              </div>
              <div className="relative">
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
                onChange={e => dispatch(setCCV(e?.target?.value))}
                  maxLength={3}
                  type="text"
                  name="card-cvc"
                  id="card-cvc"
                  className="relative block w-24 bg-transparent rounded-xl border-0 p-4 pl-10 text-center text-gray-900 ring-1 ring-inset ring-primary-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  placeholder="CVC"
                />
              </div>
            </div>
          </>
        }
      </div>}
      <div className="flex justify-center">
        {!isNewCard ? <button onClick={setIsNewCard} className="text-primary-500 text-center mx-auto  p-4">{t('Add_a_new_card')}</button>
          : <AddNewCard onSubmit={(data) => {
            dispatch(addNewCart(data))
            dispatch(selectCard(String(data.card_number).slice(-4)))
            setTimeout(() => {
              setIsNewCard(false)
            }, 1000);
          }}
            t={t}
            onCancel={setIsNewCard}
          />}
      </div>
    </div>
  )
}

export default DebitCard