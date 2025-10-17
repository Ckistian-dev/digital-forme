import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useSplash } from '../../hooks/useSplash';

const containerVariants = (delay) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: delay, // Atraso dinâmico
    },
  },
});

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Componente para as partículas de fundo
const Particles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => {
      const size = Math.floor(Math.random() * (5 - 2) + 2);
      const style = {
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.floor(Math.random() * 100)}%`,
        animationDuration: `${Math.floor(Math.random() * (30 - 10) + 10)}s`,
        animationDelay: `${Math.floor(Math.random() * (10 - 0) + 0)}s`,
      };
      return <div key={i} className="particle bg-primary/50" style={style} />;
    });
  }, []);
  return <div className="absolute inset-0 z-10 overflow-hidden">{particles}</div>;
};

const Hero = () => {
  const { isSplashAnimationComplete } = useSplash();

  return (
    <div className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-light-background dark:bg-background">
      {/* Background estilizado */}
      <div className="absolute inset-0 z-0 opacity-50 dark:opacity-100" style={{ backgroundImage: 'radial-gradient(circle, hsl(175 96% 24% / 0.1), transparent 70%)'}}></div>
      <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'hsl(222 47% 11% / 0.1)\'%3E%3Cpath d=\'M0 .5H31.5V32\'/%3E%3C/svg%3E")' }}></div>
      <Particles />

      {/* Conteúdo */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-20"
        variants={containerVariants(isSplashAnimationComplete ? 0.2 : 0)}
        initial="hidden"
        animate={isSplashAnimationComplete ? 'visible' : 'hidden'}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-light-text-primary dark:text-text-primary tracking-tighter"
          variants={itemVariants}
        >
          Soluções Digitais com
          <br />
          <span className="text-light-primary dark:text-primary [text-shadow:0_0_15px_hsl(175_100%_50%_/_0.5)]">
            Inteligência Artificial
          </span>
        </motion.h1>

        <motion.div className="mt-6 max-w-xl mx-auto" variants={itemVariants}>
           <h2 className="font-mono text-lg md:text-xl text-light-text-secondary dark:text-text-secondary overflow-hidden whitespace-nowrap mx-auto border-r-4 border-r-light-text-primary/75 dark:border-r-white/75 animate-typewriter">
            Innovate. Create. Transform.
          </h2>
        </motion.div>

        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-light-text-secondary dark:text-text-secondary"
          variants={itemVariants}
        >
          Nós criamos o futuro da tecnologia, desenvolvendo sistemas inteligentes
          e automatizados para alavancar o seu negócio.
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-10 flex justify-center">
          <motion.a
            href="#destaques"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-light-primary dark:bg-primary text-white rounded-md text-lg font-bold transition-all duration-300 shadow-lg shadow-light-primary/30 dark:shadow-primary/30"
          >
            Saiba Mais
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

