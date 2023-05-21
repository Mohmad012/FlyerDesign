import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [
    {
      type:'VISA',
      card_number: 4557012345678902,
      expire:'2505',
      ccv: 123
    },
  ],
  currentCard:{},
  Alladdresses:[],
  billingAddress:[],
  regions:[],
  regionAreas:[],
  ccv:''
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addNewCart:(state, {payload}) =>{
      state.cards = [...state.cards, payload]
      state.currentCard = payload
    },
    getAllRegions:(state, {payload}) =>{
      state.regions = payload
    },
    getRegionAreas:(state, {payload}) =>{
      state.regionAreas = state.regions.find(region => region.value === payload)
    },
    selectCard:(state, {payload}) =>{
      state.currentCard = state.cards.find(card => card?.card_number?.toString()?.endsWith(payload))
    },
    getAllAddress:(state, {payload}) =>{
      const updateAddress = payload.map(address => address.default_shipping && address.default_billing ? address : { ...address, default_shipping: false, default_billing: false })
      console.log('payload', [payload])
      console.log('updated addresses', updateAddress)
      state.Alladdresses = [...updateAddress]
    },
    changeAddress:(state, {payload}) =>{
      const newAddress = state.Alladdresses.map(address => address.id === payload ? { ...address, default_shipping: true, default_billing: true } : { ...address, default_shipping: false, default_billing: false })
      console.log('changeAddress', payload, newAddress)
      state.Alladdresses = [...newAddress]
    },
    setBillingAddress:(state, {payload}) =>{
      state.billingAddress = [payload]
    },
    deleteAddresses:(state) =>{
      state.Alladdresses = []
      state.billingAddress = []
    },
    setCCV:(state, {payload}) =>{
      state.ccv = payload
    }
  },

});

export const {
  addNewCart,
  selectCard,
  getAllRegions,
  getRegionAreas,
  getAllAddress,
  setBillingAddress,
  deleteAddresses,
  changeAddress,
  setCCV
} = checkoutSlice.actions;

export default checkoutSlice.reducer;