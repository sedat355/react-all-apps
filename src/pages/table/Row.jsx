const Row = ({fruit}) => {
  return (
    <tr>
      <th className="thead" scope="row">{fruit.name}</th>
      <td className={`tdata relative`}>
        <span className={`colorCol ${fruit.color}`}></span>
      </td>
      <td className="tdata">{fruit.score}</td>
    </tr>
  )
}

export default Row