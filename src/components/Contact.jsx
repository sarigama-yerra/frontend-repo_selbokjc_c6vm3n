import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    console.log('Richiesta preventivo', { name });
  }

  return (
    <section id="contatti" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Richiedi un preventivo</h2>
            <p className="mt-3 text-slate-600">Parlaci del tuo progetto: cablaggio, VoIP, fibra, Wi‑Fi. Ti ricontattiamo entro 24 ore.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nome e cognome</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Telefono</label>
                <input name="phone" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Messaggio</label>
                <textarea name="message" rows="4" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
                <Send className="w-4 h-4" />
                Invia richiesta
              </button>
              {sent && (
                <p className="text-sm text-green-600">Grazie! La tua richiesta è stata inviata.</p>
              )}
            </form>
          </div>

          <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="font-semibold text-slate-900">Informazioni</h3>
            <ul className="mt-3 text-slate-700 text-sm space-y-2">
              <li>Installazioni in tutta Italia</li>
              <li>Soluzioni per PMI, retail, hospitality e logistica</li>
              <li>Contratti di assistenza personalizzati</li>
            </ul>
            <div className="mt-6 text-sm text-slate-600">
              <p><span className="font-medium text-slate-800">Email:</span> info@tlc-network.it</p>
              <p><span className="font-medium text-slate-800">Telefono:</span> +39 02 1234 5678</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
