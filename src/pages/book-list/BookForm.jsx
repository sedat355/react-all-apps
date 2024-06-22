import Button from "../../components/Button"

const BookForm = () => {
  return (
    <form className="flex  space-x-2 bg-green-one p-4 rounded">
      <input
        className="w-1/2 px-2 py-1 rounded outline-none" 
        placeholder="Bir kitap girin.." 
      />
      <Button btnType="primary" className="bg-green-500"
      >
        Submit
      </Button>

    </form>
  )
}

export default BookForm