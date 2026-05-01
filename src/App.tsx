/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, ShoppingBasket, MapPin, Phone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel } from './components/Carousel';
import { AboutEny } from './components/AboutEny';
import { Cart } from './components/Cart';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { CakeGrid } from './components/CakeGrid';
import { MenuCakes, Cake, LogoURL } from './constants';

interface CartItem extends Cake {
  quantity: number;
}

export default function App() {
  const [currentCake, setCurrentCake] = useState<Cake>(MenuCakes[0]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (cake: Cake) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === cake.id);
      if (existing) {
        return prev.map(item => 
          item.id === cake.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...cake, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-brand-cream font-sans text-brand-brown selection:bg-brand-terracotta/20 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="fixed inset-0 bg-checkered pointer-events-none" />

      <header id="header" className="pt-8 pb-4 bg-white/40 backdrop-blur-md sticky top-0 z-[60] border-b border-brand-terracotta/10">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h1 className="text-4xl font-heading font-bold text-brand-brown tracking-tight flex items-center gap-4">
            <img src={LogoURL} alt="EnyCake Logo" className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow-xl" />
            <div className="flex flex-col">
              <span className="italic leading-none">EnyCake</span>
              <span className="text-sm font-sans font-medium tracking-widest uppercase opacity-40 mt-1">Bolos Caseiros</span>
            </div>
          </h1>
          
          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              <Link to="/eny" className="hidden sm:flex items-center gap-2 bg-white text-brand-brown hover:bg-brand-brown hover:text-white px-5 py-2.5 rounded-2xl transition-all duration-300 text-sm font-bold shadow-md border border-brand-terracotta/10 group">
                <img src="https://i.imgur.com/y49f561.png" alt="Eny" className="w-6 h-6 rounded-full object-cover border border-brand-terracotta/20 group-hover:border-white" />
                Eny
              </Link>
              <a href="https://www.instagram.com/eny_silva81/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-brand-terracotta border border-brand-terracotta/10">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/enicleideribeiro.santossilva" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-brand-terracotta border border-brand-terracotta/10">
                <Facebook className="w-6 h-6" />
              </a>
              <Link to="/eny" className="sm:hidden p-3 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-brand-terracotta border border-brand-terracotta/10">
                <img src="https://i.imgur.com/y49f561.png" alt="Eny" className="w-6 h-6 rounded-full object-cover" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section Container */}
      <section className="container mx-auto px-4 pt-0 md:pt-2 pb-12 md:pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Carousel 
            onCakeChange={setCurrentCake} 
            onAddToCart={addToCart}
          />
        </div>
      </section>

      <CakeGrid onAddToCart={addToCart} />
      <Features />
      <Testimonials />

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />

      <footer className="bg-[#2d241d] text-stone-300 py-20 mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-terracotta/30 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Column 1: Brand */}
            <div className="space-y-10">
              <div className="flex items-center gap-6 text-white">
                <img src={LogoURL} alt="EnyCake Logo" className="w-20 h-20 rounded-full object-cover border-4 border-brand-terracotta/40 shadow-2xl" />
                <h2 className="text-5xl font-heading font-bold italic tracking-tight">EnyCake</h2>
              </div>
              <p className="text-2xl font-heading leading-relaxed opacity-80 max-w-lg italic">
                "Resgatando o sabor da infância em cada mordida. Nossos bolos são feitos com ingredientes selecionados e muito carinho para trazer alegria para a sua mesa."
              </p>
              <div className="flex gap-4">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-16 h-16 bg-brand-terracotta/10 rounded-2xl flex items-center justify-center border border-brand-terracotta/20 cursor-pointer"
                >
                  <Heart className="w-8 h-8 text-brand-terracotta" fill="currentColor" />
                </motion.div>
              </div>
            </div>

            {/* Column 2: About Eny (Agradecimento) moved here */}
            <AboutEny />
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 text-center text-sm opacity-40 font-heading italic">
            &copy; {new Date().getFullYear()} Major. Criado com carinho &hearts; Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating Cart Button */}
      <motion.button
        onClick={() => setIsCartOpen(true)}
        initial={{ scale: 0, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-24 h-24 bg-brand-terracotta text-white rounded-full shadow-[0_20px_50px_rgba(189,115,86,0.3)] flex items-center justify-center z-50 border-8 border-white overflow-visible group"
        aria-label="Ver Pedido"
      >
        <ShoppingBasket className="w-10 h-10 group-hover:scale-110 transition-transform" />
        {totalItems > 0 && (
          <motion.span 
            initial={{ scale: 0 }} 
            animate={{ scale: 1.2 }}
            className="absolute -top-1 -right-1 bg-brand-yellow text-brand-brown text-sm font-black w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-xl"
          >
            {totalItems}
          </motion.span>
        )}
      </motion.button>
    </div>
  );
}

