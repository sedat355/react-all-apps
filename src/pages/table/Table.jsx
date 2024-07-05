import Row from "./Row"

const Table = (props) => {
  const { data, config, caption } = props;

  console.log("config", config)

  function getSortScore(obj) {
    return obj.score
  }

  const sortOrder = "asc";
  //artan sıralama için "asc", azalan sıralama için "desc"

  data.toSorted((a,b) => {
    const valueA = getSortScore(a);
    const valueB = getSortScore(b);

    const reverseOrder = sortOrder === "asc" ? 1 : -1;

    if( typeof valueA === "string" ) {
      return valueA.localeCompare(valueB) * reverseOrder;
    } else {
      return (valueA - valueB) * reverseOrder;
    }
  })

  const renderedHeaders = config.map( (column, index) => {
    return( 
      <th className={`thead text-blue-700 text-xl`} scope="col" key={index}>
        <div className={`flex items-center gap-x-1`}>
          {column.header && column.header() }
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
          data.map( item => {
            return <Row item={item} config={config} key={item.id}/>
          })
        }
      </tbody>
    </table>
  )
}

export default Table
