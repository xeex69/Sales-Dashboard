'use client';

import React from 'react';
import { ChartType } from '@/types/sales';
import { Button } from '@/components/atoms';
import { BarChart3, LineChart, PieChart } from 'lucide-react';

interface ChartTypeToggleProps {
  activeType: ChartType['type'];
  onTypeChange: (type: ChartType['type']) => void;
}

const chartTypes: { type: ChartType['type']; label: string; icon: React.ReactNode }[] = [
  { type: 'bar', label: 'Bar Chart', icon: <BarChart3 size={18} /> },
  { type: 'line', label: 'Line Chart', icon: <LineChart size={18} /> },
  { type: 'pie', label: 'Pie Chart', icon: <PieChart size={18} /> },
];

export const ChartTypeToggle: React.FC<ChartTypeToggleProps> = ({
  activeType,
  onTypeChange,
}) => {
  return (
    <div className="flex gap-2 mb-6">
      {chartTypes.map(({ type, label, icon }) => (
        <Button
          key={type}
          variant={activeType === type ? 'primary' : 'outline'}
          size="sm"
          onClick={() => onTypeChange(type)}
          className="flex items-center gap-2"
        >
          {icon}
          {label}
        </Button>
      ))}
    </div>
  );
};
