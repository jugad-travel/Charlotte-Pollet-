import Coordonnees from '@/components/contact/Coordonnees';
import BlocPratique from '@/components/contact/BlocPratique';
import LeCabinet from '@/components/contact/LeCabinet';
import Formulaire from '@/components/contact/Formulaire';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Coordonnees />
      <BlocPratique />
      <LeCabinet />
      <Formulaire />
    </div>
  );
}

