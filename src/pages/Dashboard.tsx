import React from 'react';
import { ArrowUpRight, ArrowDownRight, DollarSign, BarChart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import LiveChart from '../components/trading/LiveChart';
import ActiveTrades from '../components/dashboard/ActiveTrades';
import RecentTrades from '../components/dashboard/RecentTrades';
import TradeDistribution from '../components/dashboard/TradeDistribution';

const Dashboard: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center ml-auto">
          <select 
            className={`px-3 py-1.5 rounded-md mr-3 ${
              theme === 'dark' 
                ? 'bg-gray-700 border border-gray-600' 
                : 'bg-white border border-gray-300'
            }`}
          >
            <option value="1d">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="1y">Last year</option>
          </select>
          <button 
            className={`px-4 py-1.5 rounded-md font-medium ${
              theme === 'dark' 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-colors`}
          >
            Download Report
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Profit"
          value="$12,584.23"
          change="+15.3%"
          isPositive={true}
          icon={<DollarSign size={20} />}
        />
        <StatCard 
          title="Win Rate"
          value="68.7%"
          change="+2.4%"
          isPositive={true}
          icon={<BarChart size={20} />}
        />
        <StatCard 
          title="Today's P/L"
          value="$523.41"
          change="-1.2%"
          isPositive={false}
          icon={<DollarSign size={20} />}
        />
        <StatCard 
          title="Drawdown"
          value="4.5%"
          change="+0.3%"
          isPositive={false}
          icon={<BarChart size={20} />}
        />
      </div>
      
      <LiveChart />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActiveTrades />
        <RecentTrades />
      </div>
      
      <div>
        <TradeDistribution />
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, isPositive, icon }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`p-6 rounded-lg ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-sm'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 text-sm">{title}</span>
        <div className={`p-2 rounded-full ${
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
        }`}>
          {icon}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <h3 className="text-2xl font-bold">{value}</h3>
        <div className={`flex items-center ${
          isPositive ? 'text-green-500' : 'text-red-500'
        }`}>
          {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          <span className="ml-1 text-sm font-medium">{change}</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;