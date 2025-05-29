import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

const JWT_SECRET = 'your-secret-key'; // In production, use environment variable

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwt.verify(token, JWT_SECRET) as User;
        setUser(decoded);
      } catch (error) {
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

    const isValid = await bcrypt.compare(password, storedUser.password);
    if (!isValid) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign(
      { id: storedUser.id, username: storedUser.username, email: storedUser.email },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

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

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: crypto.randomUUID(),
      username,
      email,
      password: hashedPassword
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    const token = jwt.sign(
      { id: newUser.id, username: newUser.username, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

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