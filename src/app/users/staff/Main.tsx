"use client";

import { ExpandMoreIcon, SearchIcon } from "@/components/icons/icons";
import Select from "@/utils/Select";
import { useEffect, useRef, useState } from "react";
import { setIsOpen } from "@/redux/features/dialogSlice";
import { useDispatch } from "react-redux";

const MainStaff = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false); 
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const listUsers1 = Array.from({ length: 10 }, (_, index) => ({
    name: `demo${index}`,
    position: "UX/UI",
    status: "active",
  }));
  
  
  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedRows((listUsers1||[])?.map((_, index) => index));
    } else {
      setSelectedRows([]); 
    }
  };
  const toggleRow = (index: number) => {
    if (selectedRows?.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const columns = ["NAME", "POSITION", "STATUS", "ACTION"];
  return (
    <div className="py-2 ">
      <div className="relative overflow-x-auto">
        <div className="flex-column dark:bg-gray-900 flex flex-wrap items-center justify-between space-y-4 bg-white px-2 pb-4 dark:bg-meta-4 md:flex-row md:space-y-0">
        <Select/>
          <div className="relative">
            <div className="rtl:inset-r-0 pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <SearchIcon size={20} />
            </div>
            <input
              type="text"
              id="table-search-users"
              className="text-gray-900 border-gray-300 bg-gray-50 dark:bg-form-input dark:border-gray-600  dark:placeholder-gray-400 block w-80 rounded-md border p-2 ps-10 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
      </div>
      <div className="overflow-auto">
        <table className="text-gray-500 dark:text-gray-400 w-full overflow-x-auto text-left text-sm rtl:text-right">
          <thead className="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-xs uppercase">
            <tr className="border-b border-gray bg-gray-2 text-left dark:bg-meta-4">
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded text-blue-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                    checked={selectAll}
                onChange={toggleSelectAll}
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              {columns?.map((column) => (
                <th key={column} scope="col" className="px-6 py-3">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {listUsers1.map((row, index) => (
              <tr
                key={index}
                className="dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 border-b border-gray bg-white hover:bg-gray-2 dark:border-gray dark:bg-meta-4"
              >
                <td className="w-4 px-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded text-blue-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                      checked={selectedRows.includes(index)}
                      onChange={() => toggleRow(index)}
                      />
                    <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">
                  checkbox
                </label>
                  </div>
                </td>
                <td
                  scope="row"
                  className="text-gray-900 flex items-center whitespace-nowrap px-6 py-4 dark:text-white"
                >
                  <p className="text-base font-semibold">{row.name}</p>
                </td>
                <td className="px-6 py-4">{row.position}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="me-2 h-2.5 w-2.5 rounded-full bg-green-500"></div>
                    {row.status}
                  </div>
                </td>
                <td className="px-6 py-4"><button  onClick={() =>
                  dispatch(setIsOpen({ isOpen: true, status: "addUser" }))
                }>edit</button> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MainStaff;
