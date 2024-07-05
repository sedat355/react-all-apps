import Button from "../../components/Button"
import Table from "./Table"
import { LiaSortSolid } from "react-icons/lia"

const SortableTable = props => {
  const { config } = props

  const handleSortClick = () => {
    console.log("handleSort")
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

  return <Table {...props} config={updatedConfig} />
}

export default SortableTable
