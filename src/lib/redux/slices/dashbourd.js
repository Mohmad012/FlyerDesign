import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  dashbourdData: {
    currentComponent: 'Favorites',
    currentOrderComponent: 'mainOrders',
    currentOrderID: null,
    ordersData: {},
    Alladdresses: [],
    billingAddress: [],
    regions: [],
    regionAreas: [],
  },
}

const dashbourdSlice = createSlice({
  name: 'dashbourd',
  initialState,
  reducers: {
    addCurrentComponent: (state, action) => {
      state.dashbourdData.currentComponent = action.payload.currentComponent
    },
    addCurrentOrderComponent: (state, action) => {
      state.dashbourdData.currentOrderComponent =
        action.payload.currentOrderComponent

      state.dashbourdData.currentOrderID = action.payload?.id
      const comingData = action.payload?.data ?? []
      let allData = {}
      // console.log({allData})
      comingData?.forEach(element => {
        allData[element?.entity_id] = element
      })

      state.dashbourdData.ordersData = allData
    },
    getAllRegions: (state, {payload}) => {
      state.regions = payload
    },
    getRegionAreas: (state, {payload}) => {
      state.regionAreas = state.regions.find(region => region.value === payload)
    },
    getAllAddress: (state, {payload}) => {
      const updateAddress = payload.map(address =>
        address.default_shipping && address.default_billing
          ? address
          : {...address, default_shipping: false, default_billing: false}
      )
      console.log('payload', [payload])
      console.log('updated addresses', updateAddress)
      state.Alladdresses = [...updateAddress]
    },
    changeAddress: (state, {payload}) => {
      const newAddress = state.Alladdresses.map(address =>
        address.id === payload
          ? {...address, default_shipping: true, default_billing: true}
          : {...address, default_shipping: false, default_billing: false}
      )
      console.log('changeAddress', payload, newAddress)
      state.Alladdresses = [...newAddress]
    },
    setBillingAddress: (state, {payload}) => {
      state.billingAddress = [payload]
    },
    deleteAddresses: state => {
      state.Alladdresses = []
      state.billingAddress = []
    },
  },
})

export const {
  addCurrentComponent,
  addCurrentOrderComponent,
  getAllRegions,
  getRegionAreas,
  getAllAddress,
  setBillingAddress,
  deleteAddresses,
  changeAddress,
} = dashbourdSlice.actions

export default dashbourdSlice.reducer
