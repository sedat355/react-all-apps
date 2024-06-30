
const SelectPage = () => {

  return (
    <div className="w-full">
      <h3>Select a color:</h3>
      <select className="py-1 text-xl w-full border border-black-one rounded ">
        <option value="">Select</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>
    </div>
  )
}

export default SelectPage