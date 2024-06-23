import BookList from "./BookList"
import BooksContextProvider from "../../contexts/BooksContext"

const BookListPage = () => {

  return (
    <BooksContextProvider>
      <BookList/>
    </BooksContextProvider>
  )
}

export default BookListPage