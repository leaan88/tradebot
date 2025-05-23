import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const NotFound: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] p-6 text-center">
      <div className={`p-6 rounded-full ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
      } mb-6`}>
        <AlertCircle size={64} className="text-blue-500" />
      </div>
      <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
      <p className={`max-w-md mb-8 ${
        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
      }`}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className={`flex items-center px-6 py-3 rounded-md ${
          theme === 'dark' 
            ? 'bg-blue-600 hover:bg-blue-700' 
            : 'bg-blue-500 hover:bg-blue-600'
        } text-white transition-colors font-medium`}
      >
        <Home size={16} className="mr-2" />
        <span>Back to Dashboard</span>
      </Link>
    </div>
  );
};

export default NotFound;