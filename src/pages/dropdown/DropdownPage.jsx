import Dropdown from "./Dropdown"

const DropdownPage = () => {

  const colors = [
    { title: "Red", value: "red" },
    { title: "Blue", value: "blue" },
    { title: "Green", value: "green" },
    { title: "Yellow", value: "yellow" },
    { title: "Purple", value: "purple" },
    { title: "Orange", value: "orange" },
  ]

  const musics = [
    {title: "Rock", value: "rock"},
    {title: "Jazz", value: "jazz"},
    {title: "Pop", value: "pop"},
  ]

  return (
    <div className="flex flex-col gap-y-2 w-full h-full">
      <Dropdown options={colors} title="Bir renk seçin" listType="colors"/>
      <Dropdown options={musics} title="Bir müzik türü seçin" listType="musics"/>
    </div>
  )
}

export default DropdownPage
