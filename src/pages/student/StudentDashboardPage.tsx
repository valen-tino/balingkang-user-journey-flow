
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Calendar, CheckSquare, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";

// Mock data
const upcomingClasses = [
  {
    id: 1,
    courseName: "YCT Level 1",
    date: "Senin, 12 Mei 2025",
    time: "15:00 - 16:30",
    teacher: "Ibu Wang Li",
    room: "Ruang Bamboo"
  },
  {
    id: 2,
    courseName: "YCT Level 1",
    date: "Rabu, 14 Mei 2025",
    time: "15:00 - 16:30",
    teacher: "Ibu Wang Li",
    room: "Ruang Bamboo"
  }
];

const activeCourses = [
  {
    id: 101,
    name: "YCT Level 1",
    progress: 40,
    completedMeetings: 4,
    totalMeetings: 10,
    nextClass: "Senin, 12 Mei 2025"
  }
];

const StudentDashboardPage = () => {
  return (
    <DashboardLayout pageTitle="Dashboard" userType="student">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Selamat Datang, Putu!</h1>
        <p className="text-gray-600">
          Lihat jadwal dan progres kursus Anda di sini.
        </p>
      </div>
      
      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Status Kursus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1 Aktif</div>
            <p className="text-xs text-muted-foreground">0 Selesai</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Kehadiran
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100%</div>
            <p className="text-xs text-muted-foreground">4/4 pertemuan</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pertemuan Berikutnya
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 Mei</div>
            <p className="text-xs text-muted-foreground">15:00 - 16:30</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Sertifikat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Belum ada sertifikat</p>
            <Button variant="outline" size="sm" className="mt-2" asChild>
              <Link to="/dashboard/student/certificates">Lihat Sertifikat</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      
      {/* Main Content Tabs */}
      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Jadwal Mendatang</TabsTrigger>
          <TabsTrigger value="courses">Kursus Aktif</TabsTrigger>
        </TabsList>
        
        {/* Upcoming Classes Tab */}
        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingClasses.map(classItem => (
              <Card key={classItem.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between">
                    <span>{classItem.courseName}</span>
                    <Button variant="ghost" size="sm" asChild className="h-8">
                      <Link to={`/dashboard/student/schedule`}>
                        <Calendar size={16} className="mr-2" />
                        <span>Lihat Jadwal</span>
                      </Link>
                    </Button>
                  </CardTitle>
                  <CardDescription>{classItem.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-gray-500" />
                      <span>{classItem.time}</span>
                    </div>
                    <div className="flex items-center">
                      <FileText size={16} className="mr-2 text-gray-500" />
                      <span>Pengajar: {classItem.teacher}</span>
                    </div>
                    <div className="flex items-center">
                      <CheckSquare size={16} className="mr-2 text-gray-500" />
                      <span>Ruangan: {classItem.room}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {upcomingClasses.length === 0 && (
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">
                    Tidak ada jadwal kelas mendatang.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
        
        {/* Active Courses Tab */}
        <TabsContent value="courses" className="space-y-4">
          {activeCourses.map(course => (
            <Card key={course.id}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <span>{course.name}</span>
                  <Button variant="ghost" size="sm" asChild className="h-8">
                    <Link to={`/dashboard/student/my-courses/${course.id}`}>
                      <span>Detail Kursus</span>
                    </Link>
                  </Button>
                </CardTitle>
                <CardDescription>
                  {course.completedMeetings} dari {course.totalMeetings} pertemuan selesai
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                  <div className="text-sm text-muted-foreground">
                    <span>Pertemuan berikutnya: {course.nextClass}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <div className="flex justify-center mt-4">
            <Button asChild>
              <Link to="/dashboard/student/new-courses">Daftar Kursus Baru</Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default StudentDashboardPage;
