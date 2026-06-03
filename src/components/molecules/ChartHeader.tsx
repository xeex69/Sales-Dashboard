'use client';

import React from 'react';
import { Button } from '@/components/atoms';

interface ChartHeaderProps {
  title: string;
  year: number;
  onYearChange: (year: number) => void;
  availableYears: number[];
}

export const ChartHeader: React.FC<ChartHeaderProps> = ({
  title,
  year,
  onYearChange,
  availableYears,
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <div className="flex gap-2">
        {availableYears.map((y) => (
          <Button
            key={y}
            variant={year === y ? 'primary' : 'outline'}
            size="sm"
            onClick={() => onYearChange(y)}
          >
            {y}
          </Button>
        ))}
      </div>
    </div>
  );
};
