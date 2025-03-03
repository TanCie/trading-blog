import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from "recharts";
import { processChartData } from "../../lib/calculations.js";

const EquityDrawdownChart = ({ navData }) => {
  const chartData = useMemo(() => processChartData(navData), [navData]);

  return (
    <div className="md:px-4">
      <h2 className="text-2xl tracking-wide font-serif mt-3 mb-5 px-2">
        Equity & Drawdown
      </h2>
      <ResponsiveContainer
        width="100%"
        height={window.innerWidth < 768 ? 480 : 720}
      >
        <LineChart
          data={chartData.map((d) => ({
            ...d,
            scaledDrawdown: d.drawdown * 6, // Scale drawdown values
          }))}
        >
          {/* X-Axis */}
          <XAxis stroke="#9ca3af" dataKey="date" tick={false} />

          {/* Y-Axis (Responsive Tick Size) */}
          <YAxis
            stroke="#9ca3af"
            domain={[-250, 500]} // Adjust domain for scaled drawdown
            ticks={[-200, -150, -100, -50, 0, 50, 100, 200, 300, 400, 500, 600]}
            tick={{ fontSize: window.innerWidth < 768 ? 10 : 14 }}
          />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31,41,55,0.96)",
              borderColor: "#4b5563",
              color: "#fff",
            }}
            itemSorter={(item) => (item.dataKey === "equity" ? 1 : -1)}
          />

          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />

          {/* Equity Line (Green, Above 0) */}
          <Line
            type="monotone"
            dataKey="equity"
            stroke="#22c55e"
            strokeWidth={window.innerWidth < 768 ? 1.2 : 1.8}
          />

          {/* Scaled Drawdown Line (Red, Below 0) */}
          <Line
            type="monotone"
            dataKey="scaledDrawdown"
            stroke="#ef4444"
            strokeWidth={window.innerWidth < 768 ? 1 : 1.5}
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="scaledDrawdown"
            fill="rgba(239, 68, 68, 0.3)"
            stroke="none"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EquityDrawdownChart;
