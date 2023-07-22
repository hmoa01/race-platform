import TableHeader from './components/tableHeader';
import TableRows from './components/TableRows';

const style = {
  borderCollapse: 'collapse',
};

const GenericTable = ({ data, columns }) => {
  return (
    <table style={style}>
      <TableHeader columns={columns} />
      <TableRows data={data} columns={columns} />
    </table>
  );
};

export default GenericTable;
