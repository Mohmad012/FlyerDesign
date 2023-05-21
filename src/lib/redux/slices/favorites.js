import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  favoritesItems: {},
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      console.log('action.payload?.product', action.payload?.product)
      state.favoritesItems[action.payload.product.sku] = action.payload?.product
    },
    deleteFromFavorites: (state, action) => {
      let copyFavoritesItems = {...state.favoritesItems}
      delete copyFavoritesItems[action.payload.sku]
      state.favoritesItems = {...copyFavoritesItems}
    },
  },
})

export const {addToFavorites, deleteFromFavorites} = favoritesSlice.actions

export default favoritesSlice.reducer
