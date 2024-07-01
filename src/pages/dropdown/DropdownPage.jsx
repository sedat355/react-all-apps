import { useState } from "react";
import Button from "../../components/Button";
import Panel from "./Panel";
import { GoChevronDown } from 'react-icons/go'
import { GoChevronLeft } from 'react-icons/go'

const DropdownPage = () => {
  const [ isOpenPanel, setIsOpenPanel ] = useState(false)
  
  const options = [
    {title: "Red", value: "red"},
    {title: "Blue", value: "blue"},
    {title: "Green", value: "green"},
    {title: "Yellow", value: "yellow"},
    {title: "Purple", value: "purple"},
    {title: "Orange", value: "orange"},
  ];

  const handleClick = () => {
    setIsOpenPanel(!isOpenPanel)
  }

  return (
    <section className="w-full">
      <div
        onClick={handleClick} 
        className="relative border-2 border-black-one px-2 py-1 rounded-t-md cursor-pointer"
      >
        <span className="text-lg opacity-50">Bir renk seçin</span>
        <Button btntype="outline" className="absolute top-1 right-1 bg-white text-lg">
          {isOpenPanel ? <GoChevronDown /> : <GoChevronLeft/> }
        </Button>
      </div>

      <Panel options={options} isOpenPanel={isOpenPanel} />
    </section>
  )
}

export default DropdownPage