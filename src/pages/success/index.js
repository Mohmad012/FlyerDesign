import Address from "@/components/checkout/Address";
import Button from "@/components/global/ui/buttons/ButtonXl";
import VisaIcon from "@/components/icons/VisaIcon";
import { orderSteps } from "@/constant/success";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";
import { FiCheck } from 'react-icons/fi'
import { useSelector } from "react-redux";
export default function Success() {
  const { t } = useTranslation(["common" , "success"]);
  const { billingAddress } = useSelector(state => state.checkout)
  const li_style = 'flex justify-between items-center font-bold text-sm my-2 text-neutral-600'

  return (
    <div className="c-container">
      <div className="flex flex-col md:flex-row justify-between gap-4 ">
        <div>
          <h2 className="text-2xl font-bold mb-3">شكرا علي طلبك Amera </h2>
          <p>بمجرد تأكيد طلبك هيوصلك ايميل علي  Amira.hs@yahoo.com</p>
        </div>
        <Link href='/' className="w-96">
          <Button text='متابعة التسوق' />
        </Link>
      </div>
      <div className="ring-2 ring-gray-200 shadow-sm rounded-lg p-8 mb-4 mt-8 lg:w-11/12 mx-auto">
        <h2 className="text-lg font-bold mb-8">الطلبية B12DKDKLSLLLSL </h2>
        <div className="grid grid-cols-4 gap-2 overflow-x-auto no-scrollbar my-6">
          {orderSteps.map(({ step, title }) => (
            <div key={step}>
              <div className={`flex items-end justify-center gap-2 mb-3 text-gray-400 ${step < 3 && 'text-green-500'}`}>
                <FiCheck />
                <span>{title}</span>
              </div>
              <div className={`h-2 w-full bg-gray-200 rounded-2xl  ${step < 3 && 'bg-green-500'}`}/>
            </div>
          ))}
        </div>
        {billingAddress?.length ? <Address data={billingAddress[0]} t={t}/> : null}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-12">
          <div className="md:col-span-2">
            <h2 className="text-lg font-bold mb-8">طريقة الدفع</h2>
              <VisaIcon/>
          </div>
          <div className="md:col-span-1">
            <ul>
              <li
                className={li_style}>
                <span className='w-9/12'>{t('sub_total')}</span>
                <span>{t('SAR')}</span>
              </li>

                <li
                  className={li_style}>
                  <span className='w-9/12'>{t('Saved')}</span>
                  <span>{t('SAR')}</span>
                </li>
              <li
                className={li_style}>
                <span className='w-9/12'>{t('shipping')}</span>
                <span>
                  <span className='text-green-500'>{t('free')}</span>
                </span>
              </li>
              <li
                className={li_style}>
                <span className='w-9/12'>{t('tax')}</span>
                <span>{t('SAR')}</span>
              </li>
              <hr />
              <li
                className={li_style + ' text-lg font-bold '}>
                <span className='w-9/12'>{t('subtotal_include_tax')}</span>
                <span>{t('SAR')}</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
      <div className="ring-2 ring-gray-200 shadow-sm rounded-lg p-8 mb-4 mt-8 lg:w-11/12 mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex justify-between gap-4">
            <div className="">
              <Image
                src='/assets/imgs/products/01.png'
                width={200}
                height={200}
                alt="product"
              />
            </div>
            <div className="w-full flex justify-between flex-col md:flex-row gap-2">
              <div className="">
                <h2 className="text-lg font-bold md:mb-3">ساعة بلياردو + ساعة تنس طاولة</h2>
                <p>
                  سوف يتم تسليم الطلبيه
                  <span className="text-green-500"> 20 مارس 2023</span>
                </p>
              </div>
              <div className="">
                <h2 className="text-lg font-bold md:mb-3">203 ر.س </h2>
                <span>منتج واحد</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const {locale, query} = ctx
  console.log('cookies', ctx.req.cookies)
  console.log('query', query)
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common" , "success"])),
    },
  };
}