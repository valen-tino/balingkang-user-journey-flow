
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, CheckSquare, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";

// Mock data
const wards = [
  {
    id: 1,
    name: "Putu Wijaya",
    age: 10,
    courses: [
      {
        id: 101,
        name: "YCT Level 1",
        progress: 40,
        nextClass: "Senin, 12 Mei 2025"
      }
    ]
  }
];

const upcomingClasses = [
  {
    id: 1,
    wardName: "Putu Wijaya",
    courseName: "YCT Level 1",
    date: "Senin, 12 Mei 2025",
    time: "15:00 - 16:30",
    teacher: "Ibu Wang Li",
    room: "Ruang Bamboo"
  },
  {
    id: 2,
    wardName: "Putu Wijaya",
    courseName: "YCT Level 1",
    date: "Rabu, 14 Mei 2025",
    time: "15:00 - 16:30",
    teacher: "Ibu Wang Li",
    room: "Ruang Bamboo"
  }
];

const GuardianDashboardPage = () => {
  return (
    <DashboardLayout pageTitle="Dashboard Wali" userType="guardian">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Selamat Datang!</h1>
        <p className="text-gray-600">
          Pantau perkembangan anak Anda di sini.
        </p>
      </div>
      
      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Status Anak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{wards.length}</div>
            <p className="text-xs text-muted-foreground">Terdaftar</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Kursus Aktif
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Sedang berlangsung</p>
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
      </div>
      
      {/* Main Content Tabs */}
      <Tabs defaultValue="wards" className="space-y-4">
        <TabsList>
          <TabsTrigger value="wards">Daftar Anak</TabsTrigger>
          <TabsTrigger value="upcoming">Jadwal Mendatang</TabsTrigger>
        </TabsList>
        
        {/* Wards List Tab */}
        <TabsContent value="wards" className="space-y-4">
          {wards.map(ward => (
            <Card key={ward.id}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <span>{ward.name}</span>
                  <Button variant="ghost" size="sm" asChild className="h-8">
                    <Link to={`/dashboard/guardian/ward/${ward.id}`}>
                      <span>Lihat Detail</span>
                    </Link>
                  </Button>
                </CardTitle>
                <CardDescription>Usia {ward.age} tahun</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Kursus yang Diikuti</h4>
                  {ward.courses.map(course => (
                    <div key={course.id} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>{course.name}</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <div className="text-sm text-muted-foreground">
                        <span>Pertemuan berikutnya: {course.nextClass}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          
          <div className="flex justify-center mt-4">
            <Button asChild>
              <Link to="/dashboard/guardian/add-ward">Tambah Anak</Link>
            </Button>
          </div>
        </TabsContent>
        
        {/* Upcoming Classes Tab */}
        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingClasses.map(classItem => (
              <Card key={classItem.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between">
                    <span>{classItem.courseName}</span>
                    <Button variant="ghost" size="sm" asChild className="h-8">
                      <Link to={`/dashboard/guardian/schedule`}>
                        <Calendar size={16} className="mr-2" />
                        <span>Lihat Jadwal</span>
                      </Link>
                    </Button>
                  </CardTitle>
                  <CardDescription>{classItem.date} - {classItem.wardName}</CardDescription>
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
      </Tabs>
    </DashboardLayout>
  );
};

export default GuardianDashboardPage;
