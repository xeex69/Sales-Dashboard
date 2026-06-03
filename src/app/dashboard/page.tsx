'use client';

import React, { useState, useMemo } from 'react';
import { DashboardTemplate } from '@/components/templates';
import {
  SalesBarChart,
  SalesLineChart,
  SalesPieChart,
  SalesStats,
} from '@/components/organisms';
import { ChartHeader, FilterInput, ChartTypeToggle } from '@/components/molecules';
import { mockSalesData, getDataByYear, getAllYears, filterByThreshold } from '@/data/mockSalesData';
import { ChartType } from '@/types/sales';

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [chartType, setChartType] = useState<ChartType['type']>('bar');
  const [filterThreshold, setFilterThreshold] = useState<number>(0);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  const availableYears = getAllYears();
  const yearData = getDataByYear(selectedYear);

  // Get data to display (filtered or full)
  const displayData = isFiltered && filteredData.length > 0 ? filteredData : yearData;

  // Handle filter apply
  const handleApplyFilter = () => {
    if (filterThreshold > 0) {
      const filtered = filterByThreshold(yearData, filterThreshold);
      setFilteredData(filtered);
      setIsFiltered(true);
    }
  };

  // Handle reset filter
  const handleResetFilter = () => {
    setFilterThreshold(0);
    setFilteredData([]);
    setIsFiltered(false);
  };

  // Render chart based on selected type
  const renderChart = () => {
    const chartProps = {
      data: displayData,
      title: `Sales Dashboard - ${selectedYear}${isFiltered ? ` (Filtered)` : ''}`,
    };

    switch (chartType) {
      case 'bar':
        return <SalesBarChart {...chartProps} />;
      case 'line':
        return <SalesLineChart {...chartProps} />;
      case 'pie':
        return <SalesPieChart {...chartProps} />;
      default:
        return <SalesBarChart {...chartProps} />;
    }
  };

  return (
    <DashboardTemplate
      title="Sales Dashboard"
      description="Analyze your sales performance across 2022, 2023, and 2024"
    >
      {/* Year Header */}
      <ChartHeader
        title="Sales Analysis"
        year={selectedYear}
        onYearChange={setSelectedYear}
        availableYears={availableYears}
      />

      {/* Statistics */}
      <SalesStats data={yearData} year={selectedYear} />

      {/* Chart Type Toggle */}
      <div className="mt-8 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Chart Visualization</h3>
        <ChartTypeToggle activeType={chartType} onTypeChange={setChartType} />
      </div>

      {/* Main Chart */}
      {renderChart()}

      {/* Filter Section */}
      <div className="mt-8 bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Custom Filter</h3>
        <p className="text-gray-600 mb-4">
          Filter months where sales are above your selected threshold
        </p>
        <div className="space-y-4">
          <FilterInput
            value={filterThreshold}
            onChange={setFilterThreshold}
            onApply={handleApplyFilter}
            placeholder="e.g., 50000"
          />
          {isFiltered && (
            <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-4">
              <span className="text-blue-800">
                Showing {filteredData.length} of {yearData.length} months (threshold: $
                {filterThreshold.toLocaleString()})
              </span>
              <button
                onClick={handleResetFilter}
                className="text-blue-600 hover:text-blue-800 font-medium underline"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Data Table */}
      <div className="mt-8 bg-white rounded-lg shadow-md border border-gray-200 p-6 overflow-x-auto">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Detailed Data</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Month</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">Sales</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">Revenue</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">Transactions</th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((row, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-800">{row.month}</td>
                <td className="py-3 px-4 text-right text-gray-800">
                  ${row.sales.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-right text-gray-800">
                  ${row.revenue.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-right text-gray-800">
                  {row.transactions.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardTemplate>
  );
}
