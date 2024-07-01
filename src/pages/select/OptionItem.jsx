
const OptionItem = ({color}) => {

  console.log()
  
  return (
    <option className="bg-white" value={color}>{color.split('')[0].toUpperCase() + color.slice(1)}</option>
  )
}

export default OptionItem