/**
 * Shared Framer Motion animation variants for consistent,
 * soft transitions across all sections of the site.
 */

// Ease curve — smooth deceleration (Apple/Linear style)
export const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;
export const EASE_OUT: [number, number, number, number] = [0.0, 0.0, 0.2, 1];

// ── Fade up (default section entry) ─────────────────────
export const fadeUp = {
  hidden:  { opacity: 0, y: 28, filter: 'blur(2px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: EASE_SMOOTH },
  },
};

// ── Fade in (no movement) ────────────────────────────────
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT } },
};

// ── Slide from left ──────────────────────────────────────
export const slideLeft = {
  hidden:  { opacity: 0, x: -30, filter: 'blur(2px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: EASE_SMOOTH },
  },
};

// ── Slide from right ─────────────────────────────────────
export const slideRight = {
  hidden:  { opacity: 0, x: 30, filter: 'blur(2px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: EASE_SMOOTH },
  },
};

// ── Fade down ────────────────────────────────────────────
export const fadeDown = {
  hidden:  { opacity: 0, y: -28, filter: 'blur(2px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: EASE_SMOOTH },
  },
};

// ── Zoom in ──────────────────────────────────────────────
export const zoomIn = {
  hidden:  { opacity: 0, scale: 0.85, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE_SMOOTH },
  },
};

// ── Flip (rotateX) ───────────────────────────────────────
export const flip = {
  hidden:  { opacity: 0, rotateX: -90, perspective: 1000 },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.8, ease: EASE_SMOOTH },
  },
};

// ── Bounce Up ────────────────────────────────────────────
export const bounceUp = {
  hidden:  { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 12,
      mass: 0.8
    },
  },
};


// ── Scale up ─────────────────────────────────────────────
export const scaleUp = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: EASE_SMOOTH },
  },
};

// ── Stagger container (wraps staggered children) ─────────
export const staggerContainer = (stagger = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

// ── Card hover ────────────────────────────────────────────
export const cardHover = {
  rest:  { y: 0, boxShadow: '0 4px 20px rgba(18,136,217,0.07)' },
  hover: {
    y: -6,
    boxShadow: '0 16px 40px rgba(18,136,217,0.18)',
    transition: { duration: 0.35, ease: EASE_SMOOTH },
  },
};

// ── Default viewport config ───────────────────────────────
export const defaultViewport = { once: true, margin: '-60px' };
