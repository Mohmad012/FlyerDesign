import {
  ChevronRightIcon,
  ChevronLeftIcon,
  HomeIcon,
} from '@heroicons/react/20/solid'
import {useRouter} from 'next/router'

const BreadcrumbContainer = ({t, name}) => {
  const router = useRouter()

  const pages = [
    {name: 'shopping', href: '#', current: false},
    {name, href: '#', current: true},
  ]

  const {locale: activeLocale} = router
  return (
    <nav className='flex -mb-3' aria-label='Breadcrumb'>
      <ol role='list' className='flex items-center space-x-4'>
        {pages.map((page, index) => (
          <li
            key={index}
            className={`${
              activeLocale === 'en'
                ? index === pages?.length - 1
                  ? ''
                  : '-mr-3'
                : index === 0
                ? '-mr-7 '
                : ''
            }`}>
            <div
              className={`flex items-center ${
                activeLocale === 'en'
                  ? index === pages?.length - 1
                    ? '-ml-9'
                    : 'mr-9'
                  : index === 0
                  ? 'ml-1 mr-8'
                  : ''
              } flex-row-reverse`}>
              <a
                href={page.href}
                className={`flex text-sm font-medium text-gray-500 hover:text-gray-700 ${
                  activeLocale === 'en' ? 'order-2' : 'order-1'
                }`}
                aria-current={page.current ? 'page' : undefined}>
                {t(page.name)}
              </a>
              {activeLocale === 'ar' ? (
                index === 0 ? (
                  <ChevronRightIcon
                    className='h-5 w-5 flex-shrink-0 text-gray-400'
                    aria-hidden='true'
                  />
                ) : (
                  ''
                )
              ) : index === pages?.length - 1 ? (
                <ChevronLeftIcon
                  className='h-5 w-5 flex-shrink-0 text-gray-400 order-2'
                  aria-hidden='true'
                />
              ) : (
                ''
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default BreadcrumbContainer
