import Row from "./Row"

const Table = () => {
  return (
    <table className="border-2 border-black-two">
      <caption>
        <h1>Fruits Table</h1>
      </caption>

      <thead>
        <tr>
          <th scope="col" className="thead">
            Fruits
          </th>
          <th scope="col" className="thead">
            Color
          </th>
          <th scope="col" className="thead">
            Score
          </th>
        </tr>
      </thead>

      <tbody>
        <Row />
        <Row />
        <Row />
      </tbody>
    </table>
  )
}

export default Table
