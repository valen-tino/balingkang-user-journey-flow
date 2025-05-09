import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Calendar, Clock, GraduationCap, User } from "lucide-react";

// Mock data for courses
const courses = [
  {
    id: 1,
    title: "YCT Level 1",
    instructor: "Li Wei",
    progress: 65,
    nextClass: "Rabu, 10:00 WIB",
    location: "Ruang 101",
    totalLessons: 12,
    completedLessons: 8,
    status: "active"
  },
  {
    id: 2,
    title: "HSK 1 Preparation",
    instructor: "Zhang Min",
    progress: 30,
    nextClass: "Jumat, 13:00 WIB",
    location: "Ruang 203",
    totalLessons: 15,
    completedLessons: 4,
    status: "active"
  },
  {
    id: 3,
    title: "Chinese Calligraphy",
    instructor: "Wang Fang",
    progress: 100,
    nextClass: null,
    location: null,
    totalLessons: 8,
    completedLessons: 8,
    status: "completed"
  }
];

const MyCoursesPage = () => {
  const [activeTab, setActiveTab] = useState("active");
  
  const activeCourses = courses.filter(course => course.status === "active");
  const completedCourses = courses.filter(course => course.status === "completed");
  
  return (
    <DashboardLayout pageTitle="Kursus Saya" userType="student">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Kursus Saya</h1>
        <p className="text-gray-600">
          Kelola dan pantau progres kursus yang Anda ikuti.
        </p>
      </div>
      
      <Tabs defaultValue="active" onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">
            Aktif
            {activeCourses.length > 0 && (
              <Badge variant="secondary" className="ml-2">{activeCourses.length}</Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="completed">
            Selesai
            {completedCourses.length > 0 && (
              <Badge variant="secondary" className="ml-2">{completedCourses.length}</Badge>
            )}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="space-y-4">
          {activeCourses.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {activeCourses.map(course => (
                <Card key={course.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <User className="h-3 w-3 mr-1" />
                          {course.instructor}
                        </CardDescription>
                      </div>
                      <Badge>Aktif</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Progres</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <div className="flex justify-between mt-1 text-xs text-gray-500">
                        <span>{course.completedLessons} dari {course.totalLessons} pertemuan</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{course.nextClass || "Tidak ada jadwal"}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{course.location || "TBA"}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between pt-2">
                      <Button variant="outline" size="sm">
                        Lihat Materi
                      </Button>
                      <Button size="sm">
                        Lanjutkan Belajar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <BookOpen className="h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-1">Belum Ada Kursus Aktif</h3>
                <p className="text-gray-500 text-center max-w-md mb-4">
                  Anda belum memiliki kursus aktif. Daftar kursus baru untuk mulai belajar.
                </p>
                <Button>
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Jelajahi Kursus Baru
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          {completedCourses.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {completedCourses.map(course => (
                <Card key={course.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <User className="h-3 w-3 mr-1" />
                          {course.instructor}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Selesai
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Progres</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <div className="flex justify-between mt-1 text-xs text-gray-500">
                        <span>{course.completedLessons} dari {course.totalLessons} pertemuan</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between pt-2">
                      <Button variant="outline" size="sm">
                        Lihat Materi
                      </Button>
                      <Button variant="outline" size="sm">
                        Lihat Sertifikat
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <GraduationCap className="h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-1">Belum Ada Kursus Selesai</h3>
                <p className="text-gray-500 text-center max-w-md">
                  Anda belum menyelesaikan kursus apapun. Selesaikan kursus aktif untuk mendapatkan sertifikat.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default MyCoursesPage;