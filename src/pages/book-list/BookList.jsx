import { useState } from "react"
import BookForm from "./BookForm"

const BookList = () => {
  const [ books, setBooks ] = useState([]);

  console.log(books)

  const addBook = (newBook) => {
    setBooks([...books, newBook ])
  }

  return (
    <div className="w-full">
      <h1>Reading List</h1>
      <BookForm addBook={addBook}/>
    </div>
  )
}

export default BookList