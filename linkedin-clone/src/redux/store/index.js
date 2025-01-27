import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: profileReducer
  })

  export default store 