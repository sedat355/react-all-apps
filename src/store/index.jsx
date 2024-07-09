import { configureStore } from "@reduxjs/toolkit"
import { moviesReducer } from "./slices/moviesSlice"
import songsReducer from "./slices/songsSlice"

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    songs: songsReducer,
  },
})

console.log(store.getState())

export default store
