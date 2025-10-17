import React, { createContext, useState, useMemo } from 'react';

export const SplashContext = createContext();

export const SplashProvider = ({ children }) => {
  const [isSplashAnimationComplete, setSplashAnimationComplete] = useState(false);

  const value = useMemo(() => ({
    isSplashAnimationComplete,
    setSplashAnimationComplete,
  }), [isSplashAnimationComplete]);

  return (
    <SplashContext.Provider value={value}>
      {children}
    </SplashContext.Provider>
  );
};
