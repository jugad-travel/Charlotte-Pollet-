'use client';

import { useEffect, useRef } from 'react';

export default function EncadreEthique() {
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

  const valeurs = [
    'Confidentialité',
    'Neutralité',
    'Non-jugement',
    'Supervision et formation continue'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="reveal bg-primary/5 border-l-4 border-primary p-8 rounded-lg"
        >
          <h2 className="text-3xl font-serif text-primary mb-6">
            Cadre éthique
          </h2>
          <ul className="space-y-4">
            {valeurs.map((valeur, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-gray-700 text-lg">{valeur}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

