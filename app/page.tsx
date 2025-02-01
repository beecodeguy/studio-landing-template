import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import Gallery from "@/components/gallery";
import { HeroSection } from "@/components/hero-section";
import Navbar from "@/components/navbar";
import { ServiceSection } from "@/components/service-section";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Gallery />
      {/* <FeaturedPhotos /> */}
      <ServiceSection />
      <AboutSection />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
