import { Star, Wrench, BadgeCheck, Clock } from 'lucide-react';

export default function WhyUs() {
  const points = [
    {
      icon: <BadgeCheck className="w-5 h-5 text-blue-600" />,
      title: 'Certificazioni e qualità',
      desc: 'Tecnici qualificati e strumenti di misura certificati per lavori a regola d’arte.'
    },
    {
      icon: <Wrench className="w-5 h-5 text-blue-600" />,
      title: 'Installazione chiavi in mano',
      desc: 'Gestiamo progetto, fornitura, posa, configurazione e collaudo: un solo interlocutore.'
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      title: 'Assistenza rapida',
      desc: 'Contratti di manutenzione e reperibilità per ridurre al minimo i fermi.'
    },
    {
      icon: <Star className="w-5 h-5 text-blue-600" />,
      title: 'Esperienza comprovata',
      desc: 'Decine di realtà servite tra uffici, retail, logistica e hospitality.'
    },
  ];

  return (
    <section id="perche" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Perché scegliere noi</h2>
            <p className="mt-3 text-slate-600">Un partner affidabile per guidarti nelle scelte tecnologiche, dal cablaggio del primo cavo alla migrazione verso la telefonia IP e la fibra.</p>

            <div className="mt-6 space-y-4">
              {points.map((p) => (
                <div key={p.title} className="flex items-start gap-3">
                  <div className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-50">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{p.title}</h3>
                    <p className="text-sm text-slate-600">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1470&auto=format&fit=crop"
              alt="Tecnico che lavora su armadio rack con patch panel"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
