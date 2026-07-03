import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import { Hero } from "@/components/home/Hero";
import { CategorySection } from "@/components/home/CategorySection";
import { FeaturedProducts, PromotionalBanner } from "@/components/home";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />
        <CategorySection />
        <FeaturedProducts />
        <PromotionalBanner />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}