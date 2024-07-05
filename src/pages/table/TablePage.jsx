import SortableTable from "./SortableTable"
import Table from "./Table"
const TablePage = () => {

  const fruits = [
    { id: 0, name: "Orange", color: "bg-orange-500", score: "5" },
    { id: 1, name: "Apple", color: "bg-red-500", score: "3" },
    { id: 2, name: "Banana", color: "bg-yellow-500", score: "1" },
    { id: 3, name: "Lime", color: "bg-green-500", score: "2" },
  ]

  //sıralama yapılacak olan başlıkların temsil edildiği nesnelere sortValue fonk. ekleniyor.
  const configFruits = [
    { title: 'Name',
      render: (obj) => obj.name,
      sortValue: (obj) => obj.name
    },
    { title: 'Color',
      render: function(obj) { return <span className={`colorCol ${obj.color}`}></span> },
    },
    { title: 'Score',
      render: function(obj) { return obj.score },
      sortValue: (obj) => obj.score
    },
  ]

  const cars = [
    { id: 0, brand: "Mercedes", color: "bg-black", year: "2018", price: 15000 },
    { id: 1, brand: "BMW", color: "bg-red-500", year: "2015", price: 12000 },
    { id: 2, brand: "Toyota", color: "bg-green-500", year: "2019", price: 11000 },
    { id: 3, brand: "Honda", color: "bg-yellow-500", year: "2010", price: 9000 },
  ]

  const configCars = [
    { title: 'Brand',
      render: (obj) => obj.brand
    },
    { title: 'Color',
      render: function(obj) { return <span className={`colorCol ${obj.color}`}></span> }
    },
    { title: 'Price',
      render: function(obj) { return obj.price }
    },
    { title: 'Year',
      render: function(obj) { return obj.year }
    },
  ]

  return (
    <div>
      <SortableTable data={fruits} config={configFruits} caption="Fruits Table"/>
      <Table data={cars} config={configCars} caption="Cars Table"/>
    </div>
  )
}

export default TablePage