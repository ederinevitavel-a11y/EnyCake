import React from 'react';
import { motion } from 'motion/react';
import { Plus, ShoppingBag } from 'lucide-react';
import { MenuCakes, Cake } from '../constants';

interface CakeGridProps {
  onAddToCart: (cake: Cake) => void;
}

export function CakeGrid({ onAddToCart }: CakeGridProps) {
  return (
    <section id="items" className="py-20 bg-amber-50/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-amber-900 mb-4 italic">
              Nosso Cardápio
            </h2>
            <p className="text-stone-600 text-lg">
              Escolha seus sabores favoritos. Cada bolo é preparado com carinho e entregue fresquinho para você.
            </p>
          </div>
          <div className="flex items-center gap-2 text-amber-800 font-medium bg-amber-100/50 px-4 py-2 rounded-full border border-amber-200">
            <ShoppingBag className="w-5 h-5" />
            <span>{MenuCakes.length} Opções Disponíveis</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {MenuCakes.map((cake, index) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 5) * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-stone-100 group flex flex-col"
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={cake.icon} 
                  alt={cake.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start gap-2 mb-4 min-h-[64px]">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-brown italic leading-tight flex-1">
                    {cake.name}
                  </h3>
                </div>
                <div className="min-h-[72px] mb-6">
                  <p className="text-stone-500 text-sm line-clamp-3 leading-relaxed">
                    {cake.desc}
                  </p>
                </div>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-brand-terracotta font-heading font-bold text-2xl italic">
                      R$ {cake.price}
                    </span>
                    <span className="text-stone-400 text-xs font-medium uppercase tracking-wider">Unidade</span>
                  </div>
                  
                  <button
                    onClick={() => onAddToCart(cake)}
                    className="bg-brand-brown hover:bg-brand-terracotta text-white p-4 rounded-2xl transition-all active:scale-90 shadow-lg hover:shadow-brand-terracotta/20 border-2 border-white group/btn"
                    aria-label="Adicionar ao carrinho"
                  >
                    <Plus className="w-8 h-8 transition-transform group-hover/btn:rotate-90" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
