import { createSlice, nanoid } from "@reduxjs/toolkit"
import { faker } from "@faker-js/faker"
import { emptyAction } from "./songsSlice"

const initialState = [
  { id: nanoid(), name: "The Holdovers" },
  { id: nanoid(), name: "American Fiction" },
]

const moviesSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    addMovie: state => {
      state.push({ id: nanoid(), name: faker.music.songName() })
    },
    removeMovie: (state, action) => {
      //mutasyonlu:
      const deleteIndex = state.findIndex(movie => movie.id === action.payload)
      state.splice(deleteIndex, 1)

      //mutasyonsuz:
      //return state.filter( movie => movie.id !== action.payload)
    },
  },
  extraReducers: builder => {
    builder.addCase(emptyAction, () => {
      return [];
    })
  },
})

export const moviesReducer = moviesSlice.reducer
export const { addMovie, removeMovie } = moviesSlice.actions
