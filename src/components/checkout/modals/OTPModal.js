import React, { useState } from "react";
import OtpInputs from "../forms/OtpInputs";
import { MdClose } from "react-icons/md";
import { getStcPayOtp, verifyStcPayOtp } from "@/services/checkout";
import { CREATE_CART, DeleteCart, PLACE_ORDER, placeOrder } from "@/services/cart";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { deleteAddresses, setBillingAddress } from "@/lib/redux/slices/checkout";
import { deleteCart } from "@/lib/redux/slices/cart";

const OtpModal = ({ isOpen, onClose, data }) => {
const dispatch = useDispatch()
const { user } = useSelector(state => state.user)
  const { billingAddress } = useSelector(state => state.checkout)
  const defaultAddress = user?.addresses?.find(address => address?.default_shipping && address.default_billing)

  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (values) => {
    setOtpValues(values);
  };
  const handlePaste = (event) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData("text");
    const pastedValues = pastedText.split("").filter((char) => !isNaN(char)).slice(0, 4);
    const newValues = [...otpValues];
    for (let i = 0; i < pastedValues.length; i++) {
      if (i < newValues.length) {
        newValues[i] = pastedValues[i];
      }
    }
    setOtpValues(newValues);
  };
  console.log(otpValues,data)

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex items-center justify-center cursor-default">
          <div className="bg-white rounded-lg p-4 flex flex-col justify-center items-center relative w-96 h-96">
            <MdClose onClick={() => onClose(false)} className="text-4xl text-gray-300 hover:text-gray-400 cursor-pointer absolute left-4 top-4"/>
            <div className="text-center text-md mb-4 ">


              <span>يرجى إدخال PIN </span>
              <span>المُرسل إلى رقم هاتفك </span>
              <br />
              <span>{data?.mobile || ''}</span>
            </div>
            <div dir="ltr" className="my-4">
              <OtpInputs values={otpValues} handleChange={handleInputChange} handlePaste={handlePaste} />
            </div>
            <div className="flex  flex-col justify-center mt-8">
              <button
                className={`${otpValues.every(i => i !== '')  ? 'bg-primary-600 ' : 'bg-gray-400 '} text-white py-4 px-8 rounded-md font-semibold`}
                onClick={() => {
                  verifyStcPayOtp({otp:otpValues,params:data}).then(res =>{
                    setLoading(true)
                    console.log(res.status,res.data, res)
                    if (res?.status === 200){
                      PLACE_ORDER('stc_pay', user?.id ? defaultAddress?.email : billingAddress[0]?.email).then(res =>{
                        console.log(res)
                        if(res?.status === 200) {
                          toast.success('Order placed successfully')
                          setTimeout(() => {
                            onClose(false)
                            Cookies.remove('quote')
                            dispatch(setBillingAddress())
                            dispatch(deleteAddresses())
                            dispatch(deleteCart())
                            DeleteCart()
                            queryClient.removeQueries('cart')
                            CREATE_CART()
                          }, 1000);

                        } else{
                          toast.error('Error ' + res?.response?.data?.msg)
                          onClose(false)
                        }
                        })
                    }
                    setLoading(false)
                  })
                }}
              >
                {loading ?  'Please wait...' : 'Confirm OTP'}
              </button>


              <button
                className=" text-gray-500 py-4 px-8 rounded-md font-semibold"
                onClick={() => getStcPayOtp(data.mobile)}>
                أعد ارسال الرمز
              </button>


            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OtpModal;