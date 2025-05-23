import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Search, Filter, ExternalLink, Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  impact: 'high' | 'medium' | 'low';
  summary: string;
  url: string;
}

const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Federal Reserve signals potential rate cuts later this year',
    source: 'Bloomberg',
    date: '2h ago',
    sentiment: 'positive',
    impact: 'high',
    summary: 'The Federal Reserve indicated it could cut interest rates as early as September as inflation continues to cool and economic data shows signs of moderation.',
    url: '#'
  },
  {
    id: '2',
    title: 'Tech stocks rally on strong earnings reports',
    source: 'CNBC',
    date: '5h ago',
    sentiment: 'positive',
    impact: 'medium',
    summary: 'Major tech companies reported better-than-expected quarterly earnings, driving a broad rally in technology stocks and lifting market indices.',
    url: '#'
  },
  {
    id: '3',
    title: 'Oil prices fall on rising inventories',
    source: 'Reuters',
    date: '8h ago',
    sentiment: 'negative',
    impact: 'medium',
    summary: 'Crude oil prices declined after government data showed an unexpected build in U.S. crude inventories, raising concerns about demand weakness.',
    url: '#'
  },
  {
    id: '4',
    title: 'Inflation data shows easing price pressures',
    source: 'Financial Times',
    date: '1d ago',
    sentiment: 'positive',
    impact: 'high',
    summary: 'The latest CPI report showed inflation continuing to moderate, potentially giving the Federal Reserve more room to ease monetary policy in coming months.',
    url: '#'
  },
  {
    id: '5',
    title: 'European markets cautious amid geopolitical tensions',
    source: 'Wall Street Journal',
    date: '1d ago',
    sentiment: 'neutral',
    impact: 'low',
    summary: 'European stock markets traded sideways as investors remained cautious about escalating geopolitical tensions and their potential impact on global trade.',
    url: '#'
  }
];

const News: React.FC = () => {
  const { theme } = useTheme();
  const [selectedSource, setSelectedSource] = useState('all');
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">Financial News</h1>
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <div className={`relative flex-1 md:w-64`}>
            <input
              type="text"
              placeholder="Search news..."
              className={`w-full pl-10 pr-4 py-2 rounded-md ${
                theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600' 
                  : 'bg-white border-gray-300'
              } border`}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          </div>
          <button className={`flex items-center px-3 py-2 rounded-md ${
            theme === 'dark' 
              ? 'bg-gray-700 hover:bg-gray-600' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}>
            <Filter size={16} className="mr-2" />
            <span>Filter</span>
          </button>
        </div>
      </div>
      
      <div className="flex mb-6 overflow-x-auto pb-2">
        {['all', 'Bloomberg', 'CNBC', 'Reuters', 'Financial Times', 'Wall Street Journal', 'MarketWatch'].map((source) => (
          <button
            key={source}
            onClick={() => setSelectedSource(source)}
            className={`px-4 py-2 rounded-md whitespace-nowrap mr-2 ${
              selectedSource === source
                ? theme === 'dark'
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-500 text-white'
                : theme === 'dark'
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {source === 'all' ? 'All Sources' : source}
          </button>
        ))}
      </div>
      
      <div className="space-y-4">
        {MOCK_NEWS.map((news) => (
          <div 
            key={news.id} 
            className={`p-6 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-sm'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
              <div className="flex items-center space-x-3 mb-2 md:mb-0">
                <span className={`px-2 py-1 text-xs font-medium rounded-md ${
                  news.sentiment === 'positive' 
                    ? theme === 'dark' ? 'bg-green-500/10 text-green-400' : 'bg-green-100 text-green-800'
                    : news.sentiment === 'negative'
                      ? theme === 'dark' ? 'bg-red-500/10 text-red-400' : 'bg-red-100 text-red-800'
                      : theme === 'dark' ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-700'
                }`}>
                  {news.sentiment === 'positive' && <ArrowUpRight size={12} className="inline mr-1" />}
                  {news.sentiment === 'negative' && <ArrowDownRight size={12} className="inline mr-1" />}
                  {news.sentiment.charAt(0).toUpperCase() + news.sentiment.slice(1)}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-md ${
                  news.impact === 'high' 
                    ? theme === 'dark' ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-100 text-purple-800'
                    : news.impact === 'medium'
                      ? theme === 'dark' ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-800'
                      : theme === 'dark' ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-700'
                }`}>
                  {news.impact.charAt(0).toUpperCase() + news.impact.slice(1)} Impact
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {news.date}
                </span>
                <span>{news.source}</span>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
            <p className={`mb-4 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {news.summary}
            </p>
            
            <a 
              href={news.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-blue-500 hover:underline"
            >
              Read full article
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;