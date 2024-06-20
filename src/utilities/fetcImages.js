const options = {
  method: "GET",
  headers: {
    Authorization: "Client-ID l9yV8CHo0MS7vxzSi6acS0tvwuWuJMA7PcpaFT8wdRU",
  },
}

const baseUrl = "https://api.unsplash.com/search/photos?query="

export const fetchImages = async (term) => {
  const response = await fetch(baseUrl + "/" + term, options)
  const data = await response.json()

  return data.results
}