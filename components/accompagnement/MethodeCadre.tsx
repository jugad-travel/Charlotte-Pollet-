export default function MethodeCadre() {
  const elements = [
    'Écoute active',
    'Approche systémique',
    'Cadre confidentiel et sécurisant',
    'Posture de neutralité',
    'Respect de l\'altérité'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-lg">
          <h2 className="text-3xl font-serif text-primary mb-6">
            Méthode & cadre
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {elements.map((element, index) => (
              <div key={index} className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span className="text-gray-700">{element}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

