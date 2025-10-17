import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Este componente garante que a página role para o topo sempre que a rota mudar.
const ScrollToTop = () => {
  // O hook useLocation nos dá acesso ao objeto de localização atual.
  // Nós desestruturamos para pegar o `pathname`, que é a parte da URL após o domínio (ex: "/sobre").
  const { pathname } = useLocation();

  // O useEffect é acionado sempre que o valor no seu array de dependências ([pathname]) muda.
  useEffect(() => {
    // A cada mudança de `pathname`, este comando é executado.
    window.scrollTo(0, 0);
  }, [pathname]); // O efeito depende do pathname.

  // O componente não precisa renderizar nada na tela, então retornamos null.
  return null;
};

export default ScrollToTop;
