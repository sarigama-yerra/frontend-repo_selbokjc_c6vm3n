import { Network, Cable, PhoneCall, Wifi, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Cable className="w-6 h-6 text-blue-600" />,
      title: 'Cablaggio strutturato',
      desc: 'Progettazione e posa di reti LAN Cat.6/6A/7 con certificazione, armadi rack, patch panel e canalizzazioni.'
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-blue-600" />,
      title: 'Centralini VoIP',
      desc: 'PBX in cloud o on‑premise, numerazioni, IVR, code, registrazioni, integrazione CRM e telefoni IP.'
    },
    {
      icon: <Network className="w-6 h-6 text-blue-600" />,
      title: 'Reti in fibra ottica',
      desc: 'Giunzione e certificazione fibre mono/multimodali, cablaggio FTTH/FTTO e dorsali ad alte prestazioni.'
    },
    {
      icon: <Wifi className="w-6 h-6 text-blue-600" />,
      title: 'Wi‑Fi professionale',
      desc: 'Sopralluoghi RF, site survey, copertura omogenea per uffici, magazzini e grandi ambienti.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: 'Sicurezza di rete',
      desc: 'Firewall, VPN, segmentazione VLAN e policy di accesso per proteggere dati e continuità operativa.'
    },
  ];

  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Servizi TLC per la tua azienda</h2>
          <p className="mt-3 text-slate-600">Dalla progettazione alla manutenzione. Un unico partner per tutte le esigenze di connettività e fonia.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 mb-4">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
