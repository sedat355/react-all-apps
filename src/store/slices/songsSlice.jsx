import { createSlice, nanoid } from "@reduxjs/toolkit";
import { faker } from '@faker-js/faker'
import { createAction } from "@reduxjs/toolkit";

export const emptyAction = createAction("app/emptyList")

const initialState = [
  {id: nanoid(), name: "To & Fro"},
  {id: nanoid(), name: "The Business"},
]

const songsSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    addSong: (state) => {
      state.push({id: nanoid(), name: faker.music.songName()})
    },
    removeSong: (state, action) => {
      const index = state.findIndex(song => song.id === action.payload)
      state.splice(index, 1)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(emptyAction,(state,action) => {
      state.splice(0)
    })
  }
})

export default songsSlice.reducer
export const { addSong, removeSong } = songsSlice.actions
