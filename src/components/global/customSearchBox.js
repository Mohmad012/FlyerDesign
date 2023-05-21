import {useSearchBox} from 'react-instantsearch-hooks-web'
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid'
import {useRouter} from 'next/router'

export function CustomSearchBox(props) {
  const router = useRouter()
  const {refine, currentRefinement} = useSearchBox(props)
  return (
    <div className='bg-slate-200'>
      <div className='relative mt-1 rounded-md shadow-sm'>
        <input
          type='text'
          id='account-number'
          className='block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'
          placeholder='Search...'
          value={currentRefinement}
          onChange={event => {
            const query = event.target.value
            refine(query)
            query?.length
              ? router.push(`/products?q=${query}`)
              : router.push('/')
          }}
        />
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <MagnifyingGlassIcon
            className='h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
        </div>
      </div>
    </div>
  )
}
