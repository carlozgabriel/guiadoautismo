import { motion } from "motion/react";
import { 
  Puzzle, 
  Heart, 
  Brain, 
  HandHelping, 
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  Smartphone,
  ShieldCheck,
  Star,
  Users,
  Info
} from "lucide-react";

const PuzzlePiece = ({ color, className, delay = 0, size = 64 }: { color: string, className: string, delay?: number, size?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
    animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
    transition={{ duration: 1.5, delay, ease: "easeOut" }}
    className={`absolute pointer-events-none ${className}`}
  >
    <Puzzle size={size} fill={color} color={color} />
  </motion.div>
);

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.21, 1, 0.44, 1] }
  };

  return (
    <div className="relative min-h-screen bg-white selection:bg-brand-blue/10 overflow-x-hidden">
      {/* Background Decor - Desktop & Mobile */}
      <PuzzlePiece color="#F59E0B" className="bottom-1/4 -left-12 w-32 h-32" delay={0.6} size={100} />

      {/* Top Banner Image with Gradient Fade */}
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
        <img 
          src="/003.png" 
          alt="Banner Guia do Autismo" 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=1600";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 -mt-20 md:-mt-36 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <motion.h1 
              {...fadeIn}
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-slate-900 tracking-tight"
            >
              O Guia completo do <span className="text-brand-blue">autismo</span> para pais e educadores
            </motion.h1>

            <motion.p 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Mais de 100 páginas com estratégias práticas para lidar com crises, rotinas e direitos em Portugal. O suporte que a sua família merece.
            </motion.p>

            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#fisico" className="bg-brand-blue text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-blue-900 shadow-2xl shadow-brand-blue/30 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 btn-premium">
                Quero o Guia Agora <ArrowRight size={20} />
              </a>
            </motion.div>

            {/* Micro Badges */}
            <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8 border-t border-slate-200">
               <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
                 <ShieldCheck size={18} className="text-brand-green" /> Compra Segura
               </div>
               <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
                 <Star size={18} className="text-brand-yellow" /> 4.9/5 Estrelas
               </div>
               <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
                 <Users size={18} className="text-brand-blue" /> +2.500 Famílias
               </div>
            </motion.div>
          </div>

          {/* Hero Visual - Book Cover focus */}
          <div className="flex-1 relative w-full max-w-[500px] mx-auto pt-10 lg:pt-0">
            <motion.div 
               initial={{ opacity: 0, x: 50, rotate: 5 }}
               animate={{ opacity: 1, x: 0, rotate: 0 }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="relative z-20 group"
            >
              {/* Main Book Image */}
              <div className="relative rounded-lg shadow-[0_50px_100px_-20px_rgba(30,58,138,0.4)] transition-transform duration-700 group-hover:scale-[1.02] overflow-hidden">
                <img 
                  src="/002.png" 
                  alt="Guia do Autismo 2026 - Livro" 
                  className="w-full h-auto block"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add('aspect-[3/4]', 'bg-brand-blue', 'flex', 'items-center', 'justify-center', 'p-12', 'text-white', 'text-center');
                      parent.innerHTML = '<div class="space-y-4"><p class="text-xs font-black uppercase tracking-[0.3em] opacity-60">Carregue o livro como</p><p class="text-xl font-black">002.png</p></div>';
                    }
                  }}
                />
              </div>

              {/* Floating Element - Mobile */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 md:-right-10 glass-panel p-4 md:p-6 rounded-2xl z-30 max-w-[160px] md:max-w-[200px] border-b-4 border-brand-yellow"
              >
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />)}
                </div>
                <p className="text-slate-900 font-black text-xs md:text-sm mb-1 uppercase tracking-tighter">Leitura Essencial</p>
                <p className="text-slate-600 text-[10px] md:text-xs font-medium">"Mudou a dinâmica da nossa casa em semanas."</p>
              </motion.div>
              
              {/* Floating Element - Portugal */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-6 md:-left-12 glass-panel p-4 md:p-6 rounded-2xl z-30 flex items-center gap-3 border-b-4 border-brand-green"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <span className="text-lg">🇵🇹</span>
                </div>
                <div>
                  <p className="text-slate-900 font-black text-xs md:text-sm uppercase tracking-tighter">Portugal</p>
                  <p className="text-slate-600 text-[10px] md:text-xs font-medium">Específico para o SNS e Escolas PT.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeIn} className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Sente-se <span className="text-brand-red">perdido(a)</span> nestes momentos?</h2>
            <p className="text-slate-500 max-w-xl mx-auto uppercase text-xs font-black tracking-[0.2em]">Você não está sozinho(a)</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <MessageCircleOff className="text-brand-red" />, title: "Dificuldade na Comunicação", desc: "Quando o silêncio ou as ecolalias tornam o entendimento impossível." },
              { icon: <Brain className="text-brand-yellow" />, title: "Crises Sensoriais", desc: "Momentos de sobrecarga onde nada parece acalmar a criança." },
              { icon: <Users className="text-brand-blue" />, title: "Isolamento Social", desc: "O medo de sair de casa e enfrentar olhares de julgamento." }
            ].map((item, i) => (
              <motion.div 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Pricing & Book Section */}
      <section id="oferta" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            {/* Book Visual Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>
              <img 
                src="/004.png" 
                alt="Livro Guia do Autismo" 
                className="w-full max-w-[400px] mx-auto h-auto rounded-xl shadow-[0_50px_100px_-20px_rgba(0,85,255,0.25)]"
              />
              <div className="absolute -bottom-6 -right-4 bg-brand-blue text-white p-6 rounded-3xl shadow-xl max-w-[200px]">
                <p className="font-bold text-lg leading-tight italic">"O guia que toda a família precisava."</p>
              </div>
            </motion.div>

            {/* Pricing Side */}
            <div className="space-y-12">
              <div className="text-center lg:text-left space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Escolha a sua forma de <span className="text-brand-blue">começar.</span></h2>
                <p className="text-slate-500 text-lg">Aceda hoje mesmo ao conhecimento que traz paz e previsibilidade para o vosso lar.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* E-book */}
                <motion.div 
                  {...fadeIn}
                  className="bg-slate-50 border border-slate-100 p-8 rounded-[32px] hover:shadow-xl transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-brand-blue text-white text-[8px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl">Melhor Preço</div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] mb-4">Livro Digital</p>
                  <h3 className="text-xl font-black text-slate-900 mb-2">E-BOOK (PDF)</h3>
                  <p className="text-3xl font-black text-brand-blue mb-6 tracking-tighter">16€</p>
                  
                  <div className="mb-6 p-4 rounded-2xl bg-white border border-slate-100 flex flex-col items-center gap-3 text-center">
                    <img 
                      src="/Hotmart_Logo.svg.png" 
                      alt="Hotmart Logo" 
                      className="h-8 w-auto opacity-90"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <p className="text-[10px] font-bold text-slate-600 leading-tight">
                      Acesso imediato via <span className="text-orange-500">Hotmart</span>
                    </p>
                  </div>

                  <ul className="text-xs text-slate-500 space-y-3 mb-8">
                    <li className="flex gap-2 items-center"><CheckCircle2 size={14} className="text-brand-green" /> Acesso Imediato</li>
                    <li className="flex gap-2 items-center"><CheckCircle2 size={14} className="text-brand-green" /> Todos os dispositivos</li>
                  </ul>
                  <a 
                    href="https://pay.hotmart.com/V96367646I?checkoutMode=10" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full py-3 rounded-xl border-2 border-brand-blue text-brand-blue font-black uppercase tracking-widest text-[10px] hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center"
                  >
                    Selecionar
                  </a>
                </motion.div>

                {/* Físico */}
                <motion.div 
                  id="fisico"
                  {...fadeIn}
                  transition={{ delay: 0.1 }}
                  className="bg-white border-2 border-brand-green p-8 rounded-[32px] shadow-2xl shadow-brand-green/10 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-brand-green text-white text-[8px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl">Envio Internacional</div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] mb-4">Livro Impresso</p>
                  <h3 className="text-xl font-black text-slate-900 mb-2">LIVRO FÍSICO</h3>
                  <p className="text-3xl font-black text-brand-green mb-6 tracking-tighter">37€</p>
                  
                  <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center gap-3 text-center">
                    <img 
                      src="/Bookmundo-Logo-Yoast.png" 
                      alt="Bookmundo Logo" 
                      className="h-12 w-auto opacity-90"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <p className="text-[10px] font-bold text-slate-600 leading-tight">
                      Vendido e enviado pela <span className="text-brand-green">Bookmundo</span>
                    </p>
                  </div>

                  <ul className="text-xs text-slate-500 space-y-3 mb-8">
                    <li className="flex gap-2 items-center font-bold text-slate-900"><CheckCircle2 size={14} className="text-brand-green" /> Envio para Portugal e Mundo</li>
                    <li className="flex gap-2 items-center"><CheckCircle2 size={14} className="text-brand-green" /> Versão Digital Grátis</li>
                  </ul>
                  <a 
                    href="https://publishpt.bookmundo.com/site/cart/addBook/sku/0006000649167" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full py-4 rounded-xl bg-brand-green text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-brand-green/20 btn-premium flex items-center justify-center animate-pulse-slow"
                  >
                    Comprar Agora
                  </a>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="pt-20 border-t border-slate-100">
            <motion.div {...fadeIn} className="text-center mb-16 space-y-2">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">O que dizem as <span className="text-brand-blue">famílias</span></h3>
              <div className="flex justify-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />)}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Maria Silva", city: "Lisboa", text: "As estratégias de rotina mudaram as nossas manhãs. O meu filho agora sabe o que esperar e as crises diminuíram 80%." },
                { name: "João Pereira", city: "Porto", text: "Finalmente um material que fala da nossa realidade em Portugal, dos nossos direitos e do suporte nas escolas públicas." },
                { name: "Ana Costa", city: "Braga", text: "Leitura obrigatória para pais de primeira viagem no mundo do autismo. Linguagem clara e muito acolhedora." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 relative"
                >
                  <p className="text-slate-600 italic mb-6 leading-relaxed">"{item.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xs uppercase">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900">{item.name}</p>
                      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{item.city}, PT</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-20 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
             <div className="flex items-center gap-2.5 opacity-80">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-2 h-2 rounded-[1px] bg-brand-blue"></div>
                <div className="w-2 h-2 rounded-[1px] bg-brand-red"></div>
                <div className="w-2 h-2 rounded-[1px] bg-brand-yellow"></div>
                <div className="w-2 h-2 rounded-[1px] bg-brand-green"></div>
              </div>
              <span className="font-black text-lg tracking-tighter text-white uppercase">Guia do Autismo</span>
            </div>
            <p className="text-center md:text-left max-w-xs">Informação que transforma a vida de quem mais amamos. Adaptado à realidade de Portugal.</p>
          </div>
          
          <div className="flex gap-8 text-xs font-black uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>

          <div className="text-center md:text-right">
            <p>© 2026 Guia do Autismo. Todos os direitos reservados.</p>
            <p className="mt-2 opacity-50">Implementado com ética e compromisso emocional.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const MessageCircleOff = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20.5 14.99a1 1 0 0 1-1.5.5l-1.5-.5a2 2 0 0 1-.5-1.5l.5-1.5a1 1 0 0 1 1.5-.5l1.5.5a1 1 0 0 1 .5 1.5z" />
    <path d="M2 12c0 4.42 4.48 8 10 8 .88 0 1.73-.09 2.53-.26" />
    <path d="M7 12h.01" />
    <path d="M12 12h.01" />
    <path d="m15.5 12 .5 2.5" />
    <path d="M19.04 10.41C18.15 7.8 15.35 6 12 6c-3.6 0-6.6 2.1-7.5 5" />
    <path d="m2 2 20 20" />
  </svg>
);
