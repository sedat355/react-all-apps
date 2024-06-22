import { BiEditAlt } from "react-icons/bi"
import { BsTrash } from "react-icons/bs"
import Button from "../../components/Button"
import { useState } from "react"
import BookEdit from "./BookEdit"

const Book = ({ book, deleteBook, editBook }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false)

  const handleDelete = () => {
    deleteBook(book.id)
  }

  const handleEdit = () => {
    setIsOpenEdit(!isOpenEdit)
    editBook(book)
  }

  return (
    <li className="shadow-xl p-2">
      {/* <img src={`https://picsum.photos/300/200/?random`} alt="photo" /> */}

      <div className="relative">
        <img
          className="object-cover max-w-full"
          src={`https://picsum.photos/seed/${book.id}/300/200`}
          alt="photo"
        />

        <Button
          handleClick={handleEdit}
          size="circle"
          className="bg-gray-50 absolute top-2 right-10"
        >
          <BiEditAlt className="" />
        </Button>

        <Button
          handleClick={handleDelete}
          size="circle"
          className="bg-gray-50 absolute top-2 right-2"
        >
          <BsTrash />
        </Button>
      </div>

      {isOpenEdit 
        ? (
          <BookEdit book={book} editBook={editBook} isOpenEdit={isOpenEdit} setIsOpenEdit={setIsOpenEdit}/>
        )
        : (
          <span className="inline-block my-6">
            <strong>Book Name:</strong> {book.name}
          </span>
        )
      }
    </li>
  )
}

export default Book
