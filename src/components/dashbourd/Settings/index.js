import dynamic from 'next/dynamic'
const Favorites = dynamic(() => import('./Favorites'), {ssr: false})
const Addresses = dynamic(() => import('./Addresses'), {ssr: false})
const Orders = dynamic(() => import('./Orders'), {ssr: false})
const Returns = dynamic(() => import('./Returns'), {ssr: false})
const Account = dynamic(() => import('./Account'), {ssr: false})
const FundsVoucherek = dynamic(() => import('./FundsVoucherek'), {ssr: false})

import {useSelector} from 'react-redux'

const Settings = () => {
  const {currentComponent} = useSelector(state => state.dashbourd.dashbourdData)
  const handleCurrentComponent = () => {
    const componentsLookUp = {
      Favorites,
      Addresses,
      Orders,
      Returns,
      FundsVoucherek,
      Account,
    }
    let renderComponent

    if (currentComponent) {
      const SelectedComponent = componentsLookUp[currentComponent]
      if (SelectedComponent) {
        renderComponent = <SelectedComponent />
      }
    }

    return renderComponent
  }
  return (
    <div className='w-4/5 overflow-y-auto border-transparent px-7'>
      {handleCurrentComponent()}
    </div>
  )
}

export default Settings
