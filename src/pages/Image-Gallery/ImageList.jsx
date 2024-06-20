import Image from './Image'

const ImageList = ({images}) => {

  const renderedImages = images.map(image => {
    return <Image key={image.id} image={image}/>
  })

  return (
    <ul className='image-list'>
      {renderedImages}
    </ul>
  )
}

export default ImageList