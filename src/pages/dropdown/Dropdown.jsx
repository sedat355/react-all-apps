import { useEffect, useState } from "react"
import Button from "../../components/Button"
import Panel from "./Panel"
import { GoChevronDown } from "react-icons/go"
import { GoChevronLeft } from "react-icons/go"

const Dropdown = ({options, title, listType}) => {
  const [ isOpenPanel, setIsOpenPanel] = useState(false)
  const [ selectedOption, setSelectedOption ] = useState(null)

  const possibleColors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-orange-500"];

  const handleClick = () => {
    setIsOpenPanel(!isOpenPanel)
  }

  const handleClickOption = (option) => {
    setIsOpenPanel(false)
    setSelectedOption(option)
  }

  // useEffect(() => {
  //   const close = () => {
  //     setIsOpenPanel(false)
  //   }
  //   document.body.addEventListener('click', close)

  //   return () => document.body.removeEventListener('click', close);

  // },[])

  return (
  <section className="w-full">
      <div
        onClick={handleClick}
        className={`bg-${selectedOption?.value}-500 relative border-2 border-black-one px-2 py-1 rounded-t-md cursor-pointer flex items-center`}
      >
        <span className={selectedOption ? `opacity-100` : `opacity-50`}
        >
        {/* <span className={selectedOption && listType === "colors" ? `opacity-100 text-white` : `opacity-50 text-black-one`}
        > */}
          {selectedOption?.title || title}
        </span>

        <Button
          btntype="outline"
          className={`absolute bg-transparent right-1 text-xl`}
          // style={{color: selectedOption && listType === "colors" ? "white" : "black"}}
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

export default Dropdown