const Image = ({image}) => {
  console.log(image)

  return (
    <div>
      <img src={image.urls.thumb} alt={image.title} />
    </div>
  )
}

export default Image