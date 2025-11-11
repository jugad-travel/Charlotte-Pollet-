export default function CadreProfessionnel() {
  const elements = [
    {
      titre: 'Associée au Cabinet Mots Croisés',
      description: 'Réseau de conseillères conjugales et thérapeutes de couple/famille.'
    },
    {
      titre: 'Installée au Cabinet du Pont de l\'Arc',
      description: 'Aix-en-Provence'
    },
    {
      titre: 'Co-fondatrice de l\'association "Et si on en parlait"',
      description: 'Interventions EVRAS en établissements scolaires.'
    },
    {
      titre: 'Membre de l\'ANCCEF',
      description: 'Supervision et formation continue régulières.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-12">
          Cadre professionnel & engagements
        </h2>
        <div className="space-y-6">
          {elements.map((element, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif text-primary mb-2">
                {element.titre}
              </h3>
              <p className="text-gray-700">
                {element.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

