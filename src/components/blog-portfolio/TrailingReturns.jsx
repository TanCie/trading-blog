import { useState, useEffect } from "react";
import { calculateReturns } from "../../lib/calculations";

const TrailingReturns = () => {
  const [returns, setReturns] = useState(null);

  useEffect(() => {
    setReturns(calculateReturns());
  }, []);

  if (!returns) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl tracking-wide font-serif my-6">
        Trailing Returns
      </h2>
      <table className="w-full mx-2 border-collapse">
        <thead>
          <tr className="">
            <th className="p-2">NAME</th>
            {Object.keys(returns).map((head) => (
              <th
                key={head}
                className={`p-2 ${head === "DD" ? "border-l" : ""} `}
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-t border-gray-600 text-center p-2">
              Focused
            </td>
            {Object.entries(returns).map(([key, value], index) => (
              <td
                key={index}
                className={`border-t text-sm text-center p-2 ${
                  key === "DD" ? "border-l" : "border-gray-600"
                } `}
              >
                {value.toFixed(2)}%
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <p className="text-xs text-gray-400 my-2">
        Note: Returns above 1 year are annualised.
      </p>
    </div>
  );
};

export default TrailingReturns;
