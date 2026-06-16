import React, { useState } from 'react';
import { Container } from './Container';
import { Button } from './Button';

export interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
}

const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: 'Assistant Vocal Intelligent',
    imageUrl: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Génération d\'Images',
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Chatbot IA + RAG Local',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Agents Autonomes',
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Analyse Visuelle',
    imageUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop',
  },
];

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[300px] md:h-[350px] lg:h-[400px] rounded-3xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out shadow-lg
        ${isActive ? 'w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px]' : 'w-[50px] md:w-[60px] lg:w-[70px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { 
          const target = e.target as HTMLImageElement;
          target.onerror = null; 
          target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'; 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>

      <span
        className={`
          absolute text-white font-bold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'text-xl bottom-8 left-1/2 -translate-x-1/2 rotate-0' 
              : 'text-sm w-auto text-left bottom-24 left-1/2 -translate-x-1/2 -rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(4);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-slate-50 py-12">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-5/12 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-[#1288D9]">
              Innovation IA
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight max-w-2xl">
              Accélérez vos processus avec l'IA Générative
            </h2>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Déployez des applications d'Intelligence Artificielle performantes et sur mesure, parfaitement intégrées à votre infrastructure pour booster votre productivité.
            </p>
            <div className="mt-8">
              <Button 
                variant="primary" 
                className="rounded-full px-8 py-6 text-base font-bold shadow-xl shadow-blue-500/20"
                onClick={() => window.location.href = '/contact'}
              >
                Nous contacter
              </Button>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full lg:w-7/12">
            <div className="flex flex-row items-center justify-center lg:justify-end gap-2 md:gap-3 lg:gap-4 overflow-x-auto p-4 snap-x">
              {accordionItems.map((item, index) => (
                <div key={item.id} className="snap-center shrink-0">
                  <AccordionItem
                    item={item}
                    isActive={index === activeIndex}
                    onMouseEnter={() => handleItemHover(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
