import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  TrendingUp, 
  BarChart2, 
  Newspaper, 
  Settings, 
  Shield, 
  Menu, 
  X 
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, to, active }) => {
  const { theme } = useTheme();
  
  return (
    <Link 
      to={to} 
      className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
        active 
          ? theme === 'dark' 
            ? 'bg-gray-700 text-white' 
            : 'bg-gray-200 text-gray-900'
          : theme === 'dark'
            ? 'text-gray-400 hover:text-white hover:bg-gray-700/50' 
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/70'
      }`}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </Link>
  );
};

const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  const { theme } = useTheme();
  
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {/* Mobile overlay */}
      {expanded && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Mobile toggle button */}
      <button 
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-30 lg:hidden p-2 rounded-md bg-gray-800 text-white"
      >
        {expanded ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      <aside 
        className={`fixed top-0 left-0 h-full z-30 lg:relative transition-all duration-300 ${
          expanded ? 'w-64' : 'w-0 lg:w-20'
        } ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex items-center px-6">
            {expanded && (
              <h1 className="text-xl font-bold">
                <span className="text-emerald-500">Trade</span>
                <span className="font-light">Bot</span>
              </h1>
            )}
          </div>
          
          <div className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
            <NavItem 
              icon={<LayoutDashboard size={20} />} 
              text="Dashboard" 
              to="/" 
              active={location.pathname === '/'} 
            />
            <NavItem 
              icon={<TrendingUp size={20} />} 
              text="Strategies" 
              to="/strategies" 
              active={location.pathname === '/strategies'} 
            />
            <NavItem 
              icon={<BarChart2 size={20} />} 
              text="Backtesting" 
              to="/backtesting" 
              active={location.pathname === '/backtesting'} 
            />
            <NavItem 
              icon={<Newspaper size={20} />} 
              text="News" 
              to="/news" 
              active={location.pathname === '/news'} 
            />
            <NavItem 
              icon={<Shield size={20} />} 
              text="Security" 
              to="/security" 
              active={location.pathname === '/security'} 
            />
            <NavItem 
              icon={<Settings size={20} />} 
              text="Settings" 
              to="/settings" 
              active={location.pathname === '/settings'} 
            />
          </div>
          
          <div className={`p-4 ${theme === 'dark' ? 'border-t border-gray-700' : 'border-t border-gray-200'}`}>
            {expanded ? (
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">API Status</p>
                  <div className="flex items-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm font-medium">Connected</span>
                  </div>
                </div>
                <button 
                  onClick={toggleSidebar} 
                  className={`p-1.5 rounded-lg ${
                    theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                  }`}
                >
                  <Menu size={18} />
                </button>
              </div>
            ) : (
              <button 
                onClick={toggleSidebar} 
                className={`p-1.5 mx-auto flex rounded-lg ${
                  theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                }`}
              >
                <Menu size={18} />
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;