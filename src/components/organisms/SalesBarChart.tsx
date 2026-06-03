'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card } from '@/components/atoms';
import { SalesDataPoint } from '@/types/sales';

interface SalesBarChartProps {
  data: SalesDataPoint[];
  title?: string;
}

export const SalesBarChart: React.FC<SalesBarChartProps> = ({
  data,
  title = 'Monthly Sales Overview',
}) => {
  return (
    <Card className="w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
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
          <Bar dataKey="sales" fill="#3b82f6" name="Sales" />
          <Bar dataKey="revenue" fill="#10b981" name="Revenue" />
          <Bar dataKey="transactions" fill="#f59e0b" name="Transactions" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
