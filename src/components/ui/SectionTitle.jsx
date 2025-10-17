import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      className="text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-light-text-primary dark:text-text-primary tracking-tight">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-light-text-secondary dark:text-text-secondary">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionTitle;
