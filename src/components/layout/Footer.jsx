import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // Ícone corrigido
import logoTransparente from '../../assets/logo-digital-forme-transparente.png';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Github, href: '#', name: 'Github' },
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: Twitter, href: '#', name: 'Twitter' },
];

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/sobre', label: 'Sobre Nós' },
  { path: '/servicos', label: 'Serviços' },
  { path: '/contato', label: 'Contato' },
];

const Footer = () => {
  const phoneNumber = '5511999998888';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    'Olá! Tenho interesse nos serviços da Digital ForMe.'
  )}`;

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-light-primary/10 dark:border-primary/10 bg-light-surface dark:bg-surface">
      {/* Background estilizado */}
      <div className="absolute inset-0 z-0 opacity-50 dark:opacity-100" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, hsl(175 96% 24% / 0.1), transparent 50%)'}}></div>
      <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'hsl(222 47% 11% / 0.1)\'%3E%3Cpath d=\'M0 .5H31.5V32\'/%3E%3C/svg%3E")' }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Coluna 1: Logo e Descrição */}
          <div className="md:col-span-2 space-y-4 flex flex-col items-center md:items-start">
            <img
              className="h-24 w-auto"
              src={logoTransparente}
              alt="Digital ForMe Logo"
            />
            <p className="text-light-text-secondary dark:text-text-secondary max-w-xs">
              Transformando ideias em realidade digital com o poder da Inteligência Artificial.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-light-text-secondary dark:text-text-secondary hover:text-light-primary dark:hover:text-primary"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="text-lg font-bold text-light-text-primary dark:text-text-primary tracking-wider">Navegação</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.path}
                    className="text-light-text-secondary dark:text-text-secondary hover:text-light-primary dark:hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato Rápido */}
          <div>
            <h3 className="text-lg font-bold text-light-text-primary dark:text-text-primary tracking-wider">Contato</h3>
            <div className="mt-4 space-y-3">
              <a href="mailto:contato@digitalforme.com" className="block text-light-text-secondary dark:text-text-secondary hover:text-light-primary dark:hover:text-primary transition-colors">
                contato@digitalforme.com
              </a>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md font-semibold shadow-lg shadow-green-500/20"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Chamar no WhatsApp
              </motion.a>
            </div>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="mt-16 pt-8 border-t border-light-primary/10 dark:border-primary/10 text-center text-light-text-secondary dark:text-text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} Digital ForMe. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

