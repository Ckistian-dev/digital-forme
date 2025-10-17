import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Gem, BrainCircuit, Zap, Rocket, Flag } from 'lucide-react';

// --- ANIMAÇÕES ---
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// --- DADOS ---
const coreValues = [
  {
    icon: <Target className="h-10 w-10 text-light-primary dark:text-primary" />,
    title: 'Nossa Missão',
    description: 'Empoderar negócios com soluções de IA inovadoras, transformando dados em crescimento exponencial.',
  },
  {
    icon: <Eye className="h-10 w-10 text-light-primary dark:text-primary" />,
    title: 'Nossa Visão',
    description: 'Ser a referência global em transformação digital, criando o futuro da interação entre humanos e tecnologia.',
  },
  {
    icon: <Gem className="h-10 w-10 text-light-primary dark:text-primary" />,
    title: 'Nossos Valores',
    description: 'Inovação contínua, excelência, parceria com clientes, integridade e paixão por resolver desafios complexos.',
  },
];

const timelineData = [
    {
        icon: <Zap />,
        year: '2021',
        title: 'Fundação',
        description: 'A Digital ForMe nasce com a missão de revolucionar o mercado com IA.',
    },
    {
        icon: <Rocket />,
        year: '2023',
        title: 'Primeiro Grande Projeto',
        description: 'Entregamos nossa primeira solução de automação em larga escala para um cliente internacional.',
    },
    {
        icon: <Flag />,
        year: 'Hoje',
        title: 'Expansão e Futuro',
        description: 'Expandindo nossa equipe e portfólio, prontos para os próximos desafios da era digital.',
    },
]

// --- COMPONENTES ---
const AboutPage = () => {
  return (
    <div className="overflow-hidden bg-light-background dark:bg-background">
      {/* Seção de Introdução */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn()}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-light-text-primary dark:text-text-primary tracking-tighter">
            Sobre a <span className="text-light-primary dark:text-primary">Digital ForMe</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-light-text-secondary dark:text-text-secondary">
            Somos um coletivo de inovadores, engenheiros e estrategistas apaixonados por tecnologia, 
            convictos de que a IA é a chave para desbloquear o potencial máximo de qualquer negócio.
          </p>
        </motion.div>
      </div>

      {/* Seção de Missão, Visão e Valores com Efeito Glassmorphism */}
      <div className="py-20 md:py-28 bg-light-surface dark:bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {coreValues.map((value) => (
              <motion.div
                key={value.title}
                className="group relative p-8 rounded-xl overflow-hidden text-center md:text-left"
                variants={fadeIn()}
              >
                {/* Fundo com efeito de vidro */}
                <div className="absolute inset-0 bg-light-background/50 dark:bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl"></div>
                {/* Borda gradiente animada no hover */}
                <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                     style={{background: 'linear-gradient(to right, #00C4B4, #14F1D9, #00C4B4)'}}></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center md:justify-start mb-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-light-primary/10 dark:bg-primary/10 mx-auto">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center text-light-text-primary dark:text-text-primary mx-auto">{value.title}</h3>
                  <p className="mt-4 text-light-text-secondary dark:text-text-secondary">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* NOVA Seção de Timeline */}
      <div className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-light-text-primary dark:text-text-primary tracking-tight mb-16">
                Nossa Jornada
            </h2>
            <div className="relative max-w-2xl mx-auto">
                {/* Linha da timeline */}
                <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-light-primary/20 dark:bg-primary/20"></div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="space-y-16">
                    {timelineData.map((item, index) => (
                        <motion.div key={index} variants={fadeIn()} className="relative flex items-start gap-6">
                            <div className="absolute left-4 md:left-1/2 top-1 -translate-x-1/2 flex items-center justify-center h-8 w-8 rounded-full bg-light-surface dark:bg-surface border-2 border-light-primary dark:border-primary">
                                <div className="h-4 w-4 rounded-full bg-light-primary dark:bg-primary text-white flex items-center justify-center">{item.icon}</div>
                            </div>
                            <div className={`w-full text-left ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                                <p className="text-lg font-bold text-light-primary dark:text-primary">{item.year}</p>
                                <h3 className="text-xl font-bold text-light-text-primary dark:text-text-primary mt-1">{item.title}</h3>
                                <p className="mt-2 text-light-text-secondary dark:text-text-secondary">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
      </div>
      
      {/* Seção de Diferencial com fundo estilizado */}
      <div className="relative py-20 md:py-28 overflow-hidden">
        {/* Fundo com grade e brilho */}
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-100" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'hsl(175 96% 24% / 0.1)\'%3E%3Cpath d=\'M0 .5H31.5V32\'/%3E%3C/svg%3E")' }}></div>
        <div className="absolute top-1/2 left-1/2 w-2/3 h-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-light-primary/5 dark:bg-primary/10 blur-[150px] animate-pulse"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn()}
            >
              <BrainCircuit className="h-12 w-12 mx-auto text-light-primary dark:text-primary mb-4" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-light-text-primary dark:text-text-primary tracking-tighter">
                  Nosso Diferencial
              </h2>
              <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-light-text-secondary dark:text-text-secondary">
                  Não entregamos apenas código, entregamos inteligência. Nossa abordagem combina expertise técnica com uma profunda compreensão do seu negócio, garantindo que cada solução de IA seja perfeitamente alinhada aos seus objetivos, escalável e pronta para o futuro.
              </p>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

