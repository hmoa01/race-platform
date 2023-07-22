import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from 'react-icons/bs';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useDispatch, useSelector } from 'react-redux';

import CreateRacePage from '../../pages/CreateRacePage/CreateRacePage';
import DeleteRacePage from '../../pages/DeleteRacePage/DeleteRacePage';
import EditRacePage from '../../pages/EditRacePage/EditRacePage';
import Modal from '../modal/Modal';
import RaceServices from '../../services/RaceServices';
import { columns } from './columns';
import { storeRaces } from '../../store/raceSlice';
import { useEffect } from 'react';
import { useState } from 'react';

const BasicTable = () => {
  const [openModal, setOpenModal] = useState(false);
  const [raceId, setRaceId] = useState('');
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();
  const { races, changes } = useSelector((state) => state.raceStore);

  useEffect(() => {
    RaceServices.getAllRaces()
      .then((res) => {
        dispatch(storeRaces(res.data));
      })
      .catch((error) => error.handleGlobally());
  }, [changes]);

  const data = races;
  const [sorting, setSorting] = useState([]);

  const handleId = (id) => {
    setRaceId(id);
    setOpenModal(true);
  };

  const filterData = (data, searchQuery) => {
    return data.filter((item) => {
      // Convert the object to an array of values
      const values = Object.values(item).flatMap((value) => {
        if (Array.isArray(value)) {
          return value.map((item) => item.toString().toLowerCase());
        }
        return value.toString().toLowerCase();
      });

      // Check if any value in the array contains the searchQuery
      return values.some((value) => value.includes(searchQuery.toLowerCase()));
    });
  };

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = filterData(data, searchQuery);
    setFilteredData(filtered);
  }, [data, searchQuery]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
    },
    onSortingChange: setSorting,
  });

  return (
    <main className=" p-3 grid  place-content-center">
      <h1 className="text-center text-2xl mb-3">Races</h1>
      <div className="flex justify-between">
        <button
          className="bg-[rgb(51,161,15)] p-4  border border-[#5A9B8D] text-white"
          onClick={() => {
            setOpenModal(true);
            setEditModal(false);
            setDeleteModal(false);
          }}
        >
          Add
        </button>

        <div className="mb-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="p-2 border rounded-md"
          />
        </div>
      </div>

      <table>
        {/* Heder of table */}
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      className="text-start p-4 bg-[#5A9B8D] border border-[#7DB6AA] text-white cursor-pointer hover:bg-[#44796d] transition-all duration-200"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div className="flex gap-3">
                        {flexRender(header.column.columnDef.header, header.getContext())}

                        <div className="mt-[3px]">
                          {
                            { asc: <BsFillArrowDownSquareFill />, desc: <BsFillArrowUpSquareFill /> }[
                              header.column.getIsSorted() ?? null
                            ]
                          }
                        </div>
                      </div>
                    </th>
                  );
                })}
                <th className=" p-4 bg-[#5A9B8D] text-center border border-[#7DB6AA] text-white cursor-pointer hover:bg-[#44796d] transition-all duration-200">
                  Actions
                </th>
              </tr>
            );
          })}
        </thead>
        {/* Body (data) of table */}
        <tbody>
          {table.getRowModel().rows.map((row) => {
            const raceId = row.original._id;
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className="bg-[#7DB6AA] p-4  border border-[#5A9B8D] text-white ">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
                <td className="bg-[#7DB6AA] border border-[#5A9B8D] text-white ">
                  <button
                    onClick={() => {
                      handleId(raceId);
                      setEditModal(true);
                    }}
                    className="bg-[#f4a812] p-4  border border-[#5A9B8D] text-white "
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleId(raceId);
                      setDeleteModal(true);
                      setEditModal(false);
                    }}
                    className="bg-[#f51810] p-4  border border-[#5A9B8D] text-white "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Pagination */}

      <div className="flex gap-4">
        <button
          className=" p-2 mt-2 border rounded-[3px] border-[#5A9B8D] hover:bg-[#7DB6AA] hover:text-white transition-all duration-300"
          onClick={() => table.setPageIndex(0)}
        >
          First Page
        </button>
        <button
          className={`p-2 mt-2 border rounded-[3px] border-[#5A9B8D] ${
            table.getCanPreviousPage()
              ? 'hover:bg-[#7DB6AA] hover:text-white transition-all duration-300'
              : 'text-slate-300 border-slate-300'
          } `}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Prev
        </button>
        <button
          className={`p-2 mt-2 border rounded-[3px] border-[#5A9B8D] ${
            table.getCanNextPage()
              ? 'hover:bg-[#7DB6AA] hover:text-white transition-all duration-300'
              : 'text-slate-300 border-slate-300'
          } `}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
        <button
          className=" p-2 mt-2 border rounded-[3px] border-[#5A9B8D] hover:bg-[#7DB6AA] hover:text-white transition-all duration-300"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          Last Page
        </button>
      </div>

      <Modal open={openModal} close={() => setOpenModal(false)} className="relative">
        {editModal && <EditRacePage id={raceId} setOpenModal={setOpenModal} />}
        {deleteModal && <DeleteRacePage id={raceId} setDeleteModal={setDeleteModal} setOpenModal={setOpenModal} />}
        {!editModal && !deleteModal && <CreateRacePage setOpenModal={setOpenModal} />}
      </Modal>
    </main>
  );
};
export default BasicTable;
