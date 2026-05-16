import React from 'react';
import { motion } from 'motion/react';
import { Heart, Star, Clock, Trophy } from 'lucide-react';

const benefits = [
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Feito com Amor",
    desc: "Cada bolo é preparado artesanalmente, como se fosse para nossa própria família."
  },
  {
    icon: <Star className="w-8 h-8 text-amber-500" />,
    title: "Ingredientes Premium",
    desc: "Usamos apenas o melhor: chocolates nobres, frutas frescas e manteiga de verdade."
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-500" />,
    title: "Sempre Fresquinho",
    desc: "Produção diária sob encomenda. Você recebe o bolo saindo do forno!"
  },
  {
    icon: <Trophy className="w-8 h-8 text-emerald-500" />,
    title: "Receita de Vovó",
    desc: "Sabor autêntico que resgata as melhores memórias da infância."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white/50 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-brand-terracotta font-heading underline underline-offset-8 decoration-brand-terracotta/30 text-xl italic">Qualidade & Carinho</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-brown mt-4 italic">Por que a EnyCake?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 md:p-7 rounded-3xl bg-white border border-brand-terracotta/5 hover:border-brand-terracotta/20 hover:shadow-2xl hover:-translate-y-2 transition-all group text-center"
            >
              <div className="mb-4 p-3 bg-brand-cream rounded-2xl inline-block group-hover:scale-110 group-hover:bg-brand-terracotta/10 transition-all duration-300">
                {React.cloneElement(benefit.icon as React.ReactElement, { className: 'w-6 h-6' })}
              </div>
              <h3 className="text-lg font-heading font-bold text-brand-brown mb-2 italic leading-tight">{benefit.title}</h3>
              <p className="text-stone-600 leading-relaxed font-heading italic text-sm opacity-90">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
