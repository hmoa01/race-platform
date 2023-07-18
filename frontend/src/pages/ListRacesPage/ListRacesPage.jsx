import BasicTable from '../../components/table/BasicTable';

const ListRacesPage = () => {
  // const [races, setRaces] = useState([]);

  // useEffect(() => {
  //   RaceServices.getAllRaces()
  //     .then((res) => {
  //       setRaces(res.data);
  //     })
  //     .catch((error) => error.handleGlobally());
  // }, []);

  return (
    <>
      <BasicTable />
    </>
  );
};

export default ListRacesPage;
