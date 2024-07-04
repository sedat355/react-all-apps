const Row = ({item}) => {
  return (
    <tr>
      <th className="thead" scope="row">{item.name}</th>
      <td className={`tdata relative`}>
        <span className={`colorCol ${item.color}`}></span>
      </td>
      <td className="tdata">{item.score}</td>
    </tr>
  )
}

export default Row