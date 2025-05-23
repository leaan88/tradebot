import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const TradeDistribution: React.FC = () => {
  const { theme } = useTheme();
  
  // Mock data for trade distribution
  const tradeData = [
    { label: 'Winning Trades', value: 68, color: 'green' },
    { label: 'Losing Trades', value: 32, color: 'red' }
  ];
  
  const strategyData = [
    { label: 'Trend Following', value: 40, color: 'blue' },
    { label: 'Mean Reversion', value: 25, color: 'purple' },
    { label: 'Breakout', value: 20, color: 'orange' },
    { label: 'Scalping', value: 15, color: 'yellow' }
  ];
  
  return (
    <div className={`p-6 rounded-lg h-full ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-sm'
    }`}>
      <h2 className="text-lg font-semibold mb-6">Trade Distribution</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-sm font-medium mb-3 text-gray-500">Win/Loss Ratio</h3>
          <div className="flex items-center">
            <div className="w-full bg-gray-700 h-6 rounded-full overflow-hidden">
              <div
                className="bg-green-500 h-full rounded-l-full"
                style={{ width: `${tradeData[0].value}%` }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
              <span className="text-sm">{tradeData[0].label} ({tradeData[0].value}%)</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
              <span className="text-sm">{tradeData[1].label} ({tradeData[1].value}%)</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-3 text-gray-500">Strategy Allocation</h3>
          <div className="grid grid-cols-1 gap-2">
            {strategyData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">{item.label}</span>
                  <span className="text-sm font-medium">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      item.color === 'blue' ? 'bg-blue-500' :
                      item.color === 'purple' ? 'bg-purple-500' :
                      item.color === 'orange' ? 'bg-orange-500' :
                      'bg-yellow-500'
                    }`}
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-3 text-gray-500">Performance Metrics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Profit Factor</p>
              <p className="text-lg font-semibold">2.14</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Avg. Trade</p>
              <p className="text-lg font-semibold">$42.17</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Sharpe Ratio</p>
              <p className="text-lg font-semibold">1.85</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Max Drawdown</p>
              <p className="text-lg font-semibold">4.5%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeDistribution;