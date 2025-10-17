import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../../assets/logo-digital-forme.png';

// ... (código das variantes continua o mesmo)
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Contato', path: '/contato' },
];

const iconVariants = {
  initial: { opacity: 0, rotate: -180, scale: 0.5 },
  animate: { opacity: 1, rotate: 0, scale: 1 },
  exit: { opacity: 0, rotate: 180, scale: 0.5 },
  transition: { duration: 0.3, ease: 'easeInOut' },
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: '-100%',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      when: 'afterChildren',
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    // CORREÇÃO AQUI
    <nav className="sticky top-0 z-40 w-full bg-light-surface dark:bg-background text-light-text-primary dark:text-text-primary backdrop-blur-sm border-b border-black/10 dark:border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <img
              src={Logo}
              alt="Digital ForMe"
              className="h-16 lg:h-20 w-auto"
              style={{
                maskImage: 'radial-gradient(circle, black 70%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle, black 70%, transparent 100%)',
              }}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                // CORREÇÃO AQUI
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-300 ${isActive
                    ? 'text-light-primary dark:text-primary'
                    : 'text-light-text-secondary dark:text-text-secondary hover:text-light-primary dark:hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        // CORREÇÃO AQUI
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-light-primary dark:bg-primary"
                        layoutId="underline"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex md:hidden items-center">
            {/* CORREÇÃO AQUI */}
            <button onClick={() => setIsOpen(!isOpen)} className="ml-4 text-light-text-primary dark:text-text-primary">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" {...iconVariants}><X /></motion.div>
                ) : (
                  <motion.div key="menu" {...iconVariants}><Menu /></motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            // CORREÇÃO AQUI
            className="md:hidden absolute top-full left-0 w-full bg-light-surface dark:bg-surface border-b border-black/10 dark:border-white/10"
          >
            <div className="px-5 pt-2 pb-5 space-y-1">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={mobileLinkVariants}>
                  <NavLink
                    to={link.path}
                    onClick={closeMenu}
                    // CORREÇÃO AQUI
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive
                        ? 'bg-primary/10 text-light-primary dark:text-primary'
                        : 'text-light-text-secondary dark:text-text-secondary hover:bg-light-primary/5 hover:text-light-primary dark:hover:text-primary'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

