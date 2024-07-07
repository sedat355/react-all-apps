import { useState } from "react"
import { LiaSortSolid } from "react-icons/lia"
import { LiaSortDownSolid } from "react-icons/lia"
import { LiaSortUpSolid } from "react-icons/lia"

function useSort(config, data) {
  const [sortingState, setSortingState] = useState(null) //null-artan-azalan
  const [sortedColumn, setSortedColumn] = useState(null) //null-name-score

  const handleSortClick = title => {
    //başka sütun başlığına tıklandığında sortingState' i 'artan' dan başlatma:
    if (sortedColumn && title !== sortedColumn) {
      setSortingState("artan")
      setSortedColumn(title)
      return
    }
    //.............................
    if (sortingState === null) {
      setSortingState("artan")
      setSortedColumn(title)
    } else if (sortingState === "artan") {
      setSortingState("azalan")
      setSortedColumn(title)
    } else if (sortingState === "azalan") {
      setSortingState(null)
      setSortedColumn(null)
    }
  }

  const getSortIcon = (sortingState, sortedColumn, title) => {
    if (title !== sortedColumn) {
      return <LiaSortSolid />
    }

    if (sortingState === null) {
      return <LiaSortSolid />
    } else if (sortingState === "artan") {
      return <LiaSortUpSolid />
    } else if (sortingState === "azalan") {
      return <LiaSortDownSolid />
    }
  }

  let sortedData = data
  //iki state' de null değilse sıralama yapacağız:
  if (sortingState && sortedColumn) {
    //Kullanacağımız doğru sortValue fonk. config dizisinden alıyoruz: Sağdaki ifade nesnenin tamamını döndüreceği için, bu nesneden sortValue öz. destructuring ile çekiyoruz.
    const { sortValue } = config.find(column => column.title === sortedColumn)

    sortedData = data.toSorted((a, b) => {
      const valueA = sortValue(a)
      const valueB = sortValue(b)

      const reverseOrder = sortingState === "artan" ? 1 : -1

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder
      } else {
        return (valueA - valueB) * reverseOrder
      }
    })
  }

  return {
    handleSortClick,
    getSortIcon,
    sortedData,
    sortingState,
    sortedColumn,
  }
}

export default useSort
