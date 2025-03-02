import { parse } from "date-fns";
import { useState } from "react";
import { lazy } from "react";

import DateFilter from "../components/blog-portfolio/FilterByDate";
import TrailingReturns from "../components/blog-portfolio/TrailingReturns";

import { sortedData } from "../lib/calculations.js";

const EquityDrawdownChart = lazy(() =>
  import("../components/blog-portfolio/EquityChart")
);

const Portfolio = () => {
  const [filteredData, setFilteredData] = useState(sortedData);

  const handleFilter = (fromDate, toDate) => {
    const from = fromDate.getTime();
    const to = toDate.getTime();

    const filtered = sortedData.filter((item) => {
      const itemDate = parse(item.NavDate, "dd-MM-yyyy", new Date()).getTime();
      return itemDate >= from && itemDate <= to;
    });

    setFilteredData(filtered);
  };

  return (
    <div className="flex-1 overflow-auto min-h-screen">
      <div className="w-[96%] lg:w-[86%] bg-white mx-auto pr-2">
        <TrailingReturns />
        {/* Add Date Filter Component */}
        <DateFilter onFilter={handleFilter} />
        {/* Pass Filtered Data to Components */}
        <EquityDrawdownChart navData={filteredData} />
      </div>
    </div>
  );
};

export default Portfolio;
