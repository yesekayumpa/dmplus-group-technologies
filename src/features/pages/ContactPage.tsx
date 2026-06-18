'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/ui/Container';
import { ParticleField } from '../../components/ui/ParticleField';
import { MagneticButton } from '../../components/ui/MagneticButton';
import {
  Mail, Phone, MapPin, Send, Clock, Globe,
  CheckCircle, Share2, MessageSquare,
  ChevronDown, ArrowRight, Sparkles, Zap,
} from 'lucide-react';
import { SITE_CONFIG } from '../../config/constants';
import { ASSETS } from '../../utils/index';
import { cn } from '../../utils/cn';
import { staggerContainer, fadeUp, slideLeft, slideRight, zoomIn, defaultViewport, EASE_SMOOTH } from '../../utils/animations';

const CONTACT_INFO = [
  { icon: Mail,    label: 'Email',     value: SITE_CONFIG.contact.email,   badge: 'Réponse sous 24h',   href: `mailto:${SITE_CONFIG.contact.email}`,  color: '#1288D9', bg: 'from-blue-50 to-sky-50' },
  { icon: Phone,   label: 'Téléphone', value: SITE_CONFIG.contact.phone,   badge: 'Lun – Ven · 9h–18h', href: `tel:${SITE_CONFIG.contact.phone}`,      color: '#0e6dc9', bg: 'from-indigo-50 to-blue-50' },
  { icon: MapPin,  label: 'Adresse',   value: SITE_CONFIG.contact.address, badge: 'Siège social',        href: '#',                                     color: '#38b6ff', bg: 'from-sky-50 to-cyan-50' },
];

const SUBJECTS = [
  'Développement logiciel sur mesure',
  'Solutions Intelligence Artificielle',
  'Transformation digitale',
  'Conseil & Architecture IT',
  'Partenariat stratégique',
  'Autre demande',
];

const SOCIALS = [
  { icon: Share2,       label: 'LinkedIn',    href: '#' },
  { icon: MessageSquare, label: 'Twitter / X', href: '#' },
  { icon: Globe,        label: 'Instagram',   href: '#' },
];

