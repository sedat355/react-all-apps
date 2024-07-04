import Row from "./Row"

const Table = ({data, headers, caption}) => {

  const renderedHeaders = headers.map( header => {
    return <th className="thead text-blue-700 text-xl" scope="col" key={header}>{header}</th>
  })

  return (
    <table className="">
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
            return <Row item={item} key={item.id}/>
          })
        }
      </tbody>
    </table>
  )
}

export default Table
