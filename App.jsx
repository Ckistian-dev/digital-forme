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
  Cpu
} from 'lucide-react';

// Google Ads Conversion Tracking
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
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
      window.location = url;
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
      ⚡ Oportunidade de Lançamento: Vagas LIMITADAS com Investimento Revertido em Créditos de Conversa. Garanta sua vaga hoje.
    </p>
  </div>
);

const CountdownTimer = ({ align = 'center' }) => {
  const [timeLeft, setTimeLeft] = useState((16 * 3600) + (12 * 60)); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : (23 * 3600) + (12 * 60)));
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

  const alignClass = align === 'start' ? 'items-center lg:items-start' : 'items-center';
  const textAlignClass = align === 'start' ? 'text-center lg:text-left px-0' : 'text-center px-4';

  return (
    <div className={`flex flex-col ${alignClass} gap-3 my-4 md:my-10`}>
      <p className={`text-[10px] font-black uppercase tracking-[0.2em] text-[#1A237E]/60 mb-2 ${textAlignClass}`}>A oferta de reversão de créditos encerra em:</p>
      <div className="flex gap-3 md:gap-4">
        {[
          { label: 'Horas', value: h },
          { label: 'Minutos', value: m },
          { label: 'Segundos', value: s },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="glass w-12 h-12 md:w-20 md:h-20 rounded-[14px] md:rounded-[22px] flex items-center justify-center border border-[#C5A059]/30 shadow-2xl bg-white/50 backdrop-blur-sm">
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
      <nav className={`fixed top-[44px] md:top-[48px] left-0 right-0 z-[90] transition-all duration-700 px-2 md:px-6 w-full my-5`}>
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

const ObjectionHandling = () => (
  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10 md:mb-20">
    {[
      { icon: MessageSquare, title: "Parece humano?", text: "Sim, usamos tecnologia de linguagem natural avançada." },
      { icon: Zap, title: "É difícil configurar?", text: "Não, nossa plataforma CRM é intuitiva e fazemos o setup para você." },
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

const CrmDashboardPreview = () => {
  const contacts = [
    { id: 1, name: 'João Silva', phone: '+55 11 99999-9999', msg: 'Gostaria de saber mais sobre o plano.', time: '10:30', unread: 2, status: 'Novo', color: '#3b82f6', tags: [{name: 'Hot Lead', color: '#ef4444'}] },
    { id: 2, name: 'Maria Oliveira', phone: '+55 21 98888-8888', msg: 'Obrigado pelo atendimento!', time: 'Ontem', unread: 0, status: 'Concluído', color: '#22c55e', tags: [] },
    { id: 3, name: 'Pedro Santos', phone: '+55 31 97777-7777', msg: 'Qual o valor da integração?', time: 'Ontem', unread: 0, status: 'Aguardando', color: '#eab308', tags: [{name: 'Dúvida', color: '#a855f7'}] },
  ];
  const [activeContactId, setActiveContactId] = useState(1);
  const activeContact = contacts.find(c => c.id === activeContactId);
  const [isTyping, setIsTyping] = useState(true);
  const [showMobileProfile, setShowMobileProfile] = useState(false);

  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [activeContactId]);

  return (
    <div className="w-full max-w-7xl mx-auto mb-16 md:mb-24 relative group">
      <div className="relative bg-white rounded-[20px] overflow-hidden border border-slate-200 shadow-2xl flex text-left font-sans h-[600px] md:h-[700px]">
        
        {/* Sidebar (App Nav) */}
        <aside className="w-16 md:w-20 bg-[#0f172a] text-white flex flex-col items-center py-6 gap-6 flex-shrink-0 z-20">
            <div className="bg-blue-600/20 w-10 h-10 flex items-center justify-center rounded-xl text-[#C5A059] mb-4">
                <span className="font-black text-lg md:text-xl">A</span>
            </div>
            
            <nav className="flex flex-col gap-4 w-full px-2">
                <div className="p-3 rounded-xl text-slate-400 hover:bg-white/10 cursor-pointer transition-colors flex justify-center">
                    <LayoutDashboard size={22} />
                </div>
                <div className="p-3 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-900/50 cursor-pointer transition-colors flex justify-center">
                    <MessageSquareText size={22} />
                </div>
                <div className="p-3 rounded-xl text-slate-400 hover:bg-white/10 cursor-pointer transition-colors flex justify-center">
                    <Archive size={22} />
                </div>
                <div className="p-3 rounded-xl text-slate-400 hover:bg-white/10 cursor-pointer transition-colors flex justify-center">
                    <Bot size={22} />
                </div>
            </nav>

            <div className="mt-auto p-3 text-slate-400 hover:text-white cursor-pointer">
                <LogOut size={22} />
            </div>
        </aside>

        {/* Chat Interface Container */}
        <div className="flex-1 flex bg-gray-50 relative w-full overflow-hidden">
            
            {/* Contact List Sidebar */}
            <div className="w-72 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
                <div className="p-4 border-b border-gray-100">
                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input type="text" placeholder="Buscar conversa..." className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all" />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                        <button className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full whitespace-nowrap border border-blue-100">Todos</button>
                        <button className="px-3 py-1 bg-white text-gray-500 text-xs font-bold rounded-full whitespace-nowrap border border-gray-200 hover:bg-gray-50">Não lidos</button>
                        <button className="px-3 py-1 bg-white text-gray-500 text-xs font-bold rounded-full whitespace-nowrap border border-gray-200 hover:bg-gray-50">Aguardando</button>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {contacts.map(contact => (
                        <div 
                            key={contact.id} 
                            onClick={() => setActiveContactId(contact.id)}
                            className={`p-4 border-b border-gray-50 cursor-pointer transition-colors hover:bg-gray-50 ${activeContactId === contact.id ? 'bg-blue-50/60 border-l-4 border-l-blue-500' : 'border-l-4 border-l-transparent'}`}
                        >
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-600 font-bold flex-shrink-0">
                                    {contact.name.substring(0,2).toUpperCase()}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className={`text-sm truncate ${activeContactId === contact.id ? 'font-bold text-gray-900' : 'font-semibold text-gray-700'}`}>{contact.name}</h4>
                                        <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">{contact.time}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 truncate mb-2">{contact.msg}</p>
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-0.5 text-[10px] rounded-full font-bold" style={{ backgroundColor: `${contact.color}20`, color: contact.color }}>
                                            {contact.status}
                                        </span>
                                        {contact.unread > 0 && (
                                            <span className="w-4 h-4 bg-blue-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold ml-auto">
                                                {contact.unread}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-[#efeae2] relative">
                {/* Chat Header */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 flex-shrink-0 z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                            {activeContact.name.substring(0,2).toUpperCase()}
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800 text-sm md:text-base">{activeContact.name}</h3>
                            <p className="text-xs text-gray-500">{activeContact.phone}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4 text-gray-400">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Search size={20} /></button>
                        <button onClick={() => setShowMobileProfile(true)} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><MoreVertical size={20} /></button>
                    </div>
                </header>

                {/* Messages Body */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}>
                    <div className="flex justify-center">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-medium text-gray-500 shadow-sm">Hoje</span>
                    </div>

                    {/* Bot Message */}
                    <div className="flex justify-end">
                        <div className="bg-[#d9fdd3] p-3 md:p-4 rounded-xl rounded-tr-none shadow-sm max-w-[85%] md:max-w-[70%] text-sm text-gray-800 relative group">
                            <p className="leading-relaxed">Olá {activeContact.name.split(' ')[0]}! 👋 Vi que você se interessou pelo nosso plano Elite. Posso tirar alguma dúvida sobre a implementação?</p>
                            <div className="flex justify-end items-center gap-1 mt-1">
                                <span className="text-[10px] text-gray-500">10:28</span>
                                <CheckCircle2 size={12} className="text-blue-500" />
                            </div>
                        </div>
                    </div>

                    {/* User Message */}
                    <div className="flex justify-start">
                        <div className="bg-white p-3 md:p-4 rounded-xl rounded-tl-none shadow-sm max-w-[85%] md:max-w-[70%] text-sm text-gray-800 relative">
                            <p className="leading-relaxed">{activeContact.msg}</p>
                            <span className="text-[10px] text-gray-400 block text-right mt-1">10:29</span>
                        </div>
                    </div>

                    {/* Bot Reply (Simulated Typing/Sent) */}
                    <div className="flex justify-end">
                        {isTyping ? (
                            <div className="bg-[#d9fdd3] p-4 rounded-xl rounded-tr-none shadow-sm relative animate-pulse">
                                <div className="flex gap-1.5 items-center">
                                    <div className="w-1.5 h-1.5 bg-green-600/50 rounded-full animate-bounce"></div>
                                    <div className="w-1.5 h-1.5 bg-green-600/50 rounded-full animate-bounce" style={{animationDelay: '0.15s'}}></div>
                                    <div className="w-1.5 h-1.5 bg-green-600/50 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-[#d9fdd3] p-3 md:p-4 rounded-xl rounded-tr-none shadow-sm max-w-[85%] md:max-w-[70%] text-sm text-gray-800 relative animate-fade-in-up">
                                <p className="leading-relaxed">É 100% nativa! 🚀 Você conecta seu WhatsApp e o CRM já começa a atender automaticamente todos os seus leads.</p>
                                <div className="flex justify-end items-center gap-1 mt-1">
                                    <span className="text-[10px] text-gray-500">10:30</span>
                                    <CheckCircle2 size={12} className="text-gray-400" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Chat Footer */}
                <footer className="p-3 md:p-4 bg-[#f0f2f5] border-t border-gray-200 flex items-center gap-2 md:gap-4">
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors"><Paperclip size={20} /></button>
                    <div className="flex-1 bg-white rounded-xl px-4 py-3 border border-gray-200 flex items-center focus-within:ring-2 focus-within:ring-blue-100 transition-all max-w-[50%]">
                        <input type="text" placeholder="Digite sua mensagem" className="flex-1 bg-transparent outline-none text-xs text-gray-700 placeholder:text-gray-400" />
                    </div>
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors"><Mic size={20} /></button>
                    <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"><Send size={18} /></button>
                </footer>
            </div>

            {/* Profile Sidebar (Right) */}
            <div className={`bg-gray-50 border-l border-gray-200 flex-col overflow-y-auto ${showMobileProfile ? 'absolute inset-0 z-20 flex w-full xl:static xl:w-64' : 'hidden xl:flex w-64'}`}>
                <div className="p-6 flex flex-col items-center border-b border-gray-200 bg-white relative">
                    {showMobileProfile && (
                        <button onClick={() => setShowMobileProfile(false)} className="absolute left-4 top-4 p-2 text-gray-400 hover:bg-gray-100 rounded-full xl:hidden">
                            <X size={20} />
                        </button>
                    )}
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-500 mb-4 shadow-inner">
                        {activeContact.name.substring(0,2).toUpperCase()}
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 text-center">{activeContact.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{activeContact.phone}</p>
                    
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span className="text-xs font-bold text-blue-700">{activeContact.status}</span>
                    </div>
                </div>

                <div className="p-5 space-y-6">
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                <Tag size={14} /> Tags
                            </h4>
                            <button className="text-blue-600 hover:bg-blue-50 p-1 rounded"><Edit size={12} /></button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {activeContact.tags.length > 0 ? activeContact.tags.map((tag, i) => (
                                <span key={i} className="px-2 py-1 text-xs font-bold text-white rounded-md shadow-sm" style={{ backgroundColor: tag.color }}>
                                    {tag.name}
                                </span>
                            )) : <span className="text-xs text-gray-400 italic">Sem tags</span>}
                            <button className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-md font-bold hover:bg-gray-300 transition-colors">+</button>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                <FileText size={14} /> Observações
                            </h4>
                            <button className="text-blue-600 hover:bg-blue-50 p-1 rounded"><Edit size={12} /></button>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-gray-200 text-xs text-gray-600 leading-relaxed shadow-sm">
                            Cliente demonstrou alto interesse na automação de vendas. Agendar reunião de fechamento para amanhã às 14h.
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2 mb-3">
                            <Cpu size={14} /> Consumo IA
                        </h4>
                        <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-600">Tokens</span>
                                <span className="font-bold text-gray-800">1.240</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                <div className="bg-purple-500 h-full w-[45%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

const PlanCard = ({ title, price, features, variant = 'standard', subtitle = "", percent = "", description = "", ctaText = "Teste Grátis", popular = false, savings = "", dailyCost = "", paymentLink }) => {
  const isElite = variant === 'elite';
  const isHighlighted = variant === 'highlighted';
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5500000000000";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(isElite ? "Olá, gostaria de falar com um estrategista sobre o Plano Elite Studio." : `Olá, gostaria de contratar o Plano ${title}.`)}`;

  const cardStyles = {
    standard: "bg-white border-slate-200 shadow-2xl text-[#1A237E]",
    highlighted: "bg-white border-[#C5A059]/40 shadow-2xl scale-105 z-10 text-[#1A237E]",
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
        href={whatsappUrl}
        onClick={(e) => {
          e.preventDefault();
          gtag_report_conversion(whatsappUrl);
        }}
      >
        {ctaText}
      </Button>
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
          const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
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
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          {/* Left Column */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <FadeIn direction="down">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A237E]/5 border border-[#1A237E]/10 text-[#1A237E] text-[10px] font-black uppercase tracking-widest mb-6">
                <Sparkles size={12} className="text-[#C5A059]" />
                <span>Nova Tecnologia 2026</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-black text-[#1A237E] tracking-tighter mb-6 leading-[1.1] lg:leading-[1]">
                Transforme seu WhatsApp em uma <span className="text-[#C5A059] inline-block gold-text-glow">Máquina de Vendas</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-medium max-w-2xl lg:max-w-none">
                Atenda, qualifique e feche pedidos 24h por dia. <span className="text-[#1A237E] font-extrabold">Comece a lucrar enquanto dorme.</span>
              </p>
            </FadeIn>
            
            <FadeIn delay={400} className="w-full">
              <CountdownTimer align="start" />
            </FadeIn>

            <FadeIn delay={600} className="w-full">
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full justify-center lg:justify-start">
                <Button variant="glow" href="#planos" className="w-full sm:w-auto animate-pulse hover:animate-none">Ativar meu Especialista</Button>
                <Button variant="outline" href="#teste" className="w-full sm:w-auto">Simular IA agora</Button>
              </div>
              
              {/* Social Proof */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${40 + i}.jpg`} alt="User" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex text-[#C5A059] gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} size={10} fill="currentColor" />)}
                  </div>
                  <p className="text-[10px] font-bold text-slate-500"><span className="text-[#1A237E] font-black">+50 empresas</span> confiam</p>
                </div>
              </div>
              
              <p className="text-[10px] font-bold text-[#1A237E]/40 uppercase tracking-widest mt-6 text-center lg:text-left">
                ✓ Teste grátis hoje • ✓ Cancele quando quiser
              </p>
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="relative hidden lg:block h-full min-h-[600px]">
             <FadeIn direction="left" delay={300} className="h-full">
                <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-all duration-700 group [mask-image:radial-gradient(white,black)]">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                    alt="Business Growth" 
                    className="object-cover w-full h-full scale-105 group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A237E]/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Card 1 */}
                  <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/50 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="bg-green-100 p-3 rounded-full text-green-600">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Venda Realizada</p>
                      <p className="text-lg font-black text-[#1A237E]">+R$ 597,00</p>
                    </div>
                  </div>

                  {/* Floating Card 2 */}
                  <div className="absolute top-10 right-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/50 flex items-center gap-3 animate-pulse" style={{ animationDuration: '4s' }}>
                    <div className="bg-[#1A237E]/10 p-2 rounded-full text-[#1A237E]">
                      <MessageSquareText size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Lead Qualificado</p>
                      <p className="text-sm font-black text-[#1A237E]">Agendamento Confirmado</p>
                    </div>
                  </div>
                </div>
             </FadeIn>
          </div>
        </div>
      </Section>

      <TrustSection />

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

          <ObjectionHandling />

          <FadeIn delay={200}>
            <CrmDashboardPreview />
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
            </FadeIn>

            {/* PROSPECT.AI */}
            <FadeIn direction="right" className="h-full">
            <div className="bg-white p-6 md:p-14 rounded-[32px] md:rounded-[64px] border border-slate-200 shadow-2xl flex flex-col items-center text-center transform transition-all hover:scale-[1.03] hover:border-[#C5A059]/40 hover:shadow-3xl h-full">
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
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-[1280px] mx-auto px-6 mb-8 md:mb-16 items-stretch">
          <FadeIn delay={100} className="h-full">
          <PlanCard 
            title="Essencial"
            subtitle="Atendimento Receptivo"
            price="297"
            percent="50%"
            ctaText="Contratar Agora"
            paymentLink={import.meta.env.VITE_ASAAS_ESSENTIAL_URL}
            features={[
              "Atendimento Humanizado Ativo",
              "50% Reversão em Créditos",
              "Integração WhatsApp Oficial",
              "Plataforma CRM Completa",
              "Configuração Guiada Inclusa"
            ]}
          />
          </FadeIn>
          <FadeIn delay={300} className="h-full">
          <PlanCard 
            title="Dominância"
            subtitle="Ecosistema 360"
            price="597"
            variant="highlighted"
            popular={true}
            percent="100%"
            savings="Economize R$ 2.000/ano"
            dailyCost="Menos de R$ 20/dia"
            ctaText="Contratar Agora"
            paymentLink={import.meta.env.VITE_ASAAS_DOMINANCE_URL}
            features={[
              "Tudo do Plano Essencial",
              "Motor Prospect.AI Ativo",
              "Reativação Automática de Base",
              "Prospecção de Novos Leads",
              "100% Reversão em Créditos",
              "Suporte Prioritário"
            ]}
          />
          </FadeIn>
          <FadeIn delay={500} className="h-full">
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
          </FadeIn>
        </div>

        {/* Legend Caption */}
        <FadeIn delay={600}>
          <div className="text-center mb-10 md:mb-20 max-w-2xl mx-auto">
            <p className="text-sm md:text-base text-slate-500 font-bold italic leading-relaxed">
              O modelo de reversão de créditos garante que sua escala nunca seja limitada por taxas fixas. <span className="text-[#C5A059]">Seu investimento vira combustível real.</span>
            </p>
          </div>
        </FadeIn>

        {/* Custo Justo Refinement Note */}
        <FadeIn delay={700}>
          <div className="max-w-4xl mx-auto bg-white border border-[#C5A059]/20 rounded-[32px] p-8 md:p-10 shadow-2xl text-center">
            <p className="text-base md:text-lg text-[#1A237E] font-medium leading-relaxed italic">
              <span className="text-[#C5A059] font-black uppercase tracking-widest block mb-2 text-sm">ESCALA SEM SUSTO</span>
              Sua mensalidade licencia nossa infraestrutura de IA de elite, capaz de gerenciar contextos gigantes e catálogos com milhares de produtos sem travar sua operação. Como condição especial, revertemos até 100% deste valor em créditos de conversa e, se sua escala superar o saldo garantido, você continua operando via cobrança justa por volume excedente, com total transparência e previsibilidade.
            </p>
          </div>
        </FadeIn>
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
        </FadeIn>
      </Section>

      <FAQSection />

      <TestimonialsSection />

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