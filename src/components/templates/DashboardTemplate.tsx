'use client';

import React from 'react';

interface DashboardTemplateProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {description && <p className="text-gray-600 mt-2">{description}</p>}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-gray-600 text-center">
            © 2024 Sales Dashboard. Built with Next.js 15, TypeScript, and Recharts.
          </p>
        </div>
      </footer>
    </div>
  );
};
