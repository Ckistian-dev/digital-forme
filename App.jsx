import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
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
  LayoutDashboard,
  RefreshCcw,
  Target,
  Shield,
  Scale,
  X,
  Crown,
  MessagesSquare,
  Menu,
  Instagram,
  Linkedin,
  Facebook,
  Bot,
  History,
  Archive,
  MessageSquareText,
  LogOut,
  Star,
  Quote,
  Settings,
  Ticket,
  Activity,
  User,
  UserCheck,
  PieChart,
  ArrowUpRight,
  Search,
  Filter,
  MoreVertical,
  Paperclip,
  Mic,
  Send,
  Image as ImageIcon,
  FileText,
  Phone,
  Tag,
  Edit,
  Cpu,
  ChevronLeft,
  Plus
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays, startOfMonth, endOfMonth, format, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';

registerLocale('pt-BR', ptBR);

// Google Ads Conversion Tracking
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      // Open in a new tab for WhatsApp links
      if (url.startsWith('https://wa.me/')) {
        window.open(url, '_blank');
      } else {
        window.location = url;
      }
    }
  };
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
        'send_to': 'AW-17907272489/MmjTCJ_6o-0bEKmW7dpC',
        'value': 1.0,
        'currency': 'BRL',
        'event_callback': callback
    });
  } else {
    if (typeof(url) != 'undefined') {
      window.open(url, '_blank');
    }
  }
  return false;
}

// --- Components ---

