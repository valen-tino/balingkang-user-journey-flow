
import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Info, Users } from "lucide-react";

// Mock course data
const yctCourses = [
  {
    id: 1,
    level: "YCT 1",
    title: "YCT Level 1 (Pemula)",
    description: "Kursus dasar bahasa Mandarin untuk usia 7-12 tahun",
    ageRange: "7-12 tahun",
    isFree: true,
    prerequisites: [],
    meetings: 10,
    schedules: [
      { id: 101, day: "Senin & Rabu", time: "15:00 - 16:30", quota: 5, teacher: "Ibu Wang Li" },
      { id: 102, day: "Selasa & Kamis", time: "15:00 - 16:30", quota: 3, teacher: "Ibu Li Na" }
    ]
  },
  {
    id: 2,
    level: "YCT 2",
    title: "YCT Level 2 (Dasar)",
    description: "Pengembangan kemampuan dasar bahasa Mandarin",
    ageRange: "7-12 tahun",
    isFree: true,
    prerequisites: ["YCT 1"],
    meetings: 12,
    schedules: [
      { id: 201, day: "Selasa & Jumat", time: "15:00 - 16:30", quota: 8, teacher: "Ibu Wang Li" }
    ]
  },
  {
    id: 3,
    level: "YCT 3",
    title: "YCT Level 3 (Menengah)",
    description: "Penguasaan kemampuan menengah bahasa Mandarin",
    ageRange: "7-12 tahun",
    isFree: true,
    prerequisites: ["YCT 2"],
    meetings: 15,
    schedules: [
      { id: 301, day: "Senin & Kamis", time: "15:00 - 16:30", quota: 10, teacher: "Bpk. Zhang Wei" }
    ]
  }
];

const hskCourses = [
  {
    id: 4,
    level: "HSK 1",
    title: "HSK Level 1 (Pemula)",
    description: "Kursus dasar bahasa Mandarin untuk usia 13+ tahun",
    ageRange: "13+ tahun",
    isFree: false,
    prerequisites: [],
    meetings: 10,
    schedules: [
      { id: 401, day: "Senin & Rabu", time: "17:00 - 18:30", quota: 7, teacher: "Ibu Li Na" },
      { id: 402, day: "Selasa & Kamis", time: "17:00 - 18:30", quota: 0, teacher: "Bpk. Zhang Wei" }
    ]
  },
  {
    id: 5,
    level: "HSK 2",
    title: "HSK Level 2 (Dasar)",
    description: "Pengembangan kemampuan dasar bahasa Mandarin",
    ageRange: "13+ tahun",
    isFree: false,
    prerequisites: ["HSK 1"],
    meetings: 12,
    schedules: [
      { id: 501, day: "Kamis & Sabtu", time: "17:00 - 18:30", quota: 10, teacher: "Bpk. Zhang Wei" }
    ]
  }
];

const vipCourses = [
  {
    id: 6,
    level: "VIP",
    title: "Kelas VIP Mandarin (One-on-one)",
    description: "Kursus pribadi disesuaikan dengan kebutuhan Anda",
    ageRange: "Semua usia",
    isFree: false,
    prerequisites: [],
    needsWhatsApp: true,
    phone: "+6281234567890"
  }
];

const NewCoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  
  const openCourseDetails = (courseId: number) => {
    setSelectedCourse(courseId);
  };
  
  const closeCourseDetails = () => {
    setSelectedCourse(null);
  };
  
  // Find selected course details
  let selectedCourseDetails;
  if (selectedCourse !== null) {
    selectedCourseDetails = [...yctCourses, ...hskCourses, ...vipCourses].find(
      course => course.id === selectedCourse
    );
  }

  const renderCourseCard = (course: typeof yctCourses[0], index: number) => (
    <Card key={course.id} className={`${index % 2 === 0 ? 'border-l-4 border-l-primary/50' : 'border-l-4 border-l-primary/30'}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>{course.title}</CardTitle>
          <Badge variant={course.isFree ? "default" : "outline"}>
            {course.isFree ? "Gratis" : "Berbayar"}
          </Badge>
        </div>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Usia</span>
            <span>{course.ageRange}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Jumlah Pertemuan</span>
            <span>{course.meetings || "Flexible"}</span>
          </div>
          {course.prerequisites && course.prerequisites.length > 0 && (
            <div className="flex justify-between items-start">
              <span className="text-gray-500">Prasyarat</span>
              <span className="text-right">{course.prerequisites.join(", ")}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        {course.needsWhatsApp ? (
          <Button className="w-full" asChild>
            <a 
              href={`https://wa.me/${course.phone}?text=Halo, saya tertarik dengan kelas VIP Mandarin.`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Hubungi WhatsApp
            </a>
          </Button>
        ) : (
          <Button className="w-full" onClick={() => openCourseDetails(course.id)}>
            Lihat Jadwal & Daftar
          </Button>
        )}
      </CardFooter>
    </Card>
  );

  return (
    <DashboardLayout pageTitle="Daftar Kursus Baru" userType="student">
      {selectedCourse === null ? (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">Pilih Kursus</h1>
            <p className="text-gray-600">
              Pilih kategori kursus yang sesuai dengan kebutuhan Anda.
            </p>
          </div>
          
          <Tabs defaultValue="yct" className="space-y-4">
            <TabsList>
              <TabsTrigger value="yct">YCT (Anak-anak)</TabsTrigger>
              <TabsTrigger value="hsk">HSK (Remaja & Dewasa)</TabsTrigger>
              <TabsTrigger value="vip">Kelas VIP</TabsTrigger>
            </TabsList>
            
            <TabsContent value="yct" className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Info size={20} className="text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      Program YCT (Youth Chinese Test) khusus untuk anak-anak usia 7-12 tahun. 
                      Program ini <strong>gratis</strong> untuk pelajar SD di Buleleng.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {yctCourses.map((course, index) => renderCourseCard(course, index))}
              </div>
            </TabsContent>
            
            <TabsContent value="hsk" className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Info size={20} className="text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      Program HSK (Hanyu Shuiping Kaoshi) untuk remaja & dewasa usia 13+ tahun. 
                      Program ini <strong>gratis</strong> untuk pelajar SMP/SMA di Buleleng dan mahasiswa/civitas Undiksha.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hskCourses.map((course, index) => renderCourseCard(course, index))}
              </div>
            </TabsContent>
            
            <TabsContent value="vip" className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Info size={20} className="text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      Program VIP menawarkan kelas one-on-one yang disesuaikan dengan kebutuhan Anda. 
                      Diskusikan jumlah pertemuan dan jadwal melalui WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {vipCourses.map((course, index) => renderCourseCard(course, index))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        // Course Details View
        <div>
          <div className="mb-6">
            <Button variant="ghost" onClick={closeCourseDetails} className="mb-2">
              ← Kembali ke Daftar Kursus
            </Button>
            <h1 className="text-2xl font-bold">{selectedCourseDetails?.title}</h1>
            <p className="text-gray-600">{selectedCourseDetails?.description}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Detail Kursus</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Level</span>
                    <span>{selectedCourseDetails?.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Rentang Usia</span>
                    <span>{selectedCourseDetails?.ageRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status</span>
                    <Badge variant={selectedCourseDetails?.isFree ? "default" : "outline"}>
                      {selectedCourseDetails?.isFree ? "Gratis" : "Berbayar"}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Jumlah Pertemuan</span>
                    <span>{selectedCourseDetails?.meetings}</span>
                  </div>
                  {selectedCourseDetails?.prerequisites && selectedCourseDetails?.prerequisites.length > 0 && (
                    <div className="space-y-1">
                      <div className="text-gray-500">Prasyarat</div>
                      <ul className="list-disc pl-5 text-sm">
                        {selectedCourseDetails?.prerequisites.map((prereq, index) => (
                          <li key={index}>{prereq}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Pilih Jadwal</CardTitle>
                  <CardDescription>Jadwal tersedia untuk pendaftaran</CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedCourseDetails && 'schedules' in selectedCourseDetails && selectedCourseDetails.schedules.length > 0 ? (
                    <div className="space-y-4">
                      {selectedCourseDetails.schedules.map((schedule) => (
                        <Card key={schedule.id} className="bg-background">
                          <CardContent className="p-4">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                              <div className="space-y-1 mb-3 lg:mb-0">
                                <div className="font-medium">{schedule.day}</div>
                                <div className="text-sm text-muted-foreground">{schedule.time}</div>
                                <div className="flex items-center text-sm">
                                  <Users size={14} className="mr-1" />
                                  <span>Kuota tersisa: {schedule.quota}</span>
                                </div>
                                <div className="text-sm">Pengajar: {schedule.teacher}</div>
                              </div>
                              
                              {schedule.quota > 0 ? (
                                <Button
                                  className="w-full lg:w-auto"
                                  asChild
                                >
                                  <Link to={`/dashboard/student/register-confirmation/${selectedCourseDetails.id}/${schedule.id}`}>
                                    Pilih Jadwal Ini
                                  </Link>
                                </Button>
                              ) : (
                                <Button 
                                  className="w-full lg:w-auto" 
                                  variant="outline" 
                                  disabled
                                >
                                  Kuota Penuh
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-4">
                      <p className="text-muted-foreground">Tidak ada jadwal tersedia saat ini.</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex-col items-start gap-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-500 mt-0.5" />
                    <div className="text-sm">
                      Setelah memilih jadwal, Anda akan melihat halaman konfirmasi pendaftaran.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-500 mt-0.5" />
                    <div className="text-sm">
                      Untuk kursus berbayar, Anda akan menerima informasi pembayaran setelah konfirmasi.
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default NewCoursesPage;
