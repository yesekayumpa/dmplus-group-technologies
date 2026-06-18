'use client'

import { useEffect, useState, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { NAVIGATION } from '../../config/constants';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.includes('#')) return;
      const [path, hash] = href.split('#');
      const targetPath = path || '/';
      const scrollToHash = () => {
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
      };
      if (location.pathname === targetPath || targetPath === '/') {
        e.preventDefault();
        scrollToHash();
      } else {
        e.preventDefault();
        navigate(targetPath);
        scrollToHash();
      }
    },
    [location.pathname, navigate]
  );

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-[#0a1628]/90 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.3)] border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <img
                  src="/logo.png"
                  alt="Digital Mind+ Group"
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {NAVIGATION.map((item, i) => {
                const isActive = location.pathname === item.href;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    onHoverStart={() => setActiveHover(item.label)}
                    onHoverEnd={() => setActiveHover(null)}
                  >
                    <Link
                      to={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {/* Active / hover bg pill */}
                      {(isActive || activeHover === item.label) && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-white/10"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#1288D9] shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-shadow hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)]"
                >
                  {/* Shimmer */}
                  <span className="absolute inset-0 animate-shimmer opacity-30 rounded-full" />
                  <span className="relative">Nous contacter</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Mobile hamburger */}
            <motion.button
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-white md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-sm" />
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[min(320px,85vw)] bg-[#030d1a]/95 backdrop-blur-2xl border-l border-white/5 shadow-2xl md:hidden flex flex-col"
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                <img src="/logo.png" alt="DM+" className="h-8 w-auto" />
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white"
                >
                  <X size={16} />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 px-4 pt-6 flex-1">
                {NAVIGATION.map((item, i) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-semibold transition-all duration-200 group ${
                          isActive
                            ? 'bg-[#1288D9]/20 text-white border border-[#1288D9]/30'
                            : 'text-white/70 hover:bg-white/5 hover:text-white border border-transparent'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight
                          size={14}
                          className={`transition-transform duration-200 group-hover:translate-x-1 ${
                            isActive ? 'text-[#38b6ff]' : 'text-white/30'
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* CTA bottom */}
              <div className="px-4 pb-8">
                <Link to="/contact" className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1288D9] to-[#38b6ff] px-6 py-4 text-center text-sm font-bold text-white shadow-[0_8px_32px_rgba(18,136,217,0.4)]"
                  >
                    <span className="absolute inset-0 animate-shimmer opacity-20" />
                    <span className="relative">Nous contacter</span>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
