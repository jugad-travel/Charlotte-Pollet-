'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Parcours() {
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
            src="/images/kevin-delvecchio-7noZJ_4nhU8-unsplash.jpg"
            alt="Mon parcours"
            fill
            className="object-cover"
          />
          {/* Dégradé - photo à droite, texte à gauche */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
          
          {/* Contenu superposé à gauche */}
          <div className="absolute inset-0 flex items-center justify-start px-4 sm:pl-8 md:pl-16 lg:pl-24 xl:pl-32 z-10">
            <div className="max-w-2xl text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-6 md:mb-8">
                Mon parcours
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                <p className="text-base sm:text-lg md:text-xl font-medium text-primary italic">
                  "Je me suis réveillée un jour en me disant : « Qu'est-ce que j'ai fait de mes rêves ? »."
                </p>
                
                <p>
                  Quelque chose qui sommeillait en moi depuis bien longtemps. Après un bilan de compétence, j'ai repris mes études pour devenir thérapeute.
                </p>
                
                <p>
                  L'aventure a commencé avec une formation à l'éducation affective et sexuelle pour intervenir dans les collèges et les lycées puis une formation de conseillère conjugale et familiale.
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
              Après ma certification, j'ai eu très envie d'approfondir et d'aller encore plus loin. J'ai lu un livre sur la thérapie relationnelle IMAGO et cela a été une révélation : enfin un outil résolument positif qui prend soin de la relation. J'ai bien évidemment d'abord expérimenté de l'intérieur en pratiquant lors d'un stage de couple IMAGO avec Loïc, mon mari.
            </p>
            
            <p>
              Ce stage a été un vrai cadeau et nous a permis d'approfondir notre relation : j'ai énormément appris sur mon conjoint et sur moi-même. Cela n'a fait que conforter mon choix de me former. J'ai toujours beaucoup de gratitude pour cette formation qui m'a énormément apportée. J'y ai expérimenté des outils relationnels puissants, beaucoup d'empathie et de bienveillance qui m'ont fait grandir dans ma vie personnelle et dans ma pratique professionnelle.
            </p>
            
            <p className="font-semibold text-primary">
              J'ai très à cœur de continuer le chemin en transmettant à mon tour tout ce que j'ai appris et tout le bon que j'ai reçu, en espérant que vous transmettiez à votre tour vos apprentissages et vos avancées.
            </p>
            
            <p className="font-medium text-gray-800">
              Je suis convaincue que nous sommes tous les maillons d'une chaîne pour œuvrer pour un mieux-être collectif.
            </p>
            
            <p className="text-lg font-medium text-primary">
              J'aime profondément l'être humain et j'ai cette intime conviction que chaque personne a en elle des ressources insoupçonnées pour se relever et rebondir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
