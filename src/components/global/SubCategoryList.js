import Link from 'next/link'
import {useRouter} from 'next/router'

const SubCategoryList = ({data, parent_url_key, height = 'h-96 '}) => {
  const router = useRouter()
  const {locale: activeLocale} = router

  return (
    <div
      className={`overflow-y-auto w-[200px] ${height} ${
        activeLocale.includes('en') ? 'pl-3' : 'pr-3'
      }`}
      dir={`${activeLocale.includes('en') ? 'rtl' : 'ltr'}`}>
      {data?.map((item, key) => (
        <div
          key={key}
          className='flex gap-1 justify-end text-gray-600 hover:text-primary-600 my-2'>
          <span>({item?.product_count})</span>
          <Link
            href={`/category/${
              parent_url_key ? parent_url_key : item?.parent_url_key
            }/${item?.url_key}`}>
            <span>{item?.name}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default SubCategoryList
