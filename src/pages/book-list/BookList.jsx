import { useEffect, useState } from "react"
import BookForm from "./BookForm"
import Book from "./Book";

const BookList = () => {
  const [ books, setBooks ] = useState([]);

  useEffect(() => {
    getBooks()
  },[])

  const getBooks = async () => {
    const response = await fetch("http://localhost:3000/books")
    const data = await response.json()

    setBooks(data)
  }

  console.log(books)

  const addBook = async (newBook) => {
    const url = "http://localhost:3000/books";
    const options = {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: { "Content-Type": "application/json"},
    }

    const response = await fetch(url, options );
    const data = await response.json()

    console.log(data)
    getBooks()
  }

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  const editBook = (id, newName) => {
    const bookList = books.map( book => {
      if( book.id === id ) {
        return {...book, name: newName }
      }
      return book;
    })

    setBooks(bookList)
  }

  const renderedBooks = books.map(book => {
    return <Book key={book.id} book={book} deleteBook={deleteBook} editBook={editBook}/>
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