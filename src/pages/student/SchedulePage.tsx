import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, User } from "lucide-react";

// Mock data for schedule
const scheduleData = {
  upcoming: [
    {
      id: 1,
      course: "YCT Level 1",
      instructor: "Li Wei",
      date: "Rabu, 15 Mei 2023",
      time: "10:00 - 12:00 WIB",
      location: "Ruang 101",
      topic: "Basic Conversation Practice",
      materials: ["Textbook p.45-50", "Workbook p.20-22"],
      type: "regular"
    },
    {
      id: 2,
      course: "HSK 1 Preparation",
      instructor: "Zhang Min",
      date: "Jumat, 17 Mei 2023",
      time: "13:00 - 15:00 WIB",
      location: "Ruang 203",
      topic: "Vocabulary Review",
      materials: ["Vocabulary List", "Practice Sheets"],
      type: "regular"
    },
    {
      id: 3,
      course: "YCT Level 1",
      instructor: "Li Wei",
      date: "Rabu, 22 Mei 2023",
      time: "10:00 - 12:00 WIB",
      location: "Ruang 101",
      topic: "Listening Practice",
      materials: ["Audio Files", "Textbook p.51-55"],
      type: "regular"
    },
    {
      id: 4,
      course: "HSK 1 Preparation",
      instructor: "Zhang Min",
      date: "Jumat, 24 Mei 2023",
      time: "13:00 - 15:00 WIB",
      location: "Ruang 203",
      topic: "Mock Exam",
      materials: ["Practice Test Papers"],
      type: "exam"
    }
  ],
  past: [
    {
      id: 5,
      course: "YCT Level 1",
      instructor: "Li Wei",
      date: "Rabu, 8 Mei 2023",
      time: "10:00 - 12:00 WIB",
      location: "Ruang 101",
      topic: "Numbers and Counting",
      materials: ["Textbook p.40-44", "Workbook p.18-19"],
      type: "regular",
      attendance: "present"
    },
    {
      id: 6,
      course: "HSK 1 Preparation",
      instructor: "Zhang Min",
      date: "Jumat, 10 Mei 2023",
      time: "13:00 - 15:00 WIB",
      location: "Ruang 203",
      topic: "Grammar Review",
      materials: ["Grammar Notes", "Exercise Sheets"],
      type: "regular",
      attendance: "present"
    },
    {
      id: 7,
      course: "YCT Level 1",
      instructor: "Li Wei",
      date: "Rabu, 1 Mei 2023",
      time: "10:00 - 12:00 WIB",
      location: "Ruang 101",
      topic: "Family Members",
      materials: ["Textbook p.35-39", "Workbook p.16-17"],
      type: "regular",
      attendance: "absent"
    }
  ]
};

const SchedulePage = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  
  return (
    <DashboardLayout pageTitle="Jadwal Kelas" userType="student">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Jadwal Kelas</h1>
        <p className="text-gray-600">
          Lihat jadwal kelas yang akan datang dan riwayat kelas yang telah berlalu.
        </p>
      </div>
      
      <Tabs defaultValue="upcoming" onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="upcoming">
            Akan Datang
            {scheduleData.upcoming.length > 0 && (
              <Badge variant="secondary" className="ml-2">{scheduleData.upcoming.length}</Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="past">
            Telah Berlalu
            {scheduleData.past.length > 0 && (
              <Badge variant="secondary" className="ml-2">{scheduleData.past.length}</Badge>
            )}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="space-y-4">
          {scheduleData.upcoming.length > 0 ? (
            <div className="space-y-4">
              {scheduleData.upcoming.map(session => (
                <Card key={session.id} className={session.type === "exam" ? "border-red-200 bg-red-50" : ""}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center">
                          {session.course}
                          {session.type === "exam" && (
                            <Badge variant="destructive" className="ml-2">Ujian</Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <User className="h-3 w-3 mr-1" />
                          {session.instructor}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{session.date}</div>
                        <div className="text-sm text-gray-500">{session.time}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium mb-1">Topik</h4>
                        <p className="text-gray-700">{session.topic}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Lokasi</h4>
                        <p className="text-gray-700 flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                          {session.location}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-1">Materi</h4>
                      <div className="flex flex-wrap gap-2">
                        {session.materials.map((material, index) => (
                          <Badge key={index} variant="outline">{material}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-end pt-2">
                      <Button variant="outline" size="sm" className="mr-2">
                        Lihat Detail
                      </Button>
                      <Button size="sm">
                        Tambahkan ke Kalender
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Calendar className="h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-1">Tidak Ada Jadwal Mendatang</h3>
                <p className="text-gray-500 text-center max-w-md mb-4">
                  Anda tidak memiliki jadwal kelas yang akan datang saat ini.
                </p>
                <Button>
                  Lihat Kursus Baru
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="past" className="space-y-4">
          {scheduleData.past.length > 0 ? (
            <div className="space-y-4">
              {scheduleData.past.map(session => (
                <Card key={session.id} className={session.attendance === "absent" ? "border-red-200" : ""}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{session.course}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <User className="h-3 w-3 mr-1" />
                          {session.instructor}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{session.date}</div>
                        <div className="text-sm text-gray-500">{session.time}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium mb-1">Topik</h4>
                        <p className="text-gray-700">{session.topic}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Lokasi</h4>
                        <p className="text-gray-700 flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                          {session.location}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-sm font-medium mb-1">Kehadiran</h4>
                        <Badge variant={session.attendance === "present" ? "outline" : "destructive"}>
                          {session.attendance === "present" ? "Hadir" : "Tidak Hadir"}
                        </Badge>
                      </div>
                      
                      <Button variant="outline" size="sm">
                        Lihat Materi
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Clock className="h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-1">Tidak Ada Riwayat Kelas</h3>
                <p className="text-gray-500 text-center max-w-md">
                  Anda belum menghadiri kelas apapun. Riwayat kelas akan muncul di sini setelah Anda menghadiri kelas.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default SchedulePage;