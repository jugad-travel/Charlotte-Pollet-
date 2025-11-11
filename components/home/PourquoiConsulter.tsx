'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function PourquoiConsulter() {
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

  const raisons = [
    'Se comprendre, se repositionner, reprendre confiance.',
    'Retrouver une communication constructive.',
    'Clarifier un choix ou un projet de couple (mariage, parentalité, organisation de vie).'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg reveal">
            <Image
              src="/images/casey-horner-JIdmuiF9luY-unsplash.jpg"
              alt="Pourquoi consulter"
              fill
              className="object-cover"
            />
          </div>
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">
              Pourquoi consulter ?
            </h2>
            <ul className="space-y-6">
              {raisons.map((raison, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-4 mt-2">
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
    </section>
  );
}

