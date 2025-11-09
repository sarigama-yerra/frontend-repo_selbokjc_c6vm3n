import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Specialisti in reti e comunicazione aziendale
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Cablaggi, centralini VoIP e fibra per la tua impresa
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Progettiamo, installiamo e manteniamo infrastrutture TLC affidabili: rete dati, fonia VoIP, fibra ottica e Wi‑Fi professionale. Soluzioni chiavi in mano, scalabili e sicure.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-slate-700">
              {[
                'Sopralluogo e consulenza gratuita',
                'Interventi rapidi e programmati',
                'Materiali certificati e test di rete',
                'Assistenza e monitoraggio H24',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contatti" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                Richiedi un preventivo
              </a>
              <a href="#servizi" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-300 text-slate-800 font-medium hover:bg-slate-50">
                Scopri i servizi
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl bg-slate-900/90 shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop"
                alt="Cavi di rete e pannello patch in data center"
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
