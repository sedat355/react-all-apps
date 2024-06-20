import ImageList from "./ImageList"
import { useState } from "react"

const ImageGallery = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [images, setImages] = useState([])

  console.log(images)

  const options = {
    method: "GET",
    headers: {
      Authorization: "Client-ID l9yV8CHo0MS7vxzSi6acS0tvwuWuJMA7PcpaFT8wdRU",
    },
  }

  const baseUrl = "https://api.unsplash.com/search/photos?query="

  const fetchImages = async term => {
    const response = await fetch(baseUrl + "/" + term, options)
    const data = await response.json()

    setImages(data.results)

    return data
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetchImages(searchTerm)
    setSearchTerm("")
  }

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
