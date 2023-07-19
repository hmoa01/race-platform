import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from 'react-icons/bs';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import CreateRacePage from '../../pages/CreateRacePage/CreateRacePage';
import Modal from '../modal/Modal';
import RaceServices from '../../services/RaceServices';
import { columns } from './columns';
import { useEffect } from 'react';
import { useState } from 'react';

const BasicTable = () => {
  const [openModal, setOpenModal] = useState(false);
  const [races, setRaces] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    RaceServices.getAllRaces()
      .then((res) => {
        setRaces(res.data);
        console.log(res.data);
      })
      .catch((error) => error.handleGlobally());
  }, []);

  const data = races;
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
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
          onClick={() => setOpenModal(true)}
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
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className="bg-[#7DB6AA] p-4  border border-[#5A9B8D] text-white ">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
                <button className="bg-[#f4a812] p-4  border border-[#5A9B8D] text-white ">Edit</button>
                <button className="bg-[#f51810] p-4  border border-[#5A9B8D] text-white ">Delete</button>
              </tr>
            );
          })}
        </tbody>

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
      </table>
      <Modal open={openModal}>
        <CreateRacePage />
      </Modal>
    </main>
  );
};
export default BasicTable;
