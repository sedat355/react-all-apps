import ImageList from "./ImageList"
import { useState } from "react"

const ImageGallery = () => {
  const [searchTerm, setSearchTerm] = useState("")

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

    console.log(data.results)

    return data
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetchImages(searchTerm)
    setSearchTerm("")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full bg-yellow-one p-4">
        <input
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Bir terim girin.."
        />
      </form>

      <ImageList />
    </>
  )
}

export default ImageGallery
