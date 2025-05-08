
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import DashboardLayout from "@/layouts/DashboardLayout";

// Define course type
interface Course {
  id: number;
  level: string;
  title: string;
  description: string;
  ageRange: string;
  isFree: boolean;
  prerequisites: string[];
  meetings: number;
  schedules: {
    id: number;
    day: string;
    time: string;
    quota: number;
    teacher: string;
  }[];
}

// Add types for VIP courses
interface VIPCourse {
  id: number;
  level: string;
  title: string;
  description: string;
  ageRange: string;
  isFree: boolean;
  prerequisites: string[];
  needsWhatsApp: boolean;
  phone: string;
}

// Mock data for YCT courses
const yctCourses: Course[] = [
  {
    id: 1,
    level: "YCT Level 1",
    title: "Pengenalan Bahasa Mandarin Dasar",
    description: "Kursus ini cocok untuk pemula yang ingin mengenal dasar-dasar bahasa Mandarin. Materi mencakup pelafalan dasar, pengenalan karakter sederhana, dan percakapan sehari-hari.",
    ageRange: "7-12 tahun",
    isFree: true,
    prerequisites: [],
    meetings: 10,
    schedules: [
      { id: 101, day: "Senin & Rabu", time: "15:00 - 16:30", quota: 15, teacher: "Ibu Wang Li" },
      { id: 102, day: "Selasa & Kamis", time: "15:00 - 16:30", quota: 5, teacher: "Ibu Zhang Min" }
    ]
  },
  {
    id: 2,
    level: "YCT Level 2",
    title: "Bahasa Mandarin Tingkat Lanjutan I",
    description: "Kursus lanjutan dari YCT Level 1. Siswa akan mempelajari lebih banyak kosakata dan struktur kalimat, serta penulisan karakter yang lebih kompleks.",
    ageRange: "7-12 tahun",
    isFree: true,
    prerequisites: ["YCT Level 1"],
    meetings: 12,
    schedules: [
      { id: 201, day: "Senin & Rabu", time: "16:30 - 18:00", quota: 10, teacher: "Ibu Wang Li" }
    ]
  }
];

// Mock data for HSK courses
const hskCourses: Course[] = [
  {
    id: 3,
    level: "HSK Level 1",
    title: "Dasar Bahasa Mandarin untuk Remaja & Dewasa",
    description: "Pengenalan bahasa Mandarin untuk pemula usia 13 tahun ke atas. Materi disesuaikan untuk remaja dan dewasa.",
    ageRange: "13 tahun ke atas",
    isFree: false,
    prerequisites: [],
    meetings: 10,
    schedules: [
      { id: 301, day: "Sabtu", time: "09:00 - 12:00", quota: 8, teacher: "Bapak Liu Wei" }
    ]
  }
];

// Mock data for VIP courses
const vipCourses: VIPCourse[] = [
  {
    id: 4,
    level: "VIP",
    title: "Kursus Privat One-on-One",
    description: "Pembelajaran intensif one-on-one untuk semua usia. Jadwal dan materi disesuaikan dengan kebutuhan Anda.",
    ageRange: "Semua usia",
    isFree: false,
    prerequisites: [],
    needsWhatsApp: true,
    phone: "628123456789"
  }
];

const NewCoursesPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedSchedule, setSelectedSchedule] = useState<number | null>(null);
  const [selectedVipCourse, setSelectedVipCourse] = useState<VIPCourse | null>(null);
  const [meetings, setMeetings] = useState(1);
  const [whatsappConsent, setWhatsappConsent] = useState(false);
  
  const handleOpenCourseDialog = (course: Course) => {
    setSelectedCourse(course);
    setSelectedSchedule(null);
    setOpenDialog(true);
  };
  
  const handleOpenVipDialog = (course: VIPCourse) => {
    setSelectedVipCourse(course);
    setSelectedCourse(null);
    setOpenDialog(true);
  };
  
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedCourse(null);
    setSelectedVipCourse(null);
    setSelectedSchedule(null);
    setMeetings(1);
    setWhatsappConsent(false);
  };
  
  const handleRegister = () => {
    if (selectedVipCourse) {
      // Logic for VIP course registration
      if (!whatsappConsent) {
        toast.error("Mohon setujui untuk dihubungi via WhatsApp");
        return;
      }
      
      toast.success("Permintaan kursus privat terkirim!", {
        description: "Kami akan menghubungi Anda via WhatsApp segera."
      });
      
      handleCloseDialog();
    } else if (selectedCourse && selectedSchedule !== null) {
      // Logic for regular course registration
      const schedule = selectedCourse.schedules.find(s => s.id === selectedSchedule);
      
      toast.success("Pendaftaran kursus berhasil!", {
        description: `Anda telah terdaftar di ${selectedCourse.level} dengan jadwal ${schedule?.day}, ${schedule?.time}.`
      });
      
      handleCloseDialog();
    } else {
      toast.error("Mohon pilih jadwal kelas");
    }
  };
  
  return (
    <DashboardLayout pageTitle="Daftar Kursus Baru" userType="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Kursus yang Tersedia</h1>
          <p className="text-gray-600 mb-6">
            Pilih kategori kursus yang sesuai dengan kebutuhan Anda.
          </p>
        </div>
        
        <Tabs defaultValue="yct" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="yct">YCT (7-12 th)</TabsTrigger>
            <TabsTrigger value="hsk">HSK (13+ th)</TabsTrigger>
            <TabsTrigger value="vip">Kelas VIP</TabsTrigger>
          </TabsList>
          
          {/* YCT Courses */}
          <TabsContent value="yct" className="space-y-4">
            {yctCourses.map(course => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{course.level}</CardTitle>
                      <CardDescription className="mt-1">{course.title}</CardDescription>
                    </div>
                    {course.isFree && (
                      <Badge className="bg-green-500 hover:bg-green-600">Gratis</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{course.description}</p>
                  <div className="space-y-2">
                    <div className="flex gap-2 text-sm">
                      <span className="font-medium">Usia:</span>
                      <span>{course.ageRange}</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="font-medium">Jumlah Pertemuan:</span>
                      <span>{course.meetings} kali</span>
                    </div>
                    {course.prerequisites.length > 0 && (
                      <div className="flex gap-2 text-sm">
                        <span className="font-medium">Prasyarat:</span>
                        <span>{course.prerequisites.join(", ")}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handleOpenCourseDialog(course)}
                    className="w-full"
                  >
                    Lihat Detail & Jadwal
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          
          {/* HSK Courses */}
          <TabsContent value="hsk" className="space-y-4">
            {hskCourses.map(course => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{course.level}</CardTitle>
                      <CardDescription className="mt-1">{course.title}</CardDescription>
                    </div>
                    {course.isFree && (
                      <Badge className="bg-green-500 hover:bg-green-600">Gratis</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{course.description}</p>
                  <div className="space-y-2">
                    <div className="flex gap-2 text-sm">
                      <span className="font-medium">Usia:</span>
                      <span>{course.ageRange}</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="font-medium">Jumlah Pertemuan:</span>
                      <span>{course.meetings} kali</span>
                    </div>
                    {course.prerequisites.length > 0 && (
                      <div className="flex gap-2 text-sm">
                        <span className="font-medium">Prasyarat:</span>
                        <span>{course.prerequisites.join(", ")}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handleOpenCourseDialog(course)}
                    className="w-full"
                  >
                    Lihat Detail & Jadwal
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          
          {/* VIP Courses */}
          <TabsContent value="vip" className="space-y-4">
            {vipCourses.map(course => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription className="mt-1">Kelas Privat</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{course.description}</p>
                  <div className="space-y-2">
                    <div className="flex gap-2 text-sm">
                      <span className="font-medium">Usia:</span>
                      <span>{course.ageRange}</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="font-medium">Format:</span>
                      <span>One-on-One dengan pengajar</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handleOpenVipDialog(course)}
                    className="w-full"
                  >
                    Ajukan Permintaan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
        
        {/* Course Registration Dialog */}
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
            {selectedCourse && (
              <>
                <DialogHeader>
                  <DialogTitle>Daftar Kursus: {selectedCourse.level}</DialogTitle>
                  <DialogDescription>
                    Pilih jadwal yang sesuai dengan ketersediaan Anda.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4 py-4">
                  <h4 className="font-medium">Jadwal Tersedia:</h4>
                  {selectedCourse.schedules.map(schedule => (
                    <div 
                      key={schedule.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedSchedule === schedule.id 
                          ? 'border-primary bg-primary/5' 
                          : 'hover:border-gray-400'
                      }`}
                      onClick={() => setSelectedSchedule(schedule.id)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{schedule.day}</p>
                          <p className="text-sm text-gray-500">{schedule.time}</p>
                          <p className="text-sm text-gray-500">Pengajar: {schedule.teacher}</p>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm ${schedule.quota < 5 ? 'text-amber-600' : 'text-green-600'}`}>
                            Sisa kuota: {schedule.quota}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Accordion type="single" collapsible>
                    <AccordionItem value="details">
                      <AccordionTrigger>Informasi Tambahan</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm"><strong>Deskripsi:</strong> {selectedCourse.description}</p>
                        <p className="text-sm"><strong>Jumlah Pertemuan:</strong> {selectedCourse.meetings} kali</p>
                        {selectedCourse.prerequisites.length > 0 && (
                          <p className="text-sm"><strong>Prasyarat:</strong> {selectedCourse.prerequisites.join(", ")}</p>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                
                <DialogFooter>
                  <Button variant="outline" onClick={handleCloseDialog}>Batal</Button>
                  <Button onClick={handleRegister}>Daftar Sekarang</Button>
                </DialogFooter>
              </>
            )}
            
            {selectedVipCourse && (
              <>
                <DialogHeader>
                  <DialogTitle>Ajukan Permintaan: {selectedVipCourse.title}</DialogTitle>
                  <DialogDescription>
                    Lengkapi informasi untuk mengajukan kelas privat.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="meetings">Jumlah Pertemuan yang Diinginkan:</Label>
                    <Input
                      id="meetings"
                      type="number"
                      min={1}
                      max={30}
                      value={meetings}
                      onChange={(e) => setMeetings(parseInt(e.target.value) || 1)}
                    />
                    <p className="text-sm text-gray-500">Minimum 1 pertemuan</p>
                  </div>
                  
                  {selectedVipCourse.needsWhatsApp && (
                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox
                        id="whatsapp-consent"
                        checked={whatsappConsent}
                        onCheckedChange={(checked) => 
                          setWhatsappConsent(checked as boolean)
                        }
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="whatsapp-consent"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Saya bersedia dihubungi via WhatsApp untuk pengaturan jadwal
                        </Label>
                        <p className="text-sm text-gray-500">
                          Kami akan menghubungi Anda di {selectedVipCourse.phone} untuk konfirmasi.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <Accordion type="single" collapsible className="pt-2">
                    <AccordionItem value="details">
                      <AccordionTrigger>Informasi Tambahan</AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <p className="text-sm"><strong>Deskripsi:</strong> {selectedVipCourse.description}</p>
                        <p className="text-sm"><strong>Usia:</strong> {selectedVipCourse.ageRange}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                
                <DialogFooter>
                  <Button variant="outline" onClick={handleCloseDialog}>Batal</Button>
                  <Button onClick={handleRegister}>Kirim Permintaan</Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default NewCoursesPage;
