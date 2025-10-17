import React from 'react';
import { motion } from 'framer-motion';
// NOVO: Importamos o ícone de WhatsApp da biblioteca react-icons
import { FaWhatsapp } from 'react-icons/fa';

// REMOVIDO: O componente SVG local foi completamente removido.

const FloatingWhatsApp = () => {
  const phoneNumber = '5511999998888'; // <-- SUBSTITUA PELO SEU NÚMERO
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="group fixed bottom-6 right-6 z-40">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.3 }}
        className="hidden md:flex absolute right-full mr-4 top-1/2 -translate-y-1/2 items-center"
      >
        <div className="bg-light-surface dark:bg-surface text-light-text-primary dark:text-text-primary px-4 py-2 rounded-md shadow-lg whitespace-nowrap">
          Fale Conosco!
        </div>
        <div className="w-3 h-3 bg-light-surface dark:bg-surface transform rotate-45 -ml-1.5"></div>
      </motion.div>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="relative flex items-center justify-center h-16 w-16 bg-green-500 rounded-full shadow-lg shadow-green-500/40"
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0, rotate: [0, -15, 15, -10, 10, 0] }}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 260, damping: 15, delay: 1.5, rotate: { duration: 0.5 } }}
      >
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full z-0"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div className="relative z-10">
          {/* MUDANÇA: Usamos o novo ícone <FaWhatsapp /> aqui. */}
          <FaWhatsapp className="w-8 h-8 text-white" />
        </div>
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;

