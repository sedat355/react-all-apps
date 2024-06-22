import { useState } from "react"
import BookForm from "./BookForm"
import Book from "./Book";

const BookList = () => {
  const [ books, setBooks ] = useState([]);

  console.log(books)

  const addBook = (newBook) => {
    setBooks([...books, newBook ])
  }

  const renderedBooks = books.map(book => {
    return <Book key={book.id} book={book}/>
  })

  return (
    <div className="w-full">
      <h1>Reading List</h1>
      <BookForm addBook={addBook}/>
      
      <ul className="mt-4 flex gap-2 flex-wrap">
        {renderedBooks}
      </ul>
    </div>
  )
}

export default BookList