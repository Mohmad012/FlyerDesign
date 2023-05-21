import {useMemo, useState} from 'react'
import dynamic from 'next/dynamic'
const Tab = dynamic(() => import('../Tab'), {ssr: false})
const Table = dynamic(() => import('../Table'), {ssr: false})

const TabsContainer = ({allData}) => {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = tabIndex => {
    setActiveTab(tabIndex)
  }

  const headers = useMemo(
    () => ['Created', 'Type', 'Details', 'Price', 'Funds'],
    []
  )

  return (
    <div className='w-full ring-1 w-full ring-gray-500 rounded-lg pb-10 mt-10'>
      <div className='flex border-b border-gray-300'>
        <Tab
          label='Funds'
          isActive={activeTab === 1}
          onClick={() => handleTabClick(1)}
        />
      </div>
      <div className='mt-5  tab-content'>
        {activeTab === 1 && <Table headers={headers} allData={allData} />}
      </div>
    </div>
  )
}

export default TabsContainer
