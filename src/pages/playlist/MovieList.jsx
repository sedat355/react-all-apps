import Button from "../../components/Button"
import { IoClose } from "react-icons/io5"

const MovieList = ({ movies }) => {
  const renderedMovies = movies.map(movie => {
    return (
      <li className="playlist-item" key={movie.id}>
        <span className="font-semibold">{movie.name}</span>
        <Button btnType="outline" size="circle-md" className="border-none hover:bg-red-one hover:text-white">
          <IoClose/>
        </Button>
      </li>
    )
  })
  return <ol className="playlist">{renderedMovies}</ol>
}

export default MovieList
