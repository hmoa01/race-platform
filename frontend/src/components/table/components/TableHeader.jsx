const TableHeader = ({ columns = [] }) => {
  const headers = columns.map((column, index) => {
    const style = {
      width: column.width ?? 100, // 100 is our default value if width is not defined
      borderBottom: '2px solid black',
    };

    return (
      <th
        key={`headCell-${index}`}
        style={style}
        className="text-start p-4 bg-[#5A9B8D] border border-[#7DB6AA] text-white cursor-pointer hover:bg-[#44796d] transition-all duration-200"
      >
        {column.header}
      </th>
    );
  });

  return (
    <thead>
      <tr>{headers}</tr>
    </thead>
  );
};

export default TableHeader;
