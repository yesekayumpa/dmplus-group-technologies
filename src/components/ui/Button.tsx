import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'white' | 'outline-white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95',
          {
            'bg-gradient-to-r from-blue-600 to-[#1288D9] text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5': variant === 'primary',
            'bg-white text-[#1288D9] shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5': variant === 'white',
            'border-2 border-white/80 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-[#1288D9]': variant === 'outline-white',
            'hover:bg-slate-100 text-slate-600': variant === 'ghost',
            'h-9 px-5 text-sm': size === 'sm',
            'h-12 px-8 text-base': size === 'md',
            'h-14 px-10 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
