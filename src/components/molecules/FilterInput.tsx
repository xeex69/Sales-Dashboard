'use client';

import React from 'react';
import { Input, Button } from '@/components/atoms';

interface FilterInputProps {
  value: number;
  onChange: (value: number) => void;
  onApply: () => void;
  placeholder?: string;
}

export const FilterInput: React.FC<FilterInputProps> = ({
  value,
  onChange,
  onApply,
  placeholder = 'Enter sales threshold...',
}) => {
  return (
    <div className="flex gap-3 items-end">
      <div className="flex-1">
        <Input
          type="number"
          label="Sales Threshold"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          placeholder={placeholder}
        />
      </div>
      <Button size="md" onClick={onApply}>
        Apply Filter
      </Button>
    </div>
  );
};
