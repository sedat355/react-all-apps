const Image = ({image}) => {

  return (
    <div>
      <img className="image" src={image.urls.thumb} alt={image.title} />
    </div>
  )
}

export default Image