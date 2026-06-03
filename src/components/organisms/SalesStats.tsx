'use client';

import React, { useState } from 'react';
import { Card, Badge } from '@/components/atoms';
import { SalesDataPoint } from '@/types/sales';

interface SalesStatsProps {
  data: SalesDataPoint[];
  year: number;
}

export const SalesStats: React.FC<SalesStatsProps> = ({ data, year }) => {
  const totalSales = data.reduce((sum, item) => sum + item.sales, 0);
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
  const totalTransactions = data.reduce((sum, item) => sum + item.transactions, 0);
  const averageMonthlySales = Math.round(totalSales / data.length);
  const maxSalesMonth = data.reduce((max, item) => (item.sales > max.sales ? item : max));

  const stats = [
    { label: 'Total Sales', value: `$${totalSales.toLocaleString()}`, variant: 'default' as const },
    { label: 'Total Revenue', value: `$${totalRevenue.toLocaleString()}`, variant: 'success' as const },
    { label: 'Total Transactions', value: totalTransactions.toLocaleString(), variant: 'warning' as const },
    { label: 'Average Monthly Sales', value: `$${averageMonthlySales.toLocaleString()}`, variant: 'default' as const },
  ];

  return (
    <>
      <Card className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Sales Statistics for {year}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Insights</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Peak Sales Month:</span>
            <Badge variant="success">
              {maxSalesMonth.month} - ${maxSalesMonth.sales.toLocaleString()}
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Year-over-Year:</span>
            <Badge variant="default">Data for {year}</Badge>
          </div>
        </div>
      </Card>
    </>
  );
};
