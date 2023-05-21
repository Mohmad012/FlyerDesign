import { useRouter } from 'next/router'
import React from 'react'
import {MdOutlineClose} from 'react-icons/md'
const Modal = ({show, setShow, children, height}) => {
  const {locale} = useRouter()
  const hide = () => setShow(false)

  return (
    <>
      {
        show &&
        <div className="modal-overlay h-screen w-screen fixed top-0 left-0 z-[9999] p-4 flex items-center justify-center">
            <div className={`w-10/12 md:w-9/12 lg:w-7/12 ${height ? height: 'h-[80%]'} overflow-hidden bg-white shadow-2xl rounded-lg p-4 relative`}>
              <MdOutlineClose className={`text-4xl text-gray-300 cursor-pointer absolute top-4 ${locale.startsWith('ar') ? 'left-4' : 'right-4 '}hover:text-gray-400 duration-300 transition-colors`} onClick={hide} />
              <div className="h-full overflow-y-auto no-scrollbar">
                {children}
              </div>
            </div>
        </div>
        }
    </>
  )
}

export default Modal