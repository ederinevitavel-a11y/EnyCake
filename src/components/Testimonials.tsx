import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Eder",
    text: "O bolo de laranja é simplesmente divino! Fofinho e com aquele gosto de infância que eu tanto procurava.",
    role: "Cliente"
  },
  {
    name: "Rafael",
    text: "Os bolos da EnyCake são simplesmente fantásticos , sempre macios e saborosos 😋😋",
    role: "Cliente"
  },
  {
    name: "Camila",
    text: "Atendimento impecável e o bolo de cenoura chegou quentinho. Dá pra sentir o carinho em cada detalhe.",
    role: "Cliente"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-terracotta/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-sage/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-sage font-heading underline underline-offset-8 decoration-brand-sage/30 text-xl italic">Depoimentos</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-brown mt-4 italic">O que dizem os clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-brand-terracotta/5 relative group hover:shadow-xl transition-all"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-brand-terracotta/10 group-hover:text-brand-terracotta/20 transition-colors" />
              <p className="text-stone-700 italic mb-6 leading-relaxed font-heading text-lg relative z-10">"{t.text}"</p>
              <div className="border-t border-brand-terracotta/10 pt-4">
                <h4 className="font-heading font-bold text-xl text-brand-brown italic leading-none">{t.name}</h4>
                <span className="text-brand-terracotta text-xs font-sans uppercase tracking-widest font-bold opacity-60 mt-2 block">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
