import { createSlice, nanoid } from "@reduxjs/toolkit";
import { faker } from '@faker-js/faker'

const initialState = [
  {id: nanoid(), name: "To & Fro"},
  {id: nanoid(), name: "The Business"},
]

const songsSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    addSong: (state, action) => {
      //...
    },
    removeSong: (state, action) => {
      //...
    }
  }
})

export default songsSlice.reducer
export const { addSong, removeSong } = songsSlice.actions
