import Image from 'next/image'
import {useRouter} from 'next/router'
import Button from './Button'

const CharityNo = ({workAs, stepsInfo, charityNo, productData}) => {
  const {locale} = useRouter()
  console.log(
    'url',
    `${process.env.webUrl}/media/catalog/product${productData?.extension_attributes?.product_image}`
  )
  return (
    <div className='flex flex-col items-start mx-2 my-7'>
      <div className='p-3 ring-1 w-full ring-gray-500 rounded-lg pb-10'>
        <div className='flex justify-between'>
          <h3 className='flex flex-row-reverse'>
            <span className='text-gray-400'>{charityNo}</span>
            <span className='mx-3'>-</span>
            <span className='font-semibold'>Charity Number</span>
          </h3>

          {workAs === 'Delivery' ? (
            <span className='text-gray-700'>
              Delivery method: home delivery
            </span>
          ) : (
            ''
          )}
        </div>
        {workAs === 'Delivery' ? (
          <div className='flex justify-end my-5 gap-4'>
            <Button
              bgColor='bg-primary-500'
              borderColor='text-primary-500'
              textColor='text-white'
              text='ارجاع المنتج'
            />
            <Button
              bgColor='bg-transparent'
              borderColor='text-gray-400'
              textColor='text-gray-700'
              text='تتبع الشحنة'
            />
            <Button
              bgColor='bg-green-700'
              borderColor='text-green-700'
              textColor='text-white'
              text='تم التسليم'
            />
          </div>
        ) : (
          ''
        )}
        <div className='flex items-start gap-10'>
          <div className='flex flex-col items-start justify-end my-5 gap-4 w-2/3'>
            <p
              className={`text-gray-600 bg-gray-300 w-full px-2 py-2 rounded ${
                locale?.includes('ar') && 'text-right'
              }`}>
              It was delivered on April 1, 2023
            </p>

            <div className='flex justify-between  pt-2'>
              <h3 className='flex items-center justify-between'>
                <div className='text-primary-500 font-semibold'>
                  <div className='flex gap-5'>
                    <Image
                      width={140}
                      height={140}
                      src={`${process.env.webUrl}/media/catalog/product${productData?.extension_attributes?.product_image}`}
                      alt={productData?.name}
                      className='h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center'
                    />
                    <div className='flex flex-col justify-start space-y-4'>
                      <div
                        className={`space-y-1 text-sm font-medium ${
                          locale?.includes('ar') && 'text-right'
                        }`}>
                        <h3 className='text-gray-900'>{productData?.name}</h3>
                        <p className='text-gray-500 py-5'>
                          1 product sold by Extra Store
                        </p>
                        <p className='text-gray-900 font-bold'>
                          {productData?.price_incl_tax} SAR
                        </p>
                        {/* <p className='text-gray-500'>{product.size}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </h3>
            </div>
          </div>
          <div className='flex flex-col mt-5 w-1/3'>
            {stepsInfo?.map((item, key) => (
              <div className='flex flex-col' key={key}>
                <div className='flex items-center gap-3'>
                  <svg
                    width='27'
                    height='27'
                    viewBox='0 0 27 27'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='13.5' cy='13.5' r='13.5' fill='#2BAB21' />
                    <circle cx='13.5' cy='13.5' r='7.5' fill='white' />
                  </svg>
                  <span className='text-xs'>{item}</span>
                </div>
                {key !== stepsInfo?.length - 1 ? (
                  <span className='w-[1px] h-6 bg-green-300 mx-3'></span>
                ) : (
                  ''
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharityNo
