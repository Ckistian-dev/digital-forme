import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import SolutionCard from '../ui/SolutionCard';

// Dados das soluções (usando placeholders de imagem)
const solutionsData = [
  {
    category: 'Inteligência Artificial',
    imgSrc: 'https://placehold.co/600x400/0A192F/00C4B4?text=IA+Preditiva',
    title: 'Análise Preditiva para E-commerce',
    description: 'Sistema de IA que analisa o comportamento do consumidor para prever tendências de compra e otimizar estoques.',
    tags: ['Python', 'TensorFlow', 'React', 'BigQuery'],
    link: '#',
  },
  {
    category: 'Automação',
    imgSrc: 'https://placehold.co/600x400/0A192F/00C4B4?text=Automação',
    title: 'Automação de Processos Financeiros',
    description: 'Plataforma que automatiza a conciliação bancária, emissão de notas e relatórios, reduzindo erros e tempo gasto.',
    tags: ['RPA', 'Node.js', 'PostgreSQL', 'AWS'],
    link: '#',
  },
  {
    category: 'Chatbots',
    imgSrc: 'https://placehold.co/600x400/0A192F/00C4B4?text=Chatbot',
    title: 'Chatbot para Atendimento ao Cliente',
    description: 'Assistente virtual com processamento de linguagem natural para responder dúvidas, agendar serviços e qualificar leads.',
    tags: ['Dialogflow', 'Firebase', 'Next.js'],
    link: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const SolutionsSection = () => {
  return (
    // O id="destaques" é mantido para o scroll do botão "Saiba Mais"
    <section id="destaques" className="py-20 bg-light-surface dark:bg-surface">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Destaques e Soluções"
          subtitle="Conheça alguns dos projetos que transformaram negócios através da tecnologia."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {solutionsData.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
