import RaceServices from '../../services/RaceServices';
import React from 'react';
import { tableChanges } from '../../store/raceSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const DeleteRacePage = ({ id, setOpenModal, setDeleteModal }) => {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    let res = await RaceServices.deleteRace(id);
    if (res.status === 200) {
      toast.success('Race is deleted!!');
      dispatch(tableChanges());
      setOpenModal(false);
    } else {
      toast.warning('Something went wrong!');
    }
  };

  return (
    <div className="flex flex-col bg-[#5A9B8D] justify-center text-center h-[300px] pt-7">
      <h1 className="text-2xl">Are you sure you want to delete?</h1>
      <div className="flex justify-center text-center pt-14 pb-5 gap-2">
        <button className="bg-[#06971e] p-2  border border-[#5A9B8D] text-white" onClick={() => handleDelete()}>
          Delete
        </button>
        <button
          className="bg-[#939509] p-4  border border-[#5A9B8D] text-white"
          onClick={() => {
            setOpenModal(false);
            setDeleteModal(false);
          }}
        >
          {' '}
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteRacePage;
