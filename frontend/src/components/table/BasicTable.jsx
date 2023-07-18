import { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';
import mData from '../../../MOCK_DATA.json';
import { useMemo } from 'react';
import { DateTime } from 'luxon';
import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from 'react-icons/bs';

const BasicTable = () => {
  const data = useMemo(() => mData, []);
  const [sorting, setSorting] = useState([]);

  const columns = [
    {
      header: 'ID',
      accessorKey: 'id',
      footer: 'ID',
    },
    {
      header: 'Name',
      accessorKey: 'name',
      footer: 'Name',
    },
    {
      header: 'Date Of Race',
      accessorKey: 'dateOfRace',
      footer: 'Date Of Race',
      cell: (info) => DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
    },
    {
      header: 'Location',
      accessorKey: 'location',
      footer: 'Location',
    },
    {
      header: 'Description',
      accessorKey: 'description',
      footer: 'Description',
    },
    {
      header: 'Start Time',
      accessorKey: 'startTime',
      footer: 'Start Time',
    },
    {
      header: 'End Time',
      accessorKey: 'endTime',
      footer: 'End Time',
    },
    {
      header: 'Welcome Package',
      accessorKey: 'welcomePackage',
      footer: 'Welcome Package',
    },
  ];

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
      <h1 className="text-center text-2xl mb-3">Race calendar</h1>
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
    </main>
  );
};
export default BasicTable;
