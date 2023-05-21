import {useTranslation} from 'react-i18next'
import SubCategoryList from '@/components/global/SubCategoryList'
import {bestestBrandImages} from '@/constant/category'
import Image from 'next/image'
import Link from 'next/link'
const MegaMenu = ({headerData}) => {
  const {t} = useTranslation('common')

  return (
    <nav className='relative bg-white  text-gray-900'>
      <div className='container mx-auto flex justify-between items-center'>
        <ul className='flex gap-5 items-center'>
          {headerData?.map(item => (
            <li
              className='hoverable hover:bg-primary-500 hover:text-white'
              key={item.id}>
              <Link
                className='relative block p-2  text-[12px] font-bold hover:bg-primary-500 hover:text-white'
                href={`/category/${item?.url_key}`}>
                {item?.name}
              </Link>
              <div className='p-6 mega-menu sm:mb-0 shadow-xl bg-white z-20'>
                <div className='container mx-auto w-full flex flex-wrap justify-center mx-2  '>
                  <ul className='px-4 w-full sm:w-1/2 lg:w-1/3  '>
                    <h2 className='text-primary-500 pr-3 mb-5'>
                      {t('categories')}
                    </h2>
                    <SubCategoryList
                      data={item?.children_data}
                      parent_url_key={item?.url_key}
                    />
                  </ul>
                  <ul className='px-4 w-full sm:w-1/2 lg:w-1/3  '>
                    <div className='flex gap-3 mb-5'>
                      {bestestBrandImages?.map((item, key) => (
                        <div key={key} className='bg-gray-300 flex p-1 w-96'>
                          <Image src={item} width={50} height={50} alt={item} />
                        </div>
                      ))}
                    </div>
                    <div className='flex gap-3'>
                      {bestestBrandImages?.map((item, key) => (
                        <div key={key} className='bg-gray-300 flex p-1 w-96'>
                          <Image src={item} width={50} height={50} alt={item} />
                        </div>
                      ))}
                    </div>
                  </ul>
                  <ul className='px-4 w-full sm:w-1/2 lg:w-1/3  '>
                    <div className='flex gap-3 h-72'>
                      <Image
                        className='h-full w-full object-contain'
                        src='/assets/images/category/Frame 427321658.svg'
                        width={150}
                        height={150}
                        alt='/assets/images/category/Frame 427321658.svg'
                      />
                      <Image
                        className='h-full w-full object-contain'
                        src='/assets/images/category/Frame 427321657.svg'
                        width={150}
                        height={150}
                        alt='/assets/images/category/Frame 427321657.svg'
                      />
                    </div>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className='text-[12px] hidden' suppressHydrationWarning>{t('more')}</div>
      </div>
    </nav>
  )
}

export default MegaMenu
