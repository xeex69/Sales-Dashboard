'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card } from '@/components/atoms';
import { SalesDataPoint } from '@/types/sales';

interface SalesLineChartProps {
  data: SalesDataPoint[];
  title?: string;
}

export const SalesLineChart: React.FC<SalesLineChartProps> = ({
  data,
  title = 'Sales Trend Analysis',
}) => {
  return (
    <Card className="w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            formatter={(value) => `$${(value as number).toLocaleString()}`}
            contentStyle={{
              backgroundColor: '#f0f9ff',
              border: '1px solid #bfdbfe',
              borderRadius: '8px',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#3b82f6"
            name="Sales"
            strokeWidth={2}
            dot={{ fill: '#3b82f6', r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#10b981"
            name="Revenue"
            strokeWidth={2}
            dot={{ fill: '#10b981', r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
