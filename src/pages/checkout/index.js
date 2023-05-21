import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Countdown from "@/components/global/Countdown";
import Title from "@/components/global/Title";
import { useDispatch, useSelector } from "react-redux";
import OrderSummary from "@/components/checkout/Order-summary";
import PayMethods from "@/components/checkout/PayMethods";
import { PayingOffData } from "@/constant/checkout";
import SEO from "@/components/seo";
import { BILLINGADDRESS, GETPAYFORTSETTINGSBYQUOTE, PAYFORTSETPAYMENTMETHODBYQUOTE, getRegions } from "@/services/checkout";
import { useQuery } from "react-query";
import { getAllRegions, setBillingAddress } from "@/lib/redux/slices/checkout";
import UserAddress from "@/components/checkout/UserAddress";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { config } from "@/utils/react-query-config";

export default function Checkout() {
  const {t} = useTranslation('checkout')
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.cart)
  const { ccv, currentCard } = useSelector(state => state.checkout)

  const regions = useQuery({
    queryKey: 'regions',
    queryFn: () => getRegions(),
    staleTime: 60 * 60 * 1000,
  })
  console.log('regions', regions)
  if (regions.isSuccess && regions?.data?.data) dispatch(getAllRegions(regions.data.data))

  const handleCheckout = () => {
    BILLINGADDRESS().then(res => {
      console.log('BILLINGADDRESS', res)
      if (res?.status === 200 && res?.error === null && res?.data?.cart?.email !== null) {
        dispatch(setBillingAddress(res?.data?.cart))
        PAYFORTSETPAYMENTMETHODBYQUOTE(res?.data?.cart?.email).then(res => {
          if (res?.status === 200 && res?.error === null && res?.data?.cart) {
            GETPAYFORTSETTINGSBYQUOTE().then(res => {
              console.log(res)
              const { service_command, language, merchant_identifier, access_code, signature, return_url, merchant_reference } = res?.data?.cart?.params
              const { card_number, expire } = currentCard
              const config = [
                { name:'service_command', value: service_command },
                { name:'language', value: language },
                { name:'merchant_identifier', value: merchant_identifier },
                { name:'access_code', value: access_code },
                { name:'signature', value: signature },
                { name:'return_url', value: return_url },
                { name:'merchant_reference', value: merchant_reference },
                { name:'card_number', value: card_number },
                { name:'expiry_date', value: '2505' },
                { name:'remember_me', value: "YES" },
                { name:'card_security_code', value: ccv },
                { name:'card_holder_name', value: "sdfa s"}
              ]
              const form = document.createElement('form');
              form.method = 'POST';
              form.action = 'https://sbcheckout.payfort.com/FortAPI/paymentPage'
              form.id = 'form1'
              form.name = 'form1'

              config.forEach(({name, value}) => {
                const input = document.createElement('input');
                input.name = name;
                input.value = value;
                input.type = 'hidden'
                form.appendChild(input)
              })
              document.body.appendChild(form)
              form.submit()
              document.body.removeChild(form)
            })

          } else {
            toast.error('Something went wrong, try again.')
          }
        })
      } else {
        toast.warn('Please set Shipping address first and try again')
      }
    })
  }
  return (
    <>
      <SEO title={t('checkout')} description={t('checkout_desc')} />
      <Countdown />
      {cart?.items?.length ?
        <main className="c-container grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-8">
            <div>
              <Title title={t('shipping_address')} style='m-px py-px' />
              <UserAddress t={t} />
            </div>

            <PayMethods data={PayingOffData} t={t} />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <OrderSummary data={cart} onClick={handleCheckout} secret={ccv} t={t} />
          </div>
        </main>
        :
        <div className='flex flex-col gap-4 items-center justify-center min-h-[80vh] my-8'>
          <Image
            src='/assets/empty-cart.svg'
            alt='Empty Cart'
            width={300}
            height={300}
          />
          <div className='font-bold text-xl text-gray-500'>
            <span>{t('Your cart is ')}</span>
            <span className='text-primary-500'>{t('empty')}</span>
          </div>
          <div className='text-gray-500'>
            {t(
              'It seems that you did not add any basket products, you can continue shopping'
            )}
          </div>
          <Link
            href='/'
            className='bg-primary-600 hover:bg-primary-500 h-12 rounded-md text-white w-full max-w-[250px] flex items-center justify-center mt-8'>
            {' '}
            {t('continue shopping')}
          </Link>
        </div>
      }

    </>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'checkout'])),
    },
  }
}
