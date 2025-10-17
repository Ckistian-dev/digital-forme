import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import { MessageSquare, User } from 'lucide-react';

// Schema de validação (sem alterações)
const whatsappSchema = z.object({
  name: z.string().min(3, { message: 'Por favor, insira seu nome.' }),
  service: z.string().refine(value => value !== "", { message: "Por favor, selecione um serviço." }),
});

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(whatsappSchema),
  });

  const onSubmit = (data) => {
    const phoneNumber = '5511999998888'; // <-- SUBSTITUA PELO SEU NÚMERO
    const message = `Olá! 👋
Meu nome é *${data.name}*.
Gostaria de saber mais sobre o serviço de *${data.service}*. 🤖
Poderíamos conversar?`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    // MUDANÇA: O container principal agora ocupa a tela inteira e centraliza o conteúdo no mobile.
    <div className="flex min-h-screen flex-col items-center justify-center bg-light-background dark:bg-background px-4 pt-24 pb-12 md:py-28">
      <div className="w-full max-w-3xl">
        <motion.div 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* MUDANÇA: Título levemente menor no mobile para melhor encaixe. */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-light-text-primary dark:text-text-primary tracking-tighter">
            Vamos Inovar <span className="text-light-primary dark:text-primary">Juntos?</span>
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-light-text-secondary dark:text-text-secondary">
            É simples e rápido! Preencha os campos e fale conosco diretamente no WhatsApp.
          </p>
        </motion.div>

        <motion.div 
          className="mt-8 md:mt-12 w-full max-w-lg mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 p-6 md:p-8 bg-light-surface dark:bg-surface rounded-lg shadow-xl"
          >
            <Input 
              name="name" 
              placeholder="Seu nome" 
              register={register} 
              errors={errors} 
              icon={<User />}
            />
            
            <Select 
              name="service" 
              label="Selecione um serviço" 
              register={register} 
              errors={errors}
            >
              <option value="">Qual serviço te interessa?</option>
              <option value="Desenvolvimento de IA">🤖 Desenvolvimento de IA</option>
              <option value="Automação de Processos">⚙️ Automação de Processos</option>
              <option value="Chatbots Inteligentes">💬 Chatbots Inteligentes</option>
              <option value="Sistemas Sob Medida">🖥️ Sistemas Sob Medida</option>
            </Select>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white font-bold rounded-md transition-all duration-300 shadow-lg shadow-green-500/30"
            >
              <MessageSquare />
              Conversar no WhatsApp
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;

