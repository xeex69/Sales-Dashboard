# Quick Start Guide

## 🚀 Get Started in 3 Minutes

### 1. Start the Development Server
```bash
cd "/Users/tusharr/Desktop/frontend intern/sales-dashboard"
npm run dev
```

### 2. Open in Browser
```
http://localhost:3000
```

### 3. Explore the Application

**Home Page** (`http://localhost:3000`)
- Overview of the project
- Feature highlights
- Technology stack
- Link to dashboard

**Dashboard** (`http://localhost:3000/dashboard`)
- Interactive sales charts
- Year selection (2022, 2023, 2024)
- Chart type switching (Bar, Line, Pie)
- Custom sales filtering
- Detailed statistics
- Data table view

---

## 📊 Features at a Glance

### Try These Actions:

1. **Switch Chart Types**
   - Click Bar Chart, Line Chart, or Pie Chart buttons
   - Data visualization updates instantly

2. **Change Years**
   - Click 2022, 2023, or 2024 buttons
   - Statistics update automatically
   - Charts reflect new year's data

3. **Filter by Sales Threshold**
   - Enter a sales amount (e.g., 50000)
   - Click "Apply Filter"
   - View only months above threshold
   - Click "Reset Filter" to show all months

4. **View Detailed Data**
   - Scroll to the data table at the bottom
   - See exact sales, revenue, and transaction numbers
   - Table updates with filters applied

---

## 🛠️ Project Components

### Component Hierarchy

```
atoms (Button, Card, Input, Badge)
    ↓
molecules (FilterInput, ChartHeader, ChartTypeToggle)
    ↓
organisms (Charts, Statistics)
    ↓
templates (Dashboard Layout)
    ↓
pages (Home, Dashboard)
```

### Key Files to Explore

| Location | Purpose |
|----------|---------|
| `src/app/page.tsx` | Home page |
| `src/app/dashboard/page.tsx` | Main dashboard |
| `src/components/organisms/` | Large components (Charts) |
| `src/components/molecules/` | Reusable UI patterns |
| `src/components/atoms/` | Basic UI elements |
| `src/data/mockSalesData.ts` | Sample data |
| `src/types/sales.ts` | TypeScript types |

---

## 💡 Tips for Customization

### Change Dashboard Title
Edit `src/app/dashboard/page.tsx`:
```tsx
<DashboardTemplate
  title="Your Custom Title"
  description="Your description"
>
```

### Modify Colors
Edit `src/components/organisms/` chart files or update Tailwind classes

### Add More Years
Edit `src/data/mockSalesData.ts` and add new year data

### Change Chart Colors
Update color values in:
- `src/components/organisms/SalesBarChart.tsx`
- `src/components/organisms/SalesLineChart.tsx`
- `src/components/organisms/SalesPieChart.tsx`

---

## 📚 Available Commands

```bash
# Development
npm run dev           # Start dev server

# Production
npm run build         # Build for production
npm start            # Run production build

# Linting
npm run lint         # Check for issues

# Clean
rm -rf .next         # Clear Next.js cache
```

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Dependencies Issues
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

---

## 🎯 What's Next?

1. **Customize the data** - Replace mock data with your own
2. **Add more charts** - Create new chart components
3. **Implement API** - Connect to a real backend
4. **Deploy** - Push to Vercel, Netlify, or AWS
5. **Add theming** - Implement light/dark mode
6. **User authentication** - Add login functionality

---

## 📖 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Recharts Gallery](https://recharts.org/en-US/examples)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Happy coding! 🎉**

For more details, check the [README.md](./README.md)
