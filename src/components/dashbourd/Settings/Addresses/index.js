import {useEffect, useState} from 'react'
import AddAddressesBox from './AddAddressesBox'
import AboutAddresses from './AboutAddresses'
import {useQuery} from 'react-query'
import {useDispatch} from 'react-redux'
import {getAllRegions} from '@/lib/redux/slices/checkout'
import Address from '@/components/checkout/Address'
import {useTranslation} from 'next-i18next'
import {
  getRegions,
  handleApiRouteDelete,
  handleGettingAlladdressesApiRoute,
} from '@/services/dashbourd/addresses'
import Cookies from 'js-cookie'
import {useRouter} from 'next/router'
const Addresses = () => {
  const {t} = useTranslation('checkout')
  const [currentAddresses, setCurrentAddresses] = useState('showAddresses')
  const dispatch = useDispatch()
  const {locale} = useRouter()
  const regions = useQuery({
    queryKey: 'regions',
    queryFn: () => getRegions({locale}),
    staleTime: 60 * 60 * 1000,
  })

  const Alladdresses = useQuery({
    queryKey: 'Alladdresses',
    queryFn: () => handleGettingAlladdressesApiRoute({locale}),
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  })

  useEffect(() => {
    regions.refetch()
    Alladdresses.refetch()
  }, [locale])

  if (regions.isSuccess && regions?.data?.data)
    dispatch(getAllRegions(regions.data.data))

  const handleDelete = async id => {
    const mage = Cookies.get('mage')
    await handleApiRouteDelete({id, mage, locale})
  }

  const handleCurrentAddresses = () => {
    if (currentAddresses === 'showAddresses') {
      return (
        <>
          <AddAddressesBox setCurrentAddresses={setCurrentAddresses} />
          {Alladdresses?.data?.data?.items?.slice(0, 1).map((address, idx) => (
            <Address key={idx} data={address} t={t}>
              <button
                className='flex items-center justify-between '
                onClick={() =>
                  setCurrentAddresses({
                    name: 'AboutAddresses',
                    id: address.id,
                  })
                }>
                <span>edit</span>
                <span>
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='none'
                    viewBox='0 0 23 23'>
                    <path
                      fill='#525050'
                      d='M20.423 6.592l-4.015-4.015a1.438 1.438 0 00-2.033 0L3.296 13.656a1.426 1.426 0 00-.421 1.016v4.015a1.437 1.437 0 001.438 1.438h15.093a.719.719 0 100-1.438h-9.045L20.423 8.625a1.438 1.438 0 000-2.033zM8.328 18.687H4.313v-4.015l7.906-7.906 4.015 4.015-7.906 7.906zm8.922-8.922L13.236 5.75l2.156-2.156 4.014 4.015-2.156 2.156z'></path>
                  </svg>
                </span>
              </button>
            </Address>
          ))}{' '}
          {Alladdresses?.data?.data?.items
            ?.slice(1, Alladdresses?.data?.data?.items?.length)
            .map((address, idx) => (
              <Address key={idx} data={address} t={t}>
                <div className='flex items-center gap-10'>
                  <button
                    className='flex items-center justify-between'
                    onClick={() => handleDelete(address?.id)}>
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='27'
                        height='27'
                        fill='none'
                        viewBox='0 0 27 27'>
                        <path
                          fill='#525050'
                          d='M22.23 5.555H4.355a.813.813 0 000 1.625h.813v14.625a1.625 1.625 0 001.625 1.625h13a1.625 1.625 0 001.625-1.625V7.18h.813a.812.812 0 000-1.625zm-2.437 16.25h-13V7.18h13v14.625zM8.418 3.117a.813.813 0 01.812-.812h8.125a.812.812 0 010 1.625H9.23a.812.812 0 01-.812-.813z'></path>
                      </svg>
                    </span>
                    <span>delete</span>
                  </button>
                  <button
                    className='flex items-center justify-between'
                    onClick={() => setCurrentAddresses('AboutAddresses')}>
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        fill='none'
                        viewBox='0 0 23 23'>
                        <path
                          fill='#525050'
                          d='M20.423 6.592l-4.015-4.015a1.438 1.438 0 00-2.033 0L3.296 13.656a1.426 1.426 0 00-.421 1.016v4.015a1.437 1.437 0 001.438 1.438h15.093a.719.719 0 100-1.438h-9.045L20.423 8.625a1.438 1.438 0 000-2.033zM8.328 18.687H4.313v-4.015l7.906-7.906 4.015 4.015-7.906 7.906zm8.922-8.922L13.236 5.75l2.156-2.156 4.014 4.015-2.156 2.156z'></path>
                      </svg>
                    </span>
                    <span>edit</span>
                  </button>
                </div>
              </Address>
            ))}
        </>
      )
    } else {
      if (typeof currentAddresses == 'string') {
        return (
          <AboutAddresses
            setCurrentAddresses={setCurrentAddresses}
            regions={regions.data.data}
          />
        )
      } else {
        return (
          <AboutAddresses
            setCurrentAddresses={setCurrentAddresses}
            id={currentAddresses.id}
            regions={regions.data.data}
          />
        )
      }
    }
  }
  return <div className='flex flex-col px-1'>{handleCurrentAddresses()}</div>
}

export default Addresses
