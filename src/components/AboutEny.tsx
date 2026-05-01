import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function AboutEny() {
  return (
    <div className="flex flex-col items-center justify-center relative group">
      <div className="relative z-10 flex flex-col items-center gap-10 text-center">
        <div className="relative flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative z-10"
          >
            <img 
              src="https://i.imgur.com/7EjcJHs.png" 
              alt="Eny Agradecimento" 
              className="w-56 h-56 md:w-64 md:h-64 rounded-[2.5rem] object-cover shadow-2xl border-4 border-white/20 transition-all duration-700"
            />
          </motion.div>
          
          <motion.div 
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-2 -right-2 bg-brand-yellow p-3 rounded-2xl shadow-xl border-2 border-white z-20"
          >
            <Sparkles className="w-6 h-6 text-brand-brown" />
          </motion.div>
        </div>

        <div className="max-w-xl px-2">
          <span className="text-brand-terracotta font-heading underline underline-offset-8 decoration-brand-terracotta/30 text-xl italic tracking-wide">Uma Mensagem Especial</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-8 italic leading-tight tracking-tight">Obrigado pela visita! Que nossos bolos adocem seu dia.</h2>
        </div>
      </div>
    </div>
  );
}
