import { useContext, useEffect } from "react"
import BookForm from "./BookForm"
import Book from "./Book"
import { BooksContext } from "../../contexts/BooksContext"
import { getBooks } from "../../utilities/getBooks"

const BookList = () => {
  const { books, setBooks } = useContext(BooksContext);

  console.log("booksContext:", books)

  useEffect(() => {
    getBooks("http://localhost:3000/books").then(data => setBooks(data))
  }, [])

  const renderedBooks = books.map(book => {
    return (
      <Book
        key={book.id}
        book={book}
      />
    )
  })

  return (
    <div className="w-full">
      <h1>Reading List</h1>
      <BookForm />

      <ul className="mt-4 flex gap-2 flex-wrap">{renderedBooks}</ul>
    </div>
  )
}

export default BookList
