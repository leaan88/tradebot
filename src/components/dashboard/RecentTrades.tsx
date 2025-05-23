import React from 'react';
import { Check, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface Trade {
  id: string;
  symbol: string;
  type: 'buy' | 'sell';
  openPrice: number;
  closePrice: number;
  profit: number;
  profitPercentage: number;
  time: string;
  success: boolean;
}

const MOCK_TRADES: Trade[] = [
  {
    id: '1',
    symbol: 'BTC/USD',
    type: 'buy',
    openPrice: 51240.50,
    closePrice: 52350.75,
    profit: 110.25,
    profitPercentage: 2.17,
    time: '2h ago',
    success: true
  },
  {
    id: '2',
    symbol: 'ETH/USD',
    type: 'sell',
    openPrice: 3105.25,
    closePrice: 3024.50,
    profit: 80.75,
    profitPercentage: 2.60,
    time: '5h ago',
    success: true
  },
  {
    id: '3',
    symbol: 'GOOGL',
    type: 'buy',
    openPrice: 141.20,
    closePrice: 139.75,
    profit: -145.0,
    profitPercentage: -1.03,
    time: '1d ago',
    success: false
  },
  {
    id: '4',
    symbol: 'MSFT',
    type: 'buy',
    openPrice: 403.10,
    closePrice: 410.30,
    profit: 72.0,
    profitPercentage: 1.79,
    time: '1d ago',
    success: true
  }
];

const RecentTrades: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`p-6 rounded-lg ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-sm'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Recent Trades</h2>
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
              <th className="text-right pb-3 text-sm font-medium">Result</th>
              <th className="text-right pb-3 text-sm font-medium">Profit</th>
              <th className="text-right pb-3 text-sm font-medium">Time</th>
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
                <td className="text-right">
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
                    trade.success 
                      ? theme === 'dark' ? 'bg-green-500/10 text-green-500' : 'bg-green-100 text-green-700'
                      : theme === 'dark' ? 'bg-red-500/10 text-red-500' : 'bg-red-100 text-red-700'
                  }`}>
                    {trade.success ? <Check size={14} /> : <X size={14} />}
                  </span>
                </td>
                <td className={`text-right font-mono ${
                  trade.profit >= 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {trade.profit >= 0 ? '+' : '-'}${Math.abs(trade.profit).toFixed(2)} ({Math.abs(trade.profitPercentage).toFixed(2)}%)
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

export default RecentTrades;