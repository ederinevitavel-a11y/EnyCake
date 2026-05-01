import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuCakes, WhatsAppNumber } from '../constants';

export function Carousel({ onCakeChange }: { onCakeChange?: (cake: any) => void }) {
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
  const waLink = `https://wa.me/${WhatsAppNumber}?text=${encodeURIComponent(currentCake.msg)}`;

  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-3xl shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 flex items-center justify-center ${currentCake.color}`}
        >
          <motion.div 
            className="p-10 text-white flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full max-w-6xl mx-auto"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full md:w-1/2 relative">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                {currentCake.icon.startsWith('http') ? (
                  <img src={currentCake.icon} alt={currentCake.name} className="w-full aspect-[4/3] md:aspect-square object-cover rounded-3xl shadow-lg border-4 border-white cursor-pointer hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="text-8xl md:text-9xl cursor-pointer hover:scale-105 transition-transform duration-300 flex items-center justify-center aspect-[4/3] md:aspect-square">{currentCake.icon}</div>
                )}
              </a>
            </div>
            <div className="flex-1 text-center md:text-left w-full md:w-1/2">
              <h2 className="text-5xl md:text-7xl font-heading font-bold mb-4 tracking-tight drop-shadow-md">{currentCake.name}</h2>
              <div className="inline-block bg-yellow-300 text-amber-950 px-8 py-3 rounded-xl mb-6 shadow-2xl transform md:-rotate-2 border-2 border-white/50">
                <span className="text-4xl md:text-5xl font-black tracking-tighter">R$ {currentCake.price}</span>
              </div>
              <p className="text-lg md:text-xl font-heading font-normal opacity-95 mb-10 leading-relaxed drop-shadow-sm">{currentCake.desc}</p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center md:justify-end md:right-8 px-8 gap-3">
        {MenuCakes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 rounded-full transition-all duration-300 ${index === i ? 'bg-white w-12' : 'bg-white/50 w-3'} shadow-md`}
          />
        ))}
      </div>
    </div>
  );
}
