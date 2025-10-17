import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage'; // Importando a nova página "Contato"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'sobre',
        element: <AboutPage />,
      },
      {
        path: 'servicos',
        element: <ServicesPage />,
      },
      {
        path: 'contato',
        element: <ContactPage />, // Usando o componente de página real
      },
    ],
  },
]);

export default router;