function InputField({ label, type = 'text', placeholder, required = true, id }: {
  label: string; type?: string; placeholder: string; required?: boolean; id: string;
}) {
  return (
    <div className="group relative">
      <label htmlFor={id} className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-slate-400 transition-colors duration-200 group-focus-within:text-[#1288D9]">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          required={required}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/60 px-5 py-4 text-sm font-medium text-slate-900 placeholder:text-slate-300 outline-none transition-all duration-300 focus:border-[#1288D9]/50 focus:bg-white focus:shadow-[0_0_0_6px_rgba(18,136,217,0.07)]"
        />
        {/* Focus line animation */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#1288D9] to-[#38b6ff] rounded-full"
          initial={{ width: 0 }}
          whileFocus={{ width: '100%' }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </div>
  );
}

export function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1800);
  }

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-[#030d1a] pt-24">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${ASSETS.programming})` }}
        />

        {/* Aurora orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="aurora-orb-1 absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-[#1288D9]/25 blur-[130px]" />
          <div className="aurora-orb-2 absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#38b6ff]/15 blur-[100px]" />
          <div className="aurora-orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/8 blur-[80px]" />
        </div>

        {/* Particles */}
        <div className="absolute inset-0 z-1">
          <ParticleField particleCount={40} color="18, 136, 217" interactive={true} />
        </div>



        {/* Scanline */}
        <div className="scanline z-1" />

        {/* Gradient to white below */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-50 to-transparent z-5" />

        <Container className="relative z-10 py-20">
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            {/* Pill */}
            <motion.div variants={fadeUp} className="mb-8 flex justify-center">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/8 px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white/70 backdrop-blur-lg shadow-xl">
                <Sparkles size={12} className="text-[#38b6ff]" />
                Parlons de votre projet
                <Zap size={11} className="text-[#38b6ff] animate-pulse" />
              </span>
            </motion.div>

            {/* Glitch Headline */}
            <motion.div variants={fadeUp}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.0] tracking-tight">
                <span className="block">
                  Contactez
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#38b6ff] to-[#1288D9]">
                  -nous
                </span>
              </h1>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-7 text-lg md:text-xl text-white/60 font-medium leading-relaxed max-w-xl mx-auto">
              Une question, un projet ou simplement envie d'échanger ?
              Notre équipe répond en moins de 24h.
            </motion.p>

            {/* Quick contact pills */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Mail size={14} /> {SITE_CONFIG.contact.email}
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#1288D9]/80 border border-[#1288D9] backdrop-blur-md px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1288D9] transition-all duration-300"
                >
                  <Phone size={14} /> {SITE_CONFIG.contact.phone}
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ── CONTENT ── */}
      <div className="bg-gradient-to-b from-slate-50 to-white">
        <Container className="py-24">

          {/* Info cards */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20 -mt-16 relative z-20"
          >
            {CONTACT_INFO.map((card) => (
              <motion.a
                key={card.label}
                href={card.href}
                variants={zoomIn}
                className={cn(
                  'group flex items-center gap-5 rounded-[1.75rem] bg-white/95 backdrop-blur-xl',
                  'p-6 shadow-2xl shadow-slate-200/60 border border-white',
                  'hover:shadow-[0_20px_60px_rgba(18,136,217,0.15)] hover:-translate-y-2',
                  'transition-all duration-500 cursor-pointer card-shine'
                )}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className={cn('flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl', `bg-gradient-to-br ${card.bg}`)}
                  style={{ color: card.color }}
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <card.icon size={22} strokeWidth={1.75} />
                </motion.div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{card.label}</p>
                  <p className="text-sm font-bold text-slate-900 truncate">{card.value}</p>
                  <span
                    className="mt-1.5 inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: card.color }}
                  >
                    {card.badge}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">

            {/* FORM */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <div className="relative rounded-[2.5rem] bg-white shadow-[0_32px_80px_rgba(18,136,217,0.10)] border border-slate-100 overflow-hidden">
                {/* Top accent bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#38b6ff] via-[#1288D9] to-[#0e6dc9]" />

                <div className="p-8 md:p-12">
                  <div className="mb-10">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#1288D9] mb-2">Formulaire de contact</p>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                      Envoyez-nous<br />un message
                    </h2>
                    <p className="mt-3 text-slate-500 font-medium">Tous les champs marqués sont requis.</p>
                  </div>

                  <AnimatePresence mode="wait">
                    {status === 'sent' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: EASE_SMOOTH as any }}
                        className="flex flex-col items-center justify-center py-20 text-center"
                      >
                        <div className="relative mb-8">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                            className="h-28 w-28 rounded-full bg-green-50 flex items-center justify-center"
                          >
                            <CheckCircle size={52} className="text-green-500" strokeWidth={1.5} />
                          </motion.div>
                          <div className="absolute inset-0 rounded-full bg-green-400/20 animate-ping" />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 mb-3">Message envoyé !</h3>
                        <p className="text-slate-500 font-medium max-w-sm leading-relaxed">
                          Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
                        </p>
                        <motion.button
                          onClick={() => setStatus('idle')}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-[#1288D9]/20 bg-[#1288D9]/5 px-6 py-3 text-sm font-bold text-[#1288D9] hover:bg-[#1288D9]/10 transition-all duration-200"
                        >
                          Envoyer un autre message <ArrowRight size={14} />
                        </motion.button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <InputField id="prenom" label="Prénom *" placeholder="Jean" />
                          <InputField id="nom"    label="Nom *"    placeholder="Dupont" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <InputField id="email" label="Email *"     type="email" placeholder="jean@exemple.com" />
                          <InputField id="tel"   label="Téléphone"   type="tel"   placeholder="+33 6 00 00 00 00" required={false} />
                        </div>
                        <InputField id="company" label="Entreprise" placeholder="Votre entreprise" required={false} />

                        {/* Subject select */}
                        <div className="group relative">
                          <label htmlFor="sujet" className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-slate-400 transition-colors duration-200 group-focus-within:text-[#1288D9]">
                            Sujet *
                          </label>
                          <div className="relative">
                            <select
                              id="sujet"
                              required
                              className="w-full appearance-none rounded-2xl border-2 border-slate-100 bg-slate-50/60 px-5 py-4 text-sm font-medium text-slate-900 outline-none transition-all duration-300 focus:border-[#1288D9]/50 focus:bg-white focus:shadow-[0_0_0_6px_rgba(18,136,217,0.07)] cursor-pointer pr-12"
                            >
                              <option value="" disabled>Sélectionnez un sujet</option>
                              {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                            <ChevronDown size={16} className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" />
                          </div>
                        </div>

                        {/* Budget */}
                        <div className="group">
                          <label className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-slate-400">Budget estimé</label>
                          <div className="grid grid-cols-3 gap-2">
                            {['< 10k€', '10k – 50k€', '> 50k€'].map(b => (
                              <label
                                key={b}
                                className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-100 bg-slate-50/60 px-3 py-3 text-xs font-semibold text-slate-600 cursor-pointer has-[:checked]:border-[#1288D9]/60 has-[:checked]:bg-[#1288D9]/5 has-[:checked]:text-[#1288D9] transition-all duration-200"
                              >
                                <input type="radio" name="budget" value={b} className="sr-only" />
                                {b}
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Message */}
                        <div className="group relative">
                          <label htmlFor="message" className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-slate-400 transition-colors duration-200 group-focus-within:text-[#1288D9]">
                            Message *
                          </label>
                          <textarea
                            id="message"
                            required
                            rows={5}
                            placeholder="Décrivez votre projet, vos objectifs et vos contraintes..."
                            className="w-full resize-none rounded-2xl border-2 border-slate-100 bg-slate-50/60 px-5 py-4 text-sm font-medium text-slate-900 placeholder:text-slate-300 outline-none transition-all duration-300 focus:border-[#1288D9]/50 focus:bg-white focus:shadow-[0_0_0_6px_rgba(18,136,217,0.07)]"
                          />
                        </div>

                        {/* Submit */}
                        <motion.button
                          type="submit"
                          disabled={status === 'sending'}
                          whileHover={{ scale: 1.01, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#1288D9] px-8 py-5 text-base font-bold text-white shadow-[0_12px_40px_rgba(18,136,217,0.35)] hover:shadow-[0_20px_60px_rgba(18,136,217,0.45)] transition-shadow duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {/* Shimmer */}
                          <span className="absolute inset-0 animate-shimmer opacity-20" />
                          {status === 'sending' ? (
                            <>
                              <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              <Send size={18} />
                              <span className="relative">Envoyer le message</span>
                              <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform duration-300" />
                            </>
                          )}
                        </motion.button>

                        <p className="text-center text-[11px] text-slate-400 font-medium">
                          🔒 Vos informations sont protégées et ne seront jamais partagées.
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* SIDEBAR */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="flex flex-col gap-6 lg:sticky lg:top-28"
            >
              {/* Hours */}
              <div className="relative rounded-[2rem] bg-gradient-to-br from-[#1288D9] to-[#0a4a8a] p-8 text-white shadow-2xl shadow-blue-900/25 overflow-hidden card-shine">
                <div className="absolute -top-12 -right-12 w-56 h-56 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm mb-6">
                    <Clock size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-black mb-1">Disponibilité</h3>
                  <p className="text-blue-200 text-sm mb-6 font-medium">Nous sommes là pour vous</p>
                  <div className="space-y-3">
                    {[
                      { day: 'Lun – Ven', hours: '9h – 18h', active: true },
                      { day: 'Samedi',   hours: '9h – 13h', active: true },
                      { day: 'Dimanche', hours: 'Fermé',     active: false },
                    ].map(({ day, hours, active: isActive }) => (
                      <div key={day} className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
                        <span className="text-sm font-medium text-white/80">{day}</span>
                        <span className={`text-sm font-bold flex items-center gap-1.5 ${isActive ? 'text-white' : 'text-white/40'}`}>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* International */}
              <div className="rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 p-8 relative overflow-hidden card-shine">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1288D9]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1288D9]/10 text-[#1288D9] mb-6">
                  <Globe size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight">Présence internationale</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-5">
                  Nos équipes opèrent en France, Afrique et à l'international pour vous accompagner où que vous soyez.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['🇫🇷 France', '🌍 Afrique', '🌐 International'].map(loc => (
                    <motion.span
                      key={loc}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="text-[11px] font-bold bg-slate-50 border border-slate-100 text-slate-600 px-3 py-1.5 rounded-full cursor-default"
                    >
                      {loc}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div className="rounded-[2rem] bg-[#030d1a] p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-950" />
                <div className="aurora-orb-1 absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#1288D9]/15 blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-lg font-black mb-1">Suivez-nous</h3>
                  <p className="text-slate-400 text-sm mb-6 font-medium">Restez connecté avec DM+</p>
                  <div className="space-y-3">
                    {SOCIALS.map(({ icon: Icon, label, href }) => (
                      <motion.a
                        key={label}
                        href={href}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-4 rounded-xl bg-white/5 border border-white/5 px-4 py-3 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 group-hover:bg-[#1288D9]/20 transition-colors duration-300">
                          <Icon size={16} className="text-slate-300 group-hover:text-[#38b6ff] transition-colors duration-300" />
                        </div>
                        <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors duration-300">{label}</span>
                        <ArrowRight size={14} className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors duration-300" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom banner */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-24 relative rounded-[2.5rem] overflow-hidden"
          >
            <img src={ASSETS.officeWorkers} alt="DM+ Technologies bureau" className="w-full h-64 object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030d1a]/90 via-[#0a2a5e]/70 to-transparent" />
            <div className="aurora-orb-1 absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
              <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1288D9]/20 blur-[80px]" />
            </div>
            <div className="absolute inset-0 flex items-center px-10 md:px-16">
              <div className="max-w-xl relative z-10">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#38b6ff] mb-3">Prêt à démarrer ?</p>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">
                  Transformons votre vision en réalité digitale
                </h3>
                <MagneticButton>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="inline-flex items-center gap-3 rounded-2xl bg-[#1288D9] px-7 py-4 text-sm font-bold text-white shadow-[0_8px_32px_rgba(18,136,217,0.5)] hover:shadow-[0_16px_48px_rgba(18,136,217,0.6)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Mail size={16} /> Nous écrire maintenant
                  </a>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
    </Layout>
  );
}
