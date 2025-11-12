'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function QuEstCeQueImago() {
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
    <section className="py-0 bg-white">
      <div ref={sectionRef} className="relative reveal w-full">
        <div className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
          <Image
            src="/images/jochen-van-wylick-ex0pl-zo7NM-unsplash.jpg"
            alt="Thérapie de couple Imago"
            fill
            className="object-cover"
            priority
          />
          {/* Dégradé - photo à droite, texte à gauche */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
          
          {/* Contenu superposé à gauche */}
          <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 md:pl-12 lg:pl-16 xl:pl-24 z-10">
            <div className="max-w-xl sm:max-w-2xl text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-4 sm:mb-6 md:mb-8">
                Qu'est-ce que la thérapie de couple Imago ?
              </h2>
              
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                <p>
                  La thérapie relationnelle Imago est une méthode puissante et résolument constructive pour dissoudre les conflits et remettre du lien et du positif dans la relation.
                </p>
                
                <p>
                  Le conflit y est considéré comme une très belle opportunité de croissance qui permet une meilleure connaissance de soi et de son partenaire.
                </p>
                
                <p>
                  Vous apprendrez à communiquer autrement pour vous faire le cadeau d'une écoute authentique et d'une parole en vérité qui viendra nourrir et faire grandir votre relation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Suite du contenu en dessous */}
      <div className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Le processus du dialogue Imago vous aidera progressivement à lever le voile sur beaucoup d'incompréhensions et de souffrance, en prenant conscience de l'impact de votre histoire personnelle et de vos blessures sur vos comportements d'adulte et sur votre relation amoureuse.
            </p>
            
            <p>
              Petit à petit, un climat de confiance va s'instaurer et vous serez en capacité de faire preuve d'empathie et de bienveillance l'un envers l'autre grâce à une meilleure compréhension de vos mondes respectifs et de ce qui se joue derrière ces conflits répétitifs.
            </p>
            
            <p className="font-semibold text-primary text-lg">
              Au fil de la thérapie, vous deviendrez tous les deux acteurs et créatifs d'une belle relation. Vous sortirez tous les deux gagnants de ce processus !
            </p>
            
            <p className="text-primary font-medium italic">
              Le « must » est d'expérimenter ce dialogue IMAGO de l'intérieur !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

