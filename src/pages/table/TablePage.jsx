import Table from "./Table"

const TablePage = () => {

  const fruits = [
    { name: "Orange", color: "bg-orange-500", score: "5" },
    { name: "Apple", color: "bg-red-500", score: "3" },
    { name: "banana", color: "bg-yellow-500", score: "1" },
    { name: "lime", color: "bg-green-500", score: "2" },
  ]

  const headers = ["Fruit", "Color", "Score"]

  return (
    <div>
      <Table data={fruits} headers={headers}/>
    </div>
  )
}

export default TablePage