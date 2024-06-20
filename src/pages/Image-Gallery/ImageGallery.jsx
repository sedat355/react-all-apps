import { useEffect } from "react"
import SearchBar from "../../components/SearchBar"
import ImageList from "./ImageList"

const ImageGallery = () => {

  return (
    <>
      <SearchBar />
      <ImageList/>
    </>
  )
}

export default ImageGallery
