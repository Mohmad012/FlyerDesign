import {handleGetMyStoreCreditApiRoute} from '@/services/dashbourd/fundsVoucherek'
import dynamic from 'next/dynamic'
import {useRouter} from 'next/router'
import {useCallback} from 'react'
import {useQuery} from 'react-query'
const TabsContainer = dynamic(() => import('./TabsContainer'), {ssr: false})

const FundsVoucherek = () => {
  const {locale} = useRouter()

  const GetMyStoreCredit = useQuery({
    queryKey: 'GetMyStoreCredit',
    queryFn: () => handleGetMyStoreCreditApiRoute({locale}),
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  })

  const allData = useCallback(() => {
    if (
      GetMyStoreCredit?.data?.data &&
      Array.isArray(GetMyStoreCredit?.data?.data)
    ) {
      return GetMyStoreCredit?.data?.data
    }
  }, [GetMyStoreCredit?.data?.data])

  const TotalBalance = useCallback(() => {
    if (allData()) {
      return allData()[0].split(':')[1]
    }
  }, [allData])

  return (
    <div className='flex flex-col px-1'>
      <div className='flex flex-col gap-5 items-start'>
        <h2 className='text-xl text-primary-500 font-semibold'>
          Voucherek&apos;s Fund
        </h2>
        <p className='text-gray-500'>
          You know that you can use the voucher balance that is available on all
          voucher platforms
        </p>
      </div>
      {allData()?.length ? (
        <div className='w-full ring-1 w-full ring-gray-500 rounded-lg mt-10 px-4 py-10'>
          <div className='bg-white flex  items-end justify-start gap-14 relative'>
            <div className='flex flex-col gap-3'>
              <h2 className='text-gray-400 font-semibold'>Total Balance</h2>
              <p className='text-2xl font-semibold'>{TotalBalance()} SAR</p>
            </div>
            <button
              // onClick={() => setCurrentAddresses('AboutAddresses')}
              className='w-52 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-500'>
              Create a new Returns
            </button>
          </div>
        </div>
      ) : (
        ''
      )}

      <TabsContainer allData={allData()?.slice(1, allData()?.length)} />
    </div>
  )
}

export default FundsVoucherek
