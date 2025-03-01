import navData from "../lib/navData.json";

export const sortedData = [...navData].sort((a, b) => {
  const [dayA, monthA, yearA] = a.NavDate.split("-").map(Number);
  const [dayB, monthB, yearB] = b.NavDate.split("-").map(Number);

  return new Date(yearA, monthA - 1, dayA) - new Date(yearB, monthB - 1, dayB);
});

export const calculateReturns = () => {
  if (!sortedData || sortedData.length === 0) return null;

  const latestPrice = sortedData[sortedData.length - 1].NavPrice;
  const firstPrice = sortedData[0].NavPrice;

  // Function to find price from a specific number of days ago
  const getPriceFromDaysAgo = (daysAgo) => {
    const targetDate = new Date(
      sortedData[sortedData.length - 1].NavDate.split("-").reverse().join("-")
    );
    targetDate.setDate(targetDate.getDate() - daysAgo);

    const found = [...sortedData]
      .reverse()
      .find(
        (item) =>
          new Date(item.NavDate.split("-").reverse().join("-")) <= targetDate
      );

    return found ? found.NavPrice : null;
  };

  // Calculate returns
  const returns = {
    YTD:
      ((latestPrice - getPriceFromDaysAgo(365)) / getPriceFromDaysAgo(365)) *
      100,
    "1D":
      ((latestPrice - getPriceFromDaysAgo(1)) / getPriceFromDaysAgo(1)) * 100,
    "1W":
      ((latestPrice - getPriceFromDaysAgo(7)) / getPriceFromDaysAgo(7)) * 100,
    "1M":
      ((latestPrice - getPriceFromDaysAgo(30)) / getPriceFromDaysAgo(30)) * 100,
    "3M":
      ((latestPrice - getPriceFromDaysAgo(90)) / getPriceFromDaysAgo(90)) * 100,
    "6M":
      ((latestPrice - getPriceFromDaysAgo(180)) / getPriceFromDaysAgo(180)) *
      100,
    "1Y":
      ((latestPrice - getPriceFromDaysAgo(365)) / getPriceFromDaysAgo(365)) *
      100,
    "3Y":
      ((latestPrice - getPriceFromDaysAgo(365 * 3)) /
        getPriceFromDaysAgo(365 * 3)) *
      100,
    SI: ((latestPrice - firstPrice) / firstPrice) * 100,
  };

  // Calculate drawdowns
  let peak = -Infinity;
  let maxDD = 0;
  const drawdowns = sortedData.map((item) => {
    peak = Math.max(peak, item.NavPrice);
    const dd = ((item.NavPrice - peak) / peak) * 100;
    maxDD = Math.min(maxDD, dd);
    return dd;
  });

  returns.DD = drawdowns[drawdowns.length - 1]; // Latest drawdown
  returns.MaxDD = maxDD; // Max historical drawdown

  return returns;
};

export const processChartData = (navData) => {
  let peak = -Infinity;
  return navData.map((item, index) => {
    const nav = item.NavPrice;
    if (index === 0) peak = nav; // First value is the starting peak
    peak = Math.max(peak, nav);

    return {
      date: item.NavDate,
      equity: (nav / navData[0].NavPrice) * 100, // Normalize NAV to start from 100
      drawdown: ((nav - peak) / peak) * 100, // Drawdown as percentage
    };
  });
};



// const getMonthlyPrices = (data) => {
//   const monthlyPrices = {};

//   data.forEach((item) => {
//     const [day, month, year] = item.NavDate.split("-").map(Number);
//     const monthYear = `${year}-${month.toString().padStart(2, "0")}`;

//     monthlyPrices[monthYear] = item.NavPrice;
//   });
//   return Object.entries(monthlyPrices).map(([monthYear, price]) => ({
//     monthYear, price
//   }));
// };

// const monthlyData = getMonthlyPrices(sortedData);

// const getMonthlyReturns = (monthlyData) => {
//   const returns = [];

//   for (let i = 1; i < monthlyData.length; i++) {
//     const prev = monthlyData[i - 1];
//     const current = monthlyData[i];

//     const returnPercent = ((current.price - prev.price) / prev.price) * 100;

//     returns.push({
//       monthYear: current.monthYear,
//       return: returnPercent.toFixed(2)
//     });
//   }
//   return returns;
// }

// export const monthlyReturns = getMonthlyReturns(monthlyData);

// // DRAWDOWN DATA
// const getDrawdowns = (data) => {
//   let peak = -Infinity;
//   const drawdowns = [];

//   data.forEach((item) => {
//     peak = Math.max(peak, item.NavPrice);
//     const drawdownPercent = ((item.NavPrice - peak) / peak) * 100;

//     drawdowns.push({
//       date: item.NavDate,
//       drawdown: drawdownPercent.toFixed(2)
//     });
//   })
//   return drawdowns;
// }

// export const drawdowns = getDrawdowns(sortedData);
