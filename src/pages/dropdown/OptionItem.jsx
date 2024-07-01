
const OptionItem = ({option}) => {
  
  return (
    <li className="hover:bg-sky-400 hover:text-white px-1 py-0.5 cursor-pointer">
      <span className="text-lg">{option.title}</span>
    </li>
  )
}

export default OptionItem