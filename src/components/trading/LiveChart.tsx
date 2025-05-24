import React, { useEffect, useRef } from 'react';
import { createChart, ColorType, CrosshairMode } from 'lightweight-charts';
import { useTheme } from '../../contexts/ThemeContext';
import { AlertTriangle, TrendingUp, TrendingDown, Clock } from 'lucide-react';

interface TradingSuggestion {
  type: 'LONG' | 'SHORT' | 'EXIT';
  reason: string;
  confidence: number;
  timeframe: string;
}

const LiveChart: React.FC = () => {
  const { theme } = useTheme();
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);

  const mockSuggestion: TradingSuggestion = {
    type: 'LONG',
    reason: 'Bullish divergence on RSI with support at key moving average',
    confidence: 85,
    timeframe: '5m'
  };

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chartOptions = {
      layout: {
        background: { color: theme === 'dark' ? '#1F2937' : '#ffffff' },
        textColor: theme === 'dark' ? '#9CA3AF' : '#4B5563',
      },
      grid: {
        vertLines: { color: theme === 'dark' ? '#374151' : '#E5E7EB' },
        horzLines: { color: theme === 'dark' ? '#374151' : '#E5E7EB' },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
        vertLine: {
          color: theme === 'dark' ? '#6B7280' : '#9CA3AF',
          width: 1,
          style: 3,
        },
        horzLine: {
          color: theme === 'dark' ? '#6B7280' : '#9CA3AF',
          width: 1,
          style: 3,
        },
      },
      timeScale: {
        borderColor: theme === 'dark' ? '#374151' : '#E5E7EB',
        timeVisible: true,
        secondsVisible: false,
      },
    };

    chartRef.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 500,
      ...chartOptions,
    });

    const candlestickSeries = chartRef.current.addCandlestickSeries({
      upColor: '#10B981',
      downColor: '#EF4444',
      borderUpColor: '#10B981',
      borderDownColor: '#EF4444',
      wickUpColor: '#10B981',
      wickDownColor: '#EF4444',
    });

    // Mock data - replace with real-time data
    const data = generateMockData();
    candlestickSeries.setData(data);

    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (chartRef.current) {
        chartRef.current.remove();
      }
    };
  }, [theme]);

  return (
    <div className={`rounded-lg ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    } p-6`}>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold">BTC/USD</h2>
          <div className="flex items-center mt-1">
            <Clock size={14} className="mr-1 text-gray-500" />
            <span className="text-sm text-gray-500">5m Chart</span>
          </div>
        </div>
        
        <div className={`px-4 py-2 rounded-lg ${
          mockSuggestion.type === 'LONG'
            ? theme === 'dark' ? 'bg-green-500/10 text-green-400' : 'bg-green-100 text-green-800'
            : theme === 'dark' ? 'bg-red-500/10 text-red-400' : 'bg-red-100 text-red-800'
        }`}>
          <div className="flex items-center">
            {mockSuggestion.type === 'LONG' ? (
              <TrendingUp size={16} className="mr-2" />
            ) : (
              <TrendingDown size={16} className="mr-2" />
            )}
            <span className="font-medium">{mockSuggestion.type} Signal</span>
            <span className="ml-2 text-sm">({mockSuggestion.confidence}%)</span>
          </div>
        </div>
      </div>

      <div ref={chartContainerRef} className="mb-6" />

      <div className={`p-4 rounded-lg ${
        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
      }`}>
        <div className="flex items-start">
          <AlertTriangle size={20} className="mr-2 mt-1 text-yellow-500" />
          <div>
            <h3 className="font-medium mb-1">Trading Suggestion</h3>
            <p className="text-sm text-gray-400">{mockSuggestion.reason}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6">
        <div>
          <p className="text-sm text-gray-500">Price</p>
          <p className="text-lg font-semibold font-mono">$48,235.50</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">24h Change</p>
          <p className="text-lg font-semibold text-green-500">+2.45%</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Volume</p>
          <p className="text-lg font-semibold font-mono">1.2B</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">RSI</p>
          <p className="text-lg font-semibold font-mono">58.4</p>
        </div>
      </div>
    </div>
  );
};

// Helper function to generate mock candlestick data
function generateMockData() {
  const data = [];
  let time = new Date(Date.now() - 200 * 24 * 60 * 60 * 1000);
  let open = 45000;
  let high = 0;
  let low = 0;
  let close = 0;

  for (let i = 0; i < 200; i++) {
    const randomFactor = Math.random() * 200 - 100;
    close = open + randomFactor;
    high = Math.max(open, close) + Math.random() * 100;
    low = Math.min(open, close) - Math.random() * 100;

    data.push({
      time: time.getTime() / 1000,
      open,
      high,
      low,
      close,
    });

    time = new Date(time.getTime() + 24 * 60 * 60 * 1000);
    open = close;
  }

  return data;
}

export default LiveChart;