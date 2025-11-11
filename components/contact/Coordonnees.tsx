export default function Coordonnees() {
  const lieux = [
    {
      ville: 'Aix-en-Provence',
      adresse: '2 rue Pascal Fieschi',
      complement: 'Résidence l\'Empyrée Bât. B, 1er étage'
    },
    {
      ville: 'Marseille 6e (jeudi après-midi)',
      adresse: 'Maison des Familles St François d\'Assise',
      complement: '116 boulevard Vauban'
    },
    {
      ville: 'Visio',
      adresse: 'Sur demande',
      complement: null
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-primary text-center mb-16">
          Contact & rendez-vous
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {lieux.map((lieu, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm hover-lift"
            >
              <h3 className="text-2xl font-serif text-primary mb-4">
                {lieu.ville}
              </h3>
              <p className="text-gray-700 mb-2 leading-relaxed">
                {lieu.adresse}
              </p>
              {lieu.complement && (
                <p className="text-gray-600 leading-relaxed">
                  {lieu.complement}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

