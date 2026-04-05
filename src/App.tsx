import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Menu, 
  X, 
  Youtube,
  Video, 
  Instagram,
  Mail,
  ChevronRight,
  Download,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';
import { translations } from './translations';

type Language = 'es' | 'en';

const logoUrl = "https://storage.googleapis.com/firebasestorage.googleapis.com/v0/b/antigravity-production.appspot.com/o/projects%2Fa390dd54-d4fa-452b-8e45-985222f1f77a%2Fattachments%2F4978430a-2895-4648-812e-131767576566?alt=media&token=25081822-6804-4638-922c-a25e1654313f";

// --- Shared Components ---

const Layout = ({ children, lang, setLang }: { children: React.ReactNode, lang: Language, setLang: (l: Language) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es');

  return (
    <div className="min-h-screen selection:bg-brand-primary/10 bg-brand-bg flex flex-col">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-brand-bg/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoUrl} 
              alt="BeYourInner Logo" 
              className="h-10 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback');
                if (fallback) (fallback as HTMLElement).style.display = 'block';
              }}
            />
            <span className="logo-fallback hidden font-display font-semibold text-xl tracking-tight text-brand-primary">
              BeYourInner
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link to="/journey" className={`text-xs uppercase tracking-[0.2em] font-medium hover:text-brand-primary transition-colors ${location.pathname === '/journey' ? 'text-brand-primary' : 'text-brand-text/60'}`}>{t.nav.about}</Link>
            <Link to="/guidance" className={`text-xs uppercase tracking-[0.2em] font-medium hover:text-brand-primary transition-colors ${location.pathname === '/guidance' ? 'text-brand-primary' : 'text-brand-text/60'}`}>{t.nav.services}</Link>
            <Link to="/contact" className={`text-xs uppercase tracking-[0.2em] font-medium hover:text-brand-primary transition-colors ${location.pathname === '/contact' ? 'text-brand-primary' : 'text-brand-text/60'}`}>{t.nav.contact}</Link>
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-full border border-brand-primary/10 hover:border-brand-primary/30 transition-all cursor-pointer"
            >
              <Globe className="w-3 h-3" />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

          <button className="md:hidden p-2 text-brand-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-bg flex flex-col items-center justify-center gap-10 md:hidden"
          >
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-3xl font-display text-brand-primary">{t.nav.home}</Link>
            <Link to="/journey" onClick={() => setIsMenuOpen(false)} className="text-3xl font-display text-brand-primary">{t.nav.about}</Link>
            <Link to="/guidance" onClick={() => setIsMenuOpen(false)} className="text-3xl font-display text-brand-primary">{t.nav.services}</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-3xl font-display text-brand-primary">{t.nav.contact}</Link>
            <button 
              onClick={() => { toggleLang(); setIsMenuOpen(false); }}
              className="flex items-center gap-2 text-sm font-bold px-8 py-3 rounded-full border border-brand-primary text-brand-primary"
            >
              <Globe className="w-4 h-4" />
              {lang === 'es' ? 'English' : 'Español'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="py-20 border-t border-brand-primary/5 bg-white/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoUrl} 
              alt="BeYourInner Logo" 
              className="h-16 md:h-20 w-auto object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback-footer');
                if (fallback) (fallback as HTMLElement).style.display = 'block';
              }}
            />
            <span className="logo-fallback-footer hidden font-display font-semibold text-2xl tracking-tight text-brand-primary">
              BeYourInner
            </span>
          </Link>
          
          <div className="flex gap-12 text-brand-primary">
            <a href="https://instagram.com/beyourinner" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform opacity-40 hover:opacity-100">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://tiktok.com/@beyourinner" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform opacity-40 hover:opacity-100">
              <Video className="w-6 h-6" />
            </a>
            <a href="https://youtube.com/@beyourinner" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform opacity-40 hover:opacity-100">
              <Youtube className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-xs font-medium opacity-30 tracking-widest uppercase">
              Copyright © 2026 beyourinner
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-20">
              {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Page Components ---

const HomePage = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <section className="relative pt-40 pb-40 md:pt-60 md:pb-60 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img 
            src={logoUrl} 
            alt="BeYourInner Brand" 
            className="h-24 md:h-40 w-auto mx-auto mb-16 opacity-90"
            referrerPolicy="no-referrer"
          />
          <span className="inline-block text-[10px] uppercase tracking-[0.5em] mb-12 text-brand-primary/50 font-bold">
            {t.hero.hook}
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-light leading-[1.1] mb-16 text-brand-primary">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-brand-text/70 font-light leading-relaxed mb-20 max-w-3xl mx-auto italic">
            {t.hero.subtitle}
          </p>
          <div className="flex justify-center">
            <Link to="/guidance" className="px-16 py-6 bg-brand-primary text-brand-bg rounded-full font-medium hover:bg-brand-primary/90 transition-all duration-700 flex items-center justify-center gap-4 group shadow-2xl shadow-brand-primary/10 text-lg">
              {t.hero.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-brand-primary/2 rounded-full blur-[150px] -z-10" />
    </section>
  );
};

