export default function Formations() {
  const formations = [
    {
      titre: 'Conseil Conjugal et Familial',
      organisme: 'UCLy, Institut Société & Famille',
      detail: 'Diplôme reconnu par le ministère des Affaires sociales'
    },
    {
      titre: 'Thérapie de couple systémique',
      organisme: 'Ceccof (Bernard Prieur, Paris)',
      detail: null
    },
    {
      titre: 'Sexothérapie (niveaux 1 & 2)',
      organisme: 'Alain Héryl, Avignon',
      detail: null
    },
    {
      titre: 'Éducation à la vie affective, relationnelle et sexuelle',
      organisme: 'Cler Amour & Famille, Paris',
      detail: null
    },
    {
      titre: 'Écoute active',
      organisme: 'Formation dédiée',
      detail: null
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-12">
          Formations
        </h2>
        <div className="space-y-8">
          {formations.map((formation, index) => (
            <div key={index} className="border-l-4 border-primary pl-6 py-2">
              <h3 className="text-xl font-serif text-primary mb-2">
                {formation.titre}
              </h3>
              <p className="text-gray-700 mb-1">
                {formation.organisme}
              </p>
              {formation.detail && (
                <p className="text-gray-600 text-sm">
                  {formation.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

