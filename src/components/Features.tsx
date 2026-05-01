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
    title: "Receita de Vó",
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-[2.5rem] bg-white border border-brand-terracotta/10 hover:shadow-xl hover:-translate-y-1 transition-all group text-center"
            >
              <div className="mb-6 p-4 bg-brand-cream rounded-full inline-block group-hover:bg-brand-terracotta/10 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-brown mb-3 italic">{benefit.title}</h3>
              <p className="text-stone-600 leading-relaxed font-heading italic text-base">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
