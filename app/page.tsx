import Hero from '@/components/home/Hero';
import QuEstCeQueImago from '@/components/home/QuEstCeQueImago';
import PourquoiFaireTherapie from '@/components/home/PourquoiFaireTherapie';
import AQuiSAdresse from '@/components/home/AQuiSAdresse';
import Temoignages from '@/components/home/Temoignages';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuEstCeQueImago />
      <PourquoiFaireTherapie />
      <AQuiSAdresse />
      <Temoignages />
      <CTASection />
    </div>
  );
}
