import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';
import { Card } from '../ui/Card';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  index: number;
}

export function ServiceCard({ id, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="group flex h-full flex-col items-start gap-5 p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 border border-transparent hover:border-blue-100">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-[#1288D9] text-base font-bold text-white shadow-lg shadow-blue-500/30">
          {id}
        </div>
        <h3 className="text-xl font-bold text-slate-800 transition-colors group-hover:text-[#1288D9]">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
}
