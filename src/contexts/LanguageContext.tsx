import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Dashboard
    'dashboard': 'Dashboard',
    'totalProfit': 'Total Profit',
    'winRate': 'Win Rate',
    'todayPL': "Today's P/L",
    'drawdown': 'Drawdown',
    'activeTrades': 'Active Trades',
    'recentTrades': 'Recent Trades',
    'tradeDistribution': 'Trade Distribution',
    'viewAll': 'View All',
    'symbol': 'Symbol',
    'type': 'Type',
    'openPrice': 'Open Price',
    'currentPrice': 'Current',
    'profit': 'Profit',
    'duration': 'Duration',
    'buy': 'BUY',
    'sell': 'SELL',
    
    // Trading Signals
    'longSignal': 'LONG Signal',
    'shortSignal': 'SHORT Signal',
    'exitSignal': 'EXIT Signal',
    'confidence': 'Confidence',
    'tradingSuggestion': 'Trading Suggestion',
    'price': 'Price',
    'change24h': '24h Change',
    'volume': 'Volume',
    'timeframe': 'Timeframe',
    
    // Market Status
    'marketOpen': 'Market Open',
    'marketClosed': 'Market Closed',
    
    // Chart Types
    'candlestick': 'Candlestick',
    'line': 'Line Chart',
    'bar': 'Bar Chart',
    'area': 'Area Chart',
  },
  es: {
    // Dashboard
    'dashboard': 'Panel de Control',
    'totalProfit': 'Beneficio Total',
    'winRate': 'Tasa de Éxito',
    'todayPL': 'P/G del Día',
    'drawdown': 'Drawdown',
    'activeTrades': 'Operaciones Activas',
    'recentTrades': 'Operaciones Recientes',
    'tradeDistribution': 'Distribución de Operaciones',
    'viewAll': 'Ver Todo',
    'symbol': 'Símbolo',
    'type': 'Tipo',
    'openPrice': 'Precio Apertura',
    'currentPrice': 'Actual',
    'profit': 'Beneficio',
    'duration': 'Duración',
    'buy': 'COMPRA',
    'sell': 'VENTA',
    
    // Trading Signals
    'longSignal': 'Señal LARGA',
    'shortSignal': 'Señal CORTA',
    'exitSignal': 'Señal de SALIDA',
    'confidence': 'Confianza',
    'tradingSuggestion': 'Sugerencia de Trading',
    'price': 'Precio',
    'change24h': 'Cambio 24h',
    'volume': 'Volumen',
    'timeframe': 'Marco Temporal',
    
    // Market Status
    'marketOpen': 'Mercado Abierto',
    'marketClosed': 'Mercado Cerrado',
    
    // Chart Types
    'candlestick': 'Velas',
    'line': 'Gráfico Lineal',
    'bar': 'Gráfico de Barras',
    'area': 'Gráfico de Área',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'es' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};