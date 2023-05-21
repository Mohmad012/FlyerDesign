import dynamic from 'next/dynamic'
import Tabs from './Tabs'
const Map = dynamic(() => import('./Map'), {ssr:false})

export{
  Tabs,
  Map

}