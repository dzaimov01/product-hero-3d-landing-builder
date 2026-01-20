import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/Sections/SocialProof';
import { Features } from '@/components/Sections/Features';
import { HowItWorks } from '@/components/Sections/HowItWorks';
import { TechnicalCredibility } from '@/components/Sections/TechnicalCredibility';
import { PricingTeaser } from '@/components/Sections/PricingTeaser';
import { FAQ } from '@/components/Sections/FAQ';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Sections/Footer';

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6">
        <Navbar />
        <main>
          <Hero />
          <SocialProof />
          <Features />
          <HowItWorks />
          <TechnicalCredibility />
          <PricingTeaser />
          <CTA />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}
