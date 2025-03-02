import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterByDate = ({ onFilter }) => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleFilter = () => {
    if (fromDate && toDate) {
      onFilter(fromDate, toDate);
    }
  };

  return (
    <div className="flex items-center justify-end">
      <div className="flex flex-col md:flex-row items-center md:items-end space-x-4 mt-6">
        <div>
          <label className="block text-sm text-gray-800 font-medium">
            From Date
          </label>
          <DatePicker
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
            dateFormat="dd-MM-yyyy"
            className="border border-gray-300 text-gray-700 ml-1 md:p-1 rounded"
          />
        </div>
        <div>
          <label className="block text-sm mt-2 md:mt-0 text-gray-800 font-medium">
            To Date
          </label>
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            dateFormat="dd-MM-yyyy"
            className="border border-gray-300 text-gray-700 ml-1 md:p-1 rounded"
          />
        </div>
        <button
          onClick={handleFilter}
          className="bg-green-500 my-2 mr-2 md:mt-0 cursor-pointer text-sm text-white font-semibold px-4 py-1 rounded"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterByDate;
