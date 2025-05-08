
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import LandingHero from "@/components/landing/LandingHero";
import LandingFeatures from "@/components/landing/LandingFeatures";
import LandingTestimonials from "@/components/landing/LandingTestimonials";
import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingFooter from "@/components/landing/LandingFooter";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Balingkang - Pusat Kursus Bahasa Mandarin";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <main className="flex-grow">
        <LandingHero />
        <LandingFeatures />
        <LandingTestimonials />
        <section className="bg-primary/5 py-20 text-center">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mulai Perjalanan Bahasa Mandarin Anda Sekarang</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Apakah Anda seorang pelajar, mahasiswa, atau profesional, kami memiliki program yang sesuai untuk Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-6 text-lg">
                <Link to="/register">Daftar Sekarang</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg">
                <Link to="/courses">Lihat Kursus</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
};

export default Index;
