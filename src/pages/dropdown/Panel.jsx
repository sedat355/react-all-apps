import OptionItem from "./OptionItem"

const Panel = ({ options, isOpenPanel, setIsOpenPanel, handleClickOption }) => {

  const renderedOptions = options.map( option => {
    return <OptionItem onClick={handleClickOption} key={option.value} option={option}>{option.title}</OptionItem>
  })

  return (
    <>
      {
        isOpenPanel && <ul className="border-2 border-black-one p-2 mt-1 rounded-b-md">
        {renderedOptions}
      </ul>
      }
    </>
  )
}

export default Panel