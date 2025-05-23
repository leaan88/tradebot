import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Save, Lock, Globe, Bell, UserCog, RefreshCw } from 'lucide-react';

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [selectedTab, setSelectedTab] = useState('general');
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      
      <div className={`rounded-lg overflow-hidden ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-sm'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className={`${
            theme === 'dark' ? 'bg-gray-800 md:border-r border-gray-700' : 'bg-gray-50 md:border-r border-gray-200'
          } p-4`}>
            <nav className="space-y-1">
              <button
                onClick={() => setSelectedTab('general')}
                className={`flex items-center w-full px-3 py-2 rounded-md ${
                  selectedTab === 'general'
                    ? theme === 'dark'
                      ? 'bg-gray-700 text-white'
                      : 'bg-white shadow-sm text-gray-900'
                    : theme === 'dark'
                      ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-white hover:shadow-sm'
                }`}
              >
                <Globe size={18} className="mr-2" />
                <span>General</span>
              </button>
              <button
                onClick={() => setSelectedTab('security')}
                className={`flex items-center w-full px-3 py-2 rounded-md ${
                  selectedTab === 'security'
                    ? theme === 'dark'
                      ? 'bg-gray-700 text-white'
                      : 'bg-white shadow-sm text-gray-900'
                    : theme === 'dark'
                      ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-white hover:shadow-sm'
                }`}
              >
                <Lock size={18} className="mr-2" />
                <span>Security</span>
              </button>
              <button
                onClick={() => setSelectedTab('notifications')}
                className={`flex items-center w-full px-3 py-2 rounded-md ${
                  selectedTab === 'notifications'
                    ? theme === 'dark'
                      ? 'bg-gray-700 text-white'
                      : 'bg-white shadow-sm text-gray-900'
                    : theme === 'dark'
                      ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-white hover:shadow-sm'
                }`}
              >
                <Bell size={18} className="mr-2" />
                <span>Notifications</span>
              </button>
              <button
                onClick={() => setSelectedTab('account')}
                className={`flex items-center w-full px-3 py-2 rounded-md ${
                  selectedTab === 'account'
                    ? theme === 'dark'
                      ? 'bg-gray-700 text-white'
                      : 'bg-white shadow-sm text-gray-900'
                    : theme === 'dark'
                      ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-white hover:shadow-sm'
                }`}
              >
                <UserCog size={18} className="mr-2" />
                <span>Account</span>
              </button>
              <button
                onClick={() => setSelectedTab('api')}
                className={`flex items-center w-full px-3 py-2 rounded-md ${
                  selectedTab === 'api'
                    ? theme === 'dark'
                      ? 'bg-gray-700 text-white'
                      : 'bg-white shadow-sm text-gray-900'
                    : theme === 'dark'
                      ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-white hover:shadow-sm'
                }`}
              >
                <RefreshCw size={18} className="mr-2" />
                <span>API Connections</span>
              </button>
            </nav>
          </div>
          
          <div className="p-6 md:col-span-3">
            {selectedTab === 'general' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">General Settings</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Theme
                    </label>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => theme === 'light' ? null : toggleTheme()}
                        className={`px-4 py-2 rounded-md ${
                          theme === 'light'
                            ? 'bg-blue-500 text-white'
                            : theme === 'dark'
                              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        Light
                      </button>
                      <button
                        onClick={() => theme === 'dark' ? null : toggleTheme()}
                        className={`px-4 py-2 rounded-md ${
                          theme === 'dark'
                            ? 'bg-blue-500 text-white'
                            : theme === 'dark'
                              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        Dark
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Default Currency
                    </label>
                    <select className={`w-full px-3 py-2 rounded-md ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600' 
                        : 'bg-white border-gray-300'
                    } border`}>
                      <option value="usd">USD - US Dollar</option>
                      <option value="eur">EUR - Euro</option>
                      <option value="gbp">GBP - British Pound</option>
                      <option value="jpy">JPY - Japanese Yen</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Default Trading Pair
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
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Chart Type
                    </label>
                    <select className={`w-full px-3 py-2 rounded-md ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600' 
                        : 'bg-white border-gray-300'
                    } border`}>
                      <option value="candle">Candlestick</option>
                      <option value="line">Line Chart</option>
                      <option value="bar">Bar Chart</option>
                      <option value="area">Area Chart</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center pt-4">
                    <button className={`flex items-center px-4 py-2 rounded-md ${
                      theme === 'dark' 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-blue-500 hover:bg-blue-600'
                    } text-white transition-colors`}>
                      <Save size={16} className="mr-2" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {selectedTab === 'security' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Two-Factor Authentication</h3>
                    <div className={`p-4 rounded-lg ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                    } mb-4`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">2FA Status</p>
                          <p className={`text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            Protect your account with an additional layer of security
                          </p>
                        </div>
                        <div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            theme === 'dark' ? 'bg-green-500/10 text-green-400' : 'bg-green-100 text-green-800'
                          }`}>
                            Enabled
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className={`px-4 py-2 rounded-md ${
                      theme === 'dark' 
                        ? 'bg-gray-700 hover:bg-gray-600' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}>
                      Disable 2FA
                    </button>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">API Key Restrictions</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="ip_restriction" 
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                          defaultChecked
                        />
                        <label htmlFor="ip_restriction" className="ml-2 block text-sm">
                          IP Address Restrictions
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="withdraw_restriction" 
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                          defaultChecked
                        />
                        <label htmlFor="withdraw_restriction" className="ml-2 block text-sm">
                          Disable Withdrawals
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="trading_restriction" 
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="trading_restriction" className="ml-2 block text-sm">
                          Restrict Trading to Specific Pairs
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center pt-4">
                    <button className={`flex items-center px-4 py-2 rounded-md ${
                      theme === 'dark' 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-blue-500 hover:bg-blue-600'
                    } text-white transition-colors`}>
                      <Save size={16} className="mr-2" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {selectedTab === 'api' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">API Connections</h2>
                
                <div className="space-y-6">
                  <div className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Binance</p>
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          API connection to Binance exchange
                        </p>
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          theme === 'dark' ? 'bg-green-500/10 text-green-400' : 'bg-green-100 text-green-800'
                        }`}>
                          Connected
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Coinbase</p>
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          API connection to Coinbase Pro
                        </p>
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          theme === 'dark' ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-100 text-amber-800'
                        }`}>
                          Needs Renewal
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Kraken</p>
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          API connection to Kraken exchange
                        </p>
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          theme === 'dark' ? 'bg-red-500/10 text-red-400' : 'bg-red-100 text-red-800'
                        }`}>
                          Disconnected
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Interactive Brokers</p>
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          API connection to Interactive Brokers
                        </p>
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          theme === 'dark' ? 'bg-red-500/10 text-red-400' : 'bg-red-100 text-red-800'
                        }`}>
                          Not Connected
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <button className={`px-4 py-2 rounded-md ${
                      theme === 'dark' 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-blue-500 hover:bg-blue-600'
                    } text-white`}>
                      Add New Connection
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;