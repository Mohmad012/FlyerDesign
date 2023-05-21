import React, {useCallback} from 'react'
import IconEmpty from './IconEmpty'

function Table({headers, allData}) {
  const formattedDate = useCallback(updated_at => {
    const date = new Date(updated_at)

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }

    return date.toLocaleDateString('en-US', options)
  }, [])
  return (
    <>
      {allData?.length ? (
        <table className='w-full'>
          <thead>
            <tr>
              {headers.map(header => (
                <th
                  key={header}
                  className='p-3 font-bold uppercase bg-gray-300 text-gray-500 hidden lg:table-cell'>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allData.map((row, index) => {
              return (
                <tr key={index}>
                  <td className={`p-3 hidden lg:table-cell `}>
                    {formattedDate(row?.created_at)}
                  </td>{' '}
                  <td className={`p-3 hidden lg:table-cell `}>
                    {row?.deduct && row?.action === 2
                      ? 'consumption'
                      : 'addition'}
                  </td>{' '}
                  <td className={`p-3 hidden lg:table-cell`}>{row?.message}</td>{' '}
                  <td
                    className={`p-3 hidden lg:table-cell ${
                      row?.deduct && row?.action === 2
                        ? 'text-red-500'
                        : 'text-green-500'
                    } `}>
                    {row?.deduct && row?.action === 2
                      ? `-${row?.difference}`
                      : `+${row?.difference}`}
                  </td>{' '}
                  <td className={`p-3 hidden lg:table-cell`}>
                    {row?.store_credit_balance}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <div className='flex flex-col items-center'>
          <IconEmpty />
          <h2 className='text-2xl font-semibold text-gray-600'>
            No previous bank transfers
          </h2>
          <p className='text-gray-500'>
            Requests to transfer your balance to your bank account will be
            displayed here
          </p>
        </div>
      )}
    </>
  )
}

export default Table
