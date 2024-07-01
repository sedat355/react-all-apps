
const OptionItem = ({option, onClick}) => {

  const possibleColors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-orange-500"];
  
  const handleClick = () => {
    onClick(option)
  }

  return (
    <li
      onClick={handleClick} 
      className={`hover:bg-sky-400 hover:text-white px-1 py-0.5 cursor-pointer`}
    >
      <span className="text-lg">{option.title}</span>
    </li>
  )
}

export default OptionItem