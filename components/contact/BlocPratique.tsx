export default function BlocPratique() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-serif text-primary mb-8 text-center">
            Durée et tarifs
          </h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start justify-between border-b border-gray-200 pb-4">
              <div>
                <h3 className="text-xl font-serif text-primary mb-2">
                  Séance individuelle
                </h3>
                <p className="text-gray-600">Durée : 1h15</p>
              </div>
              <div className="text-2xl font-bold text-primary">
                75€
              </div>
            </div>
            
            <div className="flex items-start justify-between border-b border-gray-200 pb-4">
              <div>
                <h3 className="text-xl font-serif text-primary mb-2">
                  Séance de couple
                </h3>
                <p className="text-gray-600">Durée : 2h</p>
              </div>
              <div className="text-2xl font-bold text-primary">
                130€
              </div>
            </div>
          </div>

          <div className="space-y-4 text-gray-700">
            <p>
              Les consultations peuvent aussi se faire en <strong>visio-conférence</strong>.
            </p>
            <p>
              Renseignez-vous auprès de votre mutuelle de santé, certaines proposent une <strong>prise en charge partielle</strong> des thérapies.
            </p>
            <p className="text-sm text-gray-600 italic">
              Les séances non annulées 48h à l'avance sont dues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

