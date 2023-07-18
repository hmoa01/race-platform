import CreateRacePage from '../CreateRacePage/CreateRacePage';
import ListRacesPage from '../ListRacesPage/ListRacesPage';
import { useState } from 'react';

const RacePage = () => {
  const [createRace, setCreateRace] = useState(true);
  const [listRaces, setListRaces] = useState(false);

  const handleCreateRace = () => {
    setCreateRace(!createRace);
    setListRaces(!listRaces);
  };

  const handleListRaces = () => {
    setListRaces(!listRaces);
    setCreateRace(!createRace);
  };

  return (
    <div className="flex flex-col relative items-center pt-3 px-6">
      <div className="border border-black h-[50px] w-[100%] flex items-center px-4">
        <button onClick={handleCreateRace} type="button">
          CREATE RACE
        </button>
        <button onClick={handleListRaces} type="button" className="pl-4">
          LIST RACES
        </button>
      </div>
      <div className="border border-black  w-[100%] flex justify-center">
        {createRace ? <CreateRacePage /> : null}
        {listRaces ? <ListRacesPage /> : null}
      </div>
    </div>
  );
};
export default RacePage;
