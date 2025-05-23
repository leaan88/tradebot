import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const PerformanceChart: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`p-6 rounded-lg ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-sm'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Performance Overview</h2>
        <div className="flex space-x-2">
          <button className={`px-3 py-1 text-sm rounded-md ${
            theme === 'dark' 
              ? 'bg-blue-500/10 text-blue-400' 
              : 'bg-blue-100 text-blue-700'
          }`}>
            Equity
          </button>
          <button className={`px-3 py-1 text-sm rounded-md ${
            theme === 'dark' 
              ? 'bg-gray-700 text-gray-400' 
              : 'bg-gray-200 text-gray-700'
          }`}>
            Balance
          </button>
          <button className={`px-3 py-1 text-sm rounded-md ${
            theme === 'dark' 
              ? 'bg-gray-700 text-gray-400' 
              : 'bg-gray-200 text-gray-700'
          }`}>
            Profit
          </button>
        </div>
      </div>
      
      <div className="h-64 relative">
        {/* This would be replaced with an actual chart library */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-center ${
            theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            <p className="text-sm">Chart would be implemented with a library like</p>
            <p className="text-sm font-medium">Recharts, Chart.js, or ApexCharts</p>
          </div>
        </div>
        
        {/* Sample chart line (for illustration) */}
        <svg className="w-full h-full" viewBox="0 0 600 240">
          <path
            d="M0,180 C100,140 200,190 300,120 C400,50 500,90 600,30"
            fill="none"
            stroke={theme === 'dark' ? '#3B82F6' : '#2563EB'}
            strokeWidth="3"
          />
          <path
            d="M0,180 C100,140 200,190 300,120 C400,50 500,90 600,30"
            fill="url(#gradient)"
            fillOpacity="0.2"
            stroke="none"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={theme === 'dark' ? '#3B82F6' : '#2563EB'} stopOpacity="0.8" />
              <stop offset="100%" stopColor={theme === 'dark' ? '#3B82F6' : '#2563EB'} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div>
          <p className="text-sm text-gray-500">Starting Balance</p>
          <p className="text-lg font-semibold">$10,000.00</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Current Balance</p>
          <p className="text-lg font-semibold">$12,584.23</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Return</p>
          <p className="text-lg font-semibold text-green-500">+25.84%</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;