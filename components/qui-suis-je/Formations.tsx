'use client';

import { useEffect, useRef } from 'react';

export default function Formations() {
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

  const formations = [
    {
      annee: '2012',
      titre: 'Certifiée éducatrice à la vie affective et sexuelle'
    },
    {
      annee: '2014',
      titre: 'Certifiée conseillère conjugale et familiale, formée par l\'association Couples & Familles.'
    },
    {
      annee: '2016',
      titre: 'Certifiée par l\'IRI « Imago Relationships International » thérapeute de couple Imago. Membre de l\'association Imago France.'
    },
    {
      annee: '2017',
      titre: 'Formation la thérapie de couple centrée sur la rencontre avec Hedi et Yumi Schleifer'
    },
    {
      annee: '2019',
      titre: 'Formation Imago avancée « Etre brillant avec les bases de l\'Imago » avec Kobus Van Der Merwe.'
    },
    {
      annee: '2020',
      titre: 'Formation : accompagner le choix et la séparation ; soutenir les couples dans un processus constructif avec Izya Barett'
    }
  ];

  const activites = [
    'Animatrice de table aux conférences Essenti\'elles',
    'Animatrice d\'ateliers pour parents d\'ados et d\'ateliers sur la gratitude',
    'Membre de l\'association Imago France'
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="reveal">
          <h2 className="text-4xl md:text-5xl font-serif text-primary text-center mb-12">
            Formations et expérience professionnelle
          </h2>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
            <div className="space-y-8">
              {formations.map((formation, index) => (
                <div key={index} className="flex items-start border-l-4 border-primary pl-6">
                  <div className="flex-shrink-0 w-20">
                    <span className="text-2xl font-serif text-primary font-bold">{formation.annee}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">{formation.titre}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-serif text-primary mb-6">
                Activités et engagements
              </h3>
              <ul className="space-y-3">
                {activites.map((activite, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>{activite}</span>
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
