import { fetchImages } from "../../utilities/fetcImages"
import ImageList from "./ImageList"
import { useState } from "react"

const ImageGallery = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [images, setImages] = useState([])

  //! Birinci yöntem:
  const handleSubmit = async(e) => {
    e.preventDefault()
    const data = await fetchImages(searchTerm)
    setImages(data)
    setSearchTerm("")
  }

  //! İkinci yöntem:
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   fetchImages(searchTerm)
  //     .then(data => setImages(data))
  //   setSearchTerm("")
  // }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="mb-4 w-full bg-yellow-one p-4">
        <input
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Bir terim girin.."
        />
      </form>

      <ImageList images={images} />
    </div>
  )
}

export default ImageGallery
