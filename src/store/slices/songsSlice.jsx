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
    addSong: (state) => {
      state.push({id: nanoid(), name: faker.music.songName()})
    },
    removeSong: (state, action) => {
      const index = state.findIndex(song => song.id === action.payload)
      state.splice(index, 1)
    }
  }
})

export default songsSlice.reducer
export const { addSong, removeSong } = songsSlice.actions
