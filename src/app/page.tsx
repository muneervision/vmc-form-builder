import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Stats } from "@/components/landing/Stats";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
