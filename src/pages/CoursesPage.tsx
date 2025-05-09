
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Book, BookOpen, GraduationCap, Info, Users } from "lucide-react";
import { Link } from "react-router-dom";
import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingFooter from "@/components/landing/LandingFooter";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";

// Course type definitions
interface CourseLevel {
  level: string;
  title: string;
  description: string;
  duration: string;
  schedule: string;
  prerequisite?: string;
  difficulty: string;
  isFree: boolean;
  color: "green" | "blue" | "teal" | "purple" | "gold" | "orange";
  isPopular?: boolean;
}

const CoursesPage = () => {
  const [expandedInfo, setExpandedInfo] = useState(false);
  
  useEffect(() => {
    // Set page title
    document.title = "Kursus Kami | Balingkang - Pusat Kursus Bahasa Mandarin";
  }, []);

  // YCT Course Levels
  const yctCourses: CourseLevel[] = [
    {
      level: "YCT Level 1",
      title: "Pemula Anak",
      description: "Kursus pengenalan dasar bahasa Mandarin untuk anak-anak. Fokus pada pelafalan, pengenalan karakter sederhana, dan percakapan dasar.",
      duration: "10 pertemuan",
      schedule: "2x seminggu, 1.5 jam per sesi",
      difficulty: "Pemula",
      isFree: true,
      color: "green"
    },
    {
      level: "YCT Level 2",
      title: "Lanjutan Dasar Anak",
      description: "Melanjutkan dari Level 1, siswa akan memperoleh kosakata yang lebih banyak dan struktur kalimat yang lebih kompleks.",
      duration: "12 pertemuan",
      schedule: "2x seminggu, 1.5 jam per sesi",
      prerequisite: "YCT Level 1",
      difficulty: "Lanjutan Dasar",
      isFree: true,
      color: "blue"
    },
    {
      level: "YCT Level 3",
      title: "Menengah Awal Anak",
      description: "Siswa akan belajar lebih banyak kosakata dan tata bahasa yang lebih kompleks untuk berkomunikasi dalam situasi umum.",
      duration: "15 pertemuan",
      schedule: "2x seminggu, 2 jam per sesi",
      prerequisite: "YCT Level 2",
      difficulty: "Menengah Awal",
      isFree: true,
      color: "teal"
    },
    {
      level: "YCT Level 4",
      title: "Menengah Anak",
      description: "Meningkatkan kemampuan membaca dan menulis karakter mandarin yang lebih kompleks serta pemahaman teks sederhana.",
      duration: "15 pertemuan",
      schedule: "2x seminggu, 2 jam per sesi",
      prerequisite: "YCT Level 3",
      difficulty: "Menengah",
      isFree: true,
      color: "purple"
    },
    {
      level: "YCT Level 5",
      title: "Mahir Anak",
      description: "Mempersiapkan siswa untuk komunikasi mandiri dalam bahasa Mandarin dengan kosakata dan struktur kalimat yang lebih kompleks.",
      duration: "18 pertemuan",
      schedule: "2x seminggu, 2 jam per sesi",
      prerequisite: "YCT Level 4",
      difficulty: "Mahir",
      isFree: true,
      color: "gold",
      isPopular: true
    }
  ];

  // HSK Course Levels
  const hskCourses: CourseLevel[] = [
    {
      level: "HSK Level 1",
      title: "Pemula",
      description: "Kursus pengenalan bahasa Mandarin untuk remaja dan dewasa. Fokus pada kemampuan komunikasi dasar dan karakter sederhana.",
      duration: "10 pertemuan",
      schedule: "1x seminggu, 3 jam per sesi",
      difficulty: "Pemula",
      isFree: true,
      color: "green",
      isPopular: true
    },
    {
      level: "HSK Level 2",
      title: "Dasar",
      description: "Melanjutkan dari HSK 1, mempelajari lebih banyak kosakata dan tata bahasa untuk komunikasi sehari-hari.",
      duration: "12 pertemuan",
      schedule: "1x seminggu, 3 jam per sesi",
      prerequisite: "HSK Level 1",
      difficulty: "Dasar",
      isFree: true,
      color: "blue"
    },
    {
      level: "HSK Level 3",
      title: "Menengah Awal",
      description: "Meningkatkan kemampuan untuk berkomunikasi dalam situasi umum dan memahami teks sederhana.",
      duration: "15 pertemuan",
      schedule: "1x seminggu, 3 jam per sesi",
      prerequisite: "HSK Level 2",
      difficulty: "Menengah Awal",
      isFree: true,
      color: "teal"
    },
    {
      level: "HSK Level 4",
      title: "Menengah",
      description: "Kursus untuk memahami bahasa Mandarin dalam berbagai situasi dan mulai mendiskusikan topik yang lebih kompleks.",
      duration: "16 pertemuan",
      schedule: "1x seminggu, 3 jam per sesi",
      prerequisite: "HSK Level 3",
      difficulty: "Menengah",
      isFree: true,
      color: "purple"
    },
    {
      level: "HSK Level 5",
      title: "Lanjutan",
      description: "Mempersiapkan siswa untuk komunikasi yang efektif dalam konteks akademik dan profesional.",
      duration: "18 pertemuan",
      schedule: "1x seminggu, 3 jam per sesi",
      prerequisite: "HSK Level 4",
      difficulty: "Lanjutan",
      isFree: true,
      color: "orange"
    },
    {
      level: "HSK Level 6",
      title: "Mahir",
      description: "Tingkat tertinggi HSK, mempersiapkan siswa untuk mencapai kemahiran mendekati penutur asli.",
      duration: "20 pertemuan",
      schedule: "1x seminggu, 3 jam per sesi", 
      prerequisite: "HSK Level 5",
      difficulty: "Mahir",
      isFree: true,
      color: "gold"
    }
  ];

  // Helper function to get appropriate color classes based on course color
  const getColorClasses = (color: string, type: "border" | "bg" | "light-bg" | "text") => {
    const colorMap = {
      green: {
        border: "border-t-confucius-green",
        bg: "bg-confucius-green hover:bg-confucius-green/90",
        "light-bg": "bg-confucius-lightGreen bg-opacity-30",
        text: "text-confucius-green"
      },
      blue: {
        border: "border-t-confucius-blue",
        bg: "bg-confucius-blue hover:bg-confucius-blue/90",
        "light-bg": "bg-confucius-lightBlue bg-opacity-30",
        text: "text-confucius-blue"
      },
      red: {
        border: "border-t-confucius-red",
        bg: "bg-confucius-red hover:bg-confucius-red/90",
        "light-bg": "bg-confucius-lightRed bg-opacity-30",
        text: "text-confucius-red"
      },
      gold: {
        border: "border-t-confucius-gold",
        bg: "bg-confucius-gold hover:bg-confucius-gold/90",
        "light-bg": "bg-confucius-lightGold bg-opacity-30",
        text: "text-confucius-gold"
      },
      teal: {
        border: "border-t-teal-600",
        bg: "bg-teal-600 hover:bg-teal-700",
        "light-bg": "bg-teal-50",
        text: "text-teal-600"
      },
      purple: {
        border: "border-t-purple-600",
        bg: "bg-purple-600 hover:bg-purple-700",
        "light-bg": "bg-purple-50",
        text: "text-purple-600"
      },
      orange: {
        border: "border-t-amber-600",
        bg: "bg-amber-600 hover:bg-amber-700",
        "light-bg": "bg-amber-50",
        text: "text-amber-600"
      }
    };
    
    return colorMap[color as keyof typeof colorMap][type];
  };

  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <main className="flex-grow py-16 pt-28">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Program Kursus Bahasa Mandarin</h1>
            <p className="text-lg mb-6 text-gray-700">
              Kami menawarkan berbagai program kursus bahasa Mandarin untuk semua usia dan tingkat kemampuan.
            </p>
            <div className="h-1 w-20 bg-confucius-green mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-confucius-lightGreen border border-confucius-green/20 rounded-lg p-4 mb-8 flex items-start gap-3 max-w-4xl mx-auto">
            <Info className="text-confucius-green mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-confucius-green mb-1">Informasi Penting:</p>
              <p className="text-gray-700">
                Semua kursus YCT dan HSK <span className="font-semibold">GRATIS</span> untuk siswa SD, SMP, SMA di Kabupaten Buleleng, 
                serta Mahasiswa dan Civitas Akademika Undiksha. Silakan bawa kartu identitas saat pendaftaran.
              </p>
            </div>
          </div>
          
          <Tabs defaultValue="children" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1 rounded-lg">
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
              <TabsTrigger 
                value="vip"
                className="rounded-md data-[state=active]:bg-white data-[state=active]:text-confucius-green data-[state=active]:shadow-sm"
              >
                <Users className="mr-2 h-4 w-4" />
                Kelas VIP (One-on-One)
              </TabsTrigger>
            </TabsList>
            
            {/* Children's Programs (YCT) */}
            <TabsContent value="children" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yctCourses.map((course, index) => (
                  <Card key={index} className={`border-t-4 ${getColorClasses(course.color, "border")} overflow-hidden hover:shadow-md transition-shadow duration-300`}>
                    <CardHeader className={getColorClasses(course.color, "light-bg")}>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center text-confucius-blue">
                            <Book className={`mr-2 h-5 w-5 ${getColorClasses(course.color, "text")}`} />
                            {course.level}
                          </CardTitle>
                          <CardDescription className="mt-1.5">{course.title}</CardDescription>
                        </div>
                        {course.isPopular ? (
                          <Badge className={getColorClasses(course.color, "bg")}>Populer</Badge>
                        ) : (
                          <Badge className="bg-confucius-green hover:bg-confucius-green/90">Gratis</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="mb-4 text-gray-700">
                        {course.description}
                      </p>
                      <div className="space-y-1.5 text-sm bg-gray-50 p-3 rounded-lg">
                        <p className="flex items-center"><span className="font-medium w-20">Durasi:</span> {course.duration}</p>
                        <p className="flex items-center"><span className="font-medium w-20">Jadwal:</span> {course.schedule}</p>
                        <p className="flex items-center"><span className="font-medium w-20">Level:</span> {course.difficulty}</p>
                        {course.prerequisite && (
                          <p className="flex items-center"><span className="font-medium w-20">Prasyarat:</span> {course.prerequisite}</p>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button asChild className={`w-full ${getColorClasses(course.color, "bg")}`}>
                        <Link to="/register">Daftar Sekarang</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
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
                <Accordion type="single" collapsible className="mt-3" value={expandedInfo ? "info" : ""} onValueChange={(v) => setExpandedInfo(!!v)}>
                  <AccordionItem value="info" className="border-none">
                    <AccordionTrigger className="text-sm text-confucius-green py-2 hover:no-underline">
                      Selengkapnya tentang YCT
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p>YCT terbagi menjadi 5 level, dimulai dari level paling dasar (YCT 1) hingga level mahir (YCT 5).</p>
                        <p>Setiap level YCT memiliki standar kemampuan yang berbeda:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li><span className="font-medium">YCT 1:</span> 80 kata dasar dan pengenalan karakter sederhana</li>
                          <li><span className="font-medium">YCT 2:</span> 150 kata dan struktur kalimat dasar</li>
                          <li><span className="font-medium">YCT 3:</span> 300 kata dan kemampuan komunikasi dalam situasi umum</li>
                          <li><span className="font-medium">YCT 4:</span> 600 kata dan pemahaman teks sederhana</li>
                          <li><span className="font-medium">YCT 5:</span> 1000 kata dan struktur kalimat yang lebih kompleks</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
            
            {/* Adult Programs (HSK) */}
            <TabsContent value="adults" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hskCourses.map((course, index) => (
                  <Card key={index} className={`border-t-4 ${getColorClasses(course.color, "border")} overflow-hidden hover:shadow-md transition-shadow duration-300`}>
                    <CardHeader className={getColorClasses(course.color, "light-bg")}>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center text-confucius-blue">
                            <BookOpen className={`mr-2 h-5 w-5 ${getColorClasses(course.color, "text")}`} />
                            {course.level}
                          </CardTitle>
                          <CardDescription className="mt-1.5">{course.title}</CardDescription>
                        </div>
                        {course.isPopular ? (
                          <Badge className={getColorClasses(course.color, "bg")}>Populer</Badge>
                        ) : (
                          <Badge className="bg-confucius-green hover:bg-confucius-green/90">Gratis</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="mb-4 text-gray-700">
                        {course.description}
                      </p>
                      <div className="space-y-1.5 text-sm bg-gray-50 p-3 rounded-lg">
                        <p className="flex items-center"><span className="font-medium w-20">Durasi:</span> {course.duration}</p>
                        <p className="flex items-center"><span className="font-medium w-20">Jadwal:</span> {course.schedule}</p>
                        <p className="flex items-center"><span className="font-medium w-20">Level:</span> {course.difficulty}</p>
                        {course.prerequisite && (
                          <p className="flex items-center"><span className="font-medium w-20">Prasyarat:</span> {course.prerequisite}</p>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button asChild className={`w-full ${getColorClasses(course.color, "bg")}`}>
                        <Link to="/register">Daftar Sekarang</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
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
                <Accordion type="single" collapsible className="mt-3" value={expandedInfo ? "info" : ""} onValueChange={(v) => setExpandedInfo(!!v)}>
                  <AccordionItem value="info" className="border-none">
                    <AccordionTrigger className="text-sm text-confucius-gold py-2 hover:no-underline">
                      Selengkapnya tentang HSK
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p>HSK terbagi menjadi 6 level, dimulai dari level paling dasar (HSK 1) hingga level paling mahir (HSK 6).</p>
                        <p>Setiap level HSK memiliki standar kemampuan yang berbeda:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li><span className="font-medium">HSK 1:</span> 150 kata dasar dan komunikasi sangat sederhana</li>
                          <li><span className="font-medium">HSK 2:</span> 300 kata dan komunikasi dasar sehari-hari</li>
                          <li><span className="font-medium">HSK 3:</span> 600 kata dan komunikasi dalam berbagai situasi umum</li>
                          <li><span className="font-medium">HSK 4:</span> 1200 kata dan komunikasi dalam berbagai konteks</li>
                          <li><span className="font-medium">HSK 5:</span> 2500 kata dan komunikasi efektif dalam konteks akademik dan profesional</li>
                          <li><span className="font-medium">HSK 6:</span> 5000+ kata dan kemahiran mendekati penutur asli</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
            
            {/* VIP Programs */}
            <TabsContent value="vip" className="space-y-8 animate-fade-in">
              <Card className="border-t-4 border-t-confucius-red overflow-hidden hover:shadow-md transition-shadow duration-300 max-w-2xl mx-auto">
                <CardHeader className="bg-confucius-lightRed bg-opacity-30">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center text-confucius-blue">
                        <Users className="mr-2 h-5 w-5 text-confucius-red" />
                        Kelas VIP One-on-One
                      </CardTitle>
                      <CardDescription className="mt-1.5">Pembelajaran Mandarin yang dipersonalisasi</CardDescription>
                    </div>
                    <Badge className="bg-confucius-red hover:bg-confucius-red/90">Premium</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4 text-gray-700">
                    Kelas privat yang disesuaikan dengan kebutuhan dan jadwal Anda. Belajar bahasa Mandarin
                    secara intensif dengan pengajar berpengalaman. Cocok untuk semua usia dan tingkat kemampuan.
                  </p>
                  <div className="space-y-1.5 text-sm bg-gray-50 p-4 rounded-lg">
                    <p className="flex items-center"><span className="font-medium w-32">Format:</span> One-on-One dengan pengajar</p>
                    <p className="flex items-center"><span className="font-medium w-32">Jadwal:</span> Fleksibel, sesuai kesepakatan</p>
                    <p className="flex items-center"><span className="font-medium w-32">Jumlah Pertemuan:</span> Disesuaikan kebutuhan</p>
                    <p className="flex items-center"><span className="font-medium w-32">Level:</span> Semua tingkatan</p>
                    <p className="flex items-center"><span className="font-medium w-32">Target Pembelajaran:</span> Disesuaikan kebutuhan</p>
                    <p className="flex items-center"><span className="font-medium w-32">Biaya:</span> Hubungi kami untuk informasi biaya</p>
                  </div>
                  <div className="mt-4 p-3 border border-confucius-red/20 bg-confucius-lightRed/30 rounded-md text-sm">
                    <p className="text-gray-700">
                      <span className="font-medium">Catatan:</span> Proses pendaftaran kelas VIP melibatkan konsultasi awal via WhatsApp 
                      untuk memahami kebutuhan pembelajaran Anda dan menyusun program khusus yang tepat.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <Button asChild className="bg-confucius-red hover:bg-confucius-red/90">
                      <Link to="/register">Daftar Sekarang</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-confucius-red text-confucius-red hover:bg-confucius-lightRed hover:text-confucius-red">
                      <Link to="/contact">Hubungi Kami</Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              
              <div className="p-6 bg-gradient-to-r from-confucius-lightRed to-white rounded-lg border border-confucius-red/20">
                <div className="flex items-center mb-3">
                  <Users className="h-6 w-6 text-confucius-red mr-2" />
                  <h3 className="text-xl font-semibold text-confucius-blue">Keunggulan Kelas VIP</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-confucius-blue">Fleksibilitas & Personalisasi</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>Jadwal fleksibel sesuai ketersediaan Anda</li>
                      <li>Fokus pembelajaran disesuaikan kebutuhan</li>
                      <li>Kecepatan belajar sesuai kemampuan</li>
                      <li>Pilihan pengajar sesuai preferensi</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-confucius-blue">Metode & Hasil</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>Pembelajaran intensif dan efektif</li>
                      <li>Fokus langsung pada area yang perlu ditingkatkan</li>
                      <li>Umpan balik langsung dari pengajar</li>
                      <li>Kemajuan belajar lebih cepat</li>
                    </ul>
                  </div>
                </div>
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
