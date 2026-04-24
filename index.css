import { motion } from 'motion/react';
import { WhatsAppNumber } from '../constants';

interface CakeCardProps {
  name: string;
  desc: string;
  msg: string;
  icon: string;
  id: string;
}

export function CakeCard({ name, desc, msg, icon, id }: CakeCardProps) {
  const waLink = `https://wa.me/${WhatsAppNumber}?text=${encodeURIComponent(msg)}`;

  return (
    <motion.a
      id={`cake-card-${id}`}
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      className="group block bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-100 p-2"
    >
      <div className="h-80 w-full bg-amber-100 flex items-center justify-center text-9xl rounded-2xl">
         {icon}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{desc}</p>
        <span className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition-colors">
           Encomendar agora
        </span>
      </div>
    </motion.a>
  );
}