const JourneyPage = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <section className="py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-brand-primary/5">
              <img 
                src="https://images.unsplash.com/photo-1499209974431-9dac3adaf471?auto=format&fit=crop&q=80&w=1000" 
                alt="The Journey" 
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/inner-peace/800/1000";
                }}
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-display mb-12 text-brand-primary leading-tight font-light">{t.about.title}</h1>
            <div className="space-y-8 text-lg text-brand-text/80 leading-relaxed font-light">
              <p className="text-2xl font-display italic text-brand-primary/80 leading-relaxed">{t.about.intro}</p>
              <p>{t.about.body}</p>
              <div className="pt-8 border-t border-brand-primary/10">
                <p className="font-display italic text-brand-primary/70 text-xl">{t.about.signature}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const GuidancePage = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <h1 className="text-4xl md:text-7xl font-display mb-10 text-brand-primary font-light">{t.services.title}</h1>
          <p className="text-xl text-brand-text/60 font-light italic leading-relaxed">{t.services.intro}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto mb-40">
          {t.services.items.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="p-12 md:p-16 rounded-[3rem] bg-white border border-brand-primary/5 hover:border-brand-primary/10 hover:shadow-3xl hover:shadow-brand-primary/5 transition-all duration-700 flex flex-col group"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-primary/40 font-bold mb-8">0{idx + 1}</span>
              <h2 className="text-3xl md:text-4xl font-display font-light mb-8 text-brand-primary">{item.title}</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed mb-12 flex-grow font-light">{item.description}</p>
              <div className="mb-12 p-8 bg-brand-bg rounded-3xl border border-brand-primary/5">
                <p className="text-brand-primary text-xl font-display italic">{item.benefit}</p>
              </div>
              {item.id === 'individual' ? (
                <a 
                  href="https://calendly.com/beyourinner" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-5 rounded-full border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-bg transition-all duration-500 font-medium text-center"
                >
                  {item.cta}
                </a>
              ) : (
                <Link 
                  to="/resources"
                  className="w-full py-5 rounded-full border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-bg transition-all duration-500 font-medium text-center"
                >
                  {item.cta}
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* FAQ Section Integrated into Guidance */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display mb-6 text-brand-primary font-light">{t.faq.title}</h2>
            <p className="text-lg text-brand-text/60 font-light italic">{t.faq.subtitle}</p>
          </div>
          <div className="space-y-4">
            {t.faq.items.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-brand-primary/5 overflow-hidden"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-8 py-8 flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className="text-xl font-display text-brand-primary group-hover:text-brand-primary/80 transition-colors">
                    {item.question}
                  </span>
                  <div className="shrink-0 ml-4 text-brand-primary/40 group-hover:text-brand-primary transition-colors">
                    {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-brand-text/70 leading-relaxed font-light">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ResourcesPage = ({ lang }: { lang: Language }) => {
  const [downloaded, setDownloaded] = useState(false);
  const t = translations[lang];

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 5000);
  };

  return (
    <section className="py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <h1 className="text-4xl md:text-7xl font-display mb-10 text-brand-primary font-light">{t.resources.title}</h1>
          <p className="text-xl text-brand-text/60 font-light italic leading-relaxed">{t.resources.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <div className="bg-brand-primary text-brand-bg p-12 md:p-20 rounded-[4rem] relative overflow-hidden shadow-2xl shadow-brand-primary/20">
            <div className="relative z-10">
              <h2 className="text-4xl font-display mb-8 font-light">{t.resources.download.title}</h2>
              <p className="text-lg opacity-80 mb-12 leading-relaxed max-w-md font-light">
                {t.resources.download.description}
              </p>
              <button 
                onClick={handleDownload}
                className={`flex items-center gap-4 px-10 py-5 rounded-full font-bold transition-all duration-500 ${downloaded ? 'bg-green-500 text-white' : 'bg-brand-bg text-brand-primary hover:scale-105'} cursor-pointer shadow-lg`}
              >
                {downloaded ? t.resources.download.success : (
                  <>
                    <Download className="w-5 h-5" />
                    {t.resources.download.button}
                  </>
                )}
              </button>
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] -z-0 translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="grid gap-8">
            {t.resources.items.map((item, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-white border border-brand-primary/5 hover:border-brand-primary/10 transition-all duration-500 flex items-start gap-8 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-brand-bg transition-all duration-500">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-2xl font-display font-light">{item.title}</h3>
                    <span className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-brand-primary/5 text-brand-primary font-bold">{item.type}</span>
                  </div>
                  <p className="text-brand-text/60 font-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactPage = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <section className="py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[4rem] shadow-3xl shadow-brand-primary/5 overflow-hidden border border-brand-primary/5">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-24 bg-brand-primary text-brand-bg flex flex-col justify-center">
              <h1 className="text-4xl md:text-7xl font-display mb-10 font-light">{t.contact.title}</h1>
              <p className="text-xl opacity-80 mb-16 font-light leading-relaxed italic">
                {t.contact.subtitle}
              </p>
              <div className="space-y-10">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-light">{t.contact.email}</span>
                </div>
              </div>
            </div>
            
            <div className="p-12 md:p-24 bg-brand-bg/30">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold opacity-40 uppercase tracking-[0.3em] ml-2">{lang === 'es' ? 'Nombre' : 'Name'}</label>
                  <input type="text" className="w-full px-8 py-5 rounded-3xl bg-white border border-brand-primary/5 focus:border-brand-primary/20 focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all duration-500 font-light" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold opacity-40 uppercase tracking-[0.3em] ml-2">Email</label>
                  <input type="email" className="w-full px-8 py-5 rounded-3xl bg-white border border-brand-primary/5 focus:border-brand-primary/20 focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all duration-500 font-light" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold opacity-40 uppercase tracking-[0.3em] ml-2">{lang === 'es' ? 'Mensaje' : 'Message'}</label>
                  <textarea rows={4} className="w-full px-8 py-5 rounded-3xl bg-white border border-brand-primary/5 focus:border-brand-primary/20 focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all duration-500 font-light resize-none"></textarea>
                </div>
                <button className="w-full py-6 bg-brand-primary text-brand-bg rounded-full font-bold text-lg hover:bg-brand-primary/90 transition-all duration-500 cursor-pointer shadow-2xl shadow-brand-primary/20">
                  {t.contact.button}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App Component ---

export default function App() {
  const [lang, setLang] = useState<Language>('es');

  useEffect(() => {
    const updateSEO = () => {
      const path = window.location.pathname;
      const t = translations[lang];
      let title = t.seo.home;
      if (path === '/journey') title = t.seo.journey;
      if (path === '/guidance') title = t.seo.guidance;
      if (path === '/resources') title = t.seo.resources;
      
      document.title = title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', t.seo.description);
    };
    
    updateSEO();
  }, [lang]);

  return (
    <Router>
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<HomePage lang={lang} />} />
          <Route path="/journey" element={<JourneyPage lang={lang} />} />
          <Route path="/guidance" element={<GuidancePage lang={lang} />} />
          <Route path="/resources" element={<ResourcesPage lang={lang} />} />
          <Route path="/contact" element={<ContactPage lang={lang} />} />
        </Routes>
      </Layout>
    </Router>
  );
}
