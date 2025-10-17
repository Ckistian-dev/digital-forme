import React from 'react';
import { motion } from 'framer-motion';
import LogoTransparente from '../../assets/logo-digital-forme-transparente.png';

// Recebemos a função onExitComplete para notificar quando a animação de saída termina
const SplashScreen = ({ onExitComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      onAnimationComplete={onExitComplete}
      className="fixed inset-0 z-50 flex items-center justify-center bg-light-background dark:bg-background"
    >
      {/* Container para o logo e o brilho */}
      <div className="relative flex items-center justify-center">
        {/* MUDANÇA: Adicionamos uma "aura" de luz pulsante atrás do logo */}
        <motion.div
          className="absolute w-96 h-96 bg-light-primary/20 dark:bg-primary/20 rounded-full blur-[120px] -z-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <div className="relative w-96 h-auto">
          <motion.img
            src={LogoTransparente}
            alt="Digital ForMe Logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.05, 1], opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: 1,
              repeatType: "mirror"
            }}
            className="w-96 h-auto relative z-10"
          />
          {/* Overlay com gradiente transparente */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/70 mix-blend-overlay pointer-events-none"></div>
        </div>

      </div>
    </motion.div>
  );
};

export default SplashScreen;

