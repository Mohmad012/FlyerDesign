import {allCities} from '@/constant/header'
import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useTranslation} from 'react-i18next'
import {classNames} from '@/utils/category'

const AllCities = () => {
  const {locale, asPath, query, pathname} = useRouter()
  const {t} = useTranslation('common')
  return (
    <Menu as='div' className='relative ml-4 flex-shrink-0'>
      <div
        className={`${
          locale?.includes('ar') ? 'mt-0 mr-4 mb-0 ml-2' : 'mr-8'
        }`}>
        <Menu.Button className='text-xs flex items-center ring-1 ring-inset gap-2 w-full justify-center rounded-md border-0 border-gray-300 bg-white px-2 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-50'>
          <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
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
  )
}

export default AllCities
