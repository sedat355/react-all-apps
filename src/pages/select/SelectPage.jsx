import { useState } from "react";
import OptionItem from "./OptionItem";


const SelectPage = () => {
  const [ color, setColor ] = useState('')
  
  const initialColors = ["red", "green", "blue", "yellow"];
  console.log(color)
  
  const handleChange = (e) => {
    setColor(e.target.value)
  }

  const renderedColors = initialColors.map( color => {
    return <OptionItem key={color} color={color}/>
  })

  let currColor;
  if( color ) {
    currColor = `bg-${color}-500`
  }

  console.log(currColor)

  return (
    <div className="w-full">
      <h3>Select a color:</h3>
      <select 
        onChange={handleChange} 
        value={color}
        className={`py-1 text-xl w-full border border-black-one rounded ${currColor}`}
      >

        <option value="">Select</option>
        {renderedColors}
      </select>
    </div>
  )
}

export default SelectPage