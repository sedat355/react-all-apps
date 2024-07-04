import { useState } from "react"
import Button from "../../components/Button"
import Row from "./Row"
import { LiaSortSolid } from 'react-icons/lia'

const Table = ({data, config, caption}) => {
  const [ usedData, setUsedData ] = useState(data)
  const [ isSorted, setIsSorted ] = useState(false)

  console.log(data)

  function getSortScore(obj) {
    return obj.score
  }

  const handleSort = () => {
    setIsSorted(!isSorted)

    let sortedData = data.toSorted((a,b) => {
      const valueA = getSortScore(a);
      const valueB = getSortScore(b);
      return valueA - valueB;
    })
    
    if(isSorted) {
      setUsedData(sortedData)
    } else {
      setUsedData(data)
    }
  }

  const renderedHeaders = config.map( (column, index) => {
    return( 
      <th className={`thead text-blue-700 text-xl`} scope="col" key={index}>
        <div className={`flex items-center gap-x-1`}>
          {column.title === 'Score' && <Button handleClick={handleSort} btnType="outline" size="circle-lg" className="border-none py-0 px-0 "><LiaSortSolid/></Button> }
          {column.title}
        </div>
      </th>
    )
  })

  return (
    <table className="mb-8">
      <caption>
        <h1 className="text-left">{caption}</h1>
      </caption>

      <thead>
        <tr className="border-b-2 border-sky-400">
          {renderedHeaders}
        </tr>
      </thead>

      <tbody>
        {
          usedData.map( item => {
            return <Row item={item} config={config} key={item.id}/>
          })
        }
      </tbody>
    </table>
  )
}

export default Table
