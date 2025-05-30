import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Simple mock token generation
const generateToken = (user: Omit<User, 'id'>) => {
  return btoa(JSON.stringify({ ...user, id: crypto.randomUUID() }));
};

// Simple mock token verification
const verifyToken = (token: string): User | null => {
  try {
    return JSON.parse(atob(token));
  } catch {
    return null;
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = verifyToken(token);
      if (decoded) {
        setUser(decoded);
      } else {
        localStorage.removeItem('token');
        setUser(null);
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    // In a real app, this would be an API call
    const storedUser = JSON.parse(localStorage.getItem('users') || '[]')
      .find((u: any) => u.email === email);

    if (!storedUser) {
      throw new Error('User not found');
    }

    if (password !== storedUser.password) {
      throw new Error('Invalid password');
    }

    const token = generateToken({
      username: storedUser.username,
      email: storedUser.email
    });

    localStorage.setItem('token', token);
    setUser({ id: storedUser.id, username: storedUser.username, email: storedUser.email });
    navigate('/');
  };

  const register = async (username: string, email: string, password: string) => {
    // In a real app, this would be an API call
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.some((u: any) => u.email === email)) {
      throw new Error('Email already exists');
    }

    const newUser = {
      id: crypto.randomUUID(),
      username,
      email,
      password // In a real app, this would be hashed on the server
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    const token = generateToken({
      username: newUser.username,
      email: newUser.email
    });

    localStorage.setItem('token', token);
    setUser({ id: newUser.id, username: newUser.username, email: newUser.email });
    navigate('/');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};