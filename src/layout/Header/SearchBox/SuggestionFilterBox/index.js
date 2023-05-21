import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/20/solid'
import {useRouter} from 'next/router'
import {Fragment, useState} from 'react'

const SuggestionFilterBox = ({
  suggestions,
  filterBy,
  handleFetchSortedProducts,
  setShowSearchBoxModal,
}) => {
  const {locale: activeLocale, push} = useRouter()

  const [settings, setSettings] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = index => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  const handleFilteredProducts = ({key, code, type}) => {
    let newSettings = []
    if (settings?.find(fv => fv[code] === key)) {
      newSettings = settings.filter(fv => fv[code] !== key)
    } else {
      newSettings = [...settings, {[code]: key}]
    }
    setSettings(newSettings)
    handleFetchSortedProducts(newSettings, type)
  }
  return (
    <div className='w-1/3 p-4 overflow-hidden  relative'>
      <div
        className={`w-1/3 overflow-y-auto max-h-screen   p-4 fixed top-0 ${
          activeLocale?.includes('en') ? 'left-0' : 'right-0'
        } h-full rounded-tr-lg rounded-br-lg`}>
        {suggestions?.length ? (
          <>
            <h3
              className={`capitalize text-gray-500 mb-5 ${
                activeLocale?.includes('en') ? 'text-left' : 'text-right'
              }`}>
              suggesed for you
            </h3>
            <div className='flex flex-wrap gap-5'>
              {suggestions?.map(suggestion => (
                <button
                  onClick={() => {
                    push(`/${suggestion?.sku}`)
                    setShowSearchBoxModal(false)
                  }}
                  key={suggestion?.sku}
                  className='flex w-80 gap-2 bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-2 px-2 border border-gray-300 hover:border-transparent rounded-xl items-center'>
                  <span>{suggestion?.text}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          ''
        )}
        {filterBy?.length ? (
          <Menu as='div' className='relative bg-red-500 w-96' open={true}>
            <Transition
              as={Fragment}
              show={true}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'>
              <Menu.Items
                unmount={false}
                className={`absolute top-5 w-96  ${
                  activeLocale.includes('ar') ? 'right' : 'left'
                }-0 z-10 mt-2 w-48 origin-top-${
                  activeLocale.includes('ar') ? 'right' : 'left'
                } rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                {filterBy?.map((item, key) => (
                  <Menu.Item key={key}>
                    <>
                      <div className='w-full'>
                        <div className='border-b border-gray-200'>
                          {item?.list ? (
                            <button
                              className='flex cursor-pointer justify-between items-center w-full p-4 focus:outline-none'
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
                          ) : (
                            <div className='w-full flex my-5 mx-3'>
                              <span>{item.title}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {activeIndex === key &&
                        item?.list?.map((itemSub, keySub) => (
                          <Menu.Item key={keySub}>
                            <div
                              className={`flex items-center justify-between my-3 mx-5 `}>
                              <label
                                htmlFor={itemSub.key}
                                className={`text-sm cursor-pointer font-medium text-gray-900 dark:text-gray-300 hover:text-red-500`}>
                                {itemSub.label}
                              </label>
                              <input
                                id={itemSub.key}
                                type='checkbox'
                                checked={settings?.find(
                                  fv => fv[itemSub.code] === itemSub.key
                                )}
                                onClick={() =>
                                  handleFilteredProducts({
                                    key: itemSub.key,
                                    code: itemSub.code,
                                    type: 'filter',
                                  })
                                }
                                className='w-4 cursor-pointer h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                              />
                            </div>
                          </Menu.Item>
                        ))}
                    </>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default SuggestionFilterBox
