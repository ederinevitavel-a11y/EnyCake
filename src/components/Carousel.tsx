import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { MenuCakes, Cake } from '../constants';

export function Carousel({ onCakeChange, onAddToCart }: { onCakeChange?: (cake: Cake) => void, onAddToCart: (cake: Cake) => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % MenuCakes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    onCakeChange?.(MenuCakes[index]);
  }, [index, onCakeChange]);

  const currentCake = MenuCakes[index];

  return (
    <div className="relative h-[750px] md:h-[850px] lg:h-[800px] w-full flex items-start justify-center pt-4 md:pt-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full"
        >
          <motion.div 
            className="p-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full max-w-7xl mx-auto"
            transition={{ duration: 0.3 }}
          >
            <div className="w-full lg:w-1/2 relative group/card">
              <motion.div 
                className="block w-80 h-80 md:w-[500px] md:h-[500px] lg:w-full lg:h-[650px] mx-auto relative"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 1, 0, -1, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {/* Image Card Container */}
                <div className="w-full h-full bg-stone-50 p-4 md:p-6 rounded-[3rem] md:rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(74,55,40,0.15)] border-4 border-white overflow-hidden relative flex items-center justify-center">
                  {currentCake.icon.startsWith('http') ? (
                    <img 
                      src={currentCake.icon} 
                      alt={currentCake.name} 
                      className="w-full h-full object-contain rounded-[2rem] transition-transform duration-500 group-hover/card:scale-105" 
                    />
                  ) : (
                    <div className="text-9xl flex items-center justify-center w-full h-full">{currentCake.icon}</div>
                  )}
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 blur-3xl -z-10" />
                </div>
              </motion.div>
            </div>
            
            <div className="text-center lg:text-left w-full lg:w-1/2 mt-4 lg:mt-0">
              <span className="text-brand-terracotta font-heading underline underline-offset-8 decoration-brand-terracotta/30 text-xl italic tracking-wider block mb-6">Destaque do Menu</span>
              <h2 className="text-5xl md:text-7xl xl:text-8xl font-heading font-bold mb-8 tracking-tight text-brand-brown italic leading-[1.1] drop-shadow-sm">{currentCake.name}</h2>
              <div className="relative">
                <span className="text-8xl text-brand-terracotta/10 absolute -left-10 -top-8 font-serif pointer-events-none">"</span>
                <p className="text-xl md:text-2xl font-heading font-normal text-stone-500 opacity-90 leading-relaxed italic max-w-xl mx-auto lg:mx-0 relative z-10">{currentCake.desc}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      {/* Indicators styled for light background */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
        {MenuCakes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${index === i ? 'bg-brand-terracotta w-10' : 'bg-brand-terracotta/20 w-2'}`}
          />
        ))}
      </div>
    </div>
  );
}
