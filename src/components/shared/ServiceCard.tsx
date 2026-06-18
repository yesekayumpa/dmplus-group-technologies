import { type LucideIcon } from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  index: number;
}

export function ServiceCard({ id, title, description, icon: Icon }: ServiceCardProps) {
  return (
    <TiltCard intensity={8} glare className="h-full">
      <div className="group relative flex h-full flex-col items-start gap-6 rounded-3xl bg-white p-8 border border-slate-100 shadow-[0_2px_16px_rgba(18,136,217,0.06)] hover:shadow-[0_16px_48px_rgba(18,136,217,0.15)] hover:border-[#1288D9]/30 transition-all duration-500 cursor-default overflow-hidden card-shine">
        {/* Hover background glow */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#1288D9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl" />
        <div className="pointer-events-none absolute -left-12 -bottom-12 h-32 w-32 rounded-full bg-[#38b6ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

        {/* Top corner ID */}
        <div className="absolute top-6 right-6 text-4xl font-black text-slate-50 opacity-0 group-hover:opacity-100 group-hover:text-[#1288D9]/5 transition-all duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2">
          {id}
        </div>

        {/* Icon badge */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#1288D9] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full" />
          {Icon ? (
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#38b6ff] to-[#1288D9] text-white shadow-[0_8px_24px_rgba(18,136,217,0.3)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Icon size={28} strokeWidth={1.5} />
            </div>
          ) : (
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#38b6ff] to-[#1288D9] text-xl font-black text-white shadow-[0_8px_24px_rgba(18,136,217,0.3)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              {id}
            </div>
          )}
        </div>

        <div className="relative z-10 flex-1">
          <h3 className="mb-3 text-xl font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-[#1288D9]">
            {title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-[#38b6ff] to-[#1288D9] transition-all duration-700 ease-out group-hover:w-full" />
      </div>
    </TiltCard>
  );
}
