export default function Coordonnees() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-primary text-center mb-16">
          Entrons en contact
        </h1>

        <div className="text-center mb-12">
          <div className="inline-block bg-gray-50 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-serif text-primary mb-4">
              Téléphone portable
            </h3>
            <a 
              href="tel:+33618547154"
              className="text-3xl font-bold text-primary hover:opacity-80 transition"
            >
              06 18 54 71 54
            </a>
            <p className="text-gray-600 mt-4">
              Ou par email via le formulaire ci-dessous
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

