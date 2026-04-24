/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { ChefHat, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel } from './components/Carousel';
import { WhatsAppNumber, MenuCakes } from './constants';

export default function App() {
  const [currentCake, setCurrentCake] = useState(MenuCakes[0]);

  return (
    <div className="min-h-screen bg-amber-50 font-sans text-stone-900">
      <header id="header" className="py-6 bg-white/70 backdrop-blur-md sticky top-0 z-10 border-b border-stone-200">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-amber-900 tracking-tight flex items-center gap-2 sm:gap-3">
            <ChefHat className="w-7 h-7 sm:w-8 sm:h-8 text-amber-700" />
            EnyCake
          </h1>
          
          <div className="flex items-center gap-6">
            <Link to="/eny" className="hidden sm:flex items-center gap-2 border border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-4 py-1.5 rounded-full transition-all duration-300 text-sm font-medium">
              <img src="https://i.imgur.com/y49f561.png" alt="Eny" className="w-5 h-5 rounded-full object-cover" />
              Eny
            </Link>
            <div className="flex items-center gap-4 text-amber-900">
                <a href="https://www.instagram.com/eny_silva81/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition-colors">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/enicleideribeiro.santossilva" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                </a>
            </div>
            <Link to="/eny" className="sm:hidden flex items-center gap-2 border border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-4 py-1.5 rounded-full transition-all duration-300 text-sm font-medium">
              <img src="https://i.imgur.com/y49f561.png" alt="Eny" className="w-5 h-5 rounded-full object-cover" />
              Eny
            </Link>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 my-8 md:my-12">
        <Carousel onCakeChange={setCurrentCake} />
      </section>
    </div>
  );
}

