export interface SalesDataPoint {
  month: string;
  sales: number;
  revenue: number;
  transactions: number;
}

export interface YearlyData {
  year: number;
  data: SalesDataPoint[];
}

export interface ChartType {
  type: 'bar' | 'line' | 'pie';
  label: string;
}
