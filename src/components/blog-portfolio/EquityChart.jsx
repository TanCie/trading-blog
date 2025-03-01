import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { processChartData } from "../../lib/calculations.js";

const EquityDrawdownChart = ({ navData }) => {
  const chartData = useMemo(() => processChartData(navData), [navData]);

  return (
    <div className="md:px-4">
      <h2 className="text-2xl tracking-wide font-serif mb-5">Equity Curve</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <XAxis stroke="#9ca3af" dataKey="date" tick={false} />
          <YAxis stroke="#9ca3af" domain={["auto", "auto"]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31,41,55,0.96)",
              borderColor: "#4b5563",
              color: "#fff",
            }}
          />
          <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
          <Line type="monotone" dataKey="equity" stroke="#22c55e" />
        </LineChart>
      </ResponsiveContainer>

      <h2 className="text-2xl tracking-wide font-serif my-5">Drawdown Chart</h2>
      <ResponsiveContainer width="100%" height={450}>
        <LineChart data={chartData}>
          <XAxis stroke="#9ca3af" dataKey="date" tick={false} />
          <YAxis stroke="#9ca3af" domain={["auto", 0]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31,41,55,0.96)",
              borderColor: "#4b5563",
              color: "#fff",
            }}
            itemStyle={{ color: "#d98181" }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Line
            type="monotone"
            dataKey="drawdown"
            stroke="#ef4444"
            fillOpacity={0.6}
            strokeWidth={1.5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EquityDrawdownChart;
