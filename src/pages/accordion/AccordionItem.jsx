import { GoTriangleDown } from "react-icons/go"
import { GoTriangleLeft } from "react-icons/go"
import Button from "../../components/Button"
import { useState } from "react"

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-gray-one flex flex-col">
      <div className="px-3 py-2 flex items-center justify-between">
        <h3>{item.title}</h3>
        <Button handleClick={handleOpenAccordion} btnType="outline" className="border-none px-0">
          {
            isOpen ? <GoTriangleDown className="text-3xl text-gray-three" /> : <GoTriangleLeft className="text-3xl text-gray-three" />
          }
        </Button>
      </div>

      {isOpen && <div className="pl-8 pr-4 pt-1 pb-2 bg-gray-300">{item.desc}</div>}
    </div>
  )
}

export default AccordionItem
