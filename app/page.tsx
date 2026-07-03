import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import { Hero } from "@/components/home/Hero";
import { CategorySection } from "@/components/home/CategorySection";
import { FeaturedProducts } from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />
        <CategorySection />
        <FeaturedProducts />
      </main>

      <Footer />
    </>
  );
}