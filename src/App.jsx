import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { useSplash } from './hooks/useSplash';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import SplashScreen from './components/layout/SplashScreen';
import ScrollToTop from './components/ui/ScrollToTop'; // 1. Importar o novo componente

function App() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const { setSplashAnimationComplete } = useSplash();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-light-background dark:bg-background text-light-text-primary dark:text-text-primary transition-colors duration-300">
      <ScrollToTop /> {/* 2. Adicionar o componente aqui */}
      <AnimatePresence>
        {isLoading && <SplashScreen onExitComplete={() => setSplashAnimationComplete(true)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </motion.div>
      )}
    </div>
  );
}

export default App;

