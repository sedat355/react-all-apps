import Button from "../../components/Button"

const PlaylistPage = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <Button btnType="danger">Reset Both Playlists</Button>

      <div className="playlist">
        <h3>Movie Playlist</h3>
        <Button btnType="primary">+Add Movie</Button>
      </div>
      <div className="playlist">
        <h3>Song Playlist</h3>
        <Button btnType="primary">+Add Song</Button>
      </div>
    </div>
  )
}

export default PlaylistPage
