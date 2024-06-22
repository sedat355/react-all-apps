const Book = ({book}) => {

  return (
    <li className="shadow-xl p-2">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="photo" />
      {/* <img src={`https://picsum.photos/300/200/?random`} alt="photo" /> */}
      <span className="inline-block my-6">
        <strong>Book Name:</strong> 
        {' '}
        {book.name}
      </span>
    </li>
  )
}

export default Book