const FadeIn = ({ children, delay = 0, direction = 'up', className = '', fullWidth = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const directions = {
    up: 'translate-y-12',
    down: '-translate-y-12',
    left: 'translate-x-12',
    right: '-translate-x-12',
    none: ''
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${fullWidth ? 'w-full' : ''} ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${directions[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const StickyTopBar = () => (
  <div className="fixed top-0 left-0 right-0 z-[100] bg-[#1A237E] py-2 px-4 border-b border-[#C5A059]/30 text-center min-h-[40px] max-w-full flex items-center justify-center">
    <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#C5A059] leading-tight">
      Oportunidade de Lançamento: Vagas LIMITADAS com Investimento Revertido em 100% de Créditos.
    </p>
  </div>
);

const FloatingWhatsApp = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5500000000000";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Digital%20ForMe.`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[120] hover:scale-110 transition-transform duration-300 group"
      onClick={(e) => {
        e.preventDefault();
        gtag_report_conversion(whatsappUrl);
      }}
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
      <div className="bg-white px-5 py-4 md:px-7 md:py-5 rounded-[20px] md:rounded-[28px] shadow-[0_10px_40px_rgba(26,35,126,0.15)] border border-[#C5A059]/40 flex items-center gap-4 md:gap-5 relative pr-12 md:pr-14 group w-auto">
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
      <nav className={`fixed top-[32px] md:top-[48px] left-0 right-0 z-[90] transition-all duration-700 px-2 md:px-6 w-full my-5`}>
        <div className={`max-w-7xl mx-auto h-14 md:h-20 rounded-[20px] md:rounded-[30px] bg-white/20 backdrop-blur-md px-4 md:px-10 flex items-center justify-between transition-all ${isScrolled ? 'shadow-xl translate-y-[-4px] md:translate-y-[-8px] border-[#C5A059]/30 border' : 'py-3 md:py-4'}`}>
          <a href="#inicio" className="flex items-center gap-2 relative z-[100]">
            <span className="font-black text-sm md:text-2xl tracking-tighter text-[#1A237E] leading-tight">
              Digital ForMe <span className="text-[#C5A059] block md:inline text-[10px] md:text-2xl">| CJS Soluções</span>
            </span>
          </a>
          
          <div className="hidden lg:flex items-center gap-10">
            <a href="#como-funciona" className="text-xs font-black text-[#1A237E]/70 hover:text-[#C5A059] transition-all uppercase tracking-[0.2em]">Como Funciona</a>
            <a href="#planos" className="text-xs font-black text-[#1A237E]/70 hover:text-[#C5A059] transition-all uppercase tracking-[0.2em]">Valores</a>
            <a href="#faq" className="text-xs font-black text-[#1A237E]/70 hover:text-[#C5A059] transition-all uppercase tracking-[0.2em]">FAQ</a>
            <Button variant="glow" href="#teste" className="py-3 px-8 text-[11px] mx-0 rounded-[18px] shadow-[#C5A059]/30">Teste Grátis</Button>
          </div>

          <div className="lg:hidden flex items-center gap-3 relative z-[100]">
             <Button variant="glow" href="#teste" className="py-[10px] px-4 text-[8px] mx-0 rounded-[12px] shadow-none">Teste Grátis</Button>
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
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-white/80 hover:text-[#C5A059] transition-colors uppercase tracking-widest w-full text-center py-4 border-b border-white/5">
                FAQ
              </a>
            </nav>

            <div className="mt-8 w-full">
              <Button variant="glow" href="#teste" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-6 text-base">
                Iniciar Demonstração
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
      <FadeIn>
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-[#1A237E]/40 mb-8">
          Tecnologia de Elite Integrada com
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Logos placeholders - replace with actual paths */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6 md:h-8" onError={(e) => e.target.style.display='none'} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-6 md:h-8" onError={(e) => e.target.style.display='none'} />
        </div>
      </FadeIn>
    </div>
  </div>
);


const PlanCard = ({ title, price, features, variant = 'standard', subtitle = "", percent = "", offerText = "", description = "", ctaText = "Teste Grátis", popular = false, savings = "", dailyCost = "", paymentLink }) => {
  const isElite = variant === 'elite';
  const isHighlighted = variant === 'highlighted';
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5500000000000";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(isElite ? `Olá, gostaria de falar com um estrategista sobre o Plano ${title}.` : `Olá, gostaria de contratar o Plano ${title}.`)}`;

  const cardStyles = {
    standard: "bg-white border-slate-200 shadow-2xl text-[#1A237E]",
    highlighted: "bg-white border-[#C5A059]/40 shadow-2xl scale-105 z-10 text-[#1A237E]",
    elite: "bg-[#050A24] border-2 border-[#C5A059] shadow-[0_40px_100px_rgba(5,10,36,0.5)] text-white"
  };

  return (
    <div className={`p-6 md:p-8 rounded-[32px] md:rounded-[56px] flex flex-col h-full transition-all duration-700 border text-center items-center relative ${cardStyles[variant]}`}>
      {popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#1A237E] text-[#C5A059] px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl border border-[#C5A059]/40 z-20">
          Popular
        </div>
      )}
      <div className="mb-6">
        <div className={`inline-block px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 border shadow-lg ${isElite ? 'bg-[#C5A059] text-white border-[#C5A059]/60' : 'bg-[#C5A059]/10 text-[#C5A059] border-[#C5A059]/30'}`}>
          {offerText ? offerText : (
            <>Para quem tem mais de <span className={`text-xl ${isElite ? 'text-white' : 'text-[#C5A059]'} gold-text-glow ml-2`}>{percent}</span> Atendimentos/Mês</>
          )}
        </div>
        <h3 className={`text-3xl md:text-4xl font-black mb-2 tracking-tighter leading-none`}>{title}</h3>
        <p className={`text-[10px] font-bold uppercase tracking-[0.4em] mb-4 ${isElite ? 'text-[#C5A059]' : 'text-slate-400'}`}>{subtitle}</p>
        {description && <p className={`text-xs font-medium leading-relaxed px-4 ${isElite ? 'text-blue-100/60' : 'text-slate-500'}`}>{description}</p>}
      </div>
      
      <div className="flex flex-col items-center mb-8">
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

      <ul className="space-y-3 mb-8 flex-grow w-full text-left">
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
        href={whatsappUrl}
        onClick={(e) => {
          e.preventDefault();
          gtag_report_conversion(whatsappUrl);
        }}
      >
        {ctaText}
      </Button>
      <p className="text-[10px] text-slate-400 mt-3 flex items-center justify-center gap-1"><Shield size={10} /> 7 dias de garantia incondicional</p>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-base md:text-lg font-bold transition-colors ${isOpen ? 'text-[#C5A059]' : 'text-[#1A237E] group-hover:text-[#C5A059]'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isOpen ? 'bg-[#C5A059] text-white rotate-90' : 'bg-[#1A237E]/5 text-[#1A237E] group-hover:bg-[#C5A059]/10'}`}>
          <ChevronRight size={20} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-500 leading-relaxed text-sm md:text-base pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "O que é a plataforma CRM inclusa?",
      answer: "Nossa plataforma CRM (Customer Relationship Management) é o painel de controle onde você gerencia todos os leads capturados pela IA. Ela organiza contatos, histórico de conversas, status de negociação e agendamentos em um só lugar, permitindo que você ou sua equipe assumam o atendimento quando necessário com total contexto."
    },
    {
      question: "A IA substitui totalmente minha equipe de vendas?",
      answer: "A IA atua como um filtro qualificador e um atendente de nível 1 ultra-eficiente. Ela responde dúvidas, quebra objeções iniciais e agenda reuniões. Para fechamentos complexos ou personalizados, ela transfere o lead 'quente' para sua equipe humana dentro do próprio CRM, já com todo o resumo da conversa."
    },
    {
      question: "Como funciona a integração com o WhatsApp?",
      answer: "Utilizamos a API Oficial do WhatsApp Business (WABA), garantindo estabilidade e segurança. A conexão é feita através do nosso CRM, que espelha seu número. Você não precisa manter um celular ligado 24h; tudo roda na nuvem."
    },
    {
      question: "Preciso ter conhecimento técnico para configurar?",
      answer: "Não. Nossa equipe faz todo o setup inicial (onboarding) e entrega a plataforma pronta para uso. Além disso, o CRM é intuitivo e desenhado para gestores e vendedores, não para programadores."
    },
    {
      question: "O que acontece se eu exceder o limite de conversas?",
      answer: "Nossos planos são desenhados para escalar. Se você ultrapassar o volume contratado, oferecemos pacotes adicionais de conversas ou upgrades de plano sem interrupção do serviço, garantindo que você nunca perca uma venda."
    }
  ];

  return (
    <Section id="faq" className="bg-slate-50/50">
      <FadeIn>
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-black text-[#1A237E] mb-6 tracking-tighter">Dúvidas <span className="text-[#C5A059]">Frequentes</span></h2>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
            Entenda como nossa tecnologia CRM + IA impulsiona seu negócio.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-3xl mx-auto bg-white rounded-[32px] p-6 md:p-10 shadow-xl border border-slate-100">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </Section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ricardo Mendes",
      role: "CEO, Imobiliária Mendes",
      text: "A automação do WhatsApp mudou nosso jogo. Antes perdíamos leads no fim de semana, agora a IA agenda visitas sozinha. O CRM é fantástico.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Juliana Costa",
      role: "Diretora Comercial, TechSolutions",
      text: "Impressionante como a IA entende o contexto. A integração com o CRM facilitou muito a gestão da minha equipe de vendas.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Felipe Soares",
      role: "Fundador, E-commerce Brasil",
      text: "O ROI foi imediato. A recuperação de carrinhos abandonados via WhatsApp pagou o investimento no primeiro mês.",
      image: "https://randomuser.me/api/portraits/men/86.jpg"
    }
  ];

  return (
    <Section id="depoimentos" className="bg-white relative overflow-hidden border-t border-slate-100">
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C5A059]/5 via-transparent to-transparent pointer-events-none"></div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none"></div>
       
       <FadeIn>
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-black text-[#1A237E] mb-6 tracking-tighter">Quem usa <span className="text-[#C5A059]">Aprova</span></h2>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
            Veja como empresas estão escalando suas operações com nossa tecnologia.
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 100} className="h-full">
            <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative group hover:-translate-y-2">
              <div className="absolute top-6 right-8 text-[#C5A059]/20 group-hover:text-[#C5A059]/40 transition-colors">
                <Quote size={40} />
              </div>
              
              <div className="flex items-center gap-5 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#C5A059] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#1A237E] text-lg">{t.name}</p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">{t.role}</p>
                </div>
              </div>
              
              <div className="flex-grow mb-6">
                 <p className="text-slate-600 italic leading-relaxed relative z-10 text-sm md:text-base">
                   "{t.text}"
                 </p>
              </div>
              
              <div className="flex text-[#C5A059] gap-1 opacity-80">
                {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" className="drop-shadow-sm" />)}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

const CrmDashboardPreview = () => {
  const containerRef = useRef(null);
  // --- STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState('chat');
  const [activeContactId, setActiveContactId] = useState(1);
  const [inputText, setInputText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('todos');
  const [rightOpen, setRightOpen] = useState(true);
  const [leftOpen, setLeftOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [automations, setAutomations] = useState({
    followUp: true,
    inactiveRecovery: false,
    welcomeMessage: true,
  });
  const [contactsPage, setContactsPage] = useState(1);
  const contactsPerPage = 4;

  // --- MOCK DATA ---
  const [contacts, setContacts] = useState([
    { id: 1, name: 'João Silva', phone: '+55 11 99999-9999', avatar: 'JS', status: 'Novo', color: '#3b82f6', unread: 2, tags: [{name: 'Hot Lead', color: '#ef4444'}], lastMsg: 'Gostaria de saber mais sobre o plano.', time: '10:30', email: 'joao.silva@example.com', company: 'Tech Corp', source: 'Instagram Ads' },
    { id: 2, name: 'Maria Oliveira', phone: '+55 21 98888-8888', avatar: 'MO', status: 'Concluído', color: '#22c55e', unread: 0, tags: [], lastMsg: 'Obrigado pelo atendimento!', time: 'Ontem', email: 'maria.o@example.com', company: 'Oliveira & Filhos', source: 'Site' },
    { id: 3, name: 'Pedro Santos', phone: '+55 31 97777-7777', avatar: 'PS', status: 'Aguardando', color: '#eab308', unread: 0, tags: [{name: 'Dúvida', color: '#a855f7'}], lastMsg: 'Qual o valor da integração?', time: 'Ontem', email: 'pedro.santos@example.com', company: 'Santos Advocacia', source: 'Indicação' },
    { id: 4, name: 'Ana Costa', phone: '+55 41 96666-6666', avatar: 'AC', status: 'Em Atendimento', color: '#3b82f6', unread: 1, tags: [{name: 'Urgente', color: '#ef4444'}], lastMsg: 'Pode me ligar?', time: '09:15', email: 'ana.costa@example.com', company: 'Costa Design', source: 'Google Ads' },
    { id: 5, name: 'Lucas Pereira', phone: '+55 51 95555-5555', avatar: 'LP', status: 'Novo', color: '#3b82f6', unread: 0, tags: [], lastMsg: 'Olá, bom dia.', time: 'Segunda', email: 'lucas.p@example.com', company: 'Pereira Transportes', source: 'Facebook' },
    { id: 6, name: 'Carla Dias', phone: '+55 61 94444-4444', avatar: 'CD', status: 'Novo', color: '#3b82f6', unread: 5, tags: [{name: 'VIP', color: '#C5A059'}], lastMsg: 'Tenho interesse no plano Corporativo', time: 'Segunda', email: 'carla.dias@example.com', company: 'Dias & Associados', source: 'LinkedIn' },
    { id: 7, name: 'Marcos Lima', phone: '+55 71 93333-3333', avatar: 'ML', status: 'Concluído', color: '#22c55e', unread: 0, tags: [], lastMsg: 'Perfeito, contrato assinado!', time: 'Sexta', email: 'marcos.lima@example.com', company: 'Construtora Lima', source: 'Site' },
  ]);

  const [chats, setChats] = useState({
    1: [{ id: 1, role: 'assistant', content: 'Olá João! 👋 Vi que você se interessou pelo nosso plano Elite. Posso tirar alguma dúvida sobre a implementação?', time: '10:28' }, { id: 2, role: 'user', content: 'Gostaria de saber mais sobre o plano.', time: '10:29' }],
    2: [{ id: 1, role: 'assistant', content: 'Oi Maria, seu pedido foi confirmado!', time: 'Ontem' }, { id: 2, role: 'user', content: 'Obrigado pelo atendimento!', time: 'Ontem' }],
    3: [{ id: 1, role: 'user', content: 'Qual o valor da integração?', time: 'Ontem' }],
    4: [{ id: 1, role: 'assistant', content: 'Como posso ajudar?', time: '09:00' }, { id: 2, role: 'user', content: 'Pode me ligar?', time: '09:15' }],
    5: [{ id: 1, role: 'user', content: 'Olá, bom dia.', time: 'Segunda' }],
    6: [{ id: 1, role: 'user', content: 'Tenho interesse no plano Corporativo', time: 'Segunda' }],
    7: [{ id: 1, role: 'assistant', content: 'Ficamos felizes em tê-lo como parceiro, Marcos!', time: 'Sexta' }, { id: 2, role: 'user', content: 'Perfeito, contrato assinado!', time: 'Sexta' }],
  });

  const chatContainerRef = useRef(null);

  // --- EFFECTS ---
  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        const mobile = width < 768;
        setIsMobile(mobile);
        if (mobile) {
          setLeftOpen(true);
          setRightOpen(false);
        } else {
          setLeftOpen(true);
          setRightOpen(true);
        }
      }
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let timeouts = [];
    if (activeContactId === 1 && chats[1]?.length === 2) {
      timeouts.push(setTimeout(() => setIsTyping(true), 1500));
      timeouts.push(setTimeout(() => {
        setIsTyping(false);
        setChats(prev => ({
          ...prev,
          1: [...prev[1], { id: 3, role: 'assistant', content: 'Entendido! O plano Elite é ideal para escalar sua operação. Ele inclui:\n\n✅ CRM Multicanal\n✅ Automação de Vendas com IA\n✅ API Oficial do WhatsApp\n\nQuer agendar uma demonstração rápida?', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]
        }));
      }, 5500));
    }
    return () => timeouts.forEach(clearTimeout);
  }, [activeContactId, chats]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chats, activeContactId, activeTab, isTyping]);

  // --- HANDLERS ---
  const handleSendMessage = useCallback((e) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = { id: Date.now(), role: 'assistant', content: inputText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setChats(prev => ({ ...prev, [activeContactId]: [...(prev[activeContactId] || []), newMsg] }));
    setInputText('');

    setTimeout(() => {
      const replyMsg = { id: Date.now() + 1, role: 'user', content: 'Entendi, muito obrigado! Vou analisar.', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      setChats(prev => ({ ...prev, [activeContactId]: [...(prev[activeContactId] || []), replyMsg] }));
    }, 2000);
  }, [inputText, activeContactId]);

  const handleAutomationToggle = (key) => {
    setAutomations(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // --- MEMOIZED VALUES ---
  const filteredContacts = useMemo(() => contacts.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.phone.includes(searchTerm);
    const matchesFilter = filterStatus === 'todos' ? true : filterStatus === 'unread' ? c.unread > 0 : filterStatus === 'waiting' ? c.status === 'Aguardando' : true;
    return matchesSearch && matchesFilter;
  }), [contacts, searchTerm, filterStatus]);

  const activeContact = useMemo(() => contacts.find(c => c.id === activeContactId) || contacts[0], [contacts, activeContactId]);
  const activeMessages = useMemo(() => chats[activeContactId] || [], [chats, activeContactId]);

  // --- RENDER HELPERS & SUB-COMPONENTS ---

  const renderSidebarItem = (id, icon, label) => (
    <button onClick={() => setActiveTab(id)} className={`p-3 rounded-xl transition-all duration-300 group relative flex justify-center ${activeTab === id ? 'bg-[#C5A059] text-white shadow-lg shadow-amber-900/50' : 'text-slate-400 hover:bg-white/10 hover:text-white'}`} title={label}>
      {icon}
      {activeTab === id && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full -ml-4 hidden md:block"></div>}
    </button>
  );

  const StatCard = ({ icon, label, value, color, change }) => (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-2 md:mb-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center`} style={{ backgroundColor: `${color}1A` }}>
          {React.cloneElement(icon, { color, size: 20 })}
        </div>
        <div className={`flex items-center text-xs font-bold ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          <TrendingUp size={14} className="mr-1" /> {change}%
        </div>
      </div>
      <p className="text-2xl md:text-3xl font-black text-gray-800">{value}</p>
      <p className="text-xs md:text-sm text-gray-500 font-medium">{label}</p>
    </div>
  );

  const DashboardView = () => {
    const lineChartData = useMemo(() => Array.from({ length: 30 }, (_, i) => ({
      name: format(subDays(new Date(), 29 - i), 'dd/MM'),
      Atendimentos: 40 + Math.floor(Math.random() * 40) + i * 2,
      Conversões: 5 + Math.floor(Math.random() * 15) + i * 0.5,
    })), []);

    const pieChartData = [
      { name: 'Instagram', value: 400, color: '#8884d8' },
      { name: 'Google Ads', value: 300, color: '#82ca9d' },
      { name: 'Site', value: 300, color: '#ffc658' },
      { name: 'Indicação', value: 200, color: '#ff8042' },
    ];

    return (
      <div className="p-4 md:p-8 bg-gray-50 overflow-y-auto h-full">
        <header className="mb-8">
          <h1 className="text-3xl font-black text-gray-800">Dashboard</h1>
          <p className="text-gray-500">Visão geral da sua operação de vendas.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={<MessagesSquare />} label="Novas Conversas" value="1,284" color="#3b82f6" change={12.5} />
          <StatCard icon={<CheckCircle2 />} label="Leads Qualificados" value="312" color="#22c55e" change={8.2} />
          <StatCard icon={<Target />} label="Conversões (IA)" value="78" color="#C5A059" change={21.7} />
          <StatCard icon={<Cpu />} label="Tokens Usados" value="1.2M" color="#8b5cf6" change={5.1} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-4 text-gray-800">Performance de Atendimentos</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Atendimentos" stroke="#3b82f6" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Conversões" stroke="#22c55e" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-4 text-gray-800">Origem dos Leads</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {pieChartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip />
                <Legend />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  };

  const ContactsView = () => {
    const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);
    const paginatedContacts = filteredContacts.slice((contactsPage - 1) * contactsPerPage, contactsPage * contactsPerPage);

    return (
      <div className="p-4 md:p-8 bg-gray-50 overflow-y-auto h-full flex flex-col">
        <header className="mb-8">
          <h1 className="text-3xl font-black text-gray-800">Contatos</h1>
          <p className="text-gray-500">Gerencie todos os seus leads e clientes.</p>
        </header>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex-1 flex flex-col overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center flex-shrink-0">
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input type="text" placeholder="Buscar contatos..." className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20" onChange={e => setSearchTerm(e.target.value)} value={searchTerm} />
            </div>
            <Button variant="secondary" className="py-2 px-4 text-xs rounded-xl hidden sm:flex"><Plus size={16} /> Novo Contato</Button>
            <Button variant="secondary" className="p-2 text-xs rounded-xl sm:hidden"><Plus size={16} /></Button>
          </div>
          <div className="flex-1 overflow-auto">
            {/* Desktop Table */}
            <table className="w-full text-sm text-left text-gray-500 hidden md:table">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">Nome</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                  <th scope="col" className="px-6 py-3">Tags</th>
                  <th scope="col" className="px-6 py-3">Última Mensagem</th>
                  <th scope="col" className="px-6 py-3"><span className="sr-only">Ações</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedContacts.map(contact => (
                  <tr key={contact.id} className="bg-white hover:bg-gray-50">
                    <th scope="row" className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{backgroundColor: contact.color}}>{contact.avatar}</div>
                      <div>
                        {contact.name}
                        <p className="font-normal text-gray-500">{contact.phone}</p>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-[10px] rounded-full font-bold" style={{ backgroundColor: `${contact.color}20`, color: contact.color }}>{contact.status}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1.5">
                        {contact.tags.map(tag => <span key={tag.name} className="px-2 py-1 text-[10px] rounded-md font-bold text-white" style={{backgroundColor: tag.color}}>{tag.name}</span>)}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 italic truncate max-w-xs">"{contact.lastMsg}"</td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-gray-100 rounded-full"><MoreVertical size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile Card List */}
            <div className="md:hidden divide-y divide-gray-100">
              {paginatedContacts.map(contact => (
                <div key={contact.id} className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0" style={{backgroundColor: contact.color}}>{contact.avatar}</div>
                      <div>
                        <p className="font-bold text-gray-900">{contact.name}</p>
                        <p className="text-xs text-gray-500">{contact.phone}</p>
                      </div>
                    </div>
                    <button className="p-2 -mr-2 text-gray-400 hover:bg-gray-100 rounded-full"><MoreVertical size={16} /></button>
                  </div>
                  <div className="mt-3 text-xs text-gray-600 italic truncate">"{contact.lastMsg}"</div>
                  <div className="mt-3 flex justify-between items-center">
                    <div className="flex gap-1.5 flex-wrap">
                      {contact.tags.map(tag => <span key={tag.name} className="px-2 py-1 text-[10px] rounded-md font-bold text-white" style={{backgroundColor: tag.color}}>{tag.name}</span>)}
                    </div>
                    <span className="px-2 py-1 text-[10px] rounded-full font-bold flex-shrink-0" style={{ backgroundColor: `${contact.color}20`, color: contact.color }}>{contact.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 border-t flex justify-between items-center flex-shrink-0">
            <span className="text-xs text-gray-500">Página {contactsPage} de {totalPages}</span>
            <div className="flex gap-2">
              <button onClick={() => setContactsPage(p => Math.max(1, p - 1))} disabled={contactsPage === 1} className="px-3 py-1.5 text-xs font-bold rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed">Anterior</button>
              <button onClick={() => setContactsPage(p => Math.min(totalPages, p + 1))} disabled={contactsPage === totalPages} className="px-3 py-1.5 text-xs font-bold rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed">Próximo</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AutomationsView = () => {
    const AutomationCard = ({ icon, title, description, status, onToggle }) => (
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 md:gap-6">
        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        <button onClick={onToggle} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${status ? 'bg-blue-600' : 'bg-gray-200'}`}>
          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${status ? 'translate-x-6' : 'translate-x-1'}`} />
        </button>
      </div>
    );

    return (
      <div className="p-4 md:p-8 bg-gray-50 overflow-y-auto h-full">
        <header className="mb-8">
          <h1 className="text-3xl font-black text-gray-800">Automações</h1>
          <p className="text-gray-500">Configure os robôs que trabalham por você 24/7.</p>
        </header>
        <div className="space-y-6 max-w-3xl">
          <AutomationCard 
            icon={<RefreshCcw size={24} />}
            title="Follow-up Inteligente"
            description="Envia mensagens de acompanhamento automáticas para leads que não respondem."
            status={automations.followUp}
            onToggle={() => handleAutomationToggle('followUp')}
          />
          <AutomationCard 
            icon={<Zap size={24} />}
            title="Recuperação de Inativos"
            description="Reativa clientes antigos com ofertas e novidades personalizadas."
            status={automations.inactiveRecovery}
            onToggle={() => handleAutomationToggle('inactiveRecovery')}
          />
          <AutomationCard 
            icon={<MessageSquareText size={24} />}
            title="Mensagem de Boas-vindas"
            description="Saúda novos contatos instantaneamente e inicia a qualificação."
            status={automations.welcomeMessage}
            onToggle={() => handleAutomationToggle('welcomeMessage')}
          />
        </div>
      </div>
    );
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardView />;
      case 'contacts': return <ContactsView />;
      case 'automations': return <AutomationsView />;
      case 'chat':
      default:
        return (
          <div className="flex-1 flex flex-col min-w-0 bg-[#efeae2] relative h-full">
            {/* Header */}
            <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 flex-shrink-0 z-10 shadow-sm">
              <div className="flex items-center gap-3">
                <button onClick={() => setLeftOpen(!leftOpen)} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 md:hidden">
                  <ChevronLeft size={20} />
                </button>
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm">
                  {activeContact.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-800 text-sm md:text-base flex items-center gap-2">
                    {activeContact.name}
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  </h3>
                  <p className="text-xs text-gray-500 truncate">Online agora</p>
                </div>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-gray-400">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Search size={20} /></button>
                <button onClick={() => setRightOpen(!rightOpen)} className={`p-2 hover:bg-gray-100 rounded-full transition-colors ${rightOpen ? 'text-blue-600 bg-blue-50' : ''}`}><MoreVertical size={20} /></button>
              </div>
            </header>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 scroll-smooth" ref={chatContainerRef} style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}>
               {activeMessages.map((msg, idx) => (
                 <div key={idx} className={`flex ${msg.role === 'assistant' ? 'justify-end' : 'justify-start'}`}>
                   <div className={`max-w-[85%] md:max-w-[70%] p-3 md:p-4 rounded-2xl shadow-sm text-sm relative group ${msg.role === 'assistant' ? 'bg-[#d9fdd3] text-gray-800 rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none'}`}>
                     <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                     <div className="flex justify-end items-center gap-1 mt-1 opacity-70">
                       <span className="text-[10px]">{msg.time}</span>
                       {msg.role === 'assistant' && <CheckCircle2 size={12} className="text-blue-500" />}
                     </div>
                   </div>
                 </div>
               ))}
               {isTyping && (
                 <div className="flex justify-end">
                   <div className="bg-[#d9fdd3] p-4 rounded-2xl rounded-tr-none shadow-sm text-sm text-gray-800 relative flex items-center gap-3 animate-pulse">
                     <span className="text-xs font-bold text-[#1A237E]">A IA está respondendo</span>
                     <div className="flex gap-1">
                       <div className="w-1.5 h-1.5 bg-[#1A237E] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                       <div className="w-1.5 h-1.5 bg-[#1A237E] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                       <div className="w-1.5 h-1.5 bg-[#1A237E] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                     </div>
                   </div>
                 </div>
               )}
            </div>

            {/* Footer */}
            <footer className="p-3 md:p-4 bg-[#f0f2f5] border-t border-gray-200 flex items-end gap-2 md:gap-3">
              <div className="flex gap-1 mb-2">
                 <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors"><Plus size={20} /></button>
              </div>
              <div className="flex-1 bg-white rounded-2xl border border-gray-200 flex items-center focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-sm min-h-[48px]">
                <textarea 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => { if(e.key === 'Enter' && !e.shiftKey) handleSendMessage(e); }}
                  placeholder="Digite sua mensagem..." 
                  className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 px-4 py-3 resize-none max-h-32"
                  rows={1}
                />
                <div className="flex items-center pr-2 gap-1">
                   <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"><Paperclip size={18} /></button>
                   <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"><ImageIcon size={18} /></button>
                </div>
              </div>
              <div className="mb-1">
                {inputText.trim() ? (
                  <button onClick={handleSendMessage} className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 transform hover:scale-105 active:scale-95">
                    <Send size={20} className="ml-0.5" />
                  </button>
                ) : (
                  <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 transform hover:scale-105 active:scale-95">
                    <Mic size={20} />
                  </button>
                )}
              </div>
            </footer>
          </div>
        );
    }
  };

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col md:flex-row bg-white overflow-hidden">
      
      {/* 1. App Sidebar (Leftmost) */}
      <aside className="w-full md:w-20 bg-[#0f172a] text-white flex flex-row md:flex-col items-center py-4 md:py-6 gap-2 md:gap-6 flex-shrink-0 z-30 justify-between md:justify-start px-4 md:px-0">
        <div className="bg-blue-600/20 w-10 h-10 flex items-center justify-center rounded-xl text-[#C5A059] mb-0 md:mb-4">
          <span className="font-black text-lg md:text-xl">A</span>
        </div>
        
        <nav className="flex flex-row md:flex-col gap-2 md:gap-4">
          {renderSidebarItem('dashboard', <LayoutDashboard size={22} />, 'Dashboard')}
          {renderSidebarItem('chat', <MessageSquareText size={22} />, 'Atendimentos')}
          {renderSidebarItem('contacts', <User size={22} />, 'Contatos')}
          {renderSidebarItem('automations', <Bot size={22} />, 'Automações')}
        </nav>

        <div className="mt-auto hidden md:block p-3 text-slate-400 hover:text-white cursor-pointer transition-colors">
          <LogOut size={22} />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden relative">
        {activeTab === 'chat' ? (
          <div className="flex flex-1 overflow-hidden">
            {/* 2. Contact List Sidebar */}
            <aside className={`${!isMobile || leftOpen ? 'flex' : 'hidden'} w-full md:w-80 bg-white border-r border-gray-200 flex-col transition-all duration-300 ease-in-out z-20 h-full`}>
              <div className="p-4 border-b border-gray-100 flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-xl text-gray-800">Conversas</h2>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500"><Edit size={18} /></button>
                    {isMobile && <button onClick={() => setLeftOpen(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-500" aria-label="Fechar lista de contatos"><X size={18} /></button>}
                  </div>
                </div>
                
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input type="text" placeholder="Buscar conversa..." className="w-full pl-9 pr-4 py-2.5 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                  {['todos', 'unread', 'waiting'].map(f => (
                    <button key={f} onClick={() => setFilterStatus(f)} className={`px-3 py-1.5 text-xs font-bold rounded-full whitespace-nowrap transition-all ${filterStatus === f ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                      {f === 'todos' ? 'Todos' : f === 'unread' ? 'Não lidos' : 'Aguardando'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                {filteredContacts.map(contact => (
                  <div key={contact.id} onClick={() => { setActiveContactId(contact.id); if (isMobile) setLeftOpen(false); }} className={`p-4 border-b border-gray-50 cursor-pointer transition-all hover:bg-gray-50 ${activeContactId === contact.id ? 'bg-blue-50/50 border-l-4 border-l-blue-600' : 'border-l-4 border-l-transparent'}`}>
                    <div className="flex gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm border border-gray-200">
                          {contact.avatar}
                        </div>
                        {contact.unread > 0 && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-[10px] flex items-center justify-center rounded-full font-bold border-2 border-white">
                            {contact.unread}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className={`text-sm truncate ${activeContactId === contact.id ? 'font-bold text-gray-900' : 'font-semibold text-gray-700'}`}>{contact.name}</h4>
                          <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">{contact.time}</span>
                        </div>
                        <p className={`text-xs truncate mb-2 ${contact.unread > 0 ? 'font-semibold text-gray-800' : 'text-gray-500'}`}>{contact.lastMsg}</p>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 text-[10px] rounded-full font-bold bg-opacity-10" style={{ backgroundColor: `${contact.color}20`, color: contact.color }}>
                            {contact.status}
                          </span>
                          {contact.tags.map((tag, i) => (
                            <span key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: tag.color }} title={tag.name}></span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            <main className={`flex-1 flex-col min-w-0 ${isMobile && leftOpen ? 'hidden' : 'flex'}`}>
              <div className="flex-1 flex overflow-hidden">
                {/* 3. Main View Area */}
                {renderActiveView()}
    
                {/* 4. Profile Sidebar (Right) */}
                <aside className={`${rightOpen ? 'w-full md:w-80 translate-x-0' : 'w-0 translate-x-full md:opacity-0'} bg-white border-l border-gray-200 flex-col overflow-y-auto transition-all duration-300 ease-in-out absolute md:relative right-0 h-full z-20 shadow-xl md:shadow-none`}>
                  <div className="p-6 flex flex-col items-center border-b border-gray-100 relative flex-shrink-0">
                    <button onClick={() => setRightOpen(false)} className="absolute left-4 top-4 p-2 text-gray-400 hover:bg-gray-100 rounded-full md:hidden" aria-label="Fechar perfil">
                      <X size={20} />
                    </button>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-3xl font-bold text-gray-500 mb-4 shadow-inner border-4 border-white">
                      {activeContact.avatar}
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 text-center">{activeContact.name}</h3>
                    <p className="text-sm text-gray-500 mb-4 font-medium">{activeContact.phone}</p>
                    
                    <div className="flex gap-3 w-full">
                      <button className="flex-1 py-2 bg-gray-100 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                        <Phone size={14} /> Ligar
                      </button>
                      <button className="flex-1 py-2 bg-gray-100 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                        <Archive size={14} /> Arquivar
                      </button>
                    </div>
                  </div>
    
                  <div className="p-6 space-y-8 overflow-y-auto">
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Status</h4>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeContact.color }}></span>
                          <span className="text-sm font-bold text-gray-700">{activeContact.status}</span>
                        </div>
                        <Edit size={14} className="text-gray-400 cursor-pointer hover:text-blue-600" />
                      </div>
                    </div>
    
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2"><Tag size={14} /> Tags</h4>
                        <button className="text-blue-600 hover:bg-blue-50 p-1 rounded"><Plus size={14} /></button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeContact.tags.length > 0 ? activeContact.tags.map((tag, i) => (
                          <span key={i} className="px-2.5 py-1 text-xs font-bold text-white rounded-md shadow-sm flex items-center gap-1" style={{ backgroundColor: tag.color }}>
                            {tag.name}
                            <X size={10} className="cursor-pointer hover:text-white/80" />
                          </span>
                        )) : <span className="text-xs text-gray-400 italic">Sem tags</span>}
                      </div>
                    </div>
    
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2"><FileText size={14} /> Notas</h4>
                        <button className="text-blue-600 hover:bg-blue-50 p-1 rounded"><Edit size={14} /></button>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 text-xs text-gray-700 leading-relaxed shadow-sm relative group">
                        <p>Cliente interessado no plano corporativo. Agendar reunião para próxima semana.</p>
                        <span className="text-[10px] text-gray-400 block mt-2 text-right">Hoje, 10:00</span>
                      </div>
                    </div>
    
                    <div>
                       <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Informações</h4>
                       <div className="space-y-3">
                         <div className="flex justify-between text-xs border-b border-gray-100 pb-2">
                           <span className="text-gray-500">Email</span>
                           <span className="font-medium text-gray-800 truncate">{activeContact.email}</span>
                         </div>
                         <div className="flex justify-between text-xs border-b border-gray-100 pb-2">
                           <span className="text-gray-500">Empresa</span>
                           <span className="font-medium text-gray-800">{activeContact.company}</span>
                         </div>
                         <div className="flex justify-between text-xs">
                           <span className="text-gray-500">Origem</span>
                           <span className="font-medium text-gray-800">{activeContact.source}</span>
                         </div>
                       </div>
                    </div>
                  </div>
                </aside>
              </div>
            </main>
          </div>
        ) : (
          renderActiveView()
        )}
      </div>
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
          const message = `Olá! Com quem eu falo?`;
          const url = `https://wa.me/55${phone}?text=${encodeURIComponent(message)}`;
          gtag_report_conversion(url);
        }
        setFormState({ description: '', phone: '' });
      }
    } catch (error) {
      console.error("Erro ao enviar simulação:", error);
      // Fallback: Redirecionar para o WhatsApp em caso de erro
      const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
      if (whatsappNumber) {
        const message = `Olá! Com quem eu falo?`;
        const url = `https://wa.me/55${formState.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
        gtag_report_conversion(url);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-[#C5A059] selection:text-white" id="inicio">
      <StickyTopBar />
      <FloatingWhatsApp />
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-[120px] md:pt-[200px] relative overflow-hidden min-h-screen flex flex-col justify-center">
        {/* Mobile Background Image */}
        <div className="absolute inset-0 lg:hidden z-0">
            <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                alt="Background" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
        </div>

        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A059]/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1A237E]/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/4 pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 max-w-[85vw] mx-auto">
          {/* Left Column */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <FadeIn direction="down">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A237E]/5 border border-[#1A237E]/10 text-[#1A237E] text-[10px] font-black uppercase tracking-widest mb-6">
                <Sparkles size={12} className="text-[#C5A059]" />
                <span>Nova Tecnologia 2026</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#1A237E] tracking-tighter mb-6 leading-[1.1] lg:leading-[1]">
                Transforme seu WhatsApp em uma <span className="text-[#C5A059] inline-block gold-text-glow">Máquina de Vendas</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-medium max-w-2xl lg:max-w-none">
                Atenda, qualifique e feche pedidos 24h por dia. <span className="text-[#1A237E] font-extrabold">Comece a lucrar enquanto dorme.</span>
              </p>
            </FadeIn>
            
            <FadeIn delay={600} className="w-full">
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full justify-center lg:justify-start">
                <Button variant="glow" href="#teste" className="w-full sm:w-auto animate-pulse hover:animate-none">Ver demonstração</Button>
                <Button variant="outline" href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || "5500000000000"}?text=Olá!%20Gostaria%20de%20falar%20com%20um%20consultor.`} target="_blank" className="w-full sm:w-auto border-[#1A237E]/20 text-[#1A237E] hover:bg-[#1A237E]/5">Falar com Consultor</Button>
              </div>
              
              <p className="text-[10px] font-bold text-[#1A237E]/40 uppercase tracking-widest mt-6 text-center">
                ✓ Teste grátis hoje • ✓ Cancele quando quiser
              </p>
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="relative hidden lg:flex items-center justify-center">
             <FadeIn direction="left" delay={300}>
                <div className="relative mx-auto border-gray-900 bg-gray-800 border-[8px] rounded-[2.5rem] h-[712px] w-[350px] shadow-xl">
                  <div className="w-[140px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-10"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[11px] top-[62px] rounded-l-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[11px] top-[124px] rounded-l-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[11px] top-[142px] rounded-r-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
                    <CrmDashboardPreview />
                  </div>
                </div>
             </FadeIn>
          </div>
        </div>
      </Section>

      

      {/* Atendimento 360 Section */}
      <Section id="como-funciona" className="relative">
        {/* Background Blob */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="text-center mb-8 md:mb-28">
              <h2 className="text-4xl md:text-7xl font-black text-[#1A237E] tracking-tighter mb-10 text-center mx-auto">Ecossistema <span className="text-[#C5A059]">360</span></h2>
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto text-center leading-relaxed">
                Sua operação comercial unificada em uma poderosa plataforma CRM, criando um ciclo infinito de atração e conversão automática.
              </p>
            </div>
          </FadeIn>


          <FadeIn delay={200}>
            <div className="w-full w-full mx-auto mb-16 md:mb-24 relative group px-2 md:px-0 h-[85vh] max-h-[800px] min-h-[700px] rounded-[24px] shadow-2xl border border-slate-200 overflow-hidden">
              <CrmDashboardPreview />
            </div>
          </FadeIn>


      <TrustSection />

        </div>
      </Section>

      <Section id="solucoes" className="relative">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-6xl font-black text-[#1A237E] mb-6 tracking-tighter">O que você <span className="text-[#C5A059]">Precisa?</span></h2>
              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
                Escolha a solução ideal para o momento do seu negócio.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-16 relative items-stretch">
            {/* Connection Visual */}
            <FadeIn delay={300} className="absolute top-1/2 left-[calc(50%-1.75rem)] -translate-y-1/2 z-10 hidden md:block">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl border border-slate-100">
                <RefreshCcw className="text-[#C5A059] animate-spin" style={{ animationDuration: '7s' }} size={28} />
              </div>
            </FadeIn>

            {/* ATENDE.AI */}
            <FadeIn direction="left" className="h-full">
            <div className="bg-white p-6 md:p-14 rounded-[32px] md:rounded-[64px] border border-slate-200 shadow-2xl flex flex-col items-center text-center transform transition-all hover:scale-[1.03] hover:border-[#C5A059]/40 hover:shadow-3xl h-full">
              <div className="w-24 h-24 rounded-[32px] bg-[#1A237E] flex items-center justify-center text-[#C5A059] mb-12 shadow-2xl border border-white/10">
                <BrainCircuit size={48} />
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-[#1A237E] mb-5 tracking-tighter leading-none">Atende.AI</h3>
              <p className="text-[#C5A059] font-black uppercase text-[11px] tracking-[0.5em] mb-12">Cérebro do seu Receptivo</p>
              
              <ul className="space-y-6 text-left w-full max-w-xs mx-auto mb-14">
                {[
                  "Atendimento Humanizado 24/7",
                  "Envia e Lê Imagens, Vídeos e Documentos",
                  "API Oficial do WhatsApp",
                  "Qualificação Automática de Leads",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-5 text-slate-600 font-bold italic text-[15px] leading-tight">
                    <CheckCircle2 className="text-[#C5A059] w-6 h-6 flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" className="w-full mt-auto py-6" href="#planos">Dominar Receptivo</Button>
            </div>
            </FadeIn>

            {/* PROSPECT.AI */}
            <FadeIn direction="right" className="h-full">
            <div className="bg-white p-6 md:p-14 rounded-[32px] md:rounded-[64px] border border-slate-200 shadow-2xl flex flex-col items-center text-center transform transition-all hover:scale-[1.03] hover:border-[#C5A059]/40 hover:shadow-3xl h-full">
              <div className="w-24 h-24 rounded-[32px] bg-[#C5A059] flex items-center justify-center text-white mb-12 shadow-2xl border border-white/10">
                <Target size={48} />
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-[#1A237E] mb-5 tracking-tighter leading-none">Prospect.AI</h3>
              <p className="text-[#C5A059] font-black uppercase text-[11px] tracking-[0.5em] mb-12">Motor de Prospecção Ativa</p>

              <ul className="space-y-6 text-left w-full max-w-xs mx-auto mb-14">
                {[
                  "Prospecção fria automatizada",
                  "Filtro de leads qualificados",
                  "Disparo em massa inteligente",
                  "Follow-up Automático"      
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-5 text-slate-600 font-bold italic text-[15px] leading-tight">
                    <CheckCircle2 className="text-[#C5A059] w-6 h-6 flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <Button variant="glow" className="w-full mt-auto py-6" href="#planos">Escalar Vendas</Button>
            </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Valores Section */}
      <Section id="planos">
        <FadeIn>
          <div className="text-center mb-12 md:mb-24">
            <h2 className="text-4xl md:text-8xl font-black text-[#1A237E] mb-8 tracking-tighter text-center mx-auto leading-none">Planos de <span className="text-[#C5A059]">Escala</span></h2>
            <p className="text-xl md:text-2xl text-[#1A237E]/60 font-light max-w-3xl mx-auto text-center leading-relaxed">Selecione o motor que vai levar seu faturamento para o próximo nível com investimento inteligente.</p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 md:px-6 mb-8 md:mb-16 items-stretch">
          <FadeIn delay={150} className="h-full">
          <PlanCard 
            title="Essencial"
            subtitle="Para Negócios em Crescimento"
            price="297"
            offerText="Média de 100 atendimentos/Mês"
            ctaText="Contratar Agora"
            paymentLink={import.meta.env.VITE_ASAAS_ESSENTIAL_URL}
            variant="highlighted"
            popular={true}
            features={[
              "Plataforma CRM Completa",
              "ProspectAI e AtendAI",
              "Atendimento e Prospecção IA",
              "Integração WhatsApp Oficial",
            ]}
          />
          </FadeIn>
          <FadeIn delay={300} className="h-full">
          <PlanCard 
            title="Corporativo"
            subtitle="Alta Performance e Escala"
            price="997"
            variant="elite"
            percent="1.000"
            description="Acesso direto ao time de engenharia para personalizações avançadas."
            ctaText="Falar com Estrategista"
            features={[
              "Tudo do Plano Essencial",
              "Personalizações sob Demanda",
              "Engenharia de Prompt Dedicada",
              "Múltiplos Números de WhatsApp",
              "10x mais Tokens para sua IA"
            ]}
          />
          </FadeIn>
        </div>
      </Section>

      {/* Simulation Form */}
      <Section id="teste">
        <FadeIn>
        <div className="max-w-5xl mx-auto bg-white rounded-[40px] md:rounded-[80px] p-8 md:p-28 shadow-[0_80px_160px_-40px_rgba(26,35,126,0.15)] relative overflow-hidden border border-[#C5A059]/40">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#1A237E] mb-8 tracking-tighter text-center mx-auto leading-[0.85]">Simule o Atende.AI <span className="text-[#C5A059] gold-text-glow block mt-6">Agora</span></h2>
            <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed mt-10">Veja como nossa inteligência artificial integrada ao CRM atende e encanta seus clientes nessa simulação em tempo real.</p>
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
              <p className="text-[10px] text-slate-400 flex items-center gap-1 pl-2"><Shield size={10} /> Seus dados estão seguros. Não enviamos spam.</p>
            </div>
            <div className="space-y-4">
              <label className="text-[11px] font-black text-[#1A237E] uppercase tracking-[0.3em] ml-2 opacity-60">Descreva sua empresa</label>
              <textarea 
                required
                rows={5}
                placeholder="Ex: Sou a Clínica Estética Bela Vida. Gostaria que a IA tirasse dúvidas sobre procedimentos e informasse os horários de funcionamento."
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
        </FadeIn>
      </Section>

      <FAQSection />

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
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-6 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-300 hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-300 hover:scale-110">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-14 gap-y-6 text-xs font-black text-[#C5A059] uppercase tracking-[0.3em] border-y border-white/10 py-12 w-full">
            <a href="#inicio" className="hover:text-white transition-all transform hover:scale-105">Início</a>
            <a href="#como-funciona" className="hover:text-white transition-all transform hover:scale-105">Como Funciona</a>
            <a href="#planos" className="hover:text-white transition-all transform hover:scale-105">Valores</a>
            <a href="#faq" className="hover:text-white transition-all transform hover:scale-105">FAQ</a>
            <a href="#" className="hover:text-white transition-all transform hover:scale-105">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-all transform hover:scale-105">Privacidade</a>
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