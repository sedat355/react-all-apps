import { GoTriangleDown } from "react-icons/go"
import Button from '../../components/Button'

const AccordionItem = ({ item }) => {
  return (
    <div className="bg-gray-one flex flex-col px-3 py-2">
      <div className="flex items-center justify-between">
        <h3>{item.title}</h3>
        <Button btnType="outline" className="border-none px-0">
          <GoTriangleDown className="text-3xl text-gray-three" />
        </Button>
      </div>

      <div className="pl-4 pt-1 pb-2">
        {item.desc}
      </div>
    </div>
  )
}

export default AccordionItem
