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
      const items = sectionRef.current.querySelectorAll('.reveal');
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-lg reveal">
            <Image
              src="/images/Photo christine.png"
              alt="Christine Solignac"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="reveal">
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8">
              Qui suis-je
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-xl leading-relaxed">
                Au cœur de mon travail : la relation humaine dans sa capacité à aimer et à être aimée. Mon parcours m'a conduite de l'international à l'accompagnement thérapeutique, avec un même fil rouge : l'écoute et la compréhension des dynamiques relationnelles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

