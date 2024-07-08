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
    addMovie: (state) => {
      state.push( {id: nanoid(), name: faker.person.fullName()} )
    },
    removeMovie: (state,action) => {
      console.log("state", state)
      console.log("action", action)
      //mutasyonlu:
      const deleteIndex = state.findIndex(movie => movie.id === action.payload)
      state.splice(deleteIndex,1)

      //mutasyonsuz:
      //return state.filter( movie => movie.id !== action.payload)
    },
  },
})

export const moviesReducer = moviesSlice.reducer
export const { addMovie, removeMovie } = moviesSlice.actions
