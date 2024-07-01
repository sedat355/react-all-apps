import OptionItem from "./OptionItem"

const Panel = ({options}) => {

  const renderedOptions = options.map( option => {
    return <OptionItem key={option.value}>{option.title}</OptionItem>
  })

  return (
    <ul className="border-2 border-black-one p-2 mt-1 rounded-b-md">
      {renderedOptions}
    </ul>
  )
}

export default Panel