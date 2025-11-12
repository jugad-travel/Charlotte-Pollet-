import Coordonnees from '@/components/contact/Coordonnees';
import BlocPratique from '@/components/contact/BlocPratique';
import Formulaire from '@/components/contact/Formulaire';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Coordonnees />
      <BlocPratique />
      <Formulaire />
    </div>
  );
}

