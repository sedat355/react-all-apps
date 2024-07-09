import { useDispatch } from "react-redux"
import Button from "../../components/Button"
import MovieList from "./MovieList"
import SongList from "./SongList"
import { addMovie } from "../../store/slices/moviesSlice"
import { addSong } from "../../store/slices/songsSlice"

const PlaylistPage = () => {
  const dispatch = useDispatch()

  const addToMovieList = () => {
    dispatch(addMovie())
  }

  const addToSongList = () => {
    dispatch(addSong())
  }

  return (
    <div className="flex flex-col gap-y-2">
      <Button btnType="danger">Reset Both Playlists</Button>

      <div className="playlist-container">
        <div className="flex items-center justify-between">
          <h3>Movie Playlist</h3>
          <Button 
            handleClick={addToMovieList}
            btnType="primary">+Add Movie</Button>
        </div>

        <MovieList />
      </div>

      <div className="playlist-container">
        <div className="flex items-center justify-between">
          <h3>Song Playlist</h3>
          <Button 
            handleClick={addToSongList}
            btnType="primary">+Add Song</Button>
        </div>

        <SongList />
      </div>
    </div>
  )
}

export default PlaylistPage
