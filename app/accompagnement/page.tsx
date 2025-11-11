import Intro from '@/components/accompagnement/Intro';
import ConsulterSeul from '@/components/accompagnement/ConsulterSeul';
import VenirEnCouple from '@/components/accompagnement/VenirEnCouple';
import ParentsEnfant from '@/components/accompagnement/ParentsEnfant';
import MethodeCadre from '@/components/accompagnement/MethodeCadre';
import Modalites from '@/components/accompagnement/Modalites';

export default function AccompagnementPage() {
  return (
    <div className="min-h-screen pt-20">
      <Intro />
      <ConsulterSeul />
      <VenirEnCouple />
      <ParentsEnfant />
      <MethodeCadre />
      <Modalites />
    </div>
  );
}

