import React from 'react';
import { Bell, Settings, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`h-16 flex items-center justify-between px-6 border-b ${
      theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold">
          <span className="text-emerald-500">Trade</span>
          <span className="font-light">Bot</span>
        </h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className={`px-3 py-1 rounded-full ${
          theme === 'dark' ? 'bg-green-500/10 text-green-400' : 'bg-green-100 text-green-800'
        }`}>
          <span className="text-sm font-medium">Market Open</span>
        </div>

        <button className="p-2 rounded-full hover:bg-gray-700/10 transition-colors">
          <Bell size={20} />
        </button>
        
        <button 
          className="p-2 rounded-full hover:bg-gray-700/10 transition-colors"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button className="p-2 rounded-full hover:bg-gray-700/10 transition-colors">
          <Settings size={20} />
        </button>
        
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-white text-sm font-medium">JD</span>
        </div>
      </div>
    </header>
  );
};

export default Header;