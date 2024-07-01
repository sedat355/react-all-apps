import { useState } from "react"
import Button from "../../components/Button"
import Panel from "./Panel"
import { GoChevronDown } from "react-icons/go"
import { GoChevronLeft } from "react-icons/go"

const DropdownPage = () => {
  const [ isOpenPanel, setIsOpenPanel] = useState(false)
  const [ selectedOption, setSelectedOption ] = useState(null)
  const [ title, setTitle ] = useState('Bir renk seçin')

  const possibleColors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-orange-500"];
    

  const options = [
    { title: "Red", value: "red" },
    { title: "Blue", value: "blue" },
    { title: "Green", value: "green" },
    { title: "Yellow", value: "yellow" },
    { title: "Purple", value: "purple" },
    { title: "Orange", value: "orange" },
  ]

  const handleClick = () => {
    setIsOpenPanel(!isOpenPanel)
  }

  const handleClickOption = (option) => {
    setIsOpenPanel(false)
    setSelectedOption(option)
    setTitle(option.title)
  }

  return (
    <section className="w-full">
      <div
        onClick={handleClick}
        className={`bg-${selectedOption?.value}-500 relative border-2 border-black-one px-2 py-1 rounded-t-md cursor-pointer flex items-center`}
      >
        <span className={title !== 'Bir renk seçin' ? `opacity-100 text-white` : `opacity-50 text-black-one`}>
          {title}
        </span>

        <Button
          btntype="outline"
          className="absolute bg-transparent text-white right-1 text-xl"
        >
          {isOpenPanel ? <GoChevronDown /> : <GoChevronLeft />}
        </Button>
      </div>

      <Panel
        handleClickOption={handleClickOption}
        options={options}
        isOpenPanel={isOpenPanel}
        setIsOpenPanel={setIsOpenPanel}
      />
    </section>
  )
}

export default DropdownPage
