'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function PortraitIntro() {
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

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="reveal text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8">
            Qui suis-je ?
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Charlotte Pollet, thérapeute de couple certifiée Imago, passionnée par l'accompagnement des couples vers une relation épanouie.
          </p>
        </div>
      </div>
    </section>
  );
}
