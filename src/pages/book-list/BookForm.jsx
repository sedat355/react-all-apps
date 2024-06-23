import { useContext, useState } from "react"
import Button from "../../components/Button"
import { nanoid } from "@reduxjs/toolkit"
import { BooksContext } from "../../contexts/BooksContext"

const BookForm = () => {
  const [newBook, setNewBook] = useState('')
  const { addBook } = useContext(BooksContext)


  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {id: nanoid(), name: newBook};
    addBook(book);
    setNewBook('');
  }

  return (
    <form 
      className="flex  space-x-2 bg-green-one p-4 rounded"
      onSubmit={handleSubmit}
    >
      <input
        value={newBook}
        onChange={(e) => setNewBook(e.target.value)}
        className="w-1/2 px-2 py-1 rounded outline-none" 
        placeholder="Bir kitap girin.." 
      />
      <Button type="submit" btnType="primary" className="bg-green-500"
      > 
        Add Book to List
      </Button>

    </form>
  )
}

export default BookForm