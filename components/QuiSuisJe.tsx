import Image from 'next/image';

export default function QuiSuisJe() {
  return (
    <section id="qui-suis-je" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Qui suis-je
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/Photo christine.png"
              alt="Christine Solignac - Conseillère Conjugale et Familiale"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl leading-relaxed">
              <strong>Christine SOLIGNAC</strong>
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Conseil Conjugal et Familial</strong>
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Thérapie de Couple</strong>
            </p>

            <div className="mt-8 space-y-4">
              <p className="leading-relaxed">
                Professionnelle formée et certifiée en conseil conjugal et familial, je vous accompagne dans une démarche de bien-être relationnel et personnel.
              </p>
              <p className="leading-relaxed">
                Mon approche s'appuie sur l'écoute active, la bienveillance et des outils adaptés à chaque situation pour vous aider à retrouver l'harmonie dans vos relations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

