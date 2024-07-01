import Button from "../../components/Button";
import Panel from "./Panel";
import { GoChevronDown } from 'react-icons/go'

const DropdownPage = () => {
  
  const options = [
    {title: "Red", value: "red"},
    {title: "Blue", value: "blue"},
    {title: "Green", value: "green"},
    {title: "Yellow", value: "yellow"},
    {title: "Purple", value: "purple"},
    {title: "Orange", value: "orange"},
  ];

  return (
    <section className="w-full">
      <div className="relative border-2 border-black-one px-2 py-1 rounded-t-md">
        <span>Bir renk seçin</span>
        <Button btntype="outline" className="absolute top-1 right-1 bg-white">
          <GoChevronDown />
        </Button>
      </div>

      <Panel options={options}/>
    </section>
  )
}

export default DropdownPage