import Button from "../../components/Button"
import useSort from "../../hooks/useSort"
import Table from "./Table"

const SortableTable = props => {
  const { config, data } = props

  const {
    handleSortClick,
    getSortIcon,
    sortedData,
    sortingState,
    sortedColumn,
  } = useSort(config, data)

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
            {getSortIcon(sortingState, sortedColumn, column.title)}
          </Button>
        )
      },
    }
  })

  return <Table {...props} data={sortedData} config={updatedConfig} />
}

export default SortableTable
