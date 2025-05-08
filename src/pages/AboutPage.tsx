
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingFooter from "@/components/landing/LandingFooter";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Tentang Kami | Balingkang - Pusat Kursus Bahasa Mandarin";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <main className="flex-grow py-16">
        <div className="container px-4 mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Tentang Balingkang</h1>
          
          <div className="max-w-3xl mx-auto prose prose-slate lg:prose-lg">
            <p className="lead">
              Balingkang adalah pusat kursus bahasa Mandarin terkemuka yang berdedikasi untuk menyediakan 
              pendidikan bahasa Mandarin berkualitas tinggi bagi semua kalangan.
            </p>
            
            <h2>Visi Kami</h2>
            <p>
              Menjadi pusat pembelajaran bahasa Mandarin terdepan yang membekali siswa dengan 
              keterampilan bahasa dan pemahaman budaya Tionghoa yang komprehensif untuk sukses di era global.
            </p>
            
            <h2>Misi Kami</h2>
            <ul>
              <li>Menyediakan pendidikan bahasa Mandarin berkualitas dengan metode pembelajaran yang efektif dan inovatif</li>
              <li>Memperkenalkan kekayaan budaya Tionghoa melalui program pendidikan yang terintegrasi</li>
              <li>Menciptakan lingkungan belajar yang inklusif dan mendukung untuk semua tingkatan usia dan kemampuan</li>
              <li>Membangun jembatan pemahaman antar budaya melalui bahasa</li>
            </ul>
            
            <h2>Program Kami</h2>
            <p>
              Balingkang menawarkan berbagai program kursus Mandarin untuk berbagai tingkatan dan kebutuhan:
            </p>
            <ul>
              <li><strong>YCT (Youth Chinese Test)</strong> - Program untuk anak-anak usia 7-12 tahun</li>
              <li><strong>HSK (Hanyu Shuiping Kaoshi)</strong> - Program standar internasional untuk remaja dan dewasa</li>
              <li><strong>Kelas VIP</strong> - Program pembelajaran one-on-one yang disesuaikan dengan kebutuhan individu</li>
            </ul>
            
            <div className="mt-8 text-center">
              <Button asChild size="lg" className="px-8 py-6 text-lg">
                <Link to="/register">Bergabunglah Bersama Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
};

export default AboutPage;
