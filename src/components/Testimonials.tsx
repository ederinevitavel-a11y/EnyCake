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
  },
  {
    name: "Rosemberg",
    text: "Os bolos EnyCake são deliciosos! receitas caseiras que vão muito bem com um cafezinho!! ☕️ Eu aprecio muito os de laranja e limão 🍊🍋❤️",
    role: "Cliente"
  },
  {
    name: "Elaine",
    text: "Carinho em forma de bolo, qualidade incrível e um sabor marcante!!! Difícil é escolher o meu preferido!",
    role: "Cliente"
  },
  {
    name: "Rafinha",
    text: "Os bolos da tia Eny são incríveis. O meu preferido é o chocolatudo",
    role: "Sobrinha"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-brand-terracotta/5 relative group hover:shadow-2xl hover:border-brand-terracotta/10 transition-all duration-500"
            >
              <Quote className="absolute top-4 right-6 w-8 h-8 text-brand-terracotta/10 group-hover:text-brand-terracotta/30 group-hover:rotate-12 transition-all duration-500" />
              <p className="text-stone-700 italic mb-4 leading-relaxed font-heading text-base relative z-10 line-clamp-4 group-hover:line-clamp-none transition-all">"{t.text}"</p>
              <div className="border-t border-brand-terracotta/5 pt-3 mt-auto">
                <h4 className="font-heading font-bold text-lg text-brand-brown italic leading-none">{t.name}</h4>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-terracotta/40" />
                  <span className="text-brand-terracotta text-[10px] font-sans uppercase tracking-[0.2em] font-bold opacity-50">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
