import { selectCard, selected } from "@/lib/redux/slices/checkout";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Modal({data:cards,t, show, setShow }) {
  const dispatch = useDispatch()
  const [selected,setSelected] = useState(0)

  return (
    <>
      {show ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-2xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5  rounded-t">
                  <h3 className="text-3xl font-semibold">
                     Saved cards
                  </h3>

                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col gap-4">
                  {
                    cards ? cards.map((card, idx) => (
                      <div key={idx}
                        onClick={()=> setSelected(idx)}
                        className={`flex items-center gap-4 px-4 ring-1 ring-gray-400 rounded-lg p-3 cursor-pointer hover:bg-gray-100/75 ${idx === selected &&  'ring-primary-500'} `}>
                        <Image
                          width={80}
                          height={40}
                          src="/assets/images/checkout/mada.jpg"
                          alt="paymentsImg"
                          className="w-10 h-6 object-contain"
                        />
                        <span className=" text-gray-500 font-bold">{t('It_ends_with_the_number')} {card?.card_number.toString().slice(-4)}</span>
                      </div>
                    ) ) : <div className="text-2xl text-center text-gray-400 p-4">No cards saved</div>
                  }
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 gap-4  rounded-b font-bold uppercase text-sm">
                  <button
                    className="w-1/2 text-primary-500 bg-white active:bg-primary-600 active:text-white  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ring-1 ring-primary-500 ring-inset"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="w-1/2 bg-primary-500 text-white active:bg-primary-600 px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      dispatch(selectCard(cards[selected].card_number.toString().slice(-4)))
                      setShow(false)}}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}