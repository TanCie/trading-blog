/* eslint-disable no-unused-vars */
import navData from "../lib/navData.json";

export const sortedData = [...navData].sort((a, b) => {
  const [dayA, monthA, yearA] = a.NavDate.split("-").map(Number);
  const [dayB, monthB, yearB] = b.NavDate.split("-").map(Number);

  return new Date(yearA, monthA - 1, dayA) - new Date(yearB, monthB - 1, dayB);
});

/* export const calculateReturns = () => {
  if (!sortedData || sortedData.length === 0) return null;

  const latestPrice = sortedData[sortedData.length - 1].NavPrice;
  const firstPrice = sortedData[0].NavPrice;

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

  const returns = {
    YTD: ((latestPrice - getPriceFromDaysAgo(365)) / getPriceFromDaysAgo(365)) * 100,
    "1D": ((latestPrice - getPriceFromDaysAgo(1)) / getPriceFromDaysAgo(1)) * 100,
    "1W": ((latestPrice - getPriceFromDaysAgo(7)) / getPriceFromDaysAgo(7)) * 100,
    "1M": ((latestPrice - getPriceFromDaysAgo(30)) / getPriceFromDaysAgo(30)) * 100,
    "3M": ((latestPrice - getPriceFromDaysAgo(90)) / getPriceFromDaysAgo(90)) * 100,
    "6M": ((latestPrice - getPriceFromDaysAgo(180)) / getPriceFromDaysAgo(180)) * 100,
    "1Y": ((latestPrice - getPriceFromDaysAgo(365)) / getPriceFromDaysAgo(365)) * 100,
    "3Y": ((latestPrice - getPriceFromDaysAgo(365 * 3)) / getPriceFromDaysAgo(365 * 3)) * 100,
    SI: ((latestPrice - firstPrice) / firstPrice) * 100,
  };
  return returns;
}; */

export const processChartData = (navData) => {
  let peak = -Infinity;
  return navData.map((item, index) => {
    const nav = item.NavPrice;
    if (index === 0) peak = nav;
    peak = Math.max(peak, nav);

    return {
      date: item.NavDate,
      equity: (nav / navData[0].NavPrice) * 100,
      drawdown: ((nav - peak) / peak) * 100,
    };
  });
};

export const getMonthlyReturns = () => {
  const monthlyPrices = {};

  sortedData.forEach((item) => {
    const [day, month, year] = item.NavDate.split("-").map(Number);
    const monthYear = `${year}-${month.toString().padStart(2, "0")}`;
    monthlyPrices[monthYear] = item.NavPrice;
  });

  const monthlyEntries = Object.entries(monthlyPrices);
  const returns = {};

  for (let i = 1; i < monthlyEntries.length; i++) {
    const [prevMonth, prevPrice] = monthlyEntries[i - 1];
    const [currMonth, currPrice] = monthlyEntries[i];
    const year = currMonth.split("-")[0];

    if (!returns[year]) returns[year] = {};
    returns[year][currMonth.split("-")[1]] = ((currPrice - prevPrice) / prevPrice) * 100;
  }

  return returns;
};
