import { useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Calendar, Clock, Download, FileText, Users } from "lucide-react";

// Mock data for class details
const classData = {
  id: "1",
  title: "YCT Level 1 - Batch 23",
  schedule: "Rabu, 10:00 - 12:00 WIB",
  location: "Ruang 101",
  startDate: "15 Januari 2023",
  endDate: "30 Juni 2023",
  progress: 65,
  totalSessions: 24,
  completedSessions: 16,
  totalStudents: 25,
  activeStudents: 23,
  materials: [
    { id: 1, title: "Introduction to Chinese Characters", type: "pdf", date: "15 Jan 2023" },
    { id: 2, title: "Basic Greetings and Conversations", type: "pdf", date: "22 Jan 2023" },
    { id: 3, title: "Numbers and Counting", type: "pdf", date: "29 Jan 2023" },
    { id: 4, title: "Family Members", type: "pdf", date: "5 Feb 2023" },
    { id: 5, title: "Mid-term Review", type: "pdf", date: "12 Feb 2023" },
  ],
  students: [
    { id: 1, name: "Ahmad Rizky", attendance: 95, progress: 70, lastAttended: "10 Apr 2023" },
    { id: 2, name: "Budi Santoso", attendance: 100, progress: 85, lastAttended: "10 Apr 2023" },
    { id: 3, name: "Citra Dewi", attendance: 85, progress: 60, lastAttended: "3 Apr 2023" },
    { id: 4, name: "Dian Purnama", attendance: 90, progress: 75, lastAttended: "10 Apr 2023" },
    { id: 5, name: "Eko Prasetyo", attendance: 75, progress: 50, lastAttended: "27 Mar 2023" },
  ]
};

const ClassDetailsPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  
  // In a real app, we would fetch class data based on the ID
  // const { data: classData, isLoading } = useQuery(['class', id], () => fetchClassById(id));
  
  return (
    <DashboardLayout pageTitle={`Kelas: ${classData.title}`} userType="teacher">
      <div className="mb-6">
        <Button variant="ghost" className="mb-2 -ml-3 text-gray-600" asChild>
          <a href="/dashboard/teacher">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Kembali ke Dashboard
          </a>
        </Button>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">{classData.title}</h1>
            <p className="text-gray-600 flex items-center mt-1">
              <Calendar className="h-4 w-4 mr-1" />
              {classData.schedule} • {classData.location}
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Laporan Kelas
            </Button>
            <Button>
              <Users className="mr-2 h-4 w-4" />
              Absensi
            </Button>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="overview" onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Ikhtisar</TabsTrigger>
          <TabsTrigger value="students">Siswa</TabsTrigger>
          <TabsTrigger value="materials">Materi</TabsTrigger>
          <TabsTrigger value="attendance">Kehadiran</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Progres Kelas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{classData.progress}%</div>
                <Progress value={classData.progress} className="h-2 mt-2" />
                <p className="text-xs text-gray-500 mt-2">
                  {classData.completedSessions} dari {classData.totalSessions} pertemuan
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Siswa</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{classData.totalStudents}</div>
                <p className="text-xs text-gray-500 mt-2">
                  {classData.activeStudents} siswa aktif
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Tanggal Mulai</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{classData.startDate}</div>
                <p className="text-xs text-gray-500 mt-2">
                  <Clock className="inline h-3 w-3 mr-1" />
                  {classData.schedule.split(",")[0]}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Tanggal Selesai</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{classData.endDate}</div>
                <p className="text-xs text-gray-500 mt-2">
                  <Clock className="inline h-3 w-3 mr-1" />
                  {classData.schedule.split(",")[0]}
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Siswa Teratas</CardTitle>
                <CardDescription>Berdasarkan progres dan kehadiran</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {classData.students.slice(0, 3).map(student => (
                    <div key={student.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar className="h-9 w-9 mr-3">
                          <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${student.name}`} />
                          <AvatarFallback>{student.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{student.name}</p>
                          <p className="text-xs text-gray-500">Kehadiran: {student.attendance}%</p>
                        </div>
                      </div>
                      <div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {student.progress}%
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Materi Terbaru</CardTitle>
                <CardDescription>5 materi terakhir yang diunggah</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {classData.materials.slice(0, 3).map(material => (
                    <div key={material.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-9 w-9 p-2 mr-3 bg-gray-100 rounded-md text-gray-500" />
                        <div>
                          <p className="text-sm font-medium">{material.title}</p>
                          <p className="text-xs text-gray-500">Diunggah: {material.date}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="students" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Daftar Siswa</CardTitle>
              <CardDescription>Total {classData.totalStudents} siswa terdaftar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classData.students.map(student => (
                  <div key={student.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${student.name}`} />
                        <AvatarFallback>{student.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-gray-500">Terakhir hadir: {student.lastAttended}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm">Kehadiran</p>
                        <p className="font-medium">{student.attendance}%</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">Progres</p>
                        <p className="font-medium">{student.progress}%</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Detail
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="materials" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Materi Pembelajaran</CardTitle>
                <CardDescription>Total {classData.materials.length} materi</CardDescription>
              </div>
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Unggah Materi
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classData.materials.map(material => (
                  <div key={material.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center">
                      <FileText className="h-10 w-10 p-2 mr-3 bg-gray-100 rounded-md text-gray-500" />
                      <div>
                        <p className="font-medium">{material.title}</p>
                        <p className="text-sm text-gray-500">Diunggah: {material.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="attendance" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Rekap Kehadiran</CardTitle>
                <CardDescription>{classData.completedSessions} dari {classData.totalSessions} pertemuan</CardDescription>
              </div>
              <Button>
                <Users className="mr-2 h-4 w-4" />
                Absensi Hari Ini
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-4">Pilih tanggal pertemuan untuk melihat detail kehadiran.</p>
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, index) => {
                  const date = new Date();
                  date.setDate(date.getDate() - (index * 7));
                  const formattedDate = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
                  
                  return (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                      <div>
                        <p className="font-medium">Pertemuan {classData.completedSessions - index}</p>
                        <p className="text-sm text-gray-500">{formattedDate}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm">Hadir</p>
                          <p className="font-medium">{Math.floor(Math.random() * 5) + 20} siswa</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Detail
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default ClassDetailsPage;