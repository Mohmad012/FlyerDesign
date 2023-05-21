import {useState} from 'react'
import {textAsideDefault} from '@/constant/category'
import SubCategoryList from '@/components/global/SubCategoryList'
const AsideDealsContainer = ({t, data = {}, parent_url_key}) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <aside className=''>
      <div className='bg-gray-200 px-3 pt-5 pb-1 mb-5 rounded-xl overflow-y-auto h-80'>
          <h2 className='mt-0 font-bold text-xl mb-5'>{t(data?.name)}</h2>
          <p
            className='text-sm mb-10'
            dangerouslySetInnerHTML={{
              __html: data?.description
                ? readMore
                  ? data?.description
                  : data?.description?.substring(0, 100) + '...'
                : readMore
                ? textAsideDefault
                : textAsideDefault?.substring(0, 100) + '...',
            }}
          />
          <button
            className='text-sm mt-5 mb-10 text-primary-600'
            onClick={() => setReadMore(!readMore)}>
            {readMore ? t('show less') : t('read more')}
          </button>
      </div>
      <SubCategoryList
        data={data?.listOfSubProduct}
        parent_url_key={parent_url_key}
      />
    </aside>
  )
}

export default AsideDealsContainer
