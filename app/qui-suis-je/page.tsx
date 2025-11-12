import PortraitIntro from '@/components/qui-suis-je/PortraitIntro';
import Parcours from '@/components/qui-suis-je/Parcours';
import Formations from '@/components/qui-suis-je/Formations';
import CadreProfessionnel from '@/components/qui-suis-je/CadreProfessionnel';
import CTASection from '@/components/home/CTASection';

export default function QuiSuisJePage() {
  return (
    <div className="min-h-screen">
      <PortraitIntro />
      <Parcours />
      <Formations />
      <CadreProfessionnel />
      <CTASection />
    </div>
  );
}

