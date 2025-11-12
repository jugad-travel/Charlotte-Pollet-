import PortraitIntro from '@/components/qui-suis-je/PortraitIntro';
import Parcours from '@/components/qui-suis-je/Parcours';
import Formations from '@/components/qui-suis-je/Formations';
import CTASection from '@/components/home/CTASection';

export default function QuiSuisJePage() {
  return (
    <div className="min-h-screen">
      <PortraitIntro />
      <Parcours />
      <Formations />
      <CTASection />
    </div>
  );
}

