
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function EnyPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans text-stone-900 p-8">
      <div className="container mx-auto max-w-2xl">
        <Link to="/" className="inline-flex items-center text-amber-900 hover:text-amber-700 mb-8 transition-colors">
          <ArrowLeft className="w-12 h-12" />
        </Link>
        <img src="https://i.imgur.com/y49f561.png" alt="Eny" className="w-full h-auto rounded-3xl shadow-lg mb-8" />
        <h1 className="text-4xl font-bold font-heading text-amber-900 mb-6">Sobre a Eny 🍰</h1>
        <p className="text-lg leading-relaxed mb-4">
          Olá! Eu sou a Eny, a mente e o coração por trás de cada bolo da EnyCake.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Minha jornada começou com uma paixão pelas receitas de família e o desejo de transformar momentos simples em lembranças doces e inesquecíveis. Cada bolo é preparado com dedicação e carinho, escolhendo ingredientes de qualidade para garantir aquele sabor caseiro que aquece o coração.
        </p>
        <p className="text-lg leading-relaxed">
          Obrigada por fazer parte dessa história e por permitir que a EnyCake esteja presente nos seus momentos especiais!
        </p>
      </div>
    </div>
  );
}
