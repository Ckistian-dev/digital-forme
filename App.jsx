import React, { useState, useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import api from './axiosConfig';
import { 
  Zap, 
  CheckCircle2, 
  MessageSquare, 
  BrainCircuit, 
  TrendingUp,
  ChevronRight,
  Sparkles,
  RefreshCcw,
  Target,
  Shield,
  Scale,
  X,
  Crown,
  MessagesSquare,
  Menu
} from 'lucide-react';

// --- Components ---

const StickyTopBar = () => (
  <div className="fixed top-0 left-0 right-0 z-[100] bg-[#1A237E] py-2 px-4 border-b border-[#C5A059]/30 text-center min-h-[40px] max-w-full flex items-center justify-center">
    <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#C5A059] leading-tight">
      ⚡ Oportunidade de Lançamento: Vagas LIMITADAS com Investimento Revertido em Créditos de Conversa. Garanta sua vaga hoje.
    </p>
  </div>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState((63 * 3600) + (12 * 60)); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : (63 * 3600) + (12 * 60)));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return {
      h: h.toString().padStart(2, '0'),
      m: m.toString().padStart(2, '0'),
      s: s.toString().padStart(2, '0'),
    };
  };

  const { h, m, s } = formatTime(timeLeft);

  return (
    <div className="flex flex-col items-center gap-3 my-4 md:my-10">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A237E]/60 mb-2 text-center px-4">A oferta de reversão de créditos encerra em:</p>
      <div className="flex gap-3 md:gap-4">
        {[
          { label: 'Horas', value: h },
          { label: 'Minutos', value: m },
          { label: 'Segundos', value: s },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="glass w-12 h-12 md:w-20 md:h-20 rounded-[14px] md:rounded-[22px] flex items-center justify-center border border-[#C5A059]/30 shadow-2xl">
              <span className="text-lg md:text-4xl font-black text-[#1A237E] tracking-tighter">{item.value}</span>
            </div>
            <span className="text-[8px] md:text-[9px] font-bold uppercase mt-2 text-[#C5A059] tracking-widest">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const WhatsAppSim = () => {
  const scrollRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const script = [
    { sender: 'client', text: 'Boa noite! Vi o anúncio de vocês no Instagram agora. Ainda tem alguém aí?' },
    { sender: 'ai', text: 'Com certeza! 🚀 Aqui na Digital ForMe o atendimento nunca para. Como posso ajudar seu negócio a escalar agora mesmo?' },
    { sender: 'client', text: 'Caramba, que velocidade! Mas esse atendimento não fica muito robótico? Tenho receio dos meus clientes não gostarem.' },
    { sender: 'ai', text: 'Entendo perfeitamente! Nossa IA não é um chatbot comum; ela estuda seus manuais e aprende seu tom de voz exato. É um atendimento humanizado que quebra objeções e tira dúvidas de forma instantânea, como se fosse você mesmo.' },
    { sender: 'client', text: 'Interessante... e como funciona essa questão do investimento revertido em créditos? É real ou tem pegadinha?' },
    { sender: 'ai', text: 'Totalmente real! Cada centavo da sua mensalidade volta como saldo para você conversar com novos leads. Você investe na tecnologia e ganha o fôlego comercial que precisa sem taxas ocultas!' },
    { sender: 'client', text: 'Gostei da transparência. Vou querer testar essa simulação viva então.' },
    { sender: 'ai', text: 'Excelente decisão! Vamos colocar seu negócio no topo. Me diga, qual o nome da sua empresa?' }
  ];

  useEffect(() => {
    setMessages([]);
    let currentIdx = 0;
    let timeoutId;
    let isMounted = true;
    
    const runSimulation = () => {
      if (!isMounted) return;

      if (currentIdx < script.length) {
        const msg = script[currentIdx];
        
        if (msg.sender === 'client') {
          setMessages(prev => [...prev, msg]);
          currentIdx++;
          timeoutId = setTimeout(runSimulation, 1500);
        } else {
          setIsTyping(true);
          timeoutId = setTimeout(() => {
            if (!isMounted) return;
            setIsTyping(false);
            setMessages(prev => [...prev, msg]);
            currentIdx++;
            timeoutId = setTimeout(runSimulation, 2500);
          }, 4000);
        }
      } else {
        timeoutId = setTimeout(() => {
          if (!isMounted) return;
          setMessages([]);
          currentIdx = 0;
          runSimulation();
        }, 5000);
      }
    };

    runSimulation();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  return (
    <div ref={scrollRef} className="absolute inset-0 p-4 md:p-10 flex flex-col gap-3 md:gap-5 overflow-y-auto no-scrollbar">
      <div className="wa-background"></div>
      {messages.map((msg, i) => (
        <div 
          key={i} 
          className={`max-w-[85%] md:max-w-[75%] p-4 md:p-5 rounded-[22px] text-sm md:text-[15px] shadow-xl animate-fade-in-up relative z-10 ${
            msg.sender === 'client' 
              ? 'bg-white self-start rounded-tl-none border border-slate-100 text-slate-800' 
              : 'bg-[#DCF8C6] self-end rounded-tr-none border border-[#bede9f] text-slate-900 shadow-[#DCF8C6]/20'
          }`}
        >
          <p className="font-medium leading-[1.6]">{msg.text}</p>
        </div>
      ))}
      {isTyping && (
        <div className="bg-[#DCF8C6] self-end rounded-[22px] rounded-tr-none border border-[#bede9f] p-4 shadow-xl relative z-10 animate-fade-in-up">
          <div className="flex gap-1.5">
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
          </div>
        </div>
      )}
    </div>
  );
};

const FloatingWhatsApp = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5500000000000";

  return (
    <a 
      href={`https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Digital%20ForMe.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[120] hover:scale-110 transition-transform duration-300 group"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
      <div className="bg-[#25D366] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(37,211,102,0.4)] border-2 border-white relative z-10">
        <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-9 md:h-9 fill-white" xmlns="http://www.w3.org/2000/svg">
           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </div>
    </a>
  );
};

const NotificationToast = () => {
  const [visible, setVisible] = useState(false);
  const [isPermanentlyHidden, setIsPermanentlyHidden] = useState(false);
  const [currentMsg, setCurrentMsg] = useState(0);
  
  const messages = [
    "Mais uma empresa acaba de recuperar um lead perdido.",
    "Nova automação ativada para setor de vendas agora mesmo.",
    "Atendimento finalizado com sucesso via IA para novo cliente.",
    "Agendamento automático realizado com sucesso para lead qualificado.",
    "Base de clientes inativos reativada com sucesso para empresa parceira.",
    "Conversão realizada através de diálogo inteligente agora há pouco."
  ];

  useEffect(() => {
    if (isPermanentlyHidden) return;
    
    const timer = setTimeout(() => {
      if (!isPermanentlyHidden) setVisible(true);
    }, 5000);

    const interval = setInterval(() => {
      if (isPermanentlyHidden) return;
      setVisible(false);
      setTimeout(() => {
        if (isPermanentlyHidden) return;
        setCurrentMsg((prev) => (prev + 1) % messages.length);
        setVisible(true);
      }, 1000);
    }, 15000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [isPermanentlyHidden]);

  const handleClose = (e) => {
    e.stopPropagation();
    setVisible(false);
    setIsPermanentlyHidden(true);
  };

  if (isPermanentlyHidden || (!visible && currentMsg === 0)) return null;

  return (
    <div className={`fixed bottom-4 left-4 right-auto max-w-[calc(100%_-_120px)] md:max-w-none md:left-8 md:bottom-8 z-[110] transition-all duration-1000 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
      <div className="backdrop-blur-2xl bg-white/95 px-5 py-4 md:px-7 md:py-5 rounded-[20px] md:rounded-[28px] shadow-[0_30px_70px_rgba(26,35,126,0.22)] border border-[#C5A059]/40 flex items-center gap-4 md:gap-5 relative pr-12 md:pr-14 group w-auto">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#1A237E]/30 hover:text-[#1A237E] transition-all p-1.5 rounded-full hover:bg-slate-100"
        >
          <X size={18} />
        </button>
        <div className="max-w-[280px]">
          <p className="text-[10px] font-black uppercase text-[#C5A059] tracking-[0.2em] mb-0.5 opacity-80">Notificação</p>
          <p className="text-[12px] font-bold text-[#1A237E] leading-snug tracking-tight">{messages[currentMsg]}</p>
        </div>
      </div>
    </div>
  );
};

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href,
  target,
  ...props
}) => {
  const baseStyles = "btn-shine px-6 py-4 md:px-10 md:py-5 rounded-[20px] md:rounded-[24px] font-black transition-all duration-500 flex items-center justify-center gap-3 active:scale-95 text-xs md:text-sm uppercase tracking-widest mx-auto";
  const variants = {
    primary: "bg-[#C5A059] text-white hover:bg-[#b08e4d] shadow-xl shadow-[#C5A059]/20",
    secondary: "bg-[#1A237E] text-white hover:bg-[#151c66] shadow-xl shadow-[#1A237E]/20",
    outline: "border-[2px] border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059]/5 font-black",
    glow: "bg-[#C5A059] text-white hover:bg-[#b08e4d] shadow-[0_0_50px_rgba(197,160,89,0.5)] transform hover:-translate-y-1.5"
  };
  
  if (href) {
    return (
      <a href={href} target={target} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Section = ({ children, className = "", id = "", dark = false }) => (
  <section id={id} className={`py-6 md:py-[120px] px-4 md:px-6 ${dark ? 'bg-[#1A237E] text-white' : ''} ${className} scroll-mt-24 md:scroll-mt-32`}>
    <div className="max-w-7xl mx-auto overflow-visible">
      {children}
    </div>
  </section>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-[40px] md:top-[48px] left-0 right-0 z-[90] transition-all duration-700 px-2 md:px-6 w-full my-5`}>
        <div className={`max-w-7xl mx-auto h-14 md:h-20 rounded-[20px] md:rounded-[30px] backdrop-blur-3xl bg-white/75 px-4 md:px-10 flex items-center justify-between transition-all ${isScrolled ? 'shadow-2xl translate-y-[-4px] md:translate-y-[-8px] border-[#C5A059]/30 border' : 'py-3 md:py-4'}`}>
          <a href="#inicio" className="flex items-center gap-2 relative z-[100]">
            <span className="font-black text-sm md:text-2xl tracking-tighter text-[#1A237E] leading-tight">
              Digital ForMe <span className="text-[#C5A059] block md:inline text-[10px] md:text-2xl">| CJS Soluções</span>
            </span>
          </a>
          
          <div className="hidden lg:flex items-center gap-10">
            <a href="#como-funciona" className="text-xs font-black text-[#1A237E]/70 hover:text-[#C5A059] transition-all uppercase tracking-[0.2em]">Como Funciona</a>
            <a href="#planos" className="text-xs font-black text-[#1A237E]/70 hover:text-[#C5A059] transition-all uppercase tracking-[0.2em]">Valores</a>
            <Button variant="secondary" href="#teste" className="py-3 px-8 text-[11px] mx-0 rounded-[18px]">Teste Grátis</Button>
          </div>

          <div className="lg:hidden flex items-center gap-3 relative z-[100]">
             <Button variant="secondary" href="#teste" className="py-[10px] px-4 text-[8px] mx-0 rounded-[12px] shadow-none">Teste Grátis</Button>
             <button 
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'bg-[#1A237E] text-white rotate-90' : 'bg-[#1A237E]/5 text-[#1A237E]'}`}
             >
               {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
             </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[88] bg-[#050A24]/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-[#C5A059]/20 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#1A237E]/30 blur-[100px] rounded-full"></div>
         </div>

         <div className={`flex flex-col items-center gap-8 w-full max-w-xs transition-all duration-700 delay-100 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-white tracking-tighter mb-4">
              Digital ForMe <span className="text-[#C5A059]">.</span>
            </a>

            <nav className="flex flex-col items-center gap-6 w-full">
              <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-white/80 hover:text-[#C5A059] transition-colors uppercase tracking-widest w-full text-center py-4 border-b border-white/5">
                Como Funciona
              </a>
              <a href="#planos" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-white/80 hover:text-[#C5A059] transition-colors uppercase tracking-widest w-full text-center py-4 border-b border-white/5">
                Valores
              </a>
            </nav>

            <div className="mt-8 w-full">
              <Button variant="glow" href="#teste" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-6 text-base">
                Começar Agora
              </Button>
              <p className="text-white/30 text-[10px] text-center mt-6 uppercase tracking-widest">
                CJS Soluções
              </p>
            </div>
         </div>
      </div>
    </>
  );
};

const TrustSection = () => (
  <div className="py-6 md:py-10 border-y border-slate-100 bg-slate-50/50">
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-[#1A237E]/40 mb-8">
        Tecnologia de Elite Integrada com
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Logos placeholders - replace with actual paths */}
        <img src="/logos/openai.svg" alt="OpenAI" className="h-6 md:h-8" onError={(e) => e.target.style.display='none'} />
        <img src="/logos/meta.svg" alt="Meta" className="h-6 md:h-8" onError={(e) => e.target.style.display='none'} />
        <img src="/logos/aws.svg" alt="AWS" className="h-6 md:h-8" onError={(e) => e.target.style.display='none'} />
        <img src="/logos/stripe.svg" alt="Stripe" className="h-6 md:h-8" onError={(e) => e.target.style.display='none'} />
      </div>
    </div>
  </div>
);

const ObjectionHandling = () => (
  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10 md:mb-20">
    {[
      { icon: MessageSquare, title: "Parece humano?", text: "Sim, usamos tecnologia de linguagem natural avançada." },
      { icon: Zap, title: "É difícil configurar?", text: "Não, nossa equipe faz o onboarding pesado para você." },
      { icon: Target, title: "Funciona no meu nicho?", text: "A IA aprende sobre qualquer produto ou serviço." }
    ].map((item, i) => (
      <div key={i} className="flex flex-col items-center text-center p-6 rounded-[32px] bg-white/60 border border-slate-100 shadow-lg backdrop-blur-sm">
        <div className="w-12 h-12 bg-[#1A237E]/5 rounded-2xl flex items-center justify-center text-[#1A237E] mb-4">
          <item.icon size={24} />
        </div>
        <h4 className="text-lg font-black text-[#1A237E] mb-2">{item.title}</h4>
        <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.text}</p>
      </div>
    ))}
  </div>
);

const PlanCard = ({ title, price, features, variant = 'standard', subtitle = "", percent = "", description = "", ctaText = "Teste Grátis", popular = false, savings = "", dailyCost = "" }) => {
  const isElite = variant === 'elite';
  const isHighlighted = variant === 'highlighted';

  const cardStyles = {
    standard: "backdrop-blur-3xl bg-white/70 border-slate-200 shadow-2xl text-[#1A237E]",
    highlighted: "backdrop-blur-3xl bg-white/80 border-[#C5A059]/40 shadow-2xl scale-105 z-10 text-[#1A237E]",
    elite: "bg-[#050A24] border-2 border-[#C5A059] shadow-[0_40px_100px_rgba(5,10,36,0.5)] text-white"
  };

  return (
    <div className={`p-6 md:p-10 rounded-[32px] md:rounded-[56px] flex flex-col h-full transition-all duration-700 border text-center items-center relative ${cardStyles[variant]}`}>
      {popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#1A237E] text-[#C5A059] px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl border border-[#C5A059]/40 z-20">
          Popular
        </div>
      )}
      <div className="mb-8">
        <div className={`inline-block px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border shadow-lg ${isElite ? 'bg-[#C5A059] text-white border-[#C5A059]/60' : 'bg-[#C5A059]/10 text-[#C5A059] border-[#C5A059]/30'}`}>
          OFERTA: <span className={`text-xl ${isElite ? 'text-white' : 'text-[#C5A059]'} gold-text-glow ml-2`}>{percent}</span> REVERTIDO EM CRÉDITOS NO 1º ANO
        </div>
        <h3 className={`text-3xl md:text-4xl font-black mb-2 tracking-tighter leading-none`}>{title}</h3>
        <p className={`text-[10px] font-bold uppercase tracking-[0.4em] mb-4 ${isElite ? 'text-[#C5A059]' : 'text-slate-400'}`}>{subtitle}</p>
        {description && <p className={`text-xs font-medium leading-relaxed px-4 ${isElite ? 'text-blue-100/60' : 'text-slate-500'}`}>{description}</p>}
      </div>
      
      <div className="flex flex-col items-center mb-10">
        {savings && (
           <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3">
             {savings}
           </div>
        )}
        <div className="flex items-baseline gap-2">
          {isElite && <span className="text-sm font-bold opacity-60 mr-1 text-[#C5A059]">a partir de</span>}
          <span className="text-xl font-bold opacity-50">R$</span>
          <span className="text-4xl md:text-7xl font-black tracking-tighter">{price}</span>
          <span className="text-lg font-bold opacity-50">/mês</span>
        </div>
        {isElite && <p className="text-[11px] font-black uppercase tracking-[0.2em] mt-2 text-[#C5A059] animate-pulse">(Vagas Limitadas)</p>}
        {dailyCost && <p className="text-[11px] font-bold text-slate-400 mt-2">{dailyCost}</p>}
      </div>

      <ul className="space-y-4 mb-14 flex-grow w-full text-left">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-4 text-[13px] font-bold italic leading-tight">
            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${isElite ? 'text-[#C5A059]' : 'text-[#C5A059]'}`} />
            <span className={isElite ? 'text-blue-50' : 'text-slate-600'}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        variant={isElite ? 'glow' : (isHighlighted ? 'secondary' : 'outline')} 
        className="w-full" 
        href={isElite ? "https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20falar%20com%20um%20estrategista%20sobre%20o%20Plano%20Elite%20Studio." : "#teste"}
        target={isElite ? "_blank" : "_self"}
      >
        {ctaText}
      </Button>
    </div>
  );
};

// --- Main Application ---

export default function App() {
  const [formState, setFormState] = useState({ description: '', phone: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    
    setFormState({ ...formState, phone: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let phone = formState.phone.replace(/\D/g, '');
      if (phone.length === 11) {
        phone = phone.slice(0, 2) + phone.slice(3);
      }

      const payload = {
        whatsapp: `55${phone}`, // Remove formatação, envia apenas números
        company_description: formState.description,
      };

      // Ajuste a rota '/landingpage/setup' conforme a configuração do seu roteador no backend (ex: prefixo /api/v1)
      const response = await api.post('/landingpage/setup', payload);

      if (response.status === 200) {
        const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
        if (whatsappNumber) {
          const message = `Olá! Quero ver minha IA vendendo agora. Empresa: ${formState.description.substring(0, 50)}...`;
          window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        }
        setFormState({ description: '', phone: '' });
      }
    } catch (error) {
      console.error("Erro ao enviar simulação:", error);
      alert('Houve um erro ao processar sua solicitação. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-[#C5A059] selection:text-white" id="inicio">
      <StickyTopBar />
      <NotificationToast />
      <FloatingWhatsApp />
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-[110px] md:pt-[260px] text-center relative">
        <h1 className="text-3xl md:text-5xl lg:text-[80px] font-black text-[#1A237E] tracking-tighter mb-4 md:mb-10 max-w-6xl mx-auto leading-[0.95] px-4 mt-5">
          Transforme seu WhatsApp em uma <span className="text-[#C5A059] block mt-4 gold-text-glow">Máquina de Vendas 24h</span> que atende, qualifica e fecha pedidos sozinho.
        </h1>
        <p className="text-xl md:text-2xl text-[#1A237E]/70 max-w-4xl mx-auto mb-6 md:mb-12 leading-relaxed font-light px-4">
          Instalação em 15 minutos. Sem precisar programar nada. <span className="text-[#1A237E] font-extrabold">Comece a lucrar enquanto dorme.</span>
        </p>
        
        <CountdownTimer />

        <div className="flex flex-col items-center justify-center gap-8 px-4 mt-8 md:mt-14">
          <Button variant="glow" href="#planos">Ativar meu Especialista</Button>
          <Button variant="outline" href="#teste">Simular IA agora</Button>
        </div>
        <p className="text-[10px] font-bold text-[#1A237E]/40 uppercase tracking-widest mt-6">
          ✓ Teste grátis hoje • ✓ Sem cartão de crédito • ✓ Cancele quando quiser
        </p>
        
        {/* Visual Cue - REFINED DASHBOARD PREVIEW */}
        <div className="mt-10 md:mt-48 relative max-w-7xl mx-auto px-0 md:px-6 pb-12">
          <div className="absolute -inset-16 bg-gradient-to-r from-[#C5A059]/15 via-transparent to-[#1A237E]/15 blur-[120px] -z-10"></div>
          
          <div className="backdrop-blur-3xl bg-white/40 rounded-[32px] md:rounded-[72px] p-2 md:p-5 shadow-[0_100px_200px_-50px_rgba(26,35,126,0.35)] border border-white/60 overflow-hidden relative flex flex-col">
            
            {/* Dashboard Application Bar */}
            <div className="h-auto py-3 md:py-0 md:h-20 glass flex items-center justify-between px-4 md:px-12 rounded-t-[24px] md:rounded-t-[56px] border border-white/30 border-b-0 relative z-30">
                <div className="flex items-center gap-3 md:gap-5">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1A237E] rounded-[14px] md:rounded-[18px] flex items-center justify-center text-[#C5A059] shadow-2xl border border-white/10 flex-shrink-0">
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-black text-[#1A237E] tracking-tighter leading-none">Atende.AI</h3>
                    <p className="text-[8px] md:text-[10px] font-black text-green-600 flex items-center gap-1.5 md:gap-2 mt-1 md:mt-2 uppercase tracking-[0.2em]">
                      <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                      Operação Ativa de Conversão
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-3 opacity-40">
                  <div className="w-3 h-3 rounded-full bg-[#1A237E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#1A237E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#1A237E]"></div>
                </div>
            </div>

            {/* Chat Area Container */}
            <div className="bg-[#E5DDD5] rounded-b-[24px] md:rounded-b-[56px] h-[500px] md:h-auto md:aspect-video relative overflow-hidden border border-slate-200 shadow-inner">
               <WhatsAppSim />
            </div>
          </div>
        </div>
      </Section>

      <TrustSection />

      {/* Atendimento 360 Section */}
      <Section id="como-funciona">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-8 md:mb-28">
            <h2 className="text-4xl md:text-7xl font-black text-[#1A237E] tracking-tighter mb-10 text-center mx-auto">Ecosistema <span className="text-[#C5A059]">360</span></h2>
            <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto text-center leading-relaxed">
              Sua operação comercial unificada em um ciclo infinito de atração e conversão automática através de diálogos inteligentes.
            </p>
          </div>

          <ObjectionHandling />

          <div className="grid md:grid-cols-2 gap-16 relative items-stretch">
            {/* Connection Visual */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C5A059]/15 blur-[120px] rounded-full hidden md:block"></div>
            <div className="absolute top-1/2 left-[calc(50%-1.75rem)] -translate-y-1/2 z-10 hidden md:block">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl border border-slate-100">
                <RefreshCcw className="text-[#C5A059] animate-spin" style={{ animationDuration: '7s' }} size={28} />
              </div>
            </div>

            {/* ATENDE.AI */}
            <div className="backdrop-blur-3xl bg-white/70 p-6 md:p-14 rounded-[32px] md:rounded-[64px] border border-slate-200 shadow-2xl flex flex-col items-center text-center transform transition-all hover:scale-[1.03] hover:border-[#C5A059]/40 hover:shadow-3xl">
              <div className="w-24 h-24 rounded-[32px] bg-[#1A237E] flex items-center justify-center text-[#C5A059] mb-12 shadow-2xl border border-white/10">
                <BrainCircuit size={48} />
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-[#1A237E] mb-5 tracking-tighter leading-none">Atende.AI</h3>
              <p className="text-[#C5A059] font-black uppercase text-[11px] tracking-[0.5em] mb-12">Cérebro do seu Receptivo</p>
              
              {/* WhatsApp Box */}
              <div className="w-full bg-[#E5DDD5] rounded-[24px] md:rounded-[40px] p-4 md:p-8 mb-8 md:mb-12 border border-slate-200 space-y-5 shadow-inner relative overflow-hidden">
                <div className="wa-background opacity-10"></div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none text-[13px] text-left shadow-md border border-slate-100 max-w-[85%] relative z-10 leading-relaxed">
                  "Oi! Vi o anúncio no Instagram agora e fiquei curioso. Como funciona esse cérebro digital exatamente?"
                </div>
                <div className="bg-[#DCF8C6] text-slate-800 p-4 rounded-2xl rounded-tr-none text-[13px] text-left shadow-md ml-auto max-w-[85%] relative z-10 leading-relaxed">
                  "Oi! Que bom ter você aqui! 🚀 Nosso cérebro digital entende seu negócio e responde de forma imediata, 24h por dia, com o seu tom de voz. Qual o seu nicho?"
                </div>
              </div>

              <ul className="space-y-6 text-left w-full max-w-xs mx-auto mb-14">
                {[
                  "IA 100% Customizável",
                  "Envia Áudios, Imagens e Vídeos",
                  "Integração com Google Agenda",
                  "Lê Documentos e Arquivos",
                  "Atendimento Humanizado 24/7",
                  "Foco total em fechamento de vendas"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-5 text-slate-600 font-bold italic text-[15px] leading-tight">
                    <CheckCircle2 className="text-[#C5A059] w-6 h-6 flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" className="w-full mt-auto py-6" href="#planos">Dominar Receptivo</Button>
            </div>

            {/* PROSPECT.AI */}
            <div className="backdrop-blur-3xl bg-white/70 p-6 md:p-14 rounded-[32px] md:rounded-[64px] border border-slate-200 shadow-2xl flex flex-col items-center text-center transform transition-all hover:scale-[1.03] hover:border-[#C5A059]/40 hover:shadow-3xl">
              <div className="w-24 h-24 rounded-[32px] bg-[#C5A059] flex items-center justify-center text-white mb-12 shadow-2xl border border-white/10">
                <Target size={48} />
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-[#1A237E] mb-5 tracking-tighter leading-none">Prospect.AI</h3>
              <p className="text-[#C5A059] font-black uppercase text-[11px] tracking-[0.5em] mb-12">Motor de Prospecção Ativa</p>

              {/* WhatsApp Box */}
              <div className="w-full bg-[#E5DDD5] rounded-[24px] md:rounded-[40px] p-4 md:p-8 mb-8 md:mb-12 border border-slate-200 space-y-5 shadow-inner relative overflow-hidden">
                <div className="wa-background opacity-10"></div>
                <div className="bg-[#DCF8C6] text-slate-800 p-4 rounded-2xl rounded-tr-none text-[13px] text-left shadow-md ml-auto max-w-[90%] relative z-10 leading-relaxed">
                  "Olá João! Vimos que você conheceu nossa solução mas ainda não ativou seu motor de prospecção. Temos uma condição exclusiva de 100% de retorno em créditos para você fechar hoje. Vamos escalar seu faturamento?"
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none text-[13px] text-left shadow-md border border-slate-100 max-w-[80%] relative z-10 leading-relaxed">
                  "Opa! Estava mesmo pensando nisso. Essa oferta dos créditos revertidos ainda está disponível para o meu CNPJ?"
                </div>
              </div>

              <ul className="space-y-6 text-left w-full max-w-xs mx-auto mb-14">
                {[
                  "Reativação de clientes inativos",
                  "Prospecção fria automatizada",
                  "Filtro de leads qualificados",
                  "Recuperação de vendas perdidas"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-5 text-slate-600 font-bold italic text-[15px] leading-tight">
                    <CheckCircle2 className="text-[#C5A059] w-6 h-6 flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <Button variant="glow" className="w-full mt-auto py-6" href="#planos">Escalar Vendas</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Valores Section */}
      <Section id="planos">
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-4xl md:text-8xl font-black text-[#1A237E] mb-8 tracking-tighter text-center mx-auto leading-none">Planos de <span className="text-[#C5A059]">Escala</span></h2>
          <p className="text-xl md:text-2xl text-[#1A237E]/60 font-light max-w-3xl mx-auto text-center leading-relaxed">Selecione o motor que vai levar seu faturamento para o próximo nível com investimento inteligente.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-[1280px] mx-auto px-6 mb-8 md:mb-16 items-stretch">
          <PlanCard 
            title="Essencial"
            subtitle="Atendimento Receptivo"
            price="297"
            percent="50%"
            features={[
              "Atendimento Humanizado Ativo",
              "50% Reversão em Créditos",
              "Integração WhatsApp Oficial",
              "Dashboard em Tempo Real",
              "Configuração Guiada Inclusa"
            ]}
          />
          <PlanCard 
            title="Dominância"
            subtitle="Ecosistema 360"
            price="597"
            variant="highlighted"
            popular={true}
            percent="100%"
            savings="Economize R$ 200/ano"
            dailyCost="Menos de R$ 20/dia"
            features={[
              "Tudo do Plano Essencial",
              "Motor Prospect.AI Ativo",
              "Reativação Automática de Base",
              "Prospecção de Novos Leads",
              "100% Reversão em Créditos",
              "Suporte Prioritário"
            ]}
          />
          <PlanCard 
            title="Elite Studio"
            subtitle="Diamond Insider"
            price="997"
            variant="elite"
            percent="100%"
            description="Tenha acesso direto ao nosso time de desenvolvimento para priorizar as funções que o seu negócio exige."
            ctaText="Falar com um Estrategista"
            features={[
              "Voz Ativa em Futuros Desenvolvimentos",
              "Personalizações sob Demanda",
              "Engenharia de Prompt Dedicada",
              "Estratégias de Alta Escala",
              "100% Reversão em Créditos",
              "Acesso aos Bastidores"
            ]}
          />
        </div>

        {/* Legend Caption */}
        <div className="text-center mb-10 md:mb-20 max-w-2xl mx-auto">
          <p className="text-sm md:text-base text-slate-500 font-bold italic leading-relaxed">
            O modelo de reversão de créditos garante que sua escala nunca seja limitada por taxas fixas. <span className="text-[#C5A059]">Seu investimento vira combustível real.</span>
          </p>
        </div>

        {/* Custo Justo Refinement Note */}
        <div className="max-w-4xl mx-auto backdrop-blur-3xl bg-[#C5A059]/5 border border-[#C5A059]/20 rounded-[32px] p-8 md:p-10 shadow-2xl text-center">
          <p className="text-base md:text-lg text-[#1A237E] font-medium leading-relaxed italic">
            <span className="text-[#C5A059] font-black uppercase tracking-widest block mb-2 text-sm">ESCALA SEM SUSTO</span>
            Sua mensalidade licencia nossa infraestrutura de IA de elite, capaz de gerenciar contextos gigantes e catálogos com milhares de produtos sem travar sua operação. Como condição especial, revertemos até 100% deste valor em créditos de conversa e, se sua escala superar o saldo garantido, você continua operando via cobrança justa por volume excedente, com total transparência e previsibilidade.
          </p>
        </div>
      </Section>

      {/* Simulation Form */}
      <Section id="teste">
        <div className="max-w-5xl mx-auto backdrop-blur-3xl bg-white/70 rounded-[40px] md:rounded-[80px] p-8 md:p-28 shadow-[0_80px_160px_-40px_rgba(26,35,126,0.15)] relative overflow-hidden border border-[#C5A059]/40">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/10 blur-[150px] -z-10"></div>
          
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#1A237E] mb-8 tracking-tighter text-center mx-auto leading-[0.85]">Simule o Atende.AI <span className="text-[#C5A059] gold-text-glow block mt-6">Agora</span></h2>
            <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed mt-10">Veja como nossa inteligência artificial atende e encanta seus clientes nessa simulação em tempo real.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6 md:space-y-12 relative z-10 max-w-4xl mx-auto">
            <div className="space-y-4">
              <label className="text-[11px] font-black text-[#1A237E] uppercase tracking-[0.3em] ml-2 opacity-60">Seu Número de WhatsApp</label>
              <input 
                type="tel" 
                required
                placeholder="(00) 0 0000-0000"
                className="w-full px-6 py-4 md:px-10 md:py-7 rounded-[28px] bg-white border border-slate-100 focus:border-[#C5A059] focus:ring-[12px] focus:ring-[#C5A059]/10 outline-none transition-all shadow-sm font-semibold text-base md:text-lg"
                value={formState.phone}
                onChange={handlePhoneChange}
                maxLength={15}
              />
            </div>
            <div className="space-y-4">
              <label className="text-[11px] font-black text-[#1A237E] uppercase tracking-[0.3em] ml-2 opacity-60">Descreva sua empresa</label>
              <textarea 
                required
                rows={5}
                placeholder="Descreva um pouco a sua empresa e como deve ser o atendimento."
                className="w-full px-6 py-4 md:px-10 md:py-7 rounded-[28px] bg-white border border-slate-100 focus:border-[#C5A059] focus:ring-[12px] focus:ring-[#C5A059]/10 outline-none transition-all shadow-sm resize-none font-semibold text-base md:text-lg leading-relaxed"
                value={formState.description}
                onChange={(e) => setFormState({...formState, description: e.target.value})}
              />
            </div>
            <div>
              <Button variant="glow" className="w-full py-5 md:py-9 text-lg md:text-2xl shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed" disabled={isLoading}>
                {isLoading ? 'Processando...' : <>Quero ver minha IA vendendo agora <ChevronRight size={36} className="ml-2" /></>}
              </Button>
              {isLoading && (
                <p className="text-center text-[#1A237E] font-bold mt-6 animate-pulse text-lg">
                  Você será direcionado para o WhatsApp, mande a mensagem inicial e observe a demonstração do Atendimento.
                </p>
              )}
            </div>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-[#1A237E] py-10 md:py-32 px-6 relative overflow-hidden text-center">
        <div className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-16 relative z-10">
          <div className="flex flex-col items-center gap-6">
            <span className="font-black text-4xl md:text-5xl tracking-tighter text-white">
              Digital ForMe <span className="text-[#C5A059]">| CJS Soluções</span>
            </span>
            <p className="text-blue-100/50 text-base font-light max-w-md leading-relaxed italic mt-4">
              A revolução do atendimento digital, desenhada para máxima autoridade e conversão em escala global.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-14 gap-y-6 text-xs font-black text-[#C5A059] uppercase tracking-[0.3em] border-y border-white/10 py-12 w-full">
            <a href="#inicio" className="hover:text-white transition-all transform hover:scale-105">Início</a>
            <a href="#como-funciona" className="hover:text-white transition-all transform hover:scale-105">Como Funciona</a>
            <a href="#planos" className="hover:text-white transition-all transform hover:scale-105">Valores</a>
            <a href="#" className="hover:text-white transition-all transform hover:scale-105">WhatsApp Central</a>
          </div>

          <div className="space-y-6">
            <p className="text-[12px] text-[#C5A059] font-black uppercase tracking-[0.4em] opacity-60">CNPJ: 63.251.000/0001-84</p>
            <p className="text-[11px] text-white/20 uppercase tracking-[0.6em] font-medium">Digital ForMe Intelligence Ecosistem</p>
            <p className="text-[11px] text-white/40 mt-10 font-bold opacity-30">© 2026 CJS Soluções. TODOS OS DIREITOS RESERVADOS.</p>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}