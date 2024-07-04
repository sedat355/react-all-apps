import Row from "./Row"

const Table = ({data, headers}) => {

  const renderedHeaders = headers.map( header => {
    return <th className="thead text-blue-700 text-xl" scope="col" key={header}>{header}</th>
  })

  return (
    <table className="border-2 border-black-two">
      <caption>
        <h1>Fruits Table</h1>
      </caption>

      <thead>
        <tr>
          {renderedHeaders}
        </tr>
      </thead>

      <tbody>
        {
          data.map( fruit => {
            return <Row fruit={fruit} key={fruit.name}/>
          })
        }
      </tbody>
    </table>
  )
}

export default Table
