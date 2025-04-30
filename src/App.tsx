import { useState, useEffect } from 'react';
import { Code, Layout, Monitor, Shield, Globe, Server, Database } from 'lucide-react';
import logo from './assets/2-logo GSAPP_2015.png';
import image from './assets/adult-3086304_1920.jpg';
import imag2 from './assets/people-2564459.jpg';

// Este é o componente principal da landing page com efeito parallax para GSA Platform
const ParallaxLandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  // Cores do logotipo da GSA Platform

  // Efeito parallax - captura a posição do scroll com suavidade aprimorada
  useEffect(() => {
    let animationFrameId: any;
    let currentScrollY = window.scrollY;

    const smoothScroll = () => {
      const targetScrollY = window.scrollY;
      // Interpolar suavemente entre a posição atual e a desejada (efeito de suavização)
      currentScrollY += (targetScrollY - currentScrollY) * 0.1;

      setScrollPosition(currentScrollY);

      // Verifica se o usuário rolou para baixo para mudar o estilo do header
      if (targetScrollY > 50) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }

      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    animationFrameId = requestAnimationFrame(smoothScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleSubmit = () => {
    if (email.trim() !== '' && email.includes('@')) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setEmail('');
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-800 overflow-x-hidden">
      {/* Header/Navigation - Muda de estilo ao rolar */}
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 transition-all duration-500 ${headerScrolled
          ? 'bg-white text-gray-800 shadow-md py-3'
          : 'bg-transparent text-white py-4'
        }`}>
        <div className="logo flex items-center">
          {/* Logo SVG baseado na imagem compartilhada */}
          <img src={logo} alt="Logo GSA Plataform" className='w-6 h-6' />
          <span className={`ml-3 text-2xl font-bold ${headerScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'}`}>
            GSA Platform
          </span>
        </div>
        <nav>
          
  
        </nav>
      </header>

      {/* Hero Section com Efeito Parallax */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Imagem de Fundo com Parallax - Filtro mais leve para melhor visualização */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            transform: `translateY(${scrollPosition * 0.15}px)`, // Parallax mais suave (0.15 em vez de 0.5)
            filter: 'brightness(0.75)'
          }}
        />

        {/* Overlay de gradiente suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/5 z-10"></div>

        {/* Conteúdo Principal */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-wider leading-tight text-white drop-shadow-lg">
            O NOSSO SITE SERÁ<br />LANÇADO BREVEMENTE
          </h1>
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto drop-shadow-md">
            Especialistas em desenvolvimento de sistemas web e websites que transformam o seu negócio digital.
          </p>
          <a
            href="#inscrever"
            className="mt-6 px-10 py-4 bg-purple-700 bg-opacity-80 hover:bg-opacity-100 border border-purple-400 text-white hover:bg-purple-700 transition-all duration-300 uppercase tracking-wider text-sm font-medium rounded-sm"
          >
            Seja o primeiro a saber
          </a>
        </div>

        {/* Elementos decorativos flutuantes */}
        <div className="absolute bottom-10 left-20 w-20 h-20 rounded-full bg-purple-500 bg-opacity-20 backdrop-blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-purple-300 bg-opacity-20 backdrop-blur-xl animate-pulse"></div>
      </div>

      {/* Separador visual com as cores da marca */}
      <div className="h-1 w-full bg-gradient-to-r from-white via-purple-600 to-white"></div>

      {/* Secção de Inscrição */}
      <section id="inscrever" className="relative py-24 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-10 text-purple-700">
            Inscreva-se e seja o primeiro a saber<br />sobre o nosso lançamento
          </h2>

          <div className="max-w-md mx-auto">
            {submitted ? (
              <div className="p-4 bg-green-50 text-green-800 border border-green-200 rounded mb-4">
                Obrigado! Vamos notificá-lo quando lançarmos.
              </div>
            ) : null}

            <div className="flex flex-col space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Insira o seu email aqui*"
                className="p-4 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-sm"
              />
              <button
                onClick={handleSubmit}
                className="p-4 bg-purple-700 text-white hover:bg-purple-800 transition-colors uppercase tracking-wider text-sm font-medium rounded-sm"
              >
                Participar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Secção "Sobre" com Parallax - Imagem de fundo fixa */}
      <section className="relative py-32 overflow-hidden">
        {/* Background fixo (sem efeito parallax na imagem) */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${imag2})`,
            backgroundSize: 'cover',
            // Sem transformação para manter a imagem fixa
            filter: 'brightness(0.45)'
          }}
        />

        {/* Overlay de gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/30 z-10"></div>

        {/* Elementos com efeito parallax (apenas os elementos, não o fundo) */}
        <div
          className="absolute right-10 top-20 w-32 h-32 rounded-full bg-purple-500 bg-opacity-10 z-10"
          style={{ transform: `translateY(${scrollPosition * 0.05}px)` }}
        ></div>
        <div
          className="absolute left-10 bottom-20 w-24 h-24 rounded-full bg-purple-500 bg-opacity-10 z-10"
          style={{ transform: `translateY(-${scrollPosition * 0.03}px)` }}
        ></div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10 inline-block border-b-2 border-purple-600 pb-2 text-white">GSA Platform</h2>
          <p className="text-xl mb-6 text-gray-200">
            Somos especialistas em desenvolvimento de sistemas web e websites, criando soluções digitais inovadoras.
          </p>
          <p className="text-xl mb-16 text-gray-200">
            A nossa plataforma combina tecnologia de ponta com design elegante para criar experiências web excepcionais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-sm bg-white/10 backdrop-blur-sm border-t-2 border-purple-500/30 hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/20">
              <div className="inline-block p-3 bg-purple-600/30 rounded-full mb-4">
                <Code className="h-8 w-8 text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Desenvolvimento</h3>
              <p className="text-gray-300">Criamos sistemas web robustos e personalizados para as suas necessidades específicas.</p>
            </div>
            <div className="p-8 rounded-sm bg-white/10 backdrop-blur-sm border-t-2 border-purple-500/30 hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/20">
              <div className="inline-block p-3 bg-purple-600/30 rounded-full mb-4">
                <Layout className="h-8 w-8 text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Design</h3>
              <p className="text-gray-300">Interfaces elegantes e intuitivas que proporcionam uma experiência de utilizador excepcional.</p>
            </div>
            <div className="p-8 rounded-sm bg-white/10 backdrop-blur-sm border-t-2 border-purple-500/30 hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/20">
              <div className="inline-block p-3 bg-purple-600/30 rounded-full mb-4">
                <Shield className="h-8 w-8 text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Segurança</h3>
              <p className="text-gray-300">Protegemos os seus dados e sistemas com as mais avançadas tecnologias de segurança.</p>
            </div>
          </div>

          {/* Serviços adicionais */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-sm bg-white/5 backdrop-blur-sm border border-white/20 hover:border-purple-400 transition-all duration-300 flex items-start hover:-translate-y-1 hover:shadow-lg">
              <div className="mr-4 mt-1 p-2 bg-purple-500/20 rounded-full">
                <Globe className="h-6 w-6 text-purple-300" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2 text-white">Websites</h3>
                <p className="text-gray-300">Criamos websites responsivos, rápidos e otimizados para motores de busca.</p>
              </div>
            </div>
            <div className="p-6 rounded-sm bg-white/5 backdrop-blur-sm border border-white/20 hover:border-purple-400 transition-all duration-300 flex items-start hover:-translate-y-1 hover:shadow-lg">
              <div className="mr-4 mt-1 p-2 bg-purple-500/20 rounded-full">
                <Server className="h-6 w-6 text-purple-300" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2 text-white">Sistemas Web</h3>
                <p className="text-gray-300">Desenvolvemos sistemas web complexos e à medida para as suas necessidades empresariais.</p>
              </div>
            </div>
            <div className="p-6 rounded-sm bg-white/5 backdrop-blur-sm border border-white/20 hover:border-purple-400 transition-all duration-300 flex items-start hover:-translate-y-1 hover:shadow-lg">
              <div className="mr-4 mt-1 p-2 bg-purple-500/20 rounded-full">
                <Monitor className="h-6 w-6 text-purple-300" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2 text-white">UI/UX Design</h3>
                <p className="text-gray-300">Criamos interfaces inovadoras focadas na experiência do utilizador.</p>
              </div>
            </div>
            <div className="p-6 rounded-sm bg-white/5 backdrop-blur-sm border border-white/20 hover:border-purple-400 transition-all duration-300 flex items-start hover:-translate-y-1 hover:shadow-lg">
              <div className="mr-4 mt-1 p-2 bg-purple-500/20 rounded-full">
                <Database className="h-6 w-6 text-purple-300" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2 text-white">Consultoria</h3>
                <p className="text-gray-300">Orientamos a sua estratégia digital com base na nossa experiência e conhecimento de mercado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Extra - Tecnologias */}

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-8 md:mb-0">
              {/* Logo no rodapé */}
              <div className="flex items-center mb-4">
                <img src={logo} alt="Logo GSA Plataform" className='w-10 h-10' />
                <span className="ml-3 text-xl font-bold">GSA Platform</span>
              </div>
              <p className="text-gray-400 mb-2">info@gsaplatform.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-right">
              <h3 className="text-lg font-bold mb-4 text-purple-400">Contacto</h3>
              <p className="text-gray-300">Royal park</p>
              <p className="text-gray-300">Luanda xxx-xxx-xxx</p>
              <p className="text-gray-300 mt-2">+244 9XX XXX XXX</p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
            <p>© 2025 GSA Platform. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ParallaxLandingPage;