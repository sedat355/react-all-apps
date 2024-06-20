const Image = ({image}) => {
  console.log(image)

  return (
    <div>
      <img className="w-full h-full object-cover" src={image.urls.thumb} alt={image.title} />
    </div>
  )
}

export default Image