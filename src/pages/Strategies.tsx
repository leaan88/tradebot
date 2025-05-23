import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { PlusCircle, ChevronDown, Filter, Settings, Play, Pause, AlertCircle } from 'lucide-react';

interface Strategy {
  id: string;
  name: string;
  description: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  status: 'Active' | 'Paused' | 'Backtest';
  performance: number;
  trades: number;
  winRate: number;
}

const MOCK_STRATEGIES: Strategy[] = [
  {
    id: '1',
    name: 'Trend Following',
    description: 'Uses moving averages and momentum indicators to identify and follow market trends',
    riskLevel: 'Medium',
    status: 'Active',
    performance: 15.8,
    trades: 142,
    winRate: 67.3
  },
  {
    id: '2',
    name: 'Mean Reversion',
    description: 'Capitalizes on price reversals after extreme movements away from the average',
    riskLevel: 'Medium',
    status: 'Active',
    performance: 12.4,
    trades: 216,
    winRate: 58.7
  },
  {
    id: '3',
    name: 'Breakout Strategy',
    description: 'Identifies and trades significant price movements through key levels',
    riskLevel: 'High',
    status: 'Paused',
    performance: 21.5,
    trades: 94,
    winRate: 52.1
  },
  {
    id: '4',
    name: 'RSI Divergence',
    description: 'Identifies potential reversals by comparing price action to RSI indicator',
    riskLevel: 'Low',
    status: 'Backtest',
    performance: 9.7,
    trades: 67,
    winRate: 71.2
  }
];

const Strategies: React.FC = () => {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState<string | null>(null);
  
  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">Trading Strategies</h1>
        <div className="flex items-center space-x-3">
          <button className={`flex items-center px-3 py-1.5 rounded-md ${
            theme === 'dark' 
              ? 'bg-gray-700 hover:bg-gray-600' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}>
            <Filter size={16} className="mr-2" />
            <span>Filter</span>
          </button>
          <button className={`flex items-center px-4 py-1.5 rounded-md font-medium ${
            theme === 'dark' 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white transition-colors`}>
            <PlusCircle size={16} className="mr-2" />
            <span>New Strategy</span>
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {MOCK_STRATEGIES.map((strategy) => (
          <div 
            key={strategy.id} 
            className={`rounded-lg overflow-hidden ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-sm'
            }`}
          >
            <div 
              className="p-6 cursor-pointer"
              onClick={() => toggleExpand(strategy.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-semibold">{strategy.name}</h3>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                    strategy.status === 'Active' 
                      ? theme === 'dark' ? 'bg-green-500/10 text-green-400' : 'bg-green-100 text-green-800'
                      : strategy.status === 'Paused'
                        ? theme === 'dark' ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-100 text-amber-800'
                        : theme === 'dark' ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {strategy.status}
                  </span>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                    strategy.riskLevel === 'Low' 
                      ? theme === 'dark' ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-800'
                      : strategy.riskLevel === 'Medium'
                        ? theme === 'dark' ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-100 text-amber-800'
                        : theme === 'dark' ? 'bg-red-500/10 text-red-400' : 'bg-red-100 text-red-800'
                  }`}>
                    {strategy.riskLevel} Risk
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <span className={`font-medium text-lg ${
                      strategy.performance > 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {strategy.performance > 0 ? '+' : ''}{strategy.performance}%
                    </span>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform ${expanded === strategy.id ? 'rotate-180' : ''}`} 
                  />
                </div>
              </div>
              <p className={`mt-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {strategy.description}
              </p>
            </div>
            
            {expanded === strategy.id && (
              <div className={`p-6 ${
                theme === 'dark' ? 'border-t border-gray-700' : 'border-t border-gray-200'
              }`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Performance</h4>
                    <p className="text-xl font-semibold">
                      <span className={strategy.performance > 0 ? 'text-green-500' : 'text-red-500'}>
                        {strategy.performance > 0 ? '+' : ''}{strategy.performance}%
                      </span>
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Total Trades</h4>
                    <p className="text-xl font-semibold">{strategy.trades}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Win Rate</h4>
                    <p className="text-xl font-semibold">{strategy.winRate}%</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {strategy.status === 'Active' ? (
                    <button className={`flex items-center px-4 py-2 rounded-md ${
                      theme === 'dark' 
                        ? 'bg-amber-600 hover:bg-amber-700' 
                        : 'bg-amber-500 hover:bg-amber-600'
                    } text-white transition-colors`}>
                      <Pause size={16} className="mr-2" />
                      <span>Pause Strategy</span>
                    </button>
                  ) : (
                    <button className={`flex items-center px-4 py-2 rounded-md ${
                      theme === 'dark' 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-green-500 hover:bg-green-600'
                    } text-white transition-colors`}>
                      <Play size={16} className="mr-2" />
                      <span>Activate Strategy</span>
                    </button>
                  )}
                  
                  <button className={`flex items-center px-4 py-2 rounded-md ${
                    theme === 'dark' 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}>
                    <Settings size={16} className="mr-2" />
                    <span>Edit Parameters</span>
                  </button>
                  
                  <button className={`flex items-center px-4 py-2 rounded-md ${
                    theme === 'dark' 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : 'bg-red-500 hover:bg-red-600'
                  } text-white transition-colors`}>
                    <AlertCircle size={16} className="mr-2" />
                    <span>Delete Strategy</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strategies;