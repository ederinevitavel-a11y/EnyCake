import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2, ShoppingBasket } from 'lucide-react';
import { WhatsAppNumber } from '../constants';
import { Cake } from '../constants';

interface CartItem extends Cake {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

export function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const subtotal = items.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(',', '.'));
    return acc + (price * item.quantity);
  }, 0);

  const handleCheckout = () => {
    let message = "🍩 *Novo Pedido da EnyCake!*\n\n";
    items.forEach(item => {
      message += `• ${item.quantity}x ${item.name} - R$ ${item.price}\n`;
    });
    message += `\n*Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}*\n\nPor favor, confirme meu pedido!`;
    
    const waLink = `https://wa.me/${WhatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            <div className="p-8 border-b flex items-center justify-between bg-brand-cream/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-terracotta shadow-sm border border-brand-terracotta/10">
                  <ShoppingBasket className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-brown italic">Seu Pedido</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white rounded-xl transition-colors text-stone-400 hover:text-brand-terracotta">
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-brand-brown/20 space-y-6">
                  <ShoppingBasket className="w-24 h-24 stroke-[1]" />
                  <p className="text-2xl font-heading italic">Sua cesta está vazia...</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-6 items-center">
                    <img src={item.icon} alt={item.name} className="w-24 h-24 rounded-[2rem] object-cover shadow-md border-2 border-white" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-heading font-bold text-2xl text-brand-brown italic leading-tight">{item.name}</h3>
                        <button onClick={() => onRemoveItem(item.id)} className="text-stone-300 hover:text-red-400 transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center bg-brand-cream rounded-2xl px-4 py-2 gap-6 border border-brand-terracotta/5">
                          <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-brand-terracotta hover:scale-125 transition-transform"><Minus className="w-5 h-5" /></button>
                          <span className="font-heading font-bold text-xl min-w-[20px] text-center italic">{item.quantity}</span>
                          <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-brand-terracotta hover:scale-125 transition-transform"><Plus className="w-5 h-5" /></button>
                        </div>
                        <span className="font-heading font-bold text-2xl text-brand-terracotta italic">R$ {item.price}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 border-t bg-brand-cream/80 backdrop-blur-md space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-stone-400 text-xl font-heading italic">Subtotal</span>
                  <span className="text-4xl font-heading font-bold text-brand-brown italic">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-brand-sage hover:bg-brand-brown text-white py-6 rounded-[2.5rem] font-heading font-bold text-2xl italic flex items-center justify-center gap-4 transition-all shadow-xl active:scale-95 border-4 border-white/20"
                >
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.67-1.613-.918-2.208-.242-.584-.488-.504-.67-.514-.172-.01-.368-.011-.564-.011-.197 0-.517.074-.789.372-.272.298-1.04 1.016-1.04 2.476 0 1.46 1.066 2.87 1.214 3.069.149.198 2.096 3.201 5.078 4.491.708.305 1.262.485 1.694.622.712.226 1.36.195 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.289.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a6.79 6.79 0 0 1-3.467-.95l-.248-.148-2.57.674.686-2.506-.162-.258a6.76 6.76 0 0 1-1.033-3.612c0-3.729 3.036-6.764 6.764-6.764a6.74 6.74 0 0 1 4.793 1.974 6.74 6.74 0 0 1 1.974 4.789c0 3.73-3.036 6.765-6.764 6.765" />
                  </svg>
                  Finalizar no WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
