'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Image de fond avec portrait de Christine */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Photo christine.png"
          alt="Christine Solignac"
          fill
          className="object-cover opacity-30"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white"></div>
      </div>
      
      {/* Contenu */}
      <div className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary mb-6 leading-tight">
          Conseil conjugal et familial
          <br />
          <span className="text-4xl md:text-5xl lg:text-6xl">& Thérapie de couple</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          Retrouver un dialogue apaisé, clarifier vos choix, restaurer la confiance — seul(e), en couple ou en famille.
        </p>

        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Dans un cadre confidentiel et sécurisant, je vous aide à mettre des mots sur ce que vous vivez, à comprendre vos fonctionnements relationnels et à poser des choix libres pour avancer.
        </p>

        <Link 
          href="/contact"
          className="inline-block bg-primary text-white px-10 py-4 rounded-full text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover-lift"
        >
          Prendre rendez-vous
        </Link>
      </div>
    </section>
  );
}

