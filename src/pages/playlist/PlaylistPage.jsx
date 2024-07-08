import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/Button"
import MovieList from "./MovieList"
import SongList from "./SongList"
import { addMovie } from "../../store/slices/moviesSlice"

const PlaylistPage = () => {
  const movies = useSelector(state => state.movies)
  const dispatch = useDispatch()

  console.log(movies)

  const addToMovieList = () => {
    dispatch(addMovie())
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

        <MovieList movies={movies} />
      </div>

      <div className="playlist-container">
        <div className="flex items-center justify-between">
          <h3>Song Playlist</h3>
          <Button btnType="primary">+Add Song</Button>
        </div>

        <SongList />
      </div>
    </div>
  )
}

export default PlaylistPage
