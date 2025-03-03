import { useState, useEffect } from "react";
import { getMonthlyReturns } from "../../lib/calculations.js";

const TrailingReturns = () => {
  // const [returns, setReturns] = useState(null);
  const [monthlyReturns, setMonthlyReturns] = useState(null);

  useEffect(() => {
    // setReturns(calculateReturns());
    setMonthlyReturns(getMonthlyReturns());
  }, []);

  if (!monthlyReturns) return <p>Loading...</p>;

  return (
    <div className="p-2 md:p-4">
      {/* <h2 className="text-lg sm:text-xl md:text-2xl tracking-wide font-serif my-6">
        Trailing Returns
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-sm sm:text-base">NAME</th>
              {Object.keys(returns).map((head) => (
                <th
                  key={head}
                  className={`p-2 text-sm sm:text-base ${
                    head === "DD" ? "border-l" : ""
                  }`}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t mb-2 bg-gray-50 border-gray-600">
              <td className="text-center p-2 text-xs sm:text-sm">Focused</td>
              {Object.entries(returns).map(([key, value], index) => (
                <td
                  key={index}
                  className={`text-center p-2 text-xs sm:text-sm ${
                    key === "DD" ? "border-l" : "border-gray-600"
                  }`}
                >
                  {value.toFixed(2)}%
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div> */}

      <h2 className="text-lg sm:text-xl md:text-2xl tracking-wide font-serif my-6">
        Monthly Returns (Year-wise)
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-sm sm:text-base">Year</th>
              {Array.from({ length: 12 }, (_, i) => (
                <th key={i} className="p-2 text-sm sm:text-base">
                  {new Date(0, i).toLocaleString("en", { month: "short" })}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(monthlyReturns).map(([year, months]) => (
              <tr key={year} className="border-t border-gray-600 bg-gray-50">
                <td className="text-center p-2 text-xs sm:text-sm font-bold">
                  {year}
                </td>
                {Array.from({ length: 12 }, (_, i) => {
                  const monthKey = (i + 1).toString().padStart(2, "0");
                  return (
                    <td
                      key={monthKey}
                      className="text-center p-2 text-xs sm:text-sm"
                    >
                      {months[monthKey] !== undefined
                        ? `${months[monthKey].toFixed(2)}%`
                        : "-"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-400 my-2">
        Note: Returns above 1 year are annualized.
      </p>
    </div>
  );
};

export default TrailingReturns;
