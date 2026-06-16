import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/ui/Container';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { SITE_CONFIG } from '../../config/constants';
import { cn } from '../../utils/cn';

const INFO_CARDS = [
  {
    icon: Mail,
    title: 'Email',
    value: SITE_CONFIG.contact.email,
    sub: 'Réponse sous 24h',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    value: SITE_CONFIG.contact.phone,
    sub: 'Lun – Ven, 9h – 18h',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    value: SITE_CONFIG.contact.address,
    sub: 'Siège social',
  },
];

export function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1500);
  }

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative bg-[#1288D9] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 0%, transparent 60%)' }} />
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-3">Nous écrire</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Contactez-nous</h1>
            <p className="mt-4 max-w-xl text-white/80 leading-relaxed">
              Une question, un projet ? Notre équipe est disponible pour vous accompagner.
            </p>
          </motion.div>
        </Container>
      </div>

      <div className="bg-slate-50 py-20">
        <Container>
          {/* Info Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-16 -mt-14">
            {INFO_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/50 border border-slate-100"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-[#1288D9] text-white shadow-lg shadow-blue-500/20">
                  <card.icon size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#1288D9]">{card.title}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{card.value}</p>
                  <p className="text-xs text-slate-400">{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form + Additional Info */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="rounded-3xl bg-white p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-8">Envoyez-nous un message</h2>
                {status === 'sent' ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <Send size={28} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">Message envoyé !</h3>
                    <p className="mt-2 text-slate-500">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-slate-600">Prénom</label>
                        <input required type="text" placeholder="Jean" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#1288D9] focus:ring-2 focus:ring-[#1288D9]/20" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-slate-600">Nom</label>
                        <input required type="text" placeholder="Dupont" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#1288D9] focus:ring-2 focus:ring-[#1288D9]/20" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-600">Email</label>
                      <input required type="email" placeholder="jean@exemple.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#1288D9] focus:ring-2 focus:ring-[#1288D9]/20" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-600">Sujet</label>
                      <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#1288D9] focus:ring-2 focus:ring-[#1288D9]/20">
                        <option>Développement logiciel</option>
                        <option>Solutions IA</option>
                        <option>Transformation digitale</option>
                        <option>Partenariat</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-600">Message</label>
                      <textarea required rows={5} placeholder="Décrivez votre projet ou votre besoin..." className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#1288D9] focus:ring-2 focus:ring-[#1288D9]/20" />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className={cn(
                        'flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-[#1288D9] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5 hover:shadow-blue-500/40 active:scale-95 disabled:opacity-70',
                      )}
                    >
                      {status === 'sending' ? 'Envoi en cours...' : (
                        <><Send size={16} /> Envoyer le message</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Side Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-[#1288D9] p-8 text-white shadow-xl shadow-blue-500/20">
                <Clock size={28} className="mb-4 opacity-80" />
                <h3 className="text-lg font-bold mb-2">Horaires d'ouverture</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex justify-between"><span>Lundi – Vendredi</span><span className="font-semibold text-white">9h – 18h</span></li>
                  <li className="flex justify-between"><span>Samedi</span><span className="font-semibold text-white">9h – 13h</span></li>
                  <li className="flex justify-between"><span>Dimanche</span><span className="font-semibold text-white">Fermé</span></li>
                </ul>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                <Globe size={28} className="mb-4 text-[#1288D9]" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">Présence internationale</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Nos équipes interviennent en France, en Afrique et à l'international pour accompagner votre transformation digitale.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
