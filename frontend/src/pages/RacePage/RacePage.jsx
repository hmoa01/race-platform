import CreateRacePage from '../CreateRacePage/CreateRacePage';

const RacePage = () => {
  return (
    <div className="flex flex-col relative items-center pt-3 px-6">
      <div className="border border-black h-[50px] w-[100%] flex items-center px-4">
        <button type="button">CREATE RACE</button>
        <button type="button" className="pl-4">
          LIST RACES
        </button>
      </div>
      <div className="border border-black  w-[100%] flex justify-center">
        <CreateRacePage />
      </div>
    </div>
  );
};
export default RacePage;
