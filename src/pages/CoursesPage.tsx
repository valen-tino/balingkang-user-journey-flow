
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Book, BookOpen, GraduationCap } from "lucide-react";
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
      <main className="flex-grow py-16 pt-28">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Program Kursus Bahasa Mandarin</h1>
            <p className="text-lg mb-6 text-gray-700">
              Kami menawarkan berbagai program kursus bahasa Mandarin untuk semua usia dan tingkat kemampuan.
            </p>
            <div className="h-1 w-20 bg-confucius-green mx-auto rounded-full"></div>
          </div>
          
          <Tabs defaultValue="children" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger 
                value="children"
                className="rounded-md data-[state=active]:bg-white data-[state=active]:text-confucius-green data-[state=active]:shadow-sm"
              >
                <GraduationCap className="mr-2 h-4 w-4" />
                Program Anak (YCT)
              </TabsTrigger>
              <TabsTrigger 
                value="adults"
                className="rounded-md data-[state=active]:bg-white data-[state=active]:text-confucius-green data-[state=active]:shadow-sm"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Program Remaja & Dewasa (HSK)
              </TabsTrigger>
            </TabsList>
            
            {/* Children's Programs */}
            <TabsContent value="children" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-t-4 border-t-confucius-green overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="bg-confucius-lightGreen bg-opacity-30">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center text-confucius-blue">
                          <Book className="mr-2 h-5 w-5 text-confucius-green" />
                          YCT Level 1
                        </CardTitle>
                        <CardDescription className="mt-1.5">Untuk pemula usia 7-12 tahun</CardDescription>
                      </div>
                      <Badge className="bg-confucius-green hover:bg-confucius-green/90">Gratis</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="mb-4 text-gray-700">
                      Kursus pengenalan dasar bahasa Mandarin untuk anak-anak. Fokus pada pelafalan, 
                      pengenalan karakter sederhana, dan percakapan dasar.
                    </p>
                    <div className="space-y-1.5 text-sm bg-gray-50 p-3 rounded-lg">
                      <p className="flex items-center"><span className="font-medium w-20">Durasi:</span> 10 pertemuan</p>
                      <p className="flex items-center"><span className="font-medium w-20">Jadwal:</span> 2x seminggu, 1.5 jam per sesi</p>
                      <p className="flex items-center"><span className="font-medium w-20">Level:</span> Pemula</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button asChild className="w-full bg-confucius-green hover:bg-confucius-green/90">
                      <Link to="/register">Daftar Sekarang</Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="border-t-4 border-t-confucius-blue overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="bg-confucius-lightBlue bg-opacity-30">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center text-confucius-blue">
                          <BookOpen className="mr-2 h-5 w-5 text-confucius-blue" />
                          YCT Level 2
                        </CardTitle>
                        <CardDescription className="mt-1.5">Lanjutan untuk usia 7-12 tahun</CardDescription>
                      </div>
                      <Badge className="bg-confucius-blue hover:bg-confucius-blue/90">Gratis</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="mb-4 text-gray-700">
                      Melanjutkan dari Level 1, siswa akan memperoleh kosakata yang lebih banyak dan
                      struktur kalimat yang lebih kompleks.
                    </p>
                    <div className="space-y-1.5 text-sm bg-gray-50 p-3 rounded-lg">
                      <p className="flex items-center"><span className="font-medium w-20">Durasi:</span> 12 pertemuan</p>
                      <p className="flex items-center"><span className="font-medium w-20">Jadwal:</span> 2x seminggu, 1.5 jam per sesi</p>
                      <p className="flex items-center"><span className="font-medium w-20">Level:</span> Lanjutan Dasar</p>
                      <p className="flex items-center"><span className="font-medium w-20">Prasyarat:</span> YCT Level 1</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button asChild className="w-full bg-confucius-blue hover:bg-confucius-blue/90">
                      <Link to="/register">Daftar Sekarang</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-confucius-lightGreen to-white rounded-lg border border-confucius-green/20">
                <div className="flex items-center mb-3">
                  <GraduationCap className="h-6 w-6 text-confucius-green mr-2" />
                  <h3 className="text-xl font-semibold text-confucius-blue">Tentang Program YCT</h3>
                </div>
                <p className="text-gray-700">
                  Youth Chinese Test (YCT) adalah tes standar internasional yang dirancang untuk anak-anak 
                  dan remaja yang belajar bahasa Mandarin sebagai bahasa asing. Program ini dirancang untuk 
                  mempersiapkan siswa mengikuti ujian YCT resmi yang diakui secara internasional.
                </p>
              </div>
            </TabsContent>
            
            {/* Adult Programs */}
            <TabsContent value="adults" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-t-4 border-t-confucius-gold overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="bg-confucius-lightGold bg-opacity-30">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center text-confucius-blue">
                          <Book className="mr-2 h-5 w-5 text-confucius-gold" />
                          HSK Level 1
                        </CardTitle>
                        <CardDescription className="mt-1.5">Untuk pemula usia 13+ tahun</CardDescription>
                      </div>
                      <Badge className="bg-confucius-gold hover:bg-confucius-gold/90">Populer</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="mb-4 text-gray-700">
                      Kursus pengenalan bahasa Mandarin untuk remaja dan dewasa. Fokus pada kemampuan 
                      komunikasi dasar dan karakter sederhana.
                    </p>
                    <div className="space-y-1.5 text-sm bg-gray-50 p-3 rounded-lg">
                      <p className="flex items-center"><span className="font-medium w-20">Durasi:</span> 10 pertemuan</p>
                      <p className="flex items-center"><span className="font-medium w-20">Jadwal:</span> 1x seminggu, 3 jam per sesi</p>
                      <p className="flex items-center"><span className="font-medium w-20">Level:</span> Pemula</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button asChild className="w-full bg-confucius-gold hover:bg-confucius-gold/90 text-white">
                      <Link to="/register">Daftar Sekarang</Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="border-t-4 border-t-confucius-red overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="bg-confucius-lightRed bg-opacity-30">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center text-confucius-blue">
                          <BookOpen className="mr-2 h-5 w-5 text-confucius-red" />
                          Kelas VIP
                        </CardTitle>
                        <CardDescription className="mt-1.5">Pembelajaran One-on-One yang dipersonalisasi</CardDescription>
                      </div>
                      <Badge className="bg-confucius-red hover:bg-confucius-red/90">Premium</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="mb-4 text-gray-700">
                      Kelas privat yang disesuaikan dengan kebutuhan dan jadwal Anda. 
                      Cocok untuk pembelajaran intensif atau persiapan ujian.
                    </p>
                    <div className="space-y-1.5 text-sm bg-gray-50 p-3 rounded-lg">
                      <p className="flex items-center"><span className="font-medium w-20">Format:</span> One-on-One dengan pengajar</p>
                      <p className="flex items-center"><span className="font-medium w-20">Jadwal:</span> Fleksibel</p>
                      <p className="flex items-center"><span className="font-medium w-20">Level:</span> Semua tingkatan</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button asChild className="w-full bg-confucius-red hover:bg-confucius-red/90">
                      <Link to="/contact">Hubungi Kami</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-confucius-lightGold to-white rounded-lg border border-confucius-gold/20">
                <div className="flex items-center mb-3">
                  <GraduationCap className="h-6 w-6 text-confucius-gold mr-2" />
                  <h3 className="text-xl font-semibold text-confucius-blue">Tentang Program HSK</h3>
                </div>
                <p className="text-gray-700">
                  Hanyu Shuiping Kaoshi (HSK) adalah ujian kemahiran bahasa Mandarin standar yang diakui 
                  secara internasional. Program ini dirancang untuk mempersiapkan siswa mengikuti ujian HSK 
                  resmi yang diakui oleh universitas dan perusahaan di seluruh dunia.
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-16 max-w-3xl mx-auto p-6 rounded-lg bg-gradient-to-b from-white to-confucius-lightGreen border border-confucius-green/10">
            <h2 className="text-2xl font-bold mb-4 text-confucius-blue">Siap untuk Mendaftar?</h2>
            <p className="mb-6 text-gray-700">
              Daftar sekarang atau hubungi kami untuk informasi lebih lanjut tentang program kursus bahasa Mandarin kami.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="px-8 bg-confucius-green hover:bg-confucius-green/90">
                <Link to="/register">Daftar Sekarang</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 border-confucius-green text-confucius-green hover:bg-confucius-lightGreen hover:text-confucius-green">
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
