
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandingHero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Belajar Bahasa Mandarin dengan Mudah dan Menyenangkan
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Program kursus bahasa Mandarin berkualitas dengan metode pembelajaran modern dan sertifikasi internasional.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/register">Daftar Sekarang</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/courses">Lihat Kursus</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-600">
              <span className="mr-2">✓</span> Program YCT untuk anak usia 7-12 tahun
              <span className="mx-2">•</span>
              <span className="mr-2">✓</span> Program HSK untuk usia 13+ tahun
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Students learning Chinese" 
              className="rounded-xl shadow-xl w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
