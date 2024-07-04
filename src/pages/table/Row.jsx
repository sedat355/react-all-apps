const Row = ({item}) => {
  return (
    <tr className="border-b-2">
      <th className="thead" scope="row">{item.name}</th>
      <td className={`tdata relative flex items-center justify-center`}>
        <span className={`colorCol ${item.color}`}></span>
      </td>
      <td className="tdata">{item.score}</td>
    </tr>
  )
}

export default Row