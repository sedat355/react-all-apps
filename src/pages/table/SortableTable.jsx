import { useState } from "react"
import Button from "../../components/Button"
import Table from "./Table"
import { LiaSortSolid } from "react-icons/lia"

const SortableTable = props => {
  const [ sortingState, setSortingState ] = useState(null)//null-artan-azalan
  const [ sortedColumn, setSortedColumn ] = useState(null)//null-name-score

  console.log(sortingState, sortedColumn)

  const { config, data } = props

  const handleSortClick = (title) => {
    if( sortingState === null ) {
      setSortingState('artan')
      setSortedColumn(title)
    } else if( sortingState === 'artan' ) {
      setSortingState('azalan')
      setSortedColumn(title)
    } else if( sortingState === 'azalan' ) {
      setSortingState(null)
      setSortedColumn(null)
    }
  }

  //config dizisindeki nesnelerde sortValue öz. varsa bu nesnelere header fonk. eklenecek. sortValue öz. olmayanlar aynen döndürülecek.
  const updatedConfig = config.map(column => {
    if (!column.sortValue) {
      return column
    }

    return {
      ...column,
      header: () => {
        return (
          <Button
            handleClick={() => handleSortClick(column.title)}
            btnType="outline"
            size="circle-lg"
            className="border-none py-0 px-0 "
          >
            <LiaSortSolid />
          </Button>
        )
      },
    }
  })

  let sortedData = data;
  //iki state' de null değilse sıralama yapacağız:
  if( sortingState && sortedColumn ) {
    //Kullanacağımız doğru sortValue fonk. config dizisinden alıyoruz: Sağdaki ifade nesnenin tamamını döndüreceği için, bu nesneden sortValue öz. destructuring ile çekiyoruz.
    const { sortValue } = config.find(column => column.title === sortedColumn)

    sortedData = data.toSorted((a,b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortingState === 'artan' ? 1 : -1;

      console.log(reverseOrder)

      if( typeof valueA === 'string' ) {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    })
  }

  return <Table {...props} data={sortedData} config={updatedConfig} />
}

export default SortableTable
