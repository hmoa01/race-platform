import { useEffect, useState } from 'react';

import ContestantsService from '../../services/ContentantsService';
import GenericTable from '../../components/table/GenericTable';
import moment from 'moment';

const columns = [
  {
    key: 'firstName',
    header: 'First name',
    width: 150,
  },
  {
    key: 'lastName',
    header: 'Last name',
    width: 150,
  },
  {
    key: 'username',
    header: 'Username',
    width: 150,
  },
  {
    key: 'birthDate',
    header: 'Birth date',
    width: 150,
  },
  {
    key: 'actions',
    header: 'Actions',
    width: 200,
  },
];

const Actions = ({ children }) => {
  return (
    <div className="flex space-x-4 justify-center">
      {children}
      {/* <button onClick={() => alert('edit')}>Edit</button>
      <button onClick={() => alert('delete')}>Delete</button> */}
    </div>
  );
};

const ContestantsPage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await ContestantsService.getAllContestants();
      const mappedData = response.data.map((data) => ({
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        birthDate: moment(data.birthDate).format('YYYY-MM-DD'),
        actions: (
          <Actions>
            <button onClick={() => alert('edit')}>Edit</button>
            <button onClick={() => alert('delete')}>Delete</button>
          </Actions>
        ),
      }));
      setData(mappedData);
    } catch (err) {
      err.handleGlobally();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className=" p-3 grid  place-content-center">
      <GenericTable data={data} columns={columns}></GenericTable>
    </main>
  );
};
export default ContestantsPage;
