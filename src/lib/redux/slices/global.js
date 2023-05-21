import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  globalData: {
    handShake: {},
  },
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    addLocaleHandShake: (state, action) => {
      state.globalData.handShake[action.payload.locale] = action.payload.token
    },
  },
})

export const {addLocaleHandShake} = globalSlice.actions

export default globalSlice.reducer
