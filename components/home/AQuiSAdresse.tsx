'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AQuiSAdresse() {
  const coupleRef = useRef<HTMLDivElement>(null);
  const individuelRef = useRef<HTMLDivElement>(null);

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

    if (coupleRef.current) {
      observer.observe(coupleRef.current);
    }
    if (individuelRef.current) {
      observer.observe(individuelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-primary text-center">
          À qui s'adresse la thérapie ?
        </h2>
      </div>

      <div className="space-y-0">
        {/* Thérapie de couple avec image */}
        <div ref={coupleRef} className="relative reveal w-full">
          <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
            <Image
              src="/images/klara-kulikova-tS_p3fpe8iQ-unsplash.jpg"
              alt="Thérapie de couple"
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* Dégradé */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent"></div>
            
            {/* Contenu superposé */}
            <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 md:pl-12 lg:pl-16 xl:pl-24 z-10">
              <div className="max-w-md sm:max-w-lg text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-serif text-primary mb-2 sm:mb-3 md:mb-6">
                  La thérapie de couple
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                  La thérapie de couple IMAGO s'adresse à vous quel que soit votre âge : aux couples qui traversent une zone de turbulences, qui souffrent de difficultés dans leur communication, qui se sont essoufflés, ou qui veulent s'offrir un moment privilégié à deux.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thérapie individuelle avec image */}
        <div ref={individuelRef} className="relative reveal w-full">
          <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
            <Image
              src="/images/caleb-ekeroth-wSBQFWF77lI-unsplash.jpg"
              alt="Thérapie individuelle"
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* Dégradé */}
            <div className="absolute inset-0 bg-gradient-to-l from-white via-white/85 to-transparent"></div>
            
            {/* Contenu superposé */}
            <div className="absolute inset-0 flex items-center justify-end px-4 sm:px-6 md:pr-12 lg:pr-16 xl:pr-24 z-10">
              <div className="max-w-md sm:max-w-lg text-right">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-serif text-primary mb-2 sm:mb-3 md:mb-6">
                  La thérapie individuelle
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                  Vous avez envie d'apprendre à mieux vous connaitre, envie de gagner en liberté d'être, envie d'être soutenu pour traverser une difficulté passagère ou récurrente : se faire accompagner est parfois une étape nécessaire pour prendre du recul et prendre soin de soi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-12 bg-white">
        <Link
          href="/a-qui-sadresse"
          className="inline-block text-primary hover:opacity-80 transition font-medium text-lg"
        >
          En savoir plus →
        </Link>
      </div>
    </section>
  );
}

