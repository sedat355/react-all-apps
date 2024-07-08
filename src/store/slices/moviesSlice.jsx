import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
  { id: nanoid(), name: "The Holdovers" },
  { id: nanoid(), name: "American Fiction" },
]

const moviesSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    addMovie: () => {
      //..
    },
    removeMovie: () => {
      //...
    },
  },
})

export const moviesReducer = moviesSlice.reducer
export const { addMovie, removeMovie } = moviesSlice
