import { Hero } from "@/components/home/Hero";
import { CategorySection } from "@/components/home/CategorySection";
import {
  FeaturedProducts,
  PromotionalBanner,
} from "@/components/home";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />  
      <PromotionalBanner />
      <Testimonials />
    </>
  );
}