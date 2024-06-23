import { useState } from "react"
import Button from "../../components/Button"

const BookEdit = ({book, handleSaveClick}) => {
  const [ inputVal, setInputVal ] = useState(book.name);
  
  const handleSave = () => {
    handleSaveClick(book.id, inputVal)
  }

  return (
    <form className="mt-2 flex flex-col space-y-2">
      <input
        value={inputVal} 
        onChange={(e) => setInputVal(e.target.value)}
        className="border border-gray-one px-2 py-1" />
      <Button 
        handleClick={handleSave}
        className="text-white"
        size="full"
        btnType="primary"
      >
        Save
      </Button>
    </form>
  )
}

export default BookEdit