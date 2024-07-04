import Row from "./Row"

const Table = ({data, config, caption}) => {

  const renderedHeaders = config.map( (column, index) => {
    return <th className="thead text-blue-700 text-xl" scope="col" key={index}>{column.title}</th>
  })

  return (
    <table className="mb-8">
      <caption>
        <h1>{caption}</h1>
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
