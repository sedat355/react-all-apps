import Button from "../../components/Button"

const BookEdit = () => {
  return (
    <form className="mt-2 flex flex-col space-y-2">
      <input className="border border-gray-one px-2 py-1" />
      <Button 
        className="text-white"
        size="small"
      >
        Save
      </Button>
    </form>
  )
}

export default BookEdit