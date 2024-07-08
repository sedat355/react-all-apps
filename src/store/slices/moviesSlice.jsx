import { createSlice, nanoid } from "@reduxjs/toolkit"
import { faker } from '@faker-js/faker'

const initialState = [
  { id: nanoid(), name: "The Holdovers" },
  { id: nanoid(), name: "American Fiction" },
]

const moviesSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    addMovie: (state, action) => {
      state.push( {id: nanoid(), name: faker.person.fullName()} )
    },
    removeMovie: () => {
      //...
    },
  },
})

export const moviesReducer = moviesSlice.reducer
export const { addMovie, removeMovie } = moviesSlice.actions
