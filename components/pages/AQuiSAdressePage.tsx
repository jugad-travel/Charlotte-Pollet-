'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AQuiSAdressePage() {
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
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pt-12 md:pt-24">
        <h1 className="text-4xl md:text-5xl font-serif text-primary text-center">
          À qui s'adresse la thérapie ?
        </h1>
      </div>

      <div className="space-y-0">
        {/* Thérapie de couple avec image */}
        <div ref={coupleRef} className="relative reveal w-full">
          <div className="relative h-[500px] sm:h-[550px] md:h-[700px] w-full overflow-hidden">
            <Image
              src="/images/timo-stern-EvcUtLF12XQ-unsplash.jpg"
              alt="Thérapie de couple"
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* Dégradé */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent"></div>
            
            {/* Contenu superposé */}
            <div className="absolute inset-0 flex items-center justify-start px-4 sm:pl-8 md:pl-16 lg:pl-24 xl:pl-32 z-10">
              <div className="max-w-2xl text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary mb-4 md:mb-6">
                  La thérapie de couple
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed">
                  La thérapie de couple IMAGO s'adresse à vous quel que soit votre âge :
                </p>
                <ul className="space-y-3 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-lg">•</span>
                    <span>Aux couples qui traversent une zone de turbulences liée à un événement : l'attente d'un enfant, une relation tendue parent-enfant, la maladie, une difficulté professionnelle, un déménagement, un deuil, une crise existentielle (crise de la « quarantaine » « cinquantaine »), une relation extra-conjugale, la retraite…</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-lg">•</span>
                    <span>Aux couples qui souffrent de difficultés dans leur communication et dans leur vie affective et sexuelle.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-lg">•</span>
                    <span>Aux couples qui se sont essoufflés et qui veulent donner un coup de « boost » à leur relation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-lg">•</span>
                    <span>Aux couples qui veulent s'offrir un moment privilégié à deux pour approfondir leur relation et mieux se comprendre.</span>
                  </li>
                </ul>
                <p className="text-sm sm:text-base text-gray-600 italic">
                  Enfin, il est possible de travailler sur votre relation de couple en individuel si votre partenaire n'est pas prêt à faire la démarche.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thérapie individuelle avec image */}
        <div ref={individuelRef} className="relative reveal w-full">
          <div className="relative h-[500px] sm:h-[550px] md:h-[700px] w-full overflow-hidden">
            <Image
              src="/images/luemen-rutkowski-ZWbBxZ6zTwM-unsplash.jpg"
              alt="Thérapie individuelle"
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* Dégradé */}
            <div className="absolute inset-0 bg-gradient-to-l from-white via-white/85 to-transparent"></div>
            
            {/* Contenu superposé */}
            <div className="absolute inset-0 flex items-center justify-end px-4 sm:pr-8 md:pr-16 lg:pr-24 xl:pr-32 z-10">
              <div className="max-w-2xl text-right">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary mb-4 md:mb-6">
                  La thérapie individuelle
                </h2>
                <div className="space-y-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  <p>
                    Vous avez envie d'apprendre à mieux vous connaitre, envie de gagner en liberté d'être, envie d'être soutenu pour traverser une difficulté passagère ou récurrente (mal-être, difficulté relationnelle, solitude, perte de confiance en soi, crise de la quarantaine, deuil, retraite…) : se faire accompagner est parfois une étape nécessaire pour prendre du recul et prendre soin de soi.
                  </p>
                  <p>
                    Une écoute attentive et bienveillante peut vous aider à accueillir ce que vous vivez, à clarifier les choses et vous permettre de mobiliser et de faire fructifier vos ressources pour ouvrir de nouveaux possibles, de nouveaux chemins.
                  </p>
                  <p className="font-medium text-primary">
                    Non pas pour occulter ce qui vous fait souffrir mais pour nourrir cet élan vital nécessaire pour <span className="font-bold">rebondir</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

