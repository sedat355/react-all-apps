import { useEffect, useState } from "react";
import OptionItem from "./OptionItem";

const SelectPage = () => {
  const [ color, setColor ] = useState('')
  
  const initialColors = ["purple","red", "green", "yellow"];

  // let possible = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-yellow-500"];

  // const createColors = (arr) => {
  //   const colorsToUse = arr.map( color => {
  //     return `bg-${color}-500`
  //   })
  //   return colorsToUse;
  // }

  // useEffect(() => {
  //   let possibleColors = createColors(initialColors)
  // },[])
  
  const handleChange = (e) => {
    setColor(e.target.value)
  }

  const renderedColors = initialColors.map( color => {
    return <OptionItem key={color} color={color}/>
  })

  let selectClasses = "py-1 text-xl w-full border border-black-one rounded"
  if( color ) {
    selectClasses += ` bg-${color}-500`
  }

  return (
    <div className="w-full">
      <h3>Select a color:</h3>
      <select 
        onChange={handleChange} 
        value={color}
        className={selectClasses}
      >

        <option value="" className="bg-white">Select</option>
        {renderedColors}
      </select>
    </div>
  )
}

export default SelectPage