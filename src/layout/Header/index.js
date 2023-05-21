import LocaleSwitcher from '@/components/global/locale-switcher'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useTranslation} from 'next-i18next'
import {useEffect, useState} from 'react'
import {Fragment} from 'react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import Image from 'next/image'
import {allCities} from '@/constant/header'
import SearchBox from './SearchBox'
import MegaMenu from './MegaMenu'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {classNames} from '@/utils/global'
import useSWR from 'swr'
import IconsBox from './IconsBox'
import {useDispatch, useSelector} from 'react-redux'
import {getCategoryData, localeHandShake} from '@/services/global'
import {useQuery} from 'react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
// import SmHeader from "./SmHeader"

const fetcher = url => axios.get(url).then(res => res.data)

function Header() {
  const {t} = useTranslation('common')

  const {locale, asPath, query, pathname} = useRouter()
  const [headerData, setHeaderData] = useState([])
  const {globalData} = useSelector(state => state.global)
  const dispatch = useDispatch()

  const {data: HandShakeToken} = useQuery({
    queryKey: `HandShakeToken${locale}`,
    queryFn: () => localeHandShake(locale),
  })

  // console.log({HandShakeToken})
  const {data, refetch} = useQuery({
    queryKey: 'categoryData',
    queryFn: () =>
      getCategoryData(
        globalData?.handShake[locale]
          ? globalData?.handShake[locale]
          : HandShakeToken?.token
      ),
  })

  useEffect(() => {
    let dir = locale?.includes('ar') ? 'rtl' : 'ltr'
    let lang = locale?.includes('ar') ? 'ar' : 'en'
    document.querySelector('html').setAttribute('dir', dir)
    document.querySelector('html').setAttribute('lang', lang)
    const getLocaleHandShake = async () => {
      try {
        const {token} = await localeHandShake(locale)
        Cookies.set('token', token)
      } catch (err) {}
    }
    getLocaleHandShake()
    refetch()
  }, [locale, dispatch, globalData?.handShake, refetch, HandShakeToken?.token])

  useEffect(() => {
    if (data) {
      setHeaderData(data?.data?.children_data ? data?.data?.children_data : [])
    }
  }, [data])
  const {
    data: dataRoute,
    isLoading: isLoadingRoute,
    isValidating,
  } = useSWR('/api/revalidate/header', fetcher, {revalidateOnMount: true})

  useEffect(() => {
    if (dataRoute || isLoadingRoute || isValidating) {
      refetch()
    }
  }, [dataRoute, isLoadingRoute, isValidating, refetch, dispatch])

  return (
    <Disclosure as='header' className='bg-white shadow'>
      {() => (
        <>
          <div className='mx-auto max-w-screen-2xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8'>
            <div className='relative flex h-16 '>
              <div className='relative z-10 flex px-2 lg:px-0'>
                <div className='flex  items-center justify-between w-auto'>
                  <Link href='/'>
                    <Image
                      width={32}
                      height={32}
                      className='block h-8 w-auto'
                      src='/assets/logo/fotshork.svg'
                      alt='Your Company'
                    />
                  </Link>

                  <Menu as='div' className='relative ml-4 flex-shrink-0'>
                    <div
                      className={`${
                        locale?.includes('ar') ? 'mt-0 mr-4 mb-0 ml-2' : 'mr-8'
                      }`}>
                      <Menu.Button className='text-xs flex items-center ring-1 ring-inset gap-2 w-full justify-center rounded-md border-0 border-gray-300 bg-white px-2 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-50'>
                        <ChevronDownIcon
                          className='-mr-1 ml-2 h-5 w-5'
                          aria-hidden='true'
                        />
                        {t('All Cities')}
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'>
                      <Menu.Items
                        className={`absolute ${
                          locale?.includes('ar') ? 'right' : 'left'
                        }-0 z-10 mt-2 w-48 origin-top-${
                          locale?.includes('ar') ? 'right' : 'left'
                        } rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                        {allCities.map(item => (
                          <Menu.Item key={item.name}>
                            {({active}) => (
                              <Link
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block py-2 px-4 text-sm text-gray-700'
                                )}
                                locale={
                                  !locale.startsWith('en')
                                    ? item?.localeName?.replace('en', 'ar')
                                    : item?.localeName?.replace('ar', 'en')
                                }
                                href={{pathname, query}}
                                as={asPath}>
                                {t(item.title)}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <LocaleSwitcher />
                </div>
              </div>
              <div className='flex justify-end gap-40 w-full'>
                <div className='relative z-0  flex items-center justify-center px-2'>
                  <SearchBox />
                </div>

                <IconsBox />
              </div>
            </div>

            <MegaMenu headerData={headerData} />
          </div>

          {/* <SmHeader /> */}
        </>
      )}
    </Disclosure>
  )
}

export default Header
