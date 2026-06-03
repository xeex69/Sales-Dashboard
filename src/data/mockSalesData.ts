import type { YearlyData, SalesDataPoint } from '@/types/sales';

// Mock sales data inspired by Kaggle datasets
// Generated data represents realistic sales patterns with seasonal variations

export const mockSalesData: YearlyData[] = [
  {
    year: 2024,
    data: [
      { month: 'Jan', sales: 45000, revenue: 125000, transactions: 1250 },
      { month: 'Feb', sales: 52000, revenue: 145000, transactions: 1380 },
      { month: 'Mar', sales: 48000, revenue: 135000, transactions: 1320 },
      { month: 'Apr', sales: 61000, revenue: 170000, transactions: 1520 },
      { month: 'May', sales: 55000, revenue: 155000, transactions: 1450 },
      { month: 'Jun', sales: 67000, revenue: 185000, transactions: 1650 },
      { month: 'Jul', sales: 72000, revenue: 205000, transactions: 1750 },
      { month: 'Aug', sales: 69000, revenue: 195000, transactions: 1680 },
      { month: 'Sep', sales: 58000, revenue: 165000, transactions: 1550 },
      { month: 'Oct', sales: 64000, revenue: 180000, transactions: 1620 },
      { month: 'Nov', sales: 78000, revenue: 220000, transactions: 1850 },
      { month: 'Dec', sales: 85000, revenue: 240000, transactions: 1950 },
    ],
  },
  {
    year: 2023,
    data: [
      { month: 'Jan', sales: 38000, revenue: 105000, transactions: 1100 },
      { month: 'Feb', sales: 41000, revenue: 115000, transactions: 1150 },
      { month: 'Mar', sales: 39000, revenue: 110000, transactions: 1120 },
      { month: 'Apr', sales: 48000, revenue: 135000, transactions: 1350 },
      { month: 'May', sales: 44000, revenue: 125000, transactions: 1280 },
      { month: 'Jun', sales: 52000, revenue: 150000, transactions: 1450 },
      { month: 'Jul', sales: 58000, revenue: 165000, transactions: 1550 },
      { month: 'Aug', sales: 55000, revenue: 160000, transactions: 1520 },
      { month: 'Sep', sales: 47000, revenue: 135000, transactions: 1350 },
      { month: 'Oct', sales: 51000, revenue: 145000, transactions: 1420 },
      { month: 'Nov', sales: 62000, revenue: 180000, transactions: 1680 },
      { month: 'Dec', sales: 68000, revenue: 195000, transactions: 1780 },
    ],
  },
  {
    year: 2022,
    data: [
      { month: 'Jan', sales: 32000, revenue: 90000, transactions: 950 },
      { month: 'Feb', sales: 35000, revenue: 98000, transactions: 1000 },
      { month: 'Mar', sales: 33000, revenue: 92000, transactions: 970 },
      { month: 'Apr', sales: 40000, revenue: 115000, transactions: 1200 },
      { month: 'May', sales: 37000, revenue: 105000, transactions: 1100 },
      { month: 'Jun', sales: 44000, revenue: 125000, transactions: 1300 },
      { month: 'Jul', sales: 49000, revenue: 140000, transactions: 1400 },
      { month: 'Aug', sales: 46000, revenue: 135000, transactions: 1350 },
      { month: 'Sep', sales: 40000, revenue: 115000, transactions: 1200 },
      { month: 'Oct', sales: 43000, revenue: 125000, transactions: 1280 },
      { month: 'Nov', sales: 52000, revenue: 150000, transactions: 1500 },
      { month: 'Dec', sales: 58000, revenue: 165000, transactions: 1600 },
    ],
  },
];

export const getDataByYear = (year: number) => {
  return mockSalesData.find((yearData) => yearData.year === year)?.data || [];
};

export const getAllYears = () => {
  return mockSalesData.map((yearData) => yearData.year);
};

// Utility function to filter data by threshold
export const filterByThreshold = (data: SalesDataPoint[], threshold: number) => {
  return data.filter((item) => item.sales >= threshold);
};
