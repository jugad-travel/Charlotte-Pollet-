import Link from 'next/link';

export default function Modalites() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif text-primary mb-6">
          Modalités
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Aix-en-Provence • Marseille (jeudi après-midi) • Visio
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-10 py-4 rounded-full text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover-lift"
        >
          Prendre rendez-vous
        </Link>
      </div>
    </section>
  );
}

