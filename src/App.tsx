import React, { useState, useRef, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { NoiseOverlay } from './components/NoiseOverlay';
import { IconArrowRight, IconStar, IconMail, IconTriangleFilled } from '@tabler/icons-react';
import { trackEvent } from './utils/fbTracking';

export default function App() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    trackEvent('PageView');
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const params = new URLSearchParams();
    
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      params.append(key, value.toString());
      data[key] = value.toString();
    });

    // Track Lead event via CAPI and Pixel
    trackEvent('Lead', {
      em: data.email,
      ph: data.whatsapp,
      fn: data.nome
    }, {
      content_name: 'Análise Gratuita',
      content_category: 'Leads'
    });

    const urlWebhook = "https://script.google.com/macros/s/AKfycby_Z2SoJz3TWaiDsjgjZmZETLJ8TjcAQAyhcWdY1ciOc81FcPcJCsGu3PLAf8OZeTT4/exec";

    try {
      const response = await fetch(urlWebhook, {
        method: "POST",
        body: params
      });
      
      await response.text();
      
      alert("Registo realizado com sucesso!");
      form.reset();
    } catch (error) {
      console.error("Erro no envio:", error);
      alert("Falha na comunicação. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const metodoGads = [
    {
      title: "Diagnóstico estratégico da presença digital",
      tag: "ETAPA 1",
      shortDesc: "Análise completa do posicionamento digital.",
      fullDesc: "Antes de iniciar qualquer campanha, realizamos uma análise completa do posicionamento digital da clínica, identificando oportunidades de crescimento, concorrência e canais mais estratégicos para atrair novos pacientes.",
      imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Campanhas orientadas por dados",
      tag: "ETAPA 2",
      shortDesc: "Monitoramento constante com métricas reais.",
      fullDesc: "Todas as campanhas são monitoradas constantemente com base em métricas reais. Utilizamos dados de comportamento, conversão e performance para otimizar anúncios e aumentar a geração de pacientes qualificados.",
      imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Domínio do Google na sua região",
      tag: "ETAPA 3",
      shortDesc: "Posicionamento local estratégico.",
      fullDesc: "Aplicamos estratégias específicas para posicionar sua clínica entre os primeiros resultados quando pacientes da sua cidade pesquisam por tratamentos ou especialidades médicas.",
      imgUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Captação direta de pacientes",
      tag: "ETAPA 4",
      shortDesc: "Contatos via WhatsApp, formulário ou ligação.",
      fullDesc: "Estruturamos campanhas focadas em gerar contatos diretos via WhatsApp, formulário ou ligação, facilitando o primeiro contato entre paciente e clínica.",
      imgUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      highlight: true
    },
    {
      title: "Estratégia completa de funil",
      tag: "ETAPA 5",
      shortDesc: "Campanhas para todas as etapas da jornada.",
      fullDesc: "Criamos campanhas para todas as etapas da jornada do paciente: descoberta, consideração e decisão, garantindo um fluxo contínuo de novos interessados.",
      imgUrl: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Otimização contínua das campanhas",
      tag: "ETAPA 6",
      shortDesc: "Ajustes constantes para reduzir custos.",
      fullDesc: "Realizamos ajustes constantes em anúncios, públicos e estratégias para reduzir custos e aumentar o número de pacientes gerados.",
      imgUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Escala previsível de resultados",
      tag: "ETAPA 7",
      shortDesc: "Aumento de volume sem perder eficiência.",
      fullDesc: "Depois que as campanhas atingem estabilidade, escalamos os investimentos gradualmente para aumentar o volume de novos pacientes sem perder eficiência.",
      imgUrl: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#F0F5FF] text-[#09090B] font-sans selection:bg-[#0055FF] selection:text-[#F0F5FF]">
      <NoiseOverlay />
      <CustomCursor />

      {/* Header & Navigation */}
      <header className="sticky top-4 z-50 mx-2 md:mx-8">
        <div className="flex items-center justify-between bg-[#F0F5FF]/90 backdrop-blur-[24px] border-2 border-[#09090B] rounded-xl px-3 py-2 md:px-6 md:py-4">
          <a href="/" className="flex items-center gap-4 md:ml-10">
            <img 
              src="/logo-gads.png" 
              alt="GADS Logo" 
              className="h-12 md:h-20 w-auto"
              referrerPolicy="no-referrer"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8 font-bold">
            <a href="#sobre" className="hover:text-[#0055FF] hover:bg-[#09090B] px-2 py-1 transition-colors border-2 border-transparent hover:border-[#09090B]">SOBRE</a>
            <a href="#servicos" className="hover:text-[#0055FF] hover:bg-[#09090B] px-2 py-1 transition-colors border-2 border-transparent hover:border-[#09090B]">SERVIÇOS</a>
            <a href="#metodo" className="hover:text-[#0055FF] hover:bg-[#09090B] px-2 py-1 transition-colors border-2 border-transparent hover:border-[#09090B]">MÉTODO GADS</a>
          </nav>
          <a 
            href="https://api.whatsapp.com/send/?phone=5548988678207&text=ola+gostaria+de+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#09090B] text-[#0055FF] px-6 py-2 rounded-xl border-2 border-[#09090B] hard-shadow-sm hover:bg-[#0055FF] hover:text-[#09090B] transition-all brutal-btn font-bold inline-block"
          >
            CONTATO
          </a>
        </div>
      </header>

      <main className="px-4 md:px-8 pb-24">
        {/* Hero Section */}
        <section id="contato" className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 relative">
            <div className="absolute -top-8 -left-4 bg-[#0055FF] text-white border-2 border-[#09090B] px-4 py-1 rounded-full -rotate-2 font-bold z-10">
              ASSESSORIA DIGITAL
            </div>
            <h1 className="font-display text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.85] tracking-tighter uppercase hover-glitch mb-8">
              SUA EMPRESA NO TOPO<br />DO GOOGLE
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-lg mb-10">
              Transformamos presença digital em resultados reais com estratégias validadas de tráfego e SEO.
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5548988678207&text=ola+gostaria+de+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#09090B] text-[#0055FF] px-8 py-5 rounded-xl border-2 border-[#09090B] brutal-btn-lg font-display text-xl tracking-wide flex items-center gap-4 w-fit"
            >
              QUERO VENDER MAIS <IconArrowRight stroke={3} />
            </a>
          </div>
          <div className="md:col-span-5 relative mt-12 md:mt-0">
            <div className="rounded-[32px] border-2 border-[#09090B] bg-white p-6 md:p-8 hard-shadow-lg relative z-10">
              <h3 className="font-display text-3xl uppercase tracking-tighter mb-2">Análise Gratuita</h3>
              <p className="font-medium mb-6 opacity-80">Preencha os dados abaixo e entraremos em contato em até 24h.</p>
              
              <div className="mt-6">
                <form id="form-leads" onSubmit={handleFormSubmit}>
                    
                    <label htmlFor="nome" className="block mb-2 font-bold uppercase text-sm tracking-wide">Nome Completo *</label>
                    <input type="text" id="nome" name="nome" required placeholder="Ex: João Silva" className="w-full px-4 py-3 mb-4 border-2 border-[#09090B] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0055FF] font-medium transition-shadow" />

                    <label htmlFor="whatsapp" className="block mb-2 font-bold uppercase text-sm tracking-wide">WhatsApp *</label>
                    <input type="tel" id="whatsapp" name="whatsapp" required placeholder="(00) 00000-0000" className="w-full px-4 py-3 mb-4 border-2 border-[#09090B] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0055FF] font-medium transition-shadow" />

                    <label htmlFor="email" className="block mb-2 font-bold uppercase text-sm tracking-wide">Melhor E-mail *</label>
                    <input type="email" id="email" name="email" required placeholder="seu@email.com" className="w-full px-4 py-3 mb-4 border-2 border-[#09090B] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0055FF] font-medium transition-shadow" />

                    <label htmlFor="empresa" className="block mb-2 font-bold uppercase text-sm tracking-wide">Nome da Empresa *</label>
                    <input type="text" id="empresa" name="empresa" required placeholder="Sua Empresa LDA" className="w-full px-4 py-3 mb-4 border-2 border-[#09090B] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0055FF] font-medium transition-shadow" />

                    <label htmlFor="faturamento" className="block mb-2 font-bold uppercase text-sm tracking-wide">Faturação Mensal *</label>
                    <select id="faturamento" name="faturamento" required defaultValue="" className="w-full px-4 py-3 mb-6 border-2 border-[#09090B] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0055FF] font-medium appearance-none transition-shadow">
                        <option value="" disabled>Selecione uma opção...</option>
                        <option value="Até R$ 10.000">Até R$ 10.000</option>
                        <option value="De R$ 10.000 a R$ 50.000">De R$ 10.000 a R$ 50.000</option>
                        <option value="De R$ 50.000 a R$ 100.000">De R$ 50.000 a R$ 100.000</option>
                        <option value="Acima de R$ 100.000">Acima de R$ 100.000</option>
                    </select>

                    <button type="submit" id="btn-submit" disabled={isSubmitting} className="w-full bg-[#09090B] text-[#0055FF] px-8 py-4 rounded-xl border-2 border-[#09090B] brutal-btn font-display text-lg tracking-wide uppercase disabled:opacity-70 disabled:cursor-not-allowed transition-all">
                      {isSubmitting ? "A enviar dados..." : "Quero Receber Contacto"}
                    </button>
                    
                </form>
              </div>
            </div>
            
            <div className="absolute -bottom-16 -left-32 bg-[#0055FF] text-white border-2 border-[#09090B] p-6 rounded-2xl hard-shadow-lg animate-float max-w-[240px] z-20 hidden lg:block">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => <IconStar key={i} className="fill-[#09090B]" size={20} />)}
              </div>
              <p className="font-bold text-lg leading-tight">"O volume de clientes aumentou absurdamente."</p>
            </div>
          </div>
        </section>

        {/* Centered Form Section */}
        <section id="contratar" className="mt-32 max-w-3xl mx-auto">
          <div className="rounded-[32px] border-2 border-[#09090B] bg-white p-6 md:p-12 hard-shadow-lg relative z-10">
            <h3 className="font-display text-4xl uppercase tracking-tighter mb-4 text-center">Vamos Começar?</h3>
            <p className="font-medium mb-10 opacity-80 text-center text-lg">Preencha os dados abaixo e nossa equipe entrará em contato em até 24h para uma análise estratégica gratuita.</p>
            
            <form id="form-leads-centered" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome-c" className="block mb-2 font-bold uppercase text-sm tracking-wide">Nome Completo *</label>
                    <input type="text" id="nome-c" name="nome" required placeholder="Ex: João Silva" className="w-full px-4 py-3 border-2 border-[#09090B] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0055FF] font-medium transition-shadow" />
                  </div>

                  <div>
                    <label htmlFor="whatsapp-c" className="block mb-2 font-bold uppercase text-sm tracking-wide">WhatsApp *</label>
                    <input type="tel" id="whatsapp-c" name="whatsapp" required placeholder="(00) 00000-0000" className="w-full px-4 py-3 border-2 border-[#09090B] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0055FF] font-medium transition-shadow" />
                  </div>

                  <div>
                    <label htmlFor="email-c" className="block mb-2 font-bold uppercase text-sm tracking-wide">Melhor E-mail *</label>
                    <input type="email" id="email-c" name="email" required placeholder="seu@email.com" className="w-full px-4 py-3 border-2 border-[#09090B] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0055FF] font-medium transition-shadow" />
                  </div>

                  <div>
                    <label htmlFor="empresa-c" className="block mb-2 font-bold uppercase text-sm tracking-wide">Nome da Empresa *</label>
                    <input type="text" id="empresa-c" name="empresa" required placeholder="Sua Empresa LDA" className="w-full px-4 py-3 border-2 border-[#09090B] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0055FF] font-medium transition-shadow" />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="faturamento-c" className="block mb-2 font-bold uppercase text-sm tracking-wide">Faturação Mensal *</label>
                  <select id="faturamento-c" name="faturamento" required defaultValue="" className="w-full px-4 py-3 border-2 border-[#09090B] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0055FF] font-medium appearance-none transition-shadow">
                      <option value="" disabled>Selecione uma opção...</option>
                      <option value="Até R$ 10.000">Até R$ 10.000</option>
                      <option value="De R$ 10.000 a R$ 50.000">De R$ 10.000 a R$ 50.000</option>
                      <option value="De R$ 50.000 a R$ 100.000">De R$ 50.000 a R$ 100.000</option>
                      <option value="Acima de R$ 100.000">Acima de R$ 100.000</option>
                  </select>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full mt-8 bg-[#09090B] text-[#0055FF] px-8 py-5 rounded-xl border-2 border-[#09090B] brutal-btn-lg font-display text-xl tracking-wide uppercase disabled:opacity-70 disabled:cursor-not-allowed transition-all">
                  {isSubmitting ? "A enviar dados..." : "Solicitar Análise Gratuita"}
                </button>
            </form>
          </div>
        </section>

        {/* Marquee */}
        <div className="mt-32 border-y-2 border-[#09090B] bg-[#0055FF] text-white py-4 overflow-hidden flex whitespace-nowrap">
          <div className="animate-marquee flex gap-8 items-center font-display text-4xl uppercase tracking-tighter">
            <span>TRÁFEGO PAGO</span>
            <span>•</span>
            <span>GOOGLE MEU NEGÓCIO</span>
            <span>•</span>
            <span>SEO</span>
            <span>•</span>
            <span>LANDING PAGES</span>
            <span>•</span>
            <span>TRÁFEGO PAGO</span>
            <span>•</span>
            <span>GOOGLE MEU NEGÓCIO</span>
            <span>•</span>
            <span>SEO</span>
            <span>•</span>
            <span>LANDING PAGES</span>
            <span>•</span>
          </div>
        </div>

        {/* Bento Category Grid */}
        <section id="servicos" className="mt-32">
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-12 hover-glitch">NOSSAS SOLUÇÕES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#09090B] text-[#F0F5FF] border-2 border-[#09090B] rounded-[32px] p-8 md:p-12 relative overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Data" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="relative z-10 h-full flex flex-col justify-between min-h-[300px]">
                <div className="bg-[#0055FF] text-white font-bold px-4 py-1 rounded-full w-fit border-2 border-[#09090B]">01</div>
                <div>
                  <h3 className="font-display text-4xl uppercase mb-4">Tráfego Pago</h3>
                  <p className="text-lg max-w-md">Anúncios de alta conversão no Google Ads para quem já tem intenção de compra.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-6">
              <div className="bg-[#0055FF] text-white border-2 border-[#09090B] rounded-[32px] p-8 hard-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 bg-dots flex flex-col justify-between">
                <div className="bg-[#09090B] text-[#F0F5FF] font-bold px-4 py-1 rounded-full w-fit border-2 border-[#09090B]">02</div>
                <div>
                  <h3 className="font-display text-3xl uppercase mb-2">Google Meu Negócio</h3>
                  <p className="font-medium">Otimização completa para dominar as buscas locais.</p>
                </div>
              </div>
              <div className="bg-[#F0F5FF] border-2 border-[#09090B] rounded-[32px] p-8 hard-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 flex flex-col justify-between">
                <div className="bg-[#09090B] text-[#F0F5FF] font-bold px-4 py-1 rounded-full w-fit border-2 border-[#09090B]">03</div>
                <div>
                  <h3 className="font-display text-3xl uppercase mb-2">SEO & Orgânico</h3>
                  <p className="font-medium">Posicionamento de longo prazo sem depender apenas de anúncios.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Scrolling Product Section */}
        <section id="metodo" className="mt-32">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 md:mb-12 gap-6">
            <h2 className="font-display text-4xl md:text-7xl uppercase tracking-tighter hover-glitch">MÉTODO GADS</h2>
            <div className="flex gap-4">
              <button 
                onClick={() => scrollSlider('left')}
                className="w-12 h-12 rounded-full border-2 border-[#09090B] flex items-center justify-center hard-shadow-sm brutal-btn bg-[#F0F5FF] active:translate-y-1 active:shadow-none transition-all"
              >
                <IconArrowRight className="rotate-180" />
              </button>
              <button 
                onClick={() => scrollSlider('right')}
                className="w-12 h-12 rounded-full border-2 border-[#09090B] flex items-center justify-center hard-shadow-sm brutal-btn bg-[#0055FF] text-white active:translate-y-1 active:shadow-none transition-all"
              >
                <IconArrowRight />
              </button>
            </div>
          </div>
          
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-8 px-4 md:px-0 -mx-4 md:mx-0 no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {metodoGads.map((item, i) => (
              <div key={i} className={`w-[85vw] md:w-[380px] flex-shrink-0 snap-center md:snap-start border-2 border-[#09090B] rounded-2xl p-5 md:p-6 flex flex-col transition-all duration-300 ${item.highlight ? 'bg-[#0055FF] text-white' : 'bg-[#F0F5FF]'} hard-shadow`}>
                <div className="border-2 border-[#09090B] rounded-xl h-48 md:h-auto md:aspect-square mb-4 md:mb-6 bg-[#09090B] overflow-hidden relative flex-shrink-0">
                  <img src={item.imgUrl} alt={item.title} className="w-full h-full object-cover opacity-80 mix-blend-luminosity" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-[#F0F5FF] text-[#09090B] font-bold px-3 py-1 rounded-full border-2 border-[#09090B] text-xs md:text-sm">
                    {item.tag}
                  </div>
                  
                  {/* Overlay Description on Click */}
                  <div className={`absolute inset-0 bg-[#09090B]/95 p-4 md:p-6 flex items-center justify-center text-[#F0F5FF] transition-opacity duration-300 overflow-y-auto ${expandedCard === i ? 'opacity-100 z-20' : 'opacity-0 -z-10'}`}>
                    <p className="font-medium text-sm md:text-lg text-center leading-relaxed">
                      {item.fullDesc}
                    </p>
                  </div>
                </div>
                
                <h3 className="font-display text-xl md:text-2xl uppercase mb-2 leading-tight">{item.title}</h3>
                <p className="font-medium text-sm md:text-base mb-4 md:mb-6 flex-grow opacity-80">{item.shortDesc}</p>
                
                <div className="flex gap-2 mt-auto">
                  <button 
                    onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                    className={`flex-1 py-3 md:py-4 border-2 border-[#09090B] rounded-xl font-bold uppercase tracking-wide transition-all text-sm md:text-base ${expandedCard === i ? 'bg-[#F0F5FF] text-[#09090B]' : 'bg-[#09090B] text-[#0055FF] hover:bg-[#F0F5FF] hover:text-[#09090B]'}`}
                  >
                    {expandedCard === i ? 'FECHAR' : 'SABER MAIS'}
                  </button>
                  <a 
                    href="#contratar"
                    className="flex-1 py-3 md:py-4 border-2 border-[#09090B] rounded-xl font-bold uppercase tracking-wide transition-all text-sm md:text-base bg-[#0055FF] text-white hover:bg-[#09090B] flex items-center justify-center text-center"
                  >
                    CONTRATAR
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-[#09090B] text-[#F0F5FF] pt-20 pb-10 px-4 md:px-8 border-t-2 border-[#09090B]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img 
              src="/logo-gads.png" 
              alt="GADS Logo" 
              className="h-20 md:h-32 w-auto mb-6 md:ml-10"
              referrerPolicy="no-referrer"
            />
            <p className="text-lg max-w-sm mb-8 font-mono">
              Assessoria e Negócios Digitais. Colocando sua empresa no topo das buscas.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-sm text-[#0055FF] mb-6 uppercase">Navegação</h4>
            <ul className="space-y-4 font-display tracking-wide uppercase">
              <li><a href="#sobre" className="hover:text-[#0055FF] transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-[#0055FF] transition-colors">Serviços</a></li>
              <li><a href="#metodo" className="hover:text-[#0055FF] transition-colors">Método GADS</a></li>
              <li><a href="https://api.whatsapp.com/send/?phone=5548988678207&text=ola+gostaria+de+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:text-[#0055FF] transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm text-[#0055FF] mb-6 uppercase">Social</h4>
            <ul className="space-y-4 font-display tracking-wide uppercase">
              <li><a href="https://www.instagram.com/gadsagencialocal/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0055FF] transition-colors">Instagram</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61580066617531" target="_blank" rel="noopener noreferrer" className="hover:text-[#0055FF] transition-colors">Facebook</a></li>
              <li><a href="https://api.whatsapp.com/send/?phone=5548988678207&text=ola+gostaria+de+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:text-[#0055FF] transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t-2 border-[#F8F4E8]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-sm opacity-60">
          <p>© 2026 GADS. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#0055FF]">TERMOS</a>
            <a href="#" className="hover:text-[#0055FF]">PRIVACIDADE</a>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-4 left-4 right-4 z-[100] md:left-auto md:right-8 md:max-w-md">
          <div className="bg-[#F0F5FF] border-2 border-[#09090B] p-6 rounded-2xl hard-shadow-lg">
            <h4 className="font-display text-xl uppercase tracking-tighter mb-2">Privacidade & Cookies</h4>
            <p className="font-mono text-xs mb-4 opacity-80">
              Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site. Ao continuar navegando, você concorda com nossa política de privacidade.
            </p>
            <div className="flex gap-2">
              <button 
                onClick={() => setShowCookieBanner(false)}
                className="flex-1 bg-[#09090B] text-[#F0F5FF] py-2 rounded-lg font-bold text-sm hover:bg-[#0055FF] transition-colors"
              >
                ACEITAR
              </button>
              <button 
                onClick={() => setShowCookieBanner(false)}
                className="flex-1 border-2 border-[#09090B] py-2 rounded-lg font-bold text-sm hover:bg-[#09090B] hover:text-[#F0F5FF] transition-colors"
              >
                RECUSAR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

