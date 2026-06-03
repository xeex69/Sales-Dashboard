# Sales Dashboard

A modern, interactive sales analytics dashboard built with Next.js 15, TypeScript, and Recharts. Features atomic design principles, multiple chart visualizations, and custom filtering capabilities.

## 📋 Overview

This project showcases a professional sales dashboard application with:

- **Multiple Chart Types**: Bar, Line, and Pie charts for comprehensive data visualization
- **Year-over-Year Analysis**: Compare sales data across 2022, 2023, and 2024
- **Custom Filtering**: Set sales thresholds to filter and analyze specific data points
- **Responsive Design**: Fully responsive UI that works on desktop, tablet, and mobile
- **Atomic Design Architecture**: Scalable component structure with atoms, molecules, organisms, and templates
- **Mock Data**: Realistic sales data with seasonal variations (Kaggle-inspired)
- **Statistics Dashboard**: Key metrics and performance insights at a glance

## 🏗️ Project Structure

```
src/
├── components/
│   ├── atoms/              # Basic building blocks (Button, Card, Input, Badge)
│   ├── molecules/          # Component combinations (FilterInput, ChartHeader, ChartTypeToggle)
│   ├── organisms/          # Complex components (Charts, Stats)
│   └── templates/          # Page-level layouts (DashboardTemplate)
├── data/
│   └── mockSalesData.ts    # Mock sales data for 2022-2024
├── types/
│   └── sales.ts            # TypeScript type definitions
├── app/
│   ├── page.tsx            # Home page with features overview
│   ├── layout.tsx          # Root layout
│   └── dashboard/
│       └── page.tsx        # Main dashboard page
└── globals.css             # Global Tailwind styles
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Package Manager**: npm

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup Steps

1. **Clone or extract the project**:
   ```bash
   cd sales-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   ```
   http://localhost:3000
   ```

## 🚀 Getting Started

### Home Page
Visit the home page at `http://localhost:3000` to see:
- Project overview and features
- Technology stack used
- Quick access to the dashboard
- Navigation to the full analytics interface

### Dashboard
Navigate to `http://localhost:3000/dashboard` to access:
- Sales statistics for each year
- Interactive charts with multiple visualization types
- Year selection buttons
- Custom sales threshold filtering
- Detailed data table view

## 📊 Features

### 1. Chart Visualizations
Switch between three chart types:
- **Bar Chart**: Compare sales, revenue, and transactions side by side
- **Line Chart**: Visualize sales trends over time with smooth curves
- **Pie Chart**: View monthly sales distribution

### 2. Year Selection
- Select between 2022, 2023, and 2024
- Each year has complete monthly data
- Statistics automatically update based on selection

### 3. Custom Filtering
- Set custom sales thresholds
- Filter months where sales exceed the threshold
- View filtered data in both charts and table
- Reset filter with one click

### 4. Sales Statistics
- Total Sales for the year
- Total Revenue
- Total Transactions
- Average Monthly Sales
- Peak Sales Month highlight

### 5. Data Table
- View all data in tabular format
- Columns: Month, Sales, Revenue, Transactions
- Responsive design with horizontal scrolling on mobile
- Shows filtered or full data based on filter state

## 📈 Mock Data

The project includes realistic mock sales data for three years:

```typescript
// Example: 2024 data
2024: [
  { month: 'Jan', sales: 45000, revenue: 125000, transactions: 1250 },
  { month: 'Feb', sales: 52000, revenue: 145000, transactions: 1380 },
  // ... more months
]
```

Data features:
- Seasonal variations (higher in summer and holiday seasons)
- Correlation between sales, revenue, and transactions
- Realistic growth patterns across years

## 🎨 Atomic Design Implementation

### Atoms (Basic Components)
- `Button`: Customizable button with variants (primary, secondary, outline)
- `Card`: Reusable card container with shadow and border
- `Input`: Form input with label and error support
- `Badge`: Status indicator with multiple variants

### Molecules (Component Groups)
- `FilterInput`: Combines input and button for threshold filtering
- `ChartHeader`: Title with year selection buttons
- `ChartTypeToggle`: Multi-button chart type switcher

### Organisms (Complex Components)
- `SalesBarChart`: Bar chart with sales, revenue, and transaction data
- `SalesLineChart`: Line chart showing trends
- `SalesPieChart`: Pie chart with monthly distribution
- `SalesStats`: Statistics cards and performance insights

### Templates (Layout)
- `DashboardTemplate`: Main dashboard layout with header, content, and footer

## 🔄 Component Usage

### Using the Dashboard Components
```tsx
import { SalesBarChart } from '@/components/organisms';
import { mockSalesData } from '@/data/mockSalesData';

// Get data for 2024
const data2024 = mockSalesData[0].data;

<SalesBarChart data={data2024} title="Sales Overview" />
```

### Using Atoms
```tsx
import { Button, Card, Input } from '@/components/atoms';

<Card>
  <Input label="Email" type="email" placeholder="Enter email" />
  <Button variant="primary">Submit</Button>
</Card>
```

## 🚀 Future Enhancements

### Phase 1: Core Features (Current)
- ✅ Multiple chart types
- ✅ Year selection
- ✅ Custom filtering
- ✅ Statistics dashboard

### Phase 2: Advanced Features (Planned)
- 🔄 Real API Integration
  - Fetch data from backend API instead of mock data
  - Support for dynamic year selection
  - Real-time data updates

- 📊 Additional Chart Types
  - Stacked bar charts
  - Area charts
  - Combination charts

- 📱 Export Functionality
  - Download charts as images (PNG/SVG)
  - Export data as CSV
  - Generate PDF reports

### Phase 3: Analytics & Insights
- 🔍 Advanced Filtering
  - Date range selection
  - Multiple criteria filters
  - Saved filter presets

- 📈 Predictive Analytics
  - Sales forecasting
  - Trend analysis
  - Anomaly detection

- 👤 User Features
  - Authentication & Authorization
  - Personalized dashboards
  - Saved views and reports

## 🔗 API Integration Ready

The project is designed to easily integrate with real APIs:

```typescript
// Example: Replace mock data with API calls
export async function getSalesData(year: number) {
  const response = await fetch(`/api/sales/${year}`);
  return response.json();
}
```

## 💻 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Lint code
npm run lint
```

## 📝 TypeScript Types

```typescript
interface SalesDataPoint {
  month: string;
  sales: number;
  revenue: number;
  transactions: number;
}

interface YearlyData {
  year: number;
  data: SalesDataPoint[];
}

interface ChartType {
  type: 'bar' | 'line' | 'pie';
  label: string;
}
```

## 🎯 Best Practices Implemented

1. **Atomic Design**: Scalable, reusable component structure
2. **TypeScript**: Full type safety across the application
3. **Responsive Design**: Mobile-first approach with Tailwind CSS
4. **Performance**: Optimized components with React suspense ready
5. **Clean Code**: Modular, well-organized file structure
6. **Accessibility**: Semantic HTML and ARIA labels
7. **Documentation**: Comprehensive comments and README

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms
- **Netlify**: Connect GitHub repo and auto-deploy
- **Docker**: Create Dockerfile for containerization
- **AWS**: Use Amplify or EC2 for deployment

## 📚 Learning Resources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Recharts Documentation](https://recharts.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/)

## 🤝 Contributing

This is a learning project. Feel free to:
- Add new features
- Improve the design
- Optimize performance
- Fix bugs
- Add more mock data

## 📄 License

This project is open source and available for learning and personal use.

## 👨‍💻 Author

Tushar Bhardwaj


---

**Happy coding!** 🎉

For questions or support, feel free to reach out or open an issue.
