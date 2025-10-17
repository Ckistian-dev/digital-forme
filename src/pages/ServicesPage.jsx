import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Bot, Repeat, Code, Search, Zap, Rocket, Star } from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';
import SectionTitle from '../components/ui/SectionTitle';

// --- ANIMAÇÕES ---
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

// --- DADOS ---
const services = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-light-primary dark:text-primary" />,
    title: 'IA Sob Medida',
    description: 'Desenvolvemos modelos de machine learning e deep learning personalizados para resolver os desafios específicos do seu negócio.',
  },
  {
    icon: <Repeat className="h-10 w-10 text-light-primary dark:text-primary" />,
    title: 'Automação Inteligente (RPA)',
    description: 'Automatizamos tarefas manuais e repetitivas com robôs de software (RPA) turbinados com IA, liberando sua equipe para focar em atividades estratégicas.',
  },
  {
    icon: <Bot className="h-10 w-10 text-light-primary dark:text-primary" />,
    title: 'Chatbots e Assistentes Virtuais',
    description: 'Criamos assistentes virtuais inteligentes que oferecem atendimento 24/7, melhoram a experiência do cliente e aumentam a eficiência.',
  },
  {
    icon: <Code className="h-10 w-10 text-light-primary dark:text-primary" />,
    title: 'Sistemas Web com IA',
    description: 'Projetamos e construímos sistemas web robustos e escaláveis que já nascem com a inteligência artificial integrada para a nova geração da internet.',
  },
];

const processSteps = [
    { icon: <Search/>, title: '1. Descoberta', description: 'Analisamos seus desafios e objetivos para definir a melhor estratégia.' },
    { icon: <Zap/>, title: '2. Desenvolvimento', description: 'Nossa equipe de especialistas constrói a solução com tecnologia de ponta.' },
    { icon: <Rocket/>, title: '3. Lançamento', description: 'Implementamos a solução no seu ambiente e garantimos a integração.' },
    { icon: <Star/>, title: '4. Evolução', description: 'Monitoramos os resultados e propomos melhorias contínuas.' },
]

// --- COMPONENTE ---
const ServicesPage = () => {
  return (
    <div className="overflow-hidden bg-light-background dark:bg-background">
      {/* Seção de Introdução */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn()}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-light-text-primary dark:text-text-primary tracking-tighter">
            Nossas <span className="text-light-primary dark:text-primary">Soluções</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-light-text-secondary dark:text-text-secondary">
            Da automação à inteligência artificial generativa, criamos as ferramentas que
            colocam sua empresa na vanguarda da inovação tecnológica.
          </p>
        </motion.div>
      </div>

      {/* Grid de Serviços */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </div>

      {/* Seção "Nosso Processo" */}
      <div className="py-20 md:py-28 bg-light-surface dark:bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Nosso Processo de Inovação" subtitle="Seguimos uma metodologia ágil e transparente para garantir resultados de excelência."/>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {processSteps.map((step, index) => (
                    <motion.div key={index} variants={fadeIn()} className="text-center p-6">
                        <div className="flex items-center justify-center mx-auto h-16 w-16 rounded-full border-2 border-light-primary dark:border-primary text-light-primary dark:text-primary mb-6">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-light-text-primary dark:text-text-primary">{step.title}</h3>
                        <p className="mt-2 text-light-text-secondary dark:text-text-secondary">{step.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </div>

      {/* Seção CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn()}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-light-text-primary dark:text-text-primary">
            Vamos transformar sua ideia em realidade?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-light-text-secondary dark:text-text-secondary">
            Entre em contato e descubra como a Digital ForMe pode impulsionar seu negócio.
          </p>
          <motion.a
            href="/contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 px-8 py-4 bg-light-primary dark:bg-primary text-white rounded-md text-lg font-bold transition-all duration-300 shadow-lg shadow-light-primary/30 dark:shadow-primary/30"
          >
            Fale com um especialista
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;

