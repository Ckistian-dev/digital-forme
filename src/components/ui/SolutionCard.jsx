import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const SolutionCard = ({ category, imgSrc, title, description, tags, link }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      // Adicionamos a classe 'group' para controlar o hover nos elementos filhos
      className="group bg-light-surface dark:bg-surface rounded-lg overflow-hidden shadow-lg flex flex-col h-full border border-transparent dark:border-primary/10"
    >
      {/* Container da imagem agora é relativo para posicionar o link */}
      <div className="relative overflow-hidden">
        <img
          src={imgSrc}
          alt={`Imagem do projeto ${title}`}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/0A192F/00C4B4?text=Imagem'; }}
        />
        {/* MUDANÇA: O link agora é uma sobreposição na imagem */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label={`Ver projeto ${title}`}
        >
          <ExternalLink className="w-12 h-12 text-white transform group-hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-sm font-semibold text-light-primary dark:text-primary mb-2">{category}</span>
        <h3 className="text-xl font-bold text-light-text-primary dark:text-text-primary mb-3">{title}</h3>
        <p className="text-light-text-secondary dark:text-text-secondary text-base flex-grow">{description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-medium bg-light-primary/10 dark:bg-primary/10 text-light-primary dark:text-primary py-1 px-3 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* MUDANÇA: A seção do link de texto foi removida daqui */}
    </motion.div>
  );
};

export default SolutionCard;

