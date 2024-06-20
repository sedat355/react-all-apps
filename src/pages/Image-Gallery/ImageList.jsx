import Image from './Image'

const ImageList = ({images}) => {

  const renderedImages = images.map(image => {
    return <Image key={image.id} image={image}/>
  })

  return (
    <ul className='grid grid-cols-3 grid-flow-row-dense gap-1'>
      {renderedImages}
    </ul>
  )
}

export default ImageList