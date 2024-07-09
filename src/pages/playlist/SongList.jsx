import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/Button"
import { removeSong } from "../../store/slices/songsSlice"
import { IoClose } from "react-icons/io5"

const SongList = () => {
  const songs = useSelector(state => state.songs)
  const dispatch = useDispatch()

  const renderedSongs = songs.map( song => {
    return(
      <li className="playlist-item" key={song.id}>
        <span className="font-semibold">{song.name}</span>
        <Button 
          handleClick={() => dispatch(removeSong(song.id))}
          btnType="outline" size="circle-md" className="border-none hover:bg-red-one hover:text-white">
          <IoClose/>
        </Button>
      </li>
    )
  })

  return(
    <ul className="playlist">
      {renderedSongs}
    </ul>
  )
}

export default SongList
