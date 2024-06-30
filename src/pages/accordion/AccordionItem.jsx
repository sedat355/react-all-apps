import { GoTriangleDown } from "react-icons/go"
import { GoTriangleLeft } from "react-icons/go"
import Button from "../../components/Button"

const AccordionItem = ({ item, handleClose }) => {

  return (
    <div className="bg-gray-one flex flex-col">
      <div className="px-3 py-2 flex items-center justify-between">
        <h3>{item.title}</h3>
        <Button handleClick={() => handleClose(item.id)} btnType="outline" className="border-none px-0">
          {
            !item.isClose ? <GoTriangleDown className="text-3xl text-gray-three" /> : <GoTriangleLeft className="text-3xl text-gray-three" />
          }
        </Button>
      </div>

      { !item.isClose && <div className="pl-8 pr-4 pt-1 pb-2 bg-gray-300">{item.desc}</div>}
    </div>
  )
}

export default AccordionItem
