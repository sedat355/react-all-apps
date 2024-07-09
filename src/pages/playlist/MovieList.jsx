import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/Button"
import { IoClose } from "react-icons/io5"
import { removeMovie } from "../../store/slices/moviesSlice"

const MovieList = () => {
  const movies = useSelector(state => state.movies)
  const dispatch = useDispatch()

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
      {movies.length ? renderedMovies : <strong className="text-gray-500">Liste şu anda boş</strong>}
    </ol>
  )
}

export default MovieList
