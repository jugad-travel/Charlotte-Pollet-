'use client';

import { useEffect, useRef } from 'react';

export default function TemoignagesPage() {
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

  const temoignages = [
    {
      auteur: 'Laurence',
      texte: 'Charlotte Pollet nous a mis en confiance dès notre premier rendez-vous. Elle nous accompagne avec beaucoup de bienveillance et de douceur, sans jugements ni parti pris. Nous sommes mariés depuis bientôt 17 ans. Nous avons souhaité débuter la thérapie Imago pour améliorer la communication au sein de notre couple. Chaque séance est un cadeau que l\'on se fait mutuellement. C\'est un moment authentique où on se pose et où on est profondément à l\'écoute de l\'autre. On découvre alors les blessures enfouies de chacun, ce qui nous amène à comprendre nos sources de conflits récurrents. Notre amour se renforce au fil des séances et notre quotidien est plus léger.'
    },
    {
      auteur: 'Thomas',
      texte: 'Nous avons été voir Charlotte dans l\'objectif de reconstruire notre couple. Elle nous a beaucoup aidé. Nous avons appris à mieux communiquer et surtout à mieux nous comprendre l\'un l\'autre. Grâce à son accompagnement notre couple va beaucoup mieux et est de nouveau sur la bonne voie.'
    },
    {
      auteur: 'Virginie',
      texte: 'Nous avions décidé de consulter Charlotte Pollet dans le but de construire notre relation de couple, relation qui s\'avérait difficile malgré les sentiments d\'amour partagé. Nous avons été touchés par l\'accueil et l\'écoute de celle-ci, car quelle que soit la météo dans laquelle nous arrivions, il y avait toujours quelque chose de bon à faire éclore pour le couple. À l\'issue de chaque séance, chacun ressortait avec quelque chose de plus à comprendre, à mettre en œuvre, en ayant réussi à aller voir "derrière le voile de l\'autre" et ayant pu comprendre son fonctionnement. Tout cela a été possible grâce à l\'accompagnement de Charlotte et la méthode qu\'elle utilise, qui permet une communication sincère et profonde. Qu\'elle soit encore remerciée pour cette simplicité qu\'elle a su garder à chaque séance.'
    }
  ];

  return (
    <div className="min-h-screen py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-primary text-center mb-16">
          Témoignages
        </h1>

        <div ref={sectionRef} className="grid md:grid-cols-3 gap-8">
          {temoignages.map((temoignage, index) => (
            <div
              key={index}
              className="reveal bg-white p-8 rounded-2xl shadow-sm hover-lift"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-primary">
                  {temoignage.auteur}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "{temoignage.texte}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

