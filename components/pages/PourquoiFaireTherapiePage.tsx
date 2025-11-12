'use client';

import { useEffect, useRef } from 'react';

export default function PourquoiFaireTherapiePage() {
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
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="reveal">
          <h1 className="text-4xl md:text-5xl font-serif text-primary text-center mb-12">
            Pourquoi faire une thérapie de couple ?
          </h1>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
            <ul className="space-y-6">
              {raisons.map((raison, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mt-2 flex-shrink-0 mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {raison}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

