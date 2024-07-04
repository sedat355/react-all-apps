import Table from "./Table"

const TablePage = () => {

  const fruits = [
    { id: 0, name: "Orange", color: "bg-orange-500", score: "5" },
    { id: 1, name: "Apple", color: "bg-red-500", score: "3" },
    { id: 2, name: "banana", color: "bg-yellow-500", score: "1" },
    { id: 3, name: "lime", color: "bg-green-500", score: "2" },
  ]

  const headersFruits = ["Fruit", "Color", "Score"]

  const cars = [
    { id: 0, brand: "Mercedes", color: "bg-black-500", year: "2018", price: 15000 },
    { id: 1, brand: "BMW", color: "bg-red-500", year: "2015", price: 12000 },
    { id: 2, brand: "Toyota", color: "bg-green-500", year: "2019", price: 11000 },
    { id: 3, brand: "Honda", color: "bg-yellow-500", year: "2010", price: 9000 },
  ]

  const headersCars = ["Brand", "Color", "Year", "Price"]

  return (
    <div>
      <Table data={fruits} headers={headersFruits} caption="Fruits Table"/>
      {/* <Table data={cars} headers={headersCars} caption="Cars Table"/> */}
    </div>
  )
}

export default TablePage