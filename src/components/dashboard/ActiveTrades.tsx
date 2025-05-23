import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface Trade {
  id: string;
  symbol: string;
  type: 'buy' | 'sell';
  openPrice: number;
  currentPrice: number;
  profit: number;
  profitPercentage: number;
  time: string;
}

const MOCK_TRADES: Trade[] = [
  {
    id: '1',
    symbol: 'AAPL',
    type: 'buy',
    openPrice: 174.25,
    currentPrice: 176.38,
    profit: 213.0,
    profitPercentage: 1.22,
    time: '2h 15m'
  },
  {
    id: '2',
    symbol: 'TSLA',
    type: 'sell',
    openPrice: 243.50,
    currentPrice: 238.75,
    profit: 237.5,
    profitPercentage: 1.95,
    time: '4h 30m'
  },
  {
    id: '3',
    symbol: 'AMZN',
    type: 'buy',
    openPrice: 175.20,
    currentPrice: 174.90,
    profit: -30.0,
    profitPercentage: -0.17,
    time: '1h 45m'
  },
  {
    id: '4',
    symbol: 'NVDA',
    type: 'buy',
    openPrice: 434.75,
    currentPrice: 451.20,
    profit: 328.9,
    profitPercentage: 3.78,
    time: '5h 10m'
  }
];

const ActiveTrades: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`p-6 rounded-lg ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-sm'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Active Trades</h2>
        <button className="text-sm text-blue-500 hover:underline">
          View All
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
              <th className="text-left pb-3 text-sm font-medium">Symbol</th>
              <th className="text-left pb-3 text-sm font-medium">Type</th>
              <th className="text-right pb-3 text-sm font-medium">Open Price</th>
              <th className="text-right pb-3 text-sm font-medium">Current</th>
              <th className="text-right pb-3 text-sm font-medium">Profit</th>
              <th className="text-right pb-3 text-sm font-medium">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {MOCK_TRADES.map((trade) => (
              <tr key={trade.id} className="hover:bg-gray-700/10">
                <td className="py-3 font-medium">{trade.symbol}</td>
                <td>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    trade.type === 'buy' 
                      ? theme === 'dark' ? 'bg-green-500/10 text-green-400' : 'bg-green-100 text-green-800'
                      : theme === 'dark' ? 'bg-red-500/10 text-red-400' : 'bg-red-100 text-red-800'
                  }`}>
                    {trade.type.toUpperCase()}
                  </span>
                </td>
                <td className="text-right font-mono">${trade.openPrice.toFixed(2)}</td>
                <td className="text-right font-mono">${trade.currentPrice.toFixed(2)}</td>
                <td className={`text-right font-mono ${
                  trade.profit >= 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  <div className="flex items-center justify-end">
                    {trade.profit >= 0 
                      ? <ArrowUpRight size={14} className="mr-1" /> 
                      : <ArrowDownRight size={14} className="mr-1" />
                    }
                    ${Math.abs(trade.profit).toFixed(2)} ({Math.abs(trade.profitPercentage).toFixed(2)}%)
                  </div>
                </td>
                <td className="text-right text-gray-500">{trade.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveTrades;