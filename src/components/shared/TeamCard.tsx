import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
  index: number;
}

export function TeamCard({ name, role, image, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col items-center"
    >
      <div className="mb-5 flex h-28 w-28 overflow-hidden items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-[#1288D9] text-white shadow-xl shadow-blue-500/20 border-4 border-white">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
        ) : (
          <Users size={36} strokeWidth={1.5} />
        )}
      </div>
      <h3 className="text-lg font-bold text-slate-800">{name}</h3>
      <p className="text-sm font-medium text-[#1288D9]">{role}</p>
    </motion.div>
  );
}
