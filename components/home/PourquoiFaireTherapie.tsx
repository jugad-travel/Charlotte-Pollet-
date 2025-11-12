'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function PourquoiFaireTherapie() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const raisons = [
    'Créer un climat de confiance et de bienveillance propice à une rencontre authentique pour ouvrir les possibles et porter un nouveau regard sur votre relation et sur votre partenaire.',
    'Mettre l\'amour, l\'empathie et la bienveillance au cœur de votre relation.',
    'Retrouver de la complicité, de la légèreté et de la joie.',
    'Retrouver ou recréer une intimité émotionnelle dans votre vie affective et sexuelle.',
    'Et parfois envisager une séparation en conscience.'
  ];

  return (
    <section className="py-0 bg-gray-50">
      <div ref={sectionRef} className="relative reveal w-full">
        <div className="relative min-h-[600px] md:min-h-[800px] w-full overflow-hidden">
          <Image
            src="/images/casey-horner-JIdmuiF9luY-unsplash.jpg"
            alt="Pourquoi faire une thérapie de couple"
            fill
            className="object-cover"
            priority
          />
          {/* Dégradé - photo à droite, texte à gauche */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
          
          {/* Contenu superposé à gauche */}
          <div className="absolute inset-0 flex items-start justify-start px-4 sm:px-6 md:pl-12 lg:pl-16 xl:pl-24 z-10 pt-8 sm:pt-12 md:pt-16">
            <div className="max-w-xl sm:max-w-2xl text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-4 sm:mb-6 md:mb-8">
                Pourquoi faire une thérapie de couple ?
              </h2>
              
              <ul className="space-y-3 sm:space-y-4 text-left">
                {raisons.map((raison, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mt-0.5 sm:mt-1 flex-shrink-0 mr-2 sm:mr-3">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-left">
                      {raison}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

