const Row = ({ item, config }) => {
  return (
    <tr className="border-b-2">
      {config.map((column, index) => {
        return <td key={index} className="tdata">
          <div className="flex items-center justify-center">
            {column.render(item)}
          </div>
        </td>
      })}
    </tr>
  )
}

export default Row

{
  /* <th className="thead" scope="row">
{config[0].render(item)}
</th>
<td className={`tdata relative flex items-center justify-center`}>
<span className={`colorCol ${config[1].render(item)}`}></span>
</td>
<td className="tdata">{config[2].render(item)}</td> */
}
