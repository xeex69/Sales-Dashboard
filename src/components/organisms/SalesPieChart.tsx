'use client';

import React from 'react';
import {
  PieChart as RechartsPiChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card } from '@/components/atoms';
import { SalesDataPoint } from '@/types/sales';

interface SalesPieChartProps {
  data: SalesDataPoint[];
  title?: string;
  dataKey?: 'sales' | 'revenue' | 'transactions';
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316', '#6366f1', '#06b6d4', '#84cc16', '#d946ef'];

export const SalesPieChart: React.FC<SalesPieChartProps> = ({
  data,
  title = 'Sales Distribution',
  dataKey = 'sales',
}) => {
  // Prepare data for pie chart
  const pieData = data.map((item) => ({
    name: item.month,
    value: item[dataKey],
  }));

  return (
    <Card className="w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <RechartsPiChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={({ name, value }) => `${name}: $${(value as number).toLocaleString()}`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${(value as number).toLocaleString()}`} />
          <Legend />
        </RechartsPiChart>
      </ResponsiveContainer>
    </Card>
  );
};
