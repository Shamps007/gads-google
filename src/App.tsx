import React, { useState, useEffect, useRef } from 'react';
import { IconArrowRight, IconTarget, IconChartBar, IconBriefcase, IconStar } from '@tabler/icons-react';

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playCount = useRef(0);

  const handleVideoEnded = () => {
    playCount.current += 1;
    if (playCount.current < 2 && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const metodoGads = [
    {
      tag: "ETAPA 1",
      title: "Diagnóstico estratégico da presença digital",
      shortDesc: "Análise completa do posicionamento digital.",
      fullDesc: "Antes de iniciar qualquer campanha, realizamos uma análise completa do posicionamento digital da clínica, identificando oportunidades de crescimento, concorrência e canais mais estratégicos para atrair novos pacientes.",
      highlight: true
    },
    {
      tag: "ETAPA 2",
      title: "Campanhas orientadas por dados",
      shortDesc: "Monitoramento constante com métricas reais.",
      fullDesc: "Todas as campanhas são monitoradas constantemente com base em métricas reais. Utilizamos dados de comportamento, conversão e performance para otimizar anúncios e aumentar a geração de pacientes qualificados."
    },
    {
      tag: "ETAPA 3",
      title: "Domínio do Google na sua região",
      shortDesc: "Posicionamento local estratégico.",
      fullDesc: "Aplicamos estratégias específicas para posicionar sua clínica entre os primeiros resultados quando pacientes da sua cidade pesquisam por tratamentos ou especialidades médicas."
    },
    {
      tag: "ETAPA 4",
      title: "Captação direta de pacientes",
      shortDesc: "Contatos via WhatsApp, formulário ou ligação.",
      fullDesc: "Estruturamos campanhas focadas em gerar contatos diretos via WhatsApp, formulário ou ligação, facilitando o primeiro contato entre paciente e clínica."
    },
    {
      tag: "ETAPA 5",
      title: "Estratégia completa de funil",
      shortDesc: "Campanhas para todas as etapas da jornada.",
      fullDesc: "Criamos campanhas para todas as etapas da jornada do paciente: descoberta, consideração e decisão, garantindo um fluxo contínuo de novos interessados."
    },
    {
      tag: "ETAPA 6",
      title: "Otimização contínua das campanhas",
      shortDesc: "Ajustes constantes para reduzir custos.",
      fullDesc: "Realizamos ajustes constantes em anúncios, públicos e estratégias para reduzir custos e aumentar o número de pacientes gerados."
    },
    {
      tag: "ETAPA 7",
      title: "Escala previsível de resultados",
      shortDesc: "Aumento de volume sem perder eficiência.",
      fullDesc: "Depois que as campanhas atingem estabilidade, escalamos os investimentos gradualmente para aumentar o volume de novos pacientes sem perder eficiência."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Recebemos sua solicitação! Em breve nossa equipe entrará em contato.");
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-[#FE4701] selection:text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-zinc-900 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
          <a href="/" className="flex items-center">
            <img 
              src="/logo-gads.png" 
              alt="GADS Logo" 
              className="h-10 w-auto filter brightness-200 contrast-100 grayscale hover:grayscale-0 transition-all"
              referrerPolicy="no-referrer"
            />
          </a>
          <nav className="hidden md:flex items-center gap-12 font-medium text-sm tracking-widest text-[#FE4701]">
            <a href="#sobre" className="hover:text-white transition-colors">SOBRE</a>
            <a href="#servicos" className="hover:text-white transition-colors">SERVIÇOS</a>
            <a href="#metodo" className="hover:text-white transition-colors">MÉTODO GADS</a>
          </nav>
          <a 
            href="#contato" 
            className="bg-[#FE4701] text-white px-6 py-2.5 font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors border border-[#FE4701]"
          >
            CONTATO
          </a>
        </div>
      </header>

      <main className="flex flex-col">
        {/* Hero Section */}
        <section id="sobre" className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
          {/* Background Video */}
          <video 
            ref={videoRef}
            src="/video.mp4" 
            muted 
            playsInline
            autoPlay
            onEnded={handleVideoEnded}
            className="hidden md:block absolute inset-0 object-cover w-full h-full opacity-40 mix-blend-screen scale-105" 
          />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 pointer-events-none"></div>

            {/* Hero Text */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 lg:px-12 pt-16">
              <div className="inline-block border border-[#FE4701]/30 bg-[#FE4701]/10 text-[#FE4701] px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
                ASSESSORIA DIGITAL
              </div>
              <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-tight mb-8">
                SUA EMPRESA NO TOPO<br />
                <span className="text-[#FE4701]">DO GOOGLE.</span>
              </h1>
              <p className="text-zinc-300 text-lg md:text-2xl font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
                Transformamos presença digital em resultados reais com estratégias validadas de tráfego e SEO.
              </p>
              
              <a 
                href="#contato"
                className="bg-[#FE4701] text-white px-10 py-5 font-bold text-lg tracking-widest uppercase flex items-center gap-4 hover:bg-white hover:text-black transition-all duration-300 pointer-events-auto border border-[#FE4701]"
              >
                QUERO VENDER MAIS <IconArrowRight size={24} />
              </a>

              <p className="mt-12 text-xs font-bold tracking-widest uppercase text-zinc-500 animate-pulse">
                Role para interagir
              </p>

              {/* Floating review card */}
              <div className="absolute top-[75%] -right-4 md:-right-12 lg:right-0 bg-black/80 backdrop-blur-md border border-zinc-800 p-6 shadow-2xl animate-float max-w-[240px] hidden lg:block z-20">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <IconStar key={i} className="text-[#FE4701] fill-[#FE4701]" size={20} />)}
                </div>
                <p className="font-bold text-sm leading-tight italic text-zinc-200">"O volume de clientes aumentou absurdamente."</p>
              </div>

            </div>
        </section>

        {/* Small transition spacing */}
        <div className="h-12 bg-black"></div>

        {/* Hero Form section matching original layout copy */}
        <section id="contato" className="max-w-4xl mx-auto px-6 lg:px-12 pb-32 pt-16 z-10 relative">
          <div className="bg-zinc-950 border border-zinc-800 p-8 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FE4701] blur-[120px] opacity-10 rounded-full pointer-events-none"></div>

            <div className="mb-10 text-center">
              <h3 className="font-display text-4xl uppercase tracking-tighter mb-4">Análise Gratuita</h3>
              <p className="font-medium text-zinc-400">Preencha os dados abaixo e entraremos em contato em até 24h.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-bold uppercase text-xs tracking-wide text-zinc-500">Nome Completo *</label>
                  <input type="text" required placeholder="Ex: João Silva" className="w-full px-4 py-3 border border-zinc-800 bg-black text-white focus:outline-none focus:border-[#FE4701] font-medium transition-colors" />
                </div>
                <div>
                  <label className="block mb-2 font-bold uppercase text-xs tracking-wide text-zinc-500">WhatsApp *</label>
                  <input type="tel" required placeholder="(00) 00000-0000" className="w-full px-4 py-3 border border-zinc-800 bg-black text-white focus:outline-none focus:border-[#FE4701] font-medium transition-colors" />
                </div>
                <div>
                  <label className="block mb-2 font-bold uppercase text-xs tracking-wide text-zinc-500">Melhor E-mail *</label>
                  <input type="email" required placeholder="seu@email.com" className="w-full px-4 py-3 border border-zinc-800 bg-black text-white focus:outline-none focus:border-[#FE4701] font-medium transition-colors" />
                </div>
                <div>
                  <label className="block mb-2 font-bold uppercase text-xs tracking-wide text-zinc-500">Nome da Empresa *</label>
                  <input type="text" required placeholder="Sua Empresa LDA" className="w-full px-4 py-3 border border-zinc-800 bg-black text-white focus:outline-none focus:border-[#FE4701] font-medium transition-colors" />
                </div>
              </div>

              <div className="mt-6">
                <label className="block mb-2 font-bold uppercase text-xs tracking-wide text-zinc-500">Faturação Mensal *</label>
                <select required defaultValue="" className="w-full px-4 py-3 border border-zinc-800 bg-black text-white focus:outline-none focus:border-[#FE4701] appearance-none font-medium transition-colors cursor-pointer">
                    <option value="" disabled>Selecione uma opção...</option>
                    <option value="Até R$ 10.000">Até R$ 10.000</option>
                    <option value="De R$ 10.000 a R$ 50.000">De R$ 10.000 a R$ 50.000</option>
                    <option value="De R$ 50.000 a R$ 100.000">De R$ 50.000 a R$ 100.000</option>
                    <option value="Acima de R$ 100.000">Acima de R$ 100.000</option>
                </select>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full mt-8 bg-[#FE4701] text-white px-8 py-4 font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors disabled:opacity-50">
                {isSubmitting ? "Enviando..." : "Quero Receber Contacto"}
              </button>
            </form>
          </div>
        </section>

        {/* Marquee Banner */}
        <div className="w-full bg-[#FE4701] text-white py-4 overflow-hidden flex whitespace-nowrap mb-32 border-y border-zinc-900 shadow-[0_0_50px_-12px_#FE4701]">
          <div className="animate-marquee flex gap-10 items-center font-display font-bold text-3xl uppercase tracking-widest">
            <span>TRÁFEGO PAGO</span>
            <span className="text-black">•</span>
            <span>GOOGLE MEU NEGÓCIO</span>
            <span className="text-black">•</span>
            <span>SEO</span>
            <span className="text-black">•</span>
            <span>LANDING PAGES</span>
            <span className="text-black">•</span>
            <span>TRÁFEGO PAGO</span>
            <span className="text-black">•</span>
            <span>GOOGLE MEU NEGÓCIO</span>
            <span className="text-black">•</span>
            <span>SEO</span>
            <span className="text-black">•</span>
            <span>LANDING PAGES</span>
            <span className="text-black">•</span>
          </div>
        </div>

        {/* Services Section */}
        <section id="servicos" className="max-w-7xl mx-auto px-6 lg:px-12 mb-32 z-10 relative bg-black">
          <div className="border-b border-zinc-800 pb-8 mb-16">
            <h3 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tight">NOSSAS SOLUÇÕES</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
            {[
              {
                icon: <IconTarget size={32} stroke={1.5} />,
                num: "01",
                title: "Tráfego Pago",
                desc: "Anúncios de alta conversão no Google Ads para quem já tem intenção de compra."
              },
              {
                icon: <IconChartBar size={32} stroke={1.5} />,
                num: "02",
                title: "Google Meu Negócio",
                desc: "Otimização completa para dominar as buscas locais."
              },
              {
                icon: <IconBriefcase size={32} stroke={1.5} />,
                num: "03",
                title: "SEO & Orgânico",
                desc: "Posicionamento de longo prazo sem depender apenas de anúncios."
              }
            ].map((item, i) => (
              <div key={i} className="bg-black p-10 hover:bg-zinc-950 transition-colors group">
                <div className="flex justify-between items-start mb-8 text-zinc-500 group-hover:text-[#FE4701] transition-colors">
                  {item.icon}
                  <span className="font-display font-bold text-xl">{item.num}</span>
                </div>
                <h4 className="font-display font-bold text-2xl uppercase mb-4 tracking-wide">{item.title}</h4>
                <p className="text-zinc-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Metodo GADS */}
        <section id="metodo" className="max-w-7xl mx-auto px-6 lg:px-12 mb-32 z-10 relative">
          <div className="border-b border-zinc-800 pb-8 mb-16 text-center md:text-left">
            <h3 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#FE4701]">MÉTODO GADS</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {metodoGads.map((item, i) => (
              <div 
                key={i} 
                className={`flex flex-col h-full border ${item.highlight ? 'border-[#FE4701] bg-[#FE4701]/5' : 'border-zinc-800 bg-zinc-950'} p-6 transition-colors hover:border-[#FE4701]`}
              >
                <div className="mb-4">
                  <span className={`text-xs font-bold px-3 py-1 bg-black border ${item.highlight ? 'border-[#FE4701] text-[#FE4701]' : 'border-zinc-800 text-zinc-400'}`}>
                    {item.tag}
                  </span>
                </div>
                <h4 className="font-display font-bold text-xl mb-3 leading-tight">{item.title}</h4>
                <p className="text-sm mb-6 flex-grow text-zinc-500">
                  {expandedCard === i ? item.fullDesc : item.shortDesc}
                </p>

                <div className="flex gap-2 mt-auto">
                  <button 
                    onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                    className="flex-1 py-3 bg-black border border-zinc-800 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-white transition-colors"
                  >
                    {expandedCard === i ? 'Recolher' : 'Saber Mais'}
                  </button>
                  <a href="#contatar2" className="flex-1 py-3 bg-black border border-[#FE4701] text-xs font-bold uppercase tracking-widest text-[#FE4701] hover:bg-[#FE4701] hover:text-white transition-colors flex items-center justify-center">
                    Contratar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Second CTA Form matching the original */}
        <section id="contatar2" className="max-w-4xl mx-auto px-6 lg:px-12 w-full mb-32 z-10 relative">
          <div className="bg-zinc-950 border border-zinc-800 p-8 md:p-14">
            <div className="text-center mb-10">
               <h3 className="font-display text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Vamos Começar?</h3>
               <p className="text-zinc-400 font-medium">Preencha os dados abaixo e nossa equipe entrará em contato em até 24h para uma análise estratégica gratuita.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-bold uppercase text-xs tracking-wide text-zinc-500">Nome Completo *</label>
                    <input type="text" required placeholder="Ex: João Silva" className="w-full px-4 py-3 bg-black border border-zinc-800 text-white focus:outline-none focus:border-[#FE4701] transition-colors" />
                  </div>
                  <div>
                    <label className="block mb-2 font-bold uppercase text-xs tracking-wide text-zinc-500">WhatsApp *</label>
                    <input type="tel" required placeholder="(00) 00000-0000" className="w-full px-4 py-3 bg-black border border-zinc-800 text-white focus:outline-none focus:border-[#FE4701] transition-colors" />
                  </div>
                  <div>
                    <label className="block mb-2 font-bold uppercase text-xs tracking-wide text-zinc-500">Melhor E-mail *</label>
                    <input type="email" required placeholder="seu@email.com" className="w-full px-4 py-3 bg-black border border-zinc-800 text-white focus:outline-none focus:border-[#FE4701] transition-colors" />
                  </div>
                  <div>
                    <label className="block mb-2 font-bold uppercase text-xs tracking-wide text-zinc-500">Nome da Empresa *</label>
                    <input type="text" required placeholder="Sua Empresa LDA" className="w-full px-4 py-3 bg-black border border-zinc-800 text-white focus:outline-none focus:border-[#FE4701] transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-bold uppercase text-xs tracking-wide text-zinc-500">Faturação Mensal *</label>
                  <select required defaultValue="" className="w-full px-4 py-3 bg-black border border-zinc-800 text-white focus:outline-none focus:border-[#FE4701] appearance-none transition-colors cursor-pointer">
                      <option value="" disabled>Selecione uma opção...</option>
                      <option value="1">Até R$ 10.000</option>
                      <option value="2">De R$ 10.000 a R$ 50.000</option>
                      <option value="3">De R$ 50.000 a R$ 100.000</option>
                      <option value="4">Acima de R$ 100.000</option>
                  </select>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full mt-4 bg-white text-black px-8 py-5 font-bold tracking-widest uppercase hover:bg-[#FE4701] hover:text-white transition-colors disabled:opacity-50">
                  {isSubmitting ? "Enviando..." : "Solicitar Análise Gratuita"}
                </button>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div>
            <div className="text-3xl font-bold tracking-widest uppercase mb-6 flex items-center gap-4">
              <img 
                src="/logo-gads.png" 
                alt="GADS Logo" 
                className="h-10 w-auto filter brightness-200 contrast-100 grayscale hover:grayscale-0 transition-all"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="max-w-xs text-zinc-500 font-medium tracking-wide">
              Assessoria e Negócios Digitais. Colocando sua empresa no topo das buscas.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div>
              <h4 className="font-bold text-xs text-[#FE4701] mb-6 uppercase tracking-widest">Navegação</h4>
              <ul className="space-y-3 font-medium text-zinc-500 text-sm">
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#metodo" className="hover:text-white transition-colors">Método GADS</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#FE4701] mb-6 uppercase tracking-widest">Social</h4>
              <ul className="space-y-3 font-medium text-zinc-500 text-sm">
                <li><a href="https://www.instagram.com/gadsagencialocal/" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=61580066617531" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="https://api.whatsapp.com/send/?phone=5548988678207" className="hover:text-white transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest uppercase text-zinc-600">
          <p>© {new Date().getFullYear()} GADS. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">TERMOS</a>
            <a href="#" className="hover:text-white transition-colors">PRIVACIDADE</a>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 z-[100] md:max-w-md bg-zinc-950 border border-zinc-800 p-6 shadow-2xl">
          <h4 className="font-display font-bold text-white uppercase tracking-widest mb-2 text-sm">Privacidade & Cookies</h4>
          <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
            Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site. Ao continuar navegando, você concorda com nossa política de privacidade.
          </p>
          <div className="flex gap-3">
            <button 
              onClick={() => setShowCookieBanner(false)}
              className="flex-1 bg-[#FE4701] text-white py-2 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              ACEITAR
            </button>
            <button 
              onClick={() => setShowCookieBanner(false)}
              className="flex-1 bg-black text-zinc-400 border border-zinc-800 py-2 font-bold text-xs uppercase tracking-widest hover:text-white hover:border-white transition-colors"
            >
              RECUSAR
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

