import { motion } from 'framer-motion';
import { Users, Globe } from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';

interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
  index: number;
}

export function TeamCard({ name, role, image }: TeamCardProps) {
  return (
    <TiltCard intensity={15} glare className="h-full">
      <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_2px_20px_rgba(18,136,217,0.06)] hover:shadow-[0_16px_40px_rgba(18,136,217,0.12)] transition-all duration-500 relative overflow-hidden card-shine">
        {/* Hover background blob */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#1288D9]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Avatar container */}
        <div className="relative mb-6">
          <div className="h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-[#1288D9] border-[4px] border-white shadow-[0_8px_24px_rgba(18,136,217,0.25)] transition-all duration-500 group-hover:shadow-[0_12px_32px_rgba(18,136,217,0.4)] group-hover:border-[#1288D9]/20 relative z-10">
            {image ? (
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-white">
                <Users size={40} strokeWidth={1.5} />
              </div>
            )}
          </div>

          {/* Social hover badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            className="absolute -bottom-2 -right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#1288D9] text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <Globe size={18} />
          </motion.div>
        </div>

        {/* Name */}
        <h3 className="text-lg font-extrabold text-slate-800 transition-colors duration-300 group-hover:text-[#1288D9] relative z-10">
          {name}
        </h3>

        {/* Role */}
        <p className="mt-1.5 text-xs font-bold uppercase tracking-widest text-[#1288D9]/70 relative z-10">
          {role}
        </p>

        {/* Decorative line */}
        <div className="mt-5 h-1 w-8 rounded-full bg-slate-200 group-hover:bg-[#1288D9]/40 group-hover:w-12 transition-all duration-300" />
      </div>
    </TiltCard>
  );
}
