import React, { useEffect, useState } from 'react';

import RaceServices from '../../services/RaceServices';

const ListRacesPage = () => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    RaceServices.getAllRaces()
      .then((res) => {
        setRaces(res.data);
      })
      .catch((error) => error.handleGlobally());
  }, []);

  return (
    <div>
      {races.map((race, index) => (
        <h1 key={index}>{race.name}</h1>
      ))}
    </div>
  );
};

export default ListRacesPage;
