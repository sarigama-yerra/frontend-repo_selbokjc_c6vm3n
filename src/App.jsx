import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} TLC Network Solutions — Tutti i diritti riservati.</p>
        <nav className="text-sm text-slate-600 flex items-center gap-4">
          <a href="#servizi" className="hover:text-slate-900">Servizi</a>
          <a href="#perche" className="hover:text-slate-900">Perché noi</a>
          <a href="#contatti" className="hover:text-slate-900">Contatti</a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
