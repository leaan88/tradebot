import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Play, Calendar, Clock, Filter, Download } from 'lucide-react';

const Backtesting: React.FC = () => {
  const { theme } = useTheme();
  const [selectedTab, setSelectedTab] = useState('configure');
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">Strategy Backtesting</h1>
      </div>
      
      <div className={`rounded-lg ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-sm'
      }`}>
        <div className="border-b border-gray-700">
          <div className="flex">
            <button
              onClick={() => setSelectedTab('configure')}
              className={`px-6 py-4 font-medium text-sm ${
                selectedTab === 'configure'
                  ? theme === 'dark'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'border-b-2 border-blue-600 text-blue-600'
                  : theme === 'dark'
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Configure
            </button>
            <button
              onClick={() => setSelectedTab('results')}
              className={`px-6 py-4 font-medium text-sm ${
                selectedTab === 'results'
                  ? theme === 'dark'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'border-b-2 border-blue-600 text-blue-600'
                  : theme === 'dark'
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Results
            </button>
            <button
              onClick={() => setSelectedTab('history')}
              className={`px-6 py-4 font-medium text-sm ${
                selectedTab === 'history'
                  ? theme === 'dark'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'border-b-2 border-blue-600 text-blue-600'
                  : theme === 'dark'
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              History
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {selectedTab === 'configure' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Strategy Parameters</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Select Strategy
                    </label>
                    <select className={`w-full px-3 py-2 rounded-md ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600' 
                        : 'bg-white border-gray-300'
                    } border`}>
                      <option value="trend">Trend Following</option>
                      <option value="mean">Mean Reversion</option>
                      <option value="breakout">Breakout Strategy</option>
                      <option value="rsi">RSI Divergence</option>
                      <option value="custom">Custom Strategy</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Risk Level
                    </label>
                    <select className={`w-full px-3 py-2 rounded-md ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600' 
                        : 'bg-white border-gray-300'
                    } border`}>
                      <option value="low">Low</option>
                      <option value="medium" selected>Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Trading Pair / Symbol
                    </label>
                    <select className={`w-full px-3 py-2 rounded-md ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600' 
                        : 'bg-white border-gray-300'
                    } border`}>
                      <option value="btcusd">BTC/USD</option>
                      <option value="ethusd">ETH/USD</option>
                      <option value="aapl">AAPL</option>
                      <option value="tsla">TSLA</option>
                      <option value="googl">GOOGL</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Initial Capital
                    </label>
                    <div className={`flex border ${
                      theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
                    } rounded-md overflow-hidden`}>
                      <span className={`px-3 flex items-center ${
                        theme === 'dark' ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-600'
                      }`}>$</span>
                      <input 
                        type="number" 
                        defaultValue="10000" 
                        className={`w-full px-3 py-2 ${
                          theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Backtest Period</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Start Date
                    </label>
                    <div className={`flex border ${
                      theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
                    } rounded-md overflow-hidden`}>
                      <span className={`px-3 flex items-center ${
                        theme === 'dark' ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Calendar size={16} />
                      </span>
                      <input 
                        type="date" 
                        defaultValue="2023-01-01" 
                        className={`w-full px-3 py-2 ${
                          theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                        }`}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      End Date
                    </label>
                    <div className={`flex border ${
                      theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
                    } rounded-md overflow-hidden`}>
                      <span className={`px-3 flex items-center ${
                        theme === 'dark' ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Calendar size={16} />
                      </span>
                      <input 
                        type="date" 
                        defaultValue="2023-12-31" 
                        className={`w-full px-3 py-2 ${
                          theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                        }`}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Timeframe
                    </label>
                    <select className={`w-full px-3 py-2 rounded-md ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600' 
                        : 'bg-white border-gray-300'
                    } border`}>
                      <option value="1m">1 Minute</option>
                      <option value="5m">5 Minutes</option>
                      <option value="15m">15 Minutes</option>
                      <option value="1h" selected>1 Hour</option>
                      <option value="4h">4 Hours</option>
                      <option value="1d">1 Day</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end pt-4">
                <button className={`flex items-center px-6 py-2 rounded-md ${
                  theme === 'dark' 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-blue-500 hover:bg-blue-600'
                } text-white transition-colors font-medium`}>
                  <Play size={16} className="mr-2" />
                  <span>Run Backtest</span>
                </button>
              </div>
            </div>
          )}
          
          {selectedTab === 'results' && (
            <div className="text-center py-12">
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                No backtest results available. Run a backtest to see results here.
              </p>
            </div>
          )}
          
          {selectedTab === 'history' && (
            <div>
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium">Previous Backtests</h3>
                <div className="flex items-center space-x-3">
                  <button className={`flex items-center px-3 py-1.5 rounded-md ${
                    theme === 'dark' 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}>
                    <Filter size={16} className="mr-2" />
                    <span>Filter</span>
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      <th className="text-left pb-3 text-sm font-medium">Date</th>
                      <th className="text-left pb-3 text-sm font-medium">Strategy</th>
                      <th className="text-left pb-3 text-sm font-medium">Symbol</th>
                      <th className="text-right pb-3 text-sm font-medium">Profit</th>
                      <th className="text-right pb-3 text-sm font-medium">Win Rate</th>
                      <th className="text-right pb-3 text-sm font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="hover:bg-gray-700/10">
                      <td className="py-3">May 15, 2023</td>
                      <td>Trend Following</td>
                      <td>BTC/USD</td>
                      <td className="text-right text-green-500">+21.4%</td>
                      <td className="text-right">67.3%</td>
                      <td className="text-right">
                        <button className="text-blue-500 hover:underline">View</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700/10">
                      <td className="py-3">April 30, 2023</td>
                      <td>Mean Reversion</td>
                      <td>ETH/USD</td>
                      <td className="text-right text-green-500">+12.7%</td>
                      <td className="text-right">58.9%</td>
                      <td className="text-right">
                        <button className="text-blue-500 hover:underline">View</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700/10">
                      <td className="py-3">March 12, 2023</td>
                      <td>Breakout Strategy</td>
                      <td>AAPL</td>
                      <td className="text-right text-red-500">-3.2%</td>
                      <td className="text-right">43.5%</td>
                      <td className="text-right">
                        <button className="text-blue-500 hover:underline">View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Backtesting;