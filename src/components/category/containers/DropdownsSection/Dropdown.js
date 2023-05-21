import {Fragment, useState} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {useRouter} from 'next/router'
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/20/solid'

const Dropdown = ({
  nameDropdown,
  dataList,
  handleSortingFilteredProducts,
  settings,
  type,
  t,
}) => {
  const {locale} = useRouter()
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = index => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }
  return (
    <Menu as='div' className='relative  w-80'>
      <>
        <div className={`${locale.includes('ar') ? '' : ''}`}>
          <Menu.Button
            className={`text-xs flex items-center w-full justify-between rounded-md border-0 border-gray-300 ring-1 ring-white px-2 py-2 font-medium text-white shadow-sm ${
              locale.includes('en') ? 'flex-row-reverse' : 'flex-row'
            } flex-row-reverse`}>
            <ChevronDownIcon
              className='-mr-1 ml-2 h-5 w-5'
              aria-hidden='true'
            />
            {nameDropdown}
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
              locale.includes('ar') ? 'right' : 'left'
            }-0 z-10 mt-2 w-48 origin-top-${
              locale.includes('ar') ? 'right' : 'left'
            } rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
            {dataList.map((item, key) => (
              <Menu.Item key={key}>
                <>
                  <div className='w-full'>
                    <div className='border-b border-gray-200'>
                      <button
                        className='flex justify-between items-center w-full p-4 focus:outline-none'
                        onClick={() => handleClick(key)}>
                        <span>{item.title}</span>
                        <span className='text-gray-400'>
                          {activeIndex === key ? (
                            <ChevronUpIcon
                              className='-mr-1 ml-2 h-5 w-5'
                              aria-hidden='true'
                            />
                          ) : (
                            <ChevronDownIcon
                              className='-mr-1 ml-2 h-5 w-5'
                              aria-hidden='true'
                            />
                          )}
                        </span>
                      </button>
                    </div>
                  </div>
                  {activeIndex === key &&
                    item?.list?.map((itemSub, keySub) => {
                      return (
                        <Menu.Item key={keySub}>
                          <div
                            className={`flex items-center justify-between my-3 mx-5 `}>
                            <label
                              htmlFor={itemSub.key}
                              className='text-sm font-medium text-gray-900 dark:text-gray-300 hover:text-red-500'>
                              {itemSub.label}
                            </label>
                            <input
                              id={itemSub.key}
                              type='checkbox'
                              checked={settings?.find(
                                fv => fv[itemSub.code] === itemSub.key
                              )}
                              onChange={() =>
                                handleSortingFilteredProducts(
                                  itemSub.key,
                                  itemSub.code,
                                  type
                                )
                              }
                              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                            />
                          </div>
                        </Menu.Item>
                      )
                    })}
                </>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </>
    </Menu>
  )
}
export default Dropdown
