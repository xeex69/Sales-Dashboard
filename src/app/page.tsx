'use client';

import Link from 'next/link';
import { ArrowRight, BarChart3, TrendingUp, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Sales Dashboard</h1>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go to Dashboard
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Analyze Your Sales Performance
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Track and visualize sales data across multiple years with interactive charts and
            custom filters
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Launch Dashboard
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
              title: 'Multiple Chart Types',
              description:
                'View your data with bar charts, line graphs, and pie charts for comprehensive analysis',
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-green-600" />,
              title: 'Year-over-Year Comparison',
              description:
                'Compare sales data across 2022, 2023, and 2024 with a single click',
            },
            {
              icon: <Zap className="w-8 h-8 text-yellow-600" />,
              title: 'Custom Filtering',
              description: 'Set custom sales thresholds to focus on specific data points',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Built With Modern Tech</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Recharts', 'React 19', 'Lucide Icons'].map(
              (tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <span className="font-semibold text-gray-800">{tech}</span>
                </div>
              )
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Sales Dashboard. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
