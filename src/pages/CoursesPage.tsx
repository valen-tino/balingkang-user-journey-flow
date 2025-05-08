
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Book, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingFooter from "@/components/landing/LandingFooter";
import { useEffect } from "react";

const CoursesPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Kursus Kami | Balingkang - Pusat Kursus Bahasa Mandarin";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <main className="flex-grow py-16 pt-24">
        <div className="container px-4 mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Program Kursus Bahasa Mandarin</h1>
          <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
            Kami menawarkan berbagai program kursus bahasa Mandarin untuk semua usia dan tingkat kemampuan.
          </p>
          
          <Tabs defaultValue="children" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="children">Program Anak (YCT)</TabsTrigger>
              <TabsTrigger value="adults">Program Remaja & Dewasa (HSK)</TabsTrigger>
            </TabsList>
            
            {/* Children's Programs */}
            <TabsContent value="children" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center">
                          <Book className="mr-2 h-5 w-5" />
                          YCT Level 1
                        </CardTitle>
                        <CardDescription className="mt-1.5">Untuk pemula usia 7-12 tahun</CardDescription>
                      </div>
                      <Badge className="bg-green-500 hover:bg-green-600">Gratis</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Kursus pengenalan dasar bahasa Mandarin untuk anak-anak. Fokus pada pelafalan, 
                      pengenalan karakter sederhana, dan percakapan dasar.
                    </p>
                    <div className="space-y-1 text-sm">
                      <p><span className="font-medium">Durasi:</span> 10 pertemuan</p>
                      <p><span className="font-medium">Jadwal:</span> 2x seminggu, 1.5 jam per sesi</p>
                      <p><span className="font-medium">Level:</span> Pemula</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to="/register">Daftar Sekarang</Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center">
                          <BookOpen className="mr-2 h-5 w-5" />
                          YCT Level 2
                        </CardTitle>
                        <CardDescription className="mt-1.5">Lanjutan untuk usia 7-12 tahun</CardDescription>
                      </div>
                      <Badge className="bg-green-500 hover:bg-green-600">Gratis</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Melanjutkan dari Level 1, siswa akan memperoleh kosakata yang lebih banyak dan
                      struktur kalimat yang lebih kompleks.
                    </p>
                    <div className="space-y-1 text-sm">
                      <p><span className="font-medium">Durasi:</span> 12 pertemuan</p>
                      <p><span className="font-medium">Jadwal:</span> 2x seminggu, 1.5 jam per sesi</p>
                      <p><span className="font-medium">Level:</span> Lanjutan Dasar</p>
                      <p><span className="font-medium">Prasyarat:</span> YCT Level 1</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to="/register">Daftar Sekarang</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="p-6 bg-primary/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Tentang Program YCT</h3>
                <p>
                  Youth Chinese Test (YCT) adalah tes standar internasional yang dirancang untuk anak-anak 
                  dan remaja yang belajar bahasa Mandarin sebagai bahasa asing. Program ini dirancang untuk 
                  mempersiapkan siswa mengikuti ujian YCT resmi yang diakui secara internasional.
                </p>
              </div>
            </TabsContent>
            
            {/* Adult Programs */}
            <TabsContent value="adults" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center">
                          <Book className="mr-2 h-5 w-5" />
                          HSK Level 1
                        </CardTitle>
                        <CardDescription className="mt-1.5">Untuk pemula usia 13+ tahun</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Kursus pengenalan bahasa Mandarin untuk remaja dan dewasa. Fokus pada kemampuan 
                      komunikasi dasar dan karakter sederhana.
                    </p>
                    <div className="space-y-1 text-sm">
                      <p><span className="font-medium">Durasi:</span> 10 pertemuan</p>
                      <p><span className="font-medium">Jadwal:</span> 1x seminggu, 3 jam per sesi</p>
                      <p><span className="font-medium">Level:</span> Pemula</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to="/register">Daftar Sekarang</Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Kelas VIP</CardTitle>
                    <CardDescription>Pembelajaran One-on-One yang dipersonalisasi</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Kelas privat yang disesuaikan dengan kebutuhan dan jadwal Anda. 
                      Cocok untuk pembelajaran intensif atau persiapan ujian.
                    </p>
                    <div className="space-y-1 text-sm">
                      <p><span className="font-medium">Format:</span> One-on-One dengan pengajar</p>
                      <p><span className="font-medium">Jadwal:</span> Fleksibel</p>
                      <p><span className="font-medium">Level:</span> Semua tingkatan</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to="/contact">Hubungi Kami</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="p-6 bg-primary/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Tentang Program HSK</h3>
                <p>
                  Hanyu Shuiping Kaoshi (HSK) adalah ujian kemahiran bahasa Mandarin standar yang diakui 
                  secara internasional. Program ini dirancang untuk mempersiapkan siswa mengikuti ujian HSK 
                  resmi yang diakui oleh universitas dan perusahaan di seluruh dunia.
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Siap untuk Mendaftar?</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Daftar sekarang atau hubungi kami untuk informasi lebih lanjut tentang program kursus bahasa Mandarin kami.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="px-8">
                <Link to="/register">Daftar Sekarang</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <Link to="/contact">Konsultasi Gratis</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
};

export default CoursesPage;
