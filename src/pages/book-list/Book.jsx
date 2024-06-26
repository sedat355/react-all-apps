import { BiEditAlt } from "react-icons/bi"
import { BsTrash } from "react-icons/bs"
import Button from "../../components/Button"
import { useState } from "react"
import BookEdit from "./BookEdit"
import useBooksContext from "../../hooks/useBooksContext"

const Book = ({ book }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const { deleteBook, editBook } = useBooksContext()

  const handleDelete = () => {
    deleteBook(book.id)
  }

  const handleSaveClick = (id, newBookName) => {
    editBook(id, newBookName)
    setIsOpenEdit(!isOpenEdit)
  }

  return (
    <li className="shadow-xl p-2 max-w-64">
      {/* <img src={`https://picsum.photos/300/200/?random`} alt="photo" /> */}

      <div className="relative">
        <img
          className="object-cover w-full"
          src={`https://picsum.photos/seed/${book.id}/300/200`}
          alt="photo"
        />

        <Button
          handleClick={() => setIsOpenEdit(!isOpenEdit)}
          size="circle-sm"
          className="bg-gray-50 absolute top-2 right-10"
        >
          <BiEditAlt className="" />
        </Button>

        <Button
          handleClick={handleDelete}
          size="circle-sm"
          className="bg-gray-50 absolute top-2 right-2"
        >
          <BsTrash />
        </Button>
      </div>

      {isOpenEdit ? (
        <BookEdit book={book} handleSaveClick={handleSaveClick} />
      ) : (
        <span className="inline-block my-6">
          <strong>Book Name:</strong> {book.name}
        </span>
      )}
    </li>
  )
}

export default Book
