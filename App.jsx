import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Analytics } from '@vercel/analytics/react';
import api from './axiosConfig';
import logo from './public/Logo CJS.png';
import logoOdontojet from './public/logoOdontojet.PNG';
import logoFerragens from './public/logoFerragens.png';
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
    if (typeof (url) != 'undefined') {
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
    if (typeof (url) != 'undefined') {
      window.open(url, '_blank');
    }
  }
  return false;
}

// --- Components ---

const FadeIn = ({ children, delay = 0, direction = 'up', className = '', fullWidth = false, scale = false }) => {
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
      { threshold: 0.15 }
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
      className={`transition-all duration-1000 ease-out transform ${fullWidth ? 'w-full' : ''} ${isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : `opacity-0 ${directions[direction]} ${scale ? 'scale-90' : 'scale-95'}`
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const StickyTopBar = () => (
  <div className="fixed top-0 left-0 right-0 z-[100] bg-[#111827] py-2 px-4 border-b border-[#C5A059]/30 text-center min-h-[40px] max-w-full flex items-center justify-center">
    <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#C5A059] leading-tight">
      Oportunidade de Lançamento: Vagas LIMITADAS com Investimento Revertido em 100% de Créditos.
    </p>
  </div>
);

const FloatingWhatsApp = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5500000000000";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20CJS%20Soluções.`;

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
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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
          className="absolute top-4 right-4 text-[#111827]/30 hover:text-[#111827] transition-all p-1.5 rounded-full hover:bg-slate-100"
        >
          <X size={18} />
        </button>
        <div className="max-w-[280px]">
          <p className="text-[10px] font-black uppercase text-[#C5A059] tracking-[0.2em] mb-0.5 opacity-80">Notificação</p>
          <p className="text-[12px] font-bold text-[#111827] leading-snug tracking-tight">{messages[currentMsg]}</p>
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
  const baseStyles = "btn-shine px-6 py-4 md:px-10 md:py-5 rounded-[20px] md:rounded-[24px] font-black transition-all duration-500 flex items-center justify-center gap-3 active:scale-95 hover:scale-105 text-xs md:text-sm uppercase tracking-widest mx-auto";
  const variants = {
    primary: "bg-[#C5A059] text-white hover:bg-[#b08e4d] hover:-translate-y-1 shadow-xl hover:shadow-2xl shadow-[#C5A059]/20",
    secondary: "bg-[#111827] text-white hover:bg-[#151c66] hover:-translate-y-1 shadow-xl hover:shadow-2xl shadow-[#111827]/20",
    outline: "border-[2px] border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059]/5 hover:-translate-y-1 font-black",
    glow: "bg-[#C5A059] text-white hover:bg-[#b08e4d] shadow-[0_0_50px_rgba(197,160,89,0.5)] transform hover:-translate-y-2 hover:shadow-[0_0_70px_rgba(197,160,89,0.8)]"
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
  <section id={id} className={`py-6 md:py-[120px] px-4 md:px-6 ${dark ? 'bg-[#111827] text-white' : ''} ${className} scroll-mt-24 md:scroll-mt-32`}>
    <div className="max-w-7xl mx-auto overflow-visible">
      {children}
    </div>
  </section>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`w-full fixed top-0 left-0 right-0 z-[90] h-20 px-4 md:h-24 md:mt-[-10px] md:px-8 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
          <a href="#inicio" className="flex items-center relative z-[100]">
            <img src={logo} alt="CJS Soluções" className="h-10 md:h-12 lg:h-14 object-contain" />
          </a>

          <div className="flex items-center gap-3 md:gap-4 relative z-[100]">
            <div className="hidden md:flex items-center gap-6 mr-4">
              <a href="#como-funciona" className="text-[#111827] text-[13px] font-bold hover:text-[#C5A059] transition-colors uppercase tracking-wide">Como Funciona</a>
              <a href="#planos" className="text-[#111827] text-[13px] font-bold hover:text-[#C5A059] transition-colors uppercase tracking-wide">Valores</a>
              <a href="#faq" className="text-[#111827] text-[13px] font-bold hover:text-[#C5A059] transition-colors uppercase tracking-wide">FAQ</a>
            </div>
            <a href="#teste" className="flex items-center text-white bg-[#C5A059] hover:bg-[#b08e4d] px-4 py-2 md:px-5 md:py-2.5 rounded-full font-bold text-[11px] md:text-sm shadow-md transition-all">
              Demonstração
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'bg-[#111827] text-white rotate-90' : 'bg-[#111827]/5 text-[#111827]'}`}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>
      {/* Overlay background */}
      <div className={`fixed inset-0 bg-[#111827]/20 backdrop-blur-sm z-[85] transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}></div>

      <div className={`fixed top-0 left-0 right-0 z-[88] bg-white transition-all duration-500 flex flex-col pt-24 pb-12 px-6 shadow-2xl rounded-b-[2.5rem] origin-top ${isMobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center gap-8 w-full mb-10">
          <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="text-[#111827] text-[16px] font-medium flex items-center gap-2 hover:text-[#C5A059]">
            Como Funciona <ChevronRight size={16} />
          </a>
          <a href="#planos" onClick={() => setIsMobileMenuOpen(false)} className="text-[#111827] text-[16px] font-medium flex items-center gap-2 hover:text-[#C5A059]">
            Valores <ChevronRight size={16} />
          </a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-[#111827] text-[16px] font-medium flex items-center gap-2 hover:text-[#C5A059]">
            FAQ <ChevronRight size={16} />
          </a>
          <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="text-[#111827] text-[16px] font-medium flex items-center gap-2 hover:text-[#C5A059]">
            Por que a CJS Soluções <ChevronRight size={16} />
          </a>
        </nav>

        <div className="flex flex-col items-center w-full">
          <Button variant="secondary" href="#teste" onClick={() => setIsMobileMenuOpen(false)} className="w-[85%] max-w-xs py-4 text-[15px] !rounded-full bg-[#111827] text-white">
            Agendar demonstração
          </Button>
        </div>
      </div>
    </>
  );
};

const TrustSection = () => (
  <div className="py-6 md:py-10 border-y border-slate-100 bg-slate-50/50">
    <div className="max-w-7xl mx-auto px-6">
      <FadeIn>
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-[#111827]/40 mb-8">
          Tecnologia de Elite Integrada com
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Logos placeholders - replace with actual paths */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6 md:h-8" onError={(e) => e.target.style.display = 'none'} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/3840px-Meta_Platforms_Inc._logo.svg.png" alt="Meta" className="h-6 md:h-8" onError={(e) => e.target.style.display = 'none'} />
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
    standard: "bg-white border-slate-200 shadow-2xl text-[#111827] hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]",
    highlighted: "bg-white border-[#C5A059]/40 shadow-2xl scale-105 z-10 text-[#111827] hover:scale-110 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(197,160,89,0.3)]",
    elite: "bg-[#111827] border-2 border-[#C5A059] shadow-[0_40px_100px_rgba(5,10,36,0.5)] text-white hover:scale-105 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(197,160,89,0.6)]"
  };

  return (
    <div className={`p-6 md:p-8 rounded-[32px] md:rounded-[56px] flex flex-col h-full transition-all duration-500 border text-center items-center relative ${cardStyles[variant]}`}>
      {popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#111827] text-[#C5A059] px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl border border-[#C5A059]/40 z-20">
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
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group transition-all duration-300 hover:pl-2"
      >
        <span className={`text-base md:text-lg font-bold transition-all duration-300 ${isOpen ? 'text-[#C5A059] scale-105 origin-left' : 'text-[#111827] group-hover:text-[#C5A059]'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ${isOpen ? 'bg-[#C5A059] text-white rotate-90 scale-110 shadow-lg' : 'bg-[#111827]/5 text-[#111827] group-hover:bg-[#C5A059]/10 group-hover:rotate-12'}`}>
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
          <h2 className="text-3xl md:text-6xl font-black text-[#111827] mb-6 tracking-tighter">Dúvidas <span className="text-[#C5A059]">Frequentes</span></h2>
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
          <h2 className="text-3xl md:text-6xl font-black text-[#111827] mb-6 tracking-tighter">Quem usa <span className="text-[#C5A059]">Aprova</span></h2>
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
                  <p className="font-bold text-[#111827] text-lg">{t.name}</p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">{t.role}</p>
                </div>
              </div>

              <div className="flex-grow mb-6">
                <p className="text-slate-600 italic leading-relaxed relative z-10 text-sm md:text-base">
                  "{t.text}"
                </p>
              </div>

              <div className="flex text-[#C5A059] gap-1 opacity-80">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" className="drop-shadow-sm" />)}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

const CrmDashboardPreview = () => {
  return (
    <div className="w-full h-auto flex bg-white overflow-hidden">
      <img
        src="/crm_dashboard_mockup.png"
        alt="Demonstração do CRM"
        className="w-full h-auto object-cover mix-blend-multiply"
      />
    </div>
  );
};
const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState('atendai');

  const productsData = [
    {
      id: 'atendai',
      shortName: 'AtendAI',
      icon: <MessageSquare size={20} />,
      title: 'Assistente Virtual Inteligente & CRM',
      description: 'A plataforma AtendAI utiliza infraestrutura em nuvem integrada à IA do Google e WhatsApp Oficial para interagir, qualificar leads e fechar vendas 24 horas por dia.',
      listTitle: 'O que a plataforma faz por você em tempo real:',
      points: [
        'Respostas humanizadas e instantâneas em texto, áudio e imagem',
        'Follow-up inteligente para reengajar clientes ociosos automaticamente',
        'Disparo em massa de campanhas e promoções no WhatsApp',
        'Painel gerencial completo para acompanhar métricas e conversões'
      ],
      closing: 'Pague apenas pelo que usar (pay-as-you-go), sem taxas ocultas. A IA age estrategicamente no momento certo para escalar seu atendimento.',
      cta: 'Converse com a IA no WhatsApp',
      ctaLink: '#teste',
      image: '/atendai.png'
    },
    {
      id: 'prospectai',
      shortName: 'ProspectAI',
      icon: <Target size={20} />,
      title: 'Máquina de Prospecção Inteligente',
      description: 'Motor de prospecção de alta performance, projetado para abordar grandes listas de contatos, quebrar o gelo e encontrar os clientes ideais para o seu negócio.',
      listTitle: 'Na prática, o sistema realiza:',
      points: [
        'Início de conversas e quebra de gelo de forma 100% autônoma',
        'Triagem de curiosos, entregando apenas leads quentes aos vendedores',
        'Centralização de todas as interações e respostas em uma única tela',
        'Testes de novos nichos de mercado de forma rápida e com baixo custo'
      ],
      closing: 'Custos atrelados diretamente ao seu crescimento. A prospecção é ativada instantaneamente assim que você importa suas listas de leads.',
      cta: 'Conhecer os Planos',
      ctaLink: '#planos',
      image: '/prospectai.png'
    },
    {
      id: 'integraai',
      shortName: 'IntegraAI',
      icon: <LayoutDashboard size={20} />,
      title: 'Hub Omnichannel & ERP Inteligente',
      description: 'Um sistema robusto e seguro para integrar Mercado Livre, Magento, Correios e emissão de Notas Fiscais em um só lugar, eliminando o trabalho manual da sua operação.',
      listTitle: 'Como simplificamos o seu dia a dia:',
      points: [
        'Sincronização instantânea de estoque em múltiplos canais de venda',
        'Emissão automática de Notas Fiscais (NFe) e etiquetas de envio',
        'Centralização de anúncios e gerenciamento de pedidos em uma única tela',
        'Disparo de e-mails para nutrir, engajar e enviar rastreios aos clientes'
      ],
      closing: 'Operação Zero Clique: o pedido entra no sistema e é faturado automaticamente. Mensalidade flexível baseada apenas no seu volume de vendas.',
      cta: 'Agendar uma Demonstração',
      ctaLink: '#teste',
      image: '/integraai.png'
    },
    {
      id: 'atendailite',
      shortName: 'AtendAI Lite',
      icon: <Bot size={20} />,
      title: 'Sua Secretária Virtual no WhatsApp',
      description: 'O poder da Inteligência Artificial do Google conectada diretamente ao seu WhatsApp e Google Agenda de forma totalmente simplificada, sem painéis complexos.',
      listTitle: 'O que a sua secretária faz 24/7:',
      points: [
        'Escuta áudios e responde textos simulando o tempo de digitação real',
        'Marca reuniões automaticamente de acordo com a sua disponibilidade',
        'Recebe novos contatos, tira dúvidas técnicas e faz a triagem inicial',
        'Gestão completa diretamente por comandos de mensagem no WhatsApp'
      ],
      closing: 'Modelo de recarga de tokens 100% transparente. Ganhe um Trial Gratuito para começar e, depois, escale com pacotes a partir de R$ 29,90.',
      cta: 'Ativar meu Robô Agora',
      ctaLink: '#teste',
      image: '/atendailite.png'
    },
    {
      id: 'geoscraper',
      shortName: 'GeoScraper',
      icon: <Search size={20} />,
      title: 'Automação de Prospecção em Massa',
      description: 'Aplicação de alta performance que mapeia regiões, varre dados em grade e valida números de WhatsApp em tempo real para alimentar seu funil de vendas.',
      listTitle: 'Como funciona a varredura inteligente:',
      points: [
        'Descobre e filtra empresas por região geográfica e nicho de mercado',
        'Coleta endereços, avaliações de clientes e valida o número de WhatsApp',
        'Processa listas enormes em segundo plano enquanto você trabalha',
        'Sistema anti-duplicação rigoroso que impede cobrança por leads repetidos'
      ],
      closing: 'Gere listas aceleradas de contatos B2B. Acione a plataforma sob demanda, com custos focados apenas em leads reais e validados.',
      cta: 'Começar a Mapear',
      ctaLink: '#teste',
      image: '/geoscraper.png'
    }
  ];

  const activeProduct = productsData.find(p => p.id === activeTab);

  return (
    <Section id="solucoes" className="relative bg-white pt-10 md:pt-20 pb-16 md:pb-28 border-t border-slate-100">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h4 className="text-[#C5A059] font-black uppercase tracking-[0.2em] text-xs md:text-sm mb-4">Soluções</h4>
            <h2 className="text-3xl md:text-5xl font-black text-[#111827] tracking-tight">O que você <span className="text-[#C5A059]">Precisa?</span></h2>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          {/* Tabs Menu */}
          <div className="flex flex-wrap md:flex-nowrap items-stretch justify-center gap-2 md:gap-4 mb-16 border-b border-gray-100 pt-4 pb-8 overflow-x-auto no-scrollbar px-4">
            {productsData.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setActiveTab(prod.id)}
                className={`flex flex-col items-center justify-center p-4 min-w-[140px] md:min-w-[180px] rounded-xl transition-all duration-300 border ${activeTab === prod.id ? 'border-[#C5A059] bg-[#C5A059]/5 shadow-sm scale-105' : 'border-transparent hover:bg-gray-50'}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors ${activeTab === prod.id ? 'bg-[#C5A059] text-white' : 'bg-[#C5A059]/10 text-[#C5A059]'}`}>
                  {prod.icon}
                </div>
                <span className={`text-sm font-bold text-center ${activeTab === prod.id ? 'text-[#111827]' : 'text-gray-500'}`}>
                  {prod.shortName}
                </span>
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200} key={activeTab}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center px-4 md:px-0">
            <div className="flex flex-col">
              <h3 className="text-3xl md:text-4xl font-medium text-[#111827] mb-6 leading-tight">{activeProduct.title}</h3>

              <p className="text-lg text-gray-500 font-normal mb-8 leading-relaxed">
                {activeProduct.description}
              </p>

              <p className="text-gray-500 font-normal mb-6">
                {activeProduct.listTitle}
              </p>

              <ul className="space-y-5 mb-10">
                {activeProduct.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-600 font-medium text-[15px]">
                    <div className="mt-1 w-[22px] h-[22px] rounded-full bg-[#C5A059] flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                      <CheckCircle2 size={14} strokeWidth={3} />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-500 font-normal leading-relaxed mb-10">
                {activeProduct.closing}
              </p>

              <a
                href={activeProduct.ctaLink}
                className="text-[#C5A059] font-bold hover:text-[#b08e4d] transition-colors text-lg border-b-2 border-[#C5A059] hover:border-[#b08e4d] inline-block w-fit pb-1"
              >
                {activeProduct.cta}
              </a>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-[#C5A059]/10 rounded-[40px] blur-3xl transform group-hover:scale-105 transition-transform duration-700"></div>
              <div className="bg-white p-4 md:p-6 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative z-10 overflow-hidden">
                <div className="rounded-[24px] overflow-hidden bg-gray-50 flex items-center justify-center w-full h-auto">
                  <img src={activeProduct.image} alt={activeProduct.title} className="w-full h-auto transform hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
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
          const url = `https://wa.me/55${whatsappNumber}?text=${encodeURIComponent(message)}`;
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
        const url = `https://wa.me/55${whatsappNumber}?text=${encodeURIComponent(message)}`;
        gtag_report_conversion(url);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-[#C5A059] selection:text-white" id="inicio">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-[120px] md:pt-[200px] relative overflow-hidden min-h-screen flex flex-col justify-center bg-[#f8fafc]">
        <div className="flex flex-col items-center relative z-10 max-w-[85vw] mx-auto text-center pt-10">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-medium text-[#111827] tracking-tight mb-6 leading-[1.15] max-w-4xl mx-auto">
              Transforme seu WhatsApp em uma <br />
              <span className="text-[#C5A059] font-black">Máquina de Vendas</span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-base md:text-xl text-slate-500 mb-10 leading-relaxed max-w-3xl mx-auto">
              Atenda, qualifique e feche pedidos 24h por dia. Combine um agente de IA que resolve atendimentos de forma automática com uma plataforma que cabe no bolso e centraliza todos os seus canais. Mais escala, menos custo.
            </p>
          </FadeIn>

          <FadeIn delay={400} className="flex flex-col items-center w-full">
            <Button variant="glow" href="#teste" className="w-full sm:w-auto hover:animate-none py-4 px-12 text-base rounded-full !rounded-full mb-8 font-bold">
              Agendar demonstração
            </Button>

            <a href="#como-funciona" className="text-[#111827] font-semibold text-base md:text-lg flex items-center gap-2 hover:text-[#C5A059] transition-colors mb-14">
              Por que a CJS Soluções? <ChevronRight size={20} />
            </a>
          </FadeIn>

          <FadeIn delay={600} className="flex flex-col items-center mb-16 w-full">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-slate-400 text-xs font-medium mb-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/3840px-Meta_Platforms_Inc._logo.svg.png" alt="Meta" className="h-3 object-contain" />
              <span className="mt-1">Tech Provider</span>
            </div>

            <div className="flex items-center justify-center bg-white px-6 md:px-8 py-3 md:py-3.5 rounded-full border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="flex items-center -space-x-3 md:-space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center relative">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="currentColor">
                    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
                  </svg>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center relative">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center relative">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Google_Gemini_icon_2025.svg" alt="Google Gemini" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center relative">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" alt="Google Agenda" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center relative">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg" alt="Google Sheets" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center relative">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" alt="Google Drive" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 border-2 border-white shadow-sm flex items-center justify-center relative text-slate-400 font-bold text-sm md:text-base animate-bounce">
                  +
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={800} className="w-full mb-8">
            <p className="text-center text-base font-medium text-slate-400 mb-8 max-w-md mx-auto">
              As empresas digitais que mais crescem e confiam na CJS Soluções:
            </p>
            <div className="w-full overflow-hidden relative group py-4">
              {/* Gradiente Lateral Esquerdo (Fade out) */}
              <div className="absolute -left-1 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#f8fafc] to-[#f8fafc]/0 z-10 pointer-events-none"></div>
              {/* Gradiente Lateral Direito (Fade out) */}
              <div className="absolute -right-1 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#f8fafc] to-[#f8fafc]/0 z-10 pointer-events-none"></div>

              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                {/* Primeiro Grupo */}
                <div className="flex items-center justify-center gap-10 md:gap-16 px-5 md:px-8">
                  <img src="https://media.licdn.com/dms/image/v2/D4D3DAQEFCTo_xv1jtw/image-scale_191_1128/image-scale_191_1128/0/1691009076796/talattopaineis_cover?e=2147483647&v=beta&t=5FeVgbTSkkToL7lDahtUmk7eXpj8ATYKxS3BUeERltw" alt="Talatto" className="h-7 md:h-9 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="https://www.saojorgelocadora.com.br/img/logo_nova.png" alt="São Jorge Locadora" className="h-8 md:h-10 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="https://cover4me.pt/assets/img/logo-color-horizontal-cropped.png" alt="Cover4Me" className="h-6 md:h-8 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMtrarEZgir2RLGoDx-p9OtIDrqi9Rr-V9w&s" alt="Logo 4" className="h-8 md:h-10 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src={logoOdontojet} alt="Odontojet" className="h-8 md:h-10 object-contain brightness-0 opacity-40 hover:opacity-100 transition-all duration-300" />
                  <img src={logoFerragens} alt="Ferragens" className="h-8 md:h-10 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                </div>

                {/* Segundo Grupo (Clone exato para o loop) */}
                <div className="flex items-center justify-center gap-10 md:gap-16 px-5 md:px-8">
                  <img src="https://media.licdn.com/dms/image/v2/D4D3DAQEFCTo_xv1jtw/image-scale_191_1128/image-scale_191_1128/0/1691009076796/talattopaineis_cover?e=2147483647&v=beta&t=5FeVgbTSkkToL7lDahtUmk7eXpj8ATYKxS3BUeERltw" alt="Talatto" className="h-7 md:h-9 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="https://www.saojorgelocadora.com.br/img/logo_nova.png" alt="São Jorge Locadora" className="h-8 md:h-10 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="https://cover4me.pt/assets/img/logo-color-horizontal-cropped.png" alt="Cover4Me" className="h-6 md:h-8 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMtrarEZgir2RLGoDx-p9OtIDrqi9Rr-V9w&s" alt="Logo 4" className="h-8 md:h-10 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src={logoOdontojet} alt="Odontojet" className="h-8 md:h-10 object-contain brightness-0 opacity-40 hover:opacity-100 transition-all duration-300" />
                  <img src={logoFerragens} alt="Ferragens" className="h-8 md:h-10 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={1000} className="mt-12 w-full max-w-4xl mx-auto relative hidden md:block">
            <div className="flex items-center justify-center gap-2 mb-4 text-xs font-medium text-slate-500">
              <MessageSquareText size={16} className="text-[#C5A059]" />
              <span>Atendimento com IA que organiza e escala seu suporte.</span>
            </div>
            <div className="relative mx-auto border-slate-200 border border-b-0 rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] overflow-hidden bg-white animate-float">
              <div className="rounded-t-[2rem] overflow-hidden w-full h-auto bg-white">
                <CrmDashboardPreview />
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>



      {/* Atendimento 360 Section */}
      <Section id="como-funciona" className="relative">
        {/* Background Blob */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="text-center mb-8 md:mb-28">
              <h2 className="text-4xl md:text-7xl font-black text-[#111827] tracking-tighter mb-10 text-center mx-auto">Ecossistema <span className="text-[#C5A059]">360</span></h2>
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto text-center leading-relaxed mb-12">
                Sua operação comercial unificada em uma poderosa plataforma CRM, criando um ciclo infinito de atração e conversão automática.
              </p>
              <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes march {
                  to { stroke-dashoffset: -16; }
                }
                .animate-march {
                  animation: march 1s linear infinite;
                }
                @keyframes float {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                  100% { transform: translateY(0px); }
                }
                .animate-float {
                  animation: float 3s ease-in-out infinite;
                }
              `}} />

              <div className="relative flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto mt-10 gap-6 md:gap-0 px-4">

                {/* Loop Arrow removido a pedido do usuário */}

                {/* Card 1 */}
                <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-4 hover:scale-105 transition-all duration-500 relative overflow-hidden group w-full md:w-[28%] z-10 hover:shadow-2xl hover:shadow-[#C5A059]/20">
                  <div className="absolute inset-0 bg-[#C5A059]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                  <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-4 relative z-10">
                    <Target size={32} className="group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  <h3 className="text-2xl font-black text-[#111827] mb-1 relative z-10">Prospectar</h3>
                  <p className="text-sm text-slate-500 font-medium relative z-10">com a <span className="font-bold text-[#C5A059]">ProspectAI</span></p>
                </div>

                {/* Arrow 1 -> 2 */}
                <div className="text-[#C5A059] animate-pulse z-10 rotate-90 md:rotate-0 group-hover:scale-125 transition-transform">
                  <ChevronRight size={40} />
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-4 hover:scale-105 transition-all duration-500 relative overflow-hidden group w-full md:w-[28%] z-10 hover:shadow-2xl hover:shadow-[#C5A059]/20">
                  <div className="absolute inset-0 bg-[#C5A059]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                  <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-4 relative z-10">
                    <MessageSquareText size={32} className="group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  <h3 className="text-2xl font-black text-[#111827] mb-1 relative z-10">Atender</h3>
                  <p className="text-sm text-slate-500 font-medium relative z-10">com a <span className="font-bold text-[#C5A059]">AtendAI</span></p>
                </div>

                {/* Arrow 2 -> 3 */}
                <div className="text-[#C5A059] animate-pulse z-10 rotate-90 md:rotate-0">
                  <ChevronRight size={40} />
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-4 hover:scale-105 transition-all duration-500 relative overflow-hidden group w-full md:w-[28%] z-10 hover:shadow-2xl hover:shadow-[#C5A059]/20">
                  <div className="absolute inset-0 bg-[#C5A059]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                  <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-4 relative z-10">
                    <LayoutDashboard size={32} className="group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  <h3 className="text-2xl font-black text-[#111827] mb-1 relative z-10">Gerenciar</h3>
                  <p className="text-sm text-slate-500 font-medium relative z-10">com a <span className="font-bold text-[#C5A059]">IntegrAI</span></p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <ProductsSection />

      {/* Valores Section */}
      <Section id="planos" className="bg-slate-50/50">
        <FadeIn>
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-7xl font-black text-[#111827] mb-6 tracking-tighter text-center mx-auto leading-none">Planos de <span className="text-[#C5A059]">Escala</span></h2>
            <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto text-center leading-relaxed">
              Compare nossas opções e escolha a inteligência ideal para a sua operação.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          {/* Mobile Carousel (Flex Cards) */}
          <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 px-[7.5vw] pb-10 no-scrollbar overscroll-x-contain">
            {/* Card Básico */}
            <div className="min-w-[85vw] snap-center bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col overflow-hidden">
              <div className="p-6 border-b border-slate-100 text-center">
                <h3 className="font-bold text-[#111827] text-xl">Básico</h3>
                <p className="text-xs text-slate-500 mt-1">AtendAI Lite</p>
              </div>
              <div className="p-6 flex flex-col gap-6 flex-grow">
                <div className="text-center">
                  <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest block mb-2">Preço</span>
                  <span className="text-[11px] text-slate-400 block">A partir de</span>
                  <span className="font-bold text-[#111827] text-2xl">R$ 29,90</span>
                </div>
                <div className="text-center">
                  <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest block mb-2">Tipo de Cobrança</span>
                  <span className="text-[10px] font-bold px-3 py-1.5 bg-slate-200 text-slate-700 rounded-full inline-block">Recarga ou Mensal</span>
                </div>
                <div className="text-center">
                  <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest block mb-2">Capacidade</span>
                  <span className="text-[13px] font-bold text-[#111827]">Média de 50</span><br />
                  <span className="text-[11px] font-normal text-slate-500">atendimentos/mês</span>
                </div>
                <div className="text-center flex-grow">
                  <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest block mb-2">Funcionalidades</span>
                  <p className="text-[13px] text-slate-500 leading-relaxed">Assistente virtual. Compra avulsa ou mensalidade básica/premium para manutenção constante da inteligência.</p>
                </div>
              </div>
              <div className="p-6 border-t border-slate-100 mt-auto bg-slate-50/50">
                <Button variant="outline" href="https://wa.me/554598302403?text=Ol%C3%A1%2C%20gostaria%20de%20assinar%20o%20plano%20B%C3%A1sico%20(AtendAI%20Lite)." target="_blank" rel="noopener noreferrer" className="w-full h-auto min-h-[44px]">Assinar AtendAI Lite</Button>
              </div>
            </div>

            {/* Card Essencial */}
            <div className="min-w-[85vw] snap-center bg-[#C5A059]/5 rounded-3xl shadow-2xl border-2 border-[#C5A059] flex flex-col overflow-hidden relative">
              <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
                <div className="bg-[#C5A059] text-white text-[10px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md mt-6">
                  Plano Recomendado
                </div>
              </div>
              <div className="p-6 pt-10 border-b border-[#C5A059]/20 text-center">
                <h3 className="font-black text-[#C5A059] text-2xl">Essencial</h3>
                <p className="text-xs text-[#111827]/70 font-bold mt-1">AtendAI + ProspectAI</p>
              </div>
              <div className="p-6 flex flex-col gap-6 flex-grow">
                <div className="text-center">
                  <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest block mb-2">Preço</span>
                  <span className="font-black text-[#C5A059] text-3xl">R$ 297,00</span>
                  <span className="text-[11px] text-[#111827]/60 font-bold block mt-1">/ mês</span>
                </div>
                <div className="text-center">
                  <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest block mb-2">Tipo de Cobrança</span>
                  <span className="text-[10px] font-bold px-3 py-1.5 bg-[#C5A059]/20 text-[#C5A059] rounded-full inline-block">Assinatura Mensal</span>
                </div>
                <div className="text-center">
                  <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest block mb-2">Capacidade</span>
                  <span className="text-[13px] font-black text-[#111827]">Média de 300</span><br />
                  <span className="text-[11px] font-bold text-[#C5A059]">atendimentos/mês</span>
                </div>
                <div className="text-center flex-grow">
                  <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest block mb-2">Funcionalidades</span>
                  <div className="flex justify-center mb-2"><CheckCircle2 size={18} className="text-[#C5A059]" /></div>
                  <p className="text-[13px] text-[#111827] font-medium leading-relaxed">CRM Completo, integração WhatsApp Oficial, atendimento receptivo e prospecção ativa.</p>
                </div>
              </div>
              <div className="p-6 border-t border-[#C5A059]/20 mt-auto bg-white/50">
                <Button variant="glow" href={import.meta.env.VITE_ASAAS_ESSENTIAL_URL || "#teste"} className="w-full h-auto min-h-[44px]">Contratar Essencial</Button>
              </div>
            </div>

            {/* Card Corporativo */}
            <div className="min-w-[85vw] snap-center bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col overflow-hidden">
              <div className="p-6 border-b border-slate-100 text-center">
                <h3 className="font-bold text-[#111827] text-xl">Corporativo</h3>
                <p className="text-xs text-slate-500 mt-1">AtendAI + ProspectAI + IntegraAI</p>
              </div>
              <div className="p-6 flex flex-col gap-6 flex-grow">
                <div className="text-center">
                  <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest block mb-2">Preço</span>
                  <span className="text-[11px] text-slate-400 block">A partir de</span>
                  <span className="font-bold text-[#111827] text-2xl">R$ 997,00</span>
                  <span className="text-[11px] text-slate-400 block">/ mês</span>
                </div>
                <div className="text-center">
                  <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest block mb-2">Tipo de Cobrança</span>
                  <span className="text-[10px] font-bold px-3 py-1.5 bg-green-100 text-green-700 rounded-full inline-block">Assinatura Mensal</span>
                </div>
                <div className="text-center">
                  <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest block mb-2">Capacidade</span>
                  <span className="text-[13px] font-bold text-[#111827]">Mais de 1.000</span><br />
                  <span className="text-[11px] text-slate-500">atendimentos/mês</span>
                </div>
                <div className="text-center flex-grow">
                  <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest block mb-2">Funcionalidades</span>
                  <p className="text-[13px] text-slate-500 leading-relaxed">Tudo do Essencial + <span className="font-bold text-[#111827]">IntegraAI (Hub ERP Omnichannel)</span>, Engenharia de prompt, múltiplos números, 10x mais tokens.</p>
                </div>
              </div>
              <div className="p-6 border-t border-slate-100 mt-auto bg-slate-50/50">
                <Button variant="secondary" href="#teste" className="w-full h-auto min-h-[44px]">Falar com Consultor</Button>
              </div>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block max-w-[1200px] mx-auto pb-10 px-4 md:px-0">
            <div className="w-full inline-block align-middle">
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative">
                <table className="w-full text-left border-collapse table-fixed">
                  <thead>
                    <tr>
                      <th className="px-4 py-6 font-medium text-slate-400 border-b border-slate-100 w-[25%]"></th>

                      <th className="px-4 py-6 text-center border-b border-slate-100 w-[25%]">
                        <h3 className="font-bold text-[#111827] text-lg">Básico</h3>
                        <p className="text-[11px] text-slate-500 mt-1">AtendAI Lite</p>
                      </th>

                      {/* Highlighted Column */}
                      <th className="px-4 py-6 text-center border-b-2 border-b-[#C5A059] w-[25%] bg-[#C5A059]/5 relative align-bottom">
                        <div className="inline-block bg-[#C5A059] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3 shadow-md">
                          Plano Recomendado
                        </div>
                        <h3 className="font-black text-[#C5A059] text-lg">Essencial</h3>
                        <p className="text-[11px] text-[#111827]/70 font-bold mt-1">AtendAI + ProspectAI</p>
                      </th>

                      <th className="px-4 py-6 text-center border-b border-slate-100 w-[25%]">
                        <h3 className="font-bold text-[#111827] text-lg">Corporativo</h3>
                        <p className="text-[11px] text-slate-500 mt-1">AtendAI + ProspectAI + IntegraAI</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-5 text-sm font-medium text-slate-500">Preço</td>
                      <td className="px-4 py-5 text-center">
                        <span className="text-[11px] text-slate-400 block">A partir de</span>
                        <span className="font-bold text-[#111827] text-lg">R$ 29,90</span>
                      </td>
                      <td className="px-4 py-5 text-center bg-[#C5A059]/5">
                        <span className="font-black text-[#C5A059] text-2xl">R$ 297,00</span>
                        <span className="text-[11px] text-[#111827]/60 font-bold block">/ mês</span>
                      </td>
                      <td className="px-4 py-5 text-center">
                        <span className="text-[11px] text-slate-400 block">A partir de</span>
                        <span className="font-bold text-[#111827] text-lg">R$ 997,00</span>
                        <span className="text-[11px] text-slate-400 block">/ mês</span>
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50/50 transition-colors bg-slate-50/30">
                      <td className="px-4 py-5 text-sm font-medium text-slate-500">Tipo de Cobrança</td>
                      <td className="px-4 py-5 text-center">
                        <span className="text-[10px] font-bold px-2 py-1 bg-slate-200 text-slate-700 rounded-full inline-block">Recarga ou Mensal</span>
                      </td>
                      <td className="px-4 py-5 text-center bg-[#C5A059]/5">
                        <span className="text-[10px] font-bold px-2 py-1 bg-[#C5A059]/20 text-[#C5A059] rounded-full inline-block">Assinatura Mensal</span>
                      </td>
                      <td className="px-4 py-5 text-center">
                        <span className="text-[10px] font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full inline-block">Assinatura Mensal</span>
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-5 text-sm font-medium text-slate-500">Capacidade / Franquia</td>
                      <td className="px-4 py-5 text-center text-[13px] font-bold text-[#111827]">
                        Média de 50<br /><span className="text-[11px] font-normal text-slate-500">atendimentos/mês</span>
                      </td>
                      <td className="px-4 py-5 text-center text-[13px] font-black text-[#111827] bg-[#C5A059]/5">
                        Média de 300<br /><span className="text-[11px] font-bold text-[#C5A059]">atendimentos/mês</span>
                      </td>
                      <td className="px-4 py-5 text-center text-[13px] font-bold text-[#111827]">
                        Mais de 1.000<br /><span className="text-[11px] font-normal text-slate-500">atendimentos/mês</span>
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50/50 transition-colors bg-slate-50/30">
                      <td className="px-4 py-5 text-sm font-medium text-slate-500">Funcionalidades</td>
                      <td className="px-4 py-5 text-[11px] text-slate-500 text-center leading-relaxed">
                        Assistente virtual. Compra avulsa ou mensalidade básica/premium para manutenção constante da inteligência.
                      </td>
                      <td className="px-4 py-5 text-[11px] text-[#111827] font-medium text-center leading-relaxed bg-[#C5A059]/5">
                        <span className="flex justify-center mb-1 text-[#C5A059]"><CheckCircle2 size={16} /></span>
                        CRM Completo, integração WhatsApp Oficial, atendimento receptivo e prospecção ativa.
                      </td>
                      <td className="px-4 py-5 text-[11px] text-slate-500 text-center leading-relaxed">
                        Tudo do Essencial + <span className="font-bold text-[#111827]">IntegraAI (Hub ERP Omnichannel)</span>, Engenharia de prompt, múltiplos números, 10x mais tokens.
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-5 border-t border-slate-100"></td>
                      <td className="px-4 py-5 text-center border-t border-slate-100">
                        <Button variant="outline" href="https://wa.me/554598302403?text=Ol%C3%A1%2C%20gostaria%20de%20assinar%20o%20plano%20B%C3%A1sico%20(AtendAI%20Lite)." target="_blank" rel="noopener noreferrer" className="!px-4 !py-3 !text-[11px] w-full whitespace-normal h-auto min-h-[44px]">Assinar AtendAI Lite</Button>
                      </td>
                      <td className="px-4 py-5 text-center border-t border-slate-100 bg-[#C5A059]/5 rounded-br-3xl">
                        <Button variant="glow" href={import.meta.env.VITE_ASAAS_ESSENTIAL_URL || "#teste"} className="!px-4 !py-3 !text-[11px] w-full whitespace-normal h-auto min-h-[44px]">Contratar Essencial</Button>
                      </td>
                      <td className="px-4 py-5 text-center border-t border-slate-100">
                        <Button variant="secondary" href="#teste" className="!px-4 !py-3 !text-[11px] w-full whitespace-normal h-auto min-h-[44px]">Falar com Consultor</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Simulation Form */}
      <Section id="teste">
        <FadeIn>
          <div className="max-w-5xl mx-auto bg-white rounded-[40px] md:rounded-[80px] p-8 md:p-28 shadow-[0_80px_160px_-40px_rgba(26,35,126,0.15)] relative overflow-hidden border border-[#C5A059]/40">
            <div className="text-center mb-10 md:mb-20">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#111827] mb-8 tracking-tighter text-center mx-auto leading-[0.85]">Simule <span className="text-[#C5A059] gold-text-glow mt-6">Agora</span></h2>
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed mt-10">Veja como nossa inteligência artificial integrada ao CRM atende e encanta seus clientes nessa simulação em tempo real.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6 md:space-y-12 relative z-10 max-w-4xl mx-auto">
              <div className="space-y-4">
                <label className="text-[11px] font-black text-[#111827] uppercase tracking-[0.3em] ml-2 opacity-60">Seu Número de WhatsApp</label>
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
                <label className="text-[11px] font-black text-[#111827] uppercase tracking-[0.3em] ml-2 opacity-60">Descreva sua empresa</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Ex: Sou a Clínica Estética Bela Vida. Gostaria que a IA tirasse dúvidas sobre procedimentos e informasse os horários de funcionamento."
                  className="w-full px-6 py-4 md:px-10 md:py-7 rounded-[28px] bg-white border border-slate-100 focus:border-[#C5A059] focus:ring-[12px] focus:ring-[#C5A059]/10 outline-none transition-all shadow-sm resize-none font-semibold text-base md:text-lg leading-relaxed"
                  value={formState.description}
                  onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                />
              </div>
              <div>
                <Button variant="glow" className="w-full py-5 md:py-9 text-lg md:text-2xl shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed" disabled={isLoading}>
                  {isLoading ? 'Processando...' : <>Quero ver minha IA vendendo agora <ChevronRight size={36} className="ml-2" /></>}
                </Button>
                {isLoading && (
                  <p className="text-center text-[#111827] font-bold mt-6 animate-pulse text-lg">
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
      <footer className="bg-[#111827] py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
            <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start gap-6">
              <img src={logo} alt="CJS Soluções" className="h-10 md:h-14 object-contain" />
              <p className="text-blue-100/60 text-sm font-light max-w-sm leading-relaxed">
                A revolução do atendimento digital, desenhada para máxima autoridade e conversão em escala global.
              </p>

              <div className="flex items-center gap-4 mt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-300">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-center md:items-start">
              <h4 className="text-white font-bold mb-2">Navegação</h4>
              <a href="#inicio" className="text-white/60 hover:text-[#C5A059] transition-colors text-sm">Início</a>
              <a href="#como-funciona" className="text-white/60 hover:text-[#C5A059] transition-colors text-sm">Como Funciona</a>
              <a href="#planos" className="text-white/60 hover:text-[#C5A059] transition-colors text-sm">Valores</a>
              <a href="#faq" className="text-white/60 hover:text-[#C5A059] transition-colors text-sm">FAQ</a>
            </div>

            <div className="flex flex-col gap-4 items-center md:items-start">
              <h4 className="text-white font-bold mb-2">Legal</h4>
              <a href="#" className="text-white/60 hover:text-[#C5A059] transition-colors text-sm">Termos de Uso</a>
              <a href="#" className="text-white/60 hover:text-[#C5A059] transition-colors text-sm">Política de Privacidade</a>
              <span className="text-white/60 text-sm mt-2">CNPJ: 63.251.000/0001-84</span>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <p className="text-[11px] text-white/40 uppercase tracking-widest font-bold">
              © 2026 CJS Soluções. TODOS OS DIREITOS RESERVADOS.
            </p>
            <p className="text-[11px] text-[#C5A059] uppercase tracking-widest font-medium opacity-80">
              CJS Soluções Intelligence Ecosistem
            </p>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}
