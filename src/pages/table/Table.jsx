import Row from "./Row"

const Table = (props) => {
  const { data, config, caption } = props;

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
