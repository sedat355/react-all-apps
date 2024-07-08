import { configureStore } from "@reduxjs/toolkit"
import { moviesReducer } from "./slices/moviesSlice"

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
})

console.log(store.getState())

export default store
