import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ThemeProvider } from './context/ThemeContext';
import { SplashProvider } from './context/SplashContext'; // Importar
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SplashProvider> {/* Adicionar aqui */}
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </SplashProvider> {/* Adicionar aqui */}
  </React.StrictMode>,
);

