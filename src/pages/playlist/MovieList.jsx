import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/Button"
import { IoClose } from "react-icons/io5"
import { removeMovie } from "../../store/slices/moviesSlice"
import store from "../../store"

const MovieList = () => {
  const movies = useSelector(state => state.movies)
  const dispatch = useDispatch()

  console.log(store.getState())//{movies: Array(2), songs: Array(2)}
  console.log(store.getState().movies)//(2) [{…}, {…}]

  const renderedMovies = movies.map(movie => {
    return (
      <li className="playlist-item" key={movie.id}>
        <span className="font-semibold">{movie.name}</span>
        <Button 
          handleClick={() => dispatch(removeMovie(movie.id))}
          btnType="outline" size="circle-md" className="border-none hover:bg-red-one hover:text-white">
          <IoClose/>
        </Button>
      </li>
    )
  })

  return (
    <ol className="playlist">
      {renderedMovies}
    </ol>
  )
}

export default MovieList
