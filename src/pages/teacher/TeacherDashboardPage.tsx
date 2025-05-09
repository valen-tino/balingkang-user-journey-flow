
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";

// Mock data
const todayClasses = [
  {
    id: 1,
    courseName: "YCT Level 1",
    time: "15:00 - 16:30",
    students: 12,
    room: "Ruang Bamboo"
  },
  {
    id: 2,
    courseName: "HSK Level 2",
    time: "17:00 - 18:30",
    students: 8,
    room: "Ruang Lotus"
  }
];

const upcomingClasses = [
  {
    id: 3,
    courseName: "YCT Level 2",
    date: "Selasa, 13 Mei 2025",
    time: "15:00 - 16:30",
    students: 10,
    room: "Ruang Bamboo"
  }
];

const activeCourses = [
  {
    id: 101,
    name: "YCT Level 1",
    meetings: "Senin & Rabu, 15:00 - 16:30",
    students: 12,
    completedMeetings: 4,
    totalMeetings: 10
  },
  {
    id: 102,
    name: "HSK Level 2",
    meetings: "Senin, 17:00 - 18:30",
    students: 8,
    completedMeetings: 5,
    totalMeetings: 12
  },
  {
    id: 103,
    name: "YCT Level 2",
    meetings: "Selasa, 15:00 - 16:30",
    students: 10,
    completedMeetings: 3,
    totalMeetings: 10
  }
];

const TeacherDashboardPage = () => {
  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <DashboardLayout pageTitle="Dashboard" userType="teacher">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Selamat Datang, Ibu Wang!</h1>
        <p className="text-gray-600">
          {today} - Lihat jadwal mengajar dan kelas Anda di sini.
        </p>
      </div>
      
      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Total Kelas</CardTitle>
            <CardDescription>Semester Ini</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Total Siswa</CardTitle>
            <CardDescription>Semester Ini</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Kehadiran</CardTitle>
            <CardDescription>Rata-rata</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Hasil Ujian</CardTitle>
            <CardDescription>Perlu Diunggah</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <Button variant="outline" size="sm" className="mt-2 w-full" asChild>
              <Link to="/dashboard/teacher/upload-results">Unggah Hasil</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      
      {/* Main Content Tabs */}
      <Tabs defaultValue="today" className="space-y-4">
        <TabsList>
          <TabsTrigger value="today">Kelas Hari Ini</TabsTrigger>
          <TabsTrigger value="upcoming">Mendatang</TabsTrigger>
          <TabsTrigger value="all-classes">Semua Kelas</TabsTrigger>
        </TabsList>
        
        {/* Today's Classes Tab */}
        <TabsContent value="today" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {todayClasses.map(classItem => (
              <Card key={classItem.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between">
                    <span>{classItem.courseName}</span>
                    <Button variant="outline" size="sm" asChild className="h-8">
                      <Link to={`/dashboard/teacher/attendance/${classItem.id}`}>
                        Validasi Kehadiran
                      </Link>
                    </Button>
                  </CardTitle>
                  <CardDescription>Hari Ini</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-gray-500" />
                      <span>{classItem.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-2 text-gray-500" />
                      <span>{classItem.students} siswa</span>
                    </div>
                    <div className="flex items-center">
                      <FileText size={16} className="mr-2 text-gray-500" />
                      <span>Ruangan: {classItem.room}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {todayClasses.length === 0 && (
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">
                    Tidak ada kelas untuk hari ini.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
        
        {/* Upcoming Classes Tab */}
        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingClasses.map(classItem => (
              <Card key={classItem.id}>
                <CardHeader className="pb-2">
                  <CardTitle>{classItem.courseName}</CardTitle>
                  <CardDescription>{classItem.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-gray-500" />
                      <span>{classItem.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-2 text-gray-500" />
                      <span>{classItem.students} siswa</span>
                    </div>
                    <div className="flex items-center">
                      <FileText size={16} className="mr-2 text-gray-500" />
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
                    Tidak ada kelas mendatang dalam waktu dekat.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
          
          <div className="flex justify-center">
            <Button asChild variant="outline">
              <Link to="/dashboard/teacher/calendar">
                <Calendar size={16} className="mr-2" />
                Lihat Semua Jadwal
              </Link>
            </Button>
          </div>
        </TabsContent>
        
        {/* All Classes Tab */}
        <TabsContent value="all-classes" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {activeCourses.map(course => (
              <Card key={course.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between">
                    <span>{course.name}</span>
                    <Button variant="ghost" size="sm" asChild className="h-8">
                      <Link to={`/dashboard/teacher/classes/${course.id}`}>
                        Detail Kelas
                      </Link>
                    </Button>
                  </CardTitle>
                  <CardDescription>{course.meetings}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Users size={16} className="mr-2 text-gray-500" />
                        <span>{course.students} siswa</span>
                      </div>
                      <div className="flex items-center">
                        <FileText size={16} className="mr-2 text-gray-500" />
                        <span>
                          {course.completedMeetings}/{course.totalMeetings} pertemuan selesai
                        </span>
                      </div>
                    </div>
                    <div className="space-x-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link to={`/dashboard/teacher/attendance/${course.id}`}>
                          Kehadiran
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link to={`/dashboard/teacher/grades/${course.id}`}>
                          Nilai
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default TeacherDashboardPage;
