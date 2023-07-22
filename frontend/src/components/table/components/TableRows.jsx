const style = {
  border: '1px solid black',
};
const TableRows = ({ data = [], columns = [] }) => {
  const rows = data.map((row, index) => {
    return (
      <tr key={`row-${index}`} className="bg-[#7DB6AA] border border-[#5A9B8D] text-white">
        {columns.map((column, index2) => {
          return (
            <td key={`cell-${index2}`} className="bg-[#7DB6AA] text-center  border border-[#5A9B8D] text-white ">
              {row[column.key]}
            </td>
          );
        })}
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default TableRows;
