'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ParentsEnfant() {
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
      const items = sectionRef.current.querySelectorAll('.reveal');
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  const situations = [
    'Parler d\'affectivité/sexualité',
    'Poser un cadre face aux écrans/contenus',
    'Accompagner l\'enfant selon sa maturité psycho-affective'
  ];

  const benefices = [
    'Sécuriser la parole',
    'Clarifier la posture parentale',
    'Poser des limites justes'
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-primary text-center mb-16">
          Parents / enfant
        </h2>

        <div ref={sectionRef} className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg reveal">
            <Image
              src="/images/timo-stern-EvcUtLF12XQ-unsplash.jpg"
              alt="Communication parent-enfant"
              fill
              className="object-cover"
            />
          </div>
          <div className="reveal">
            <h3 className="text-2xl font-serif text-primary mb-6">
              Situations
            </h3>
            <ul className="space-y-3 mb-8">
              {situations.map((situation, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span className="text-gray-700">{situation}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-serif text-primary mb-6">
              Approche
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Soutien des parents, préparation des échanges, possibilité d'entretiens avec l'enfant.
            </p>

            <h3 className="text-2xl font-serif text-primary mb-6">
              Bénéfices
            </h3>
            <ul className="space-y-3 mb-8">
              {benefices.map((benefice, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span className="text-gray-700">{benefice}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover-lift"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

