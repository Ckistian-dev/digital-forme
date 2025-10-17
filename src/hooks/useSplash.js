import { useContext } from 'react';
import { SplashContext } from '../context/SplashContext';

export const useSplash = () => {
  const context = useContext(SplashContext);
  if (!context) {
    throw new Error('useSplash must be used within a SplashProvider');
  }
  return context;
};
