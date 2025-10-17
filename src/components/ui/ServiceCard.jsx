import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={fadeIn}
      className="group relative p-8 h-full rounded-xl overflow-hidden bg-light-surface dark:bg-surface border border-transparent dark:border-white/10 transition-all duration-300"
    >
      {/* Efeito de brilho no hover */}
      <div 
        className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'radial-gradient(400px circle at 50% 100%, hsl(175 96% 24% / 0.5), transparent 60%)' }}
      ></div>
      {/* Borda gradiente no hover */}
      <div 
        className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to top, #00C4B4, transparent)' }}
      ></div>

      <div className="relative z-10">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-light-primary/10 dark:bg-primary/10 mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-light-text-primary dark:text-text-primary">{title}</h3>
        <p className="mt-4 text-light-text-secondary dark:text-text-secondary">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

