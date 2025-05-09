import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Mail, MessageSquare } from "lucide-react";

// Mock data for classmates
const classmates = [
  {
    id: 1,
    name: "Made Surya",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    course: "YCT Level 1",
    joinDate: "Februari 2025",
    status: "active"
  },
  {
    id: 2,
    name: "Ni Kadek Ayu",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    course: "YCT Level 1",
    joinDate: "Februari 2025",
    status: "active"
  },
  {
    id: 3,
    name: "I Wayan Dharma",
    photo: "https://randomuser.me/api/portraits/men/67.jpg",
    course: "YCT Level 1",
    joinDate: "Februari 2025",
    status: "active"
  },
  {
    id: 4,
    name: "Ni Made Dewi",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
    course: "YCT Level 1",
    joinDate: "Februari 2025",
    status: "active"
  },
  {
    id: 5,
    name: "I Ketut Bayu",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    course: "YCT Level 1",
    joinDate: "Februari 2025",
    status: "active"
  }
];

const courses = [
  { id: 101, name: "YCT Level 1", students: 12 },
];

const ClassmatesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredClassmates = classmates.filter(classmate =>
    classmate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout pageTitle="Teman Sekelas" userType="student">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Teman Sekelas</h1>
        <p className="text-gray-600">
          Lihat dan hubungi teman-teman sekelas Anda.
        </p>
      </div>
      
      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="all">Semua Kelas</TabsTrigger>
            {courses.map(course => (
              <TabsTrigger key={course.id} value={course.id.toString()}>
                {course.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Cari nama..."
              className="pl-8 w-full sm:w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredClassmates.length > 0 ? (
              filteredClassmates.map(classmate => (
                <Card key={classmate.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={classmate.photo} alt={classmate.name} />
                        <AvatarFallback>{classmate.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{classmate.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{classmate.course}</p>
                        <p className="text-xs text-gray-500">Bergabung: {classmate.joinDate}</p>
                        
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm" className="h-8 px-2">
                            <Mail className="h-4 w-4 mr-1" />
                            <span className="sr-only sm:not-sr-only sm:inline-block">Email</span>
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 px-2">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            <span className="sr-only sm:not-sr-only sm:inline-block">Pesan</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="col-span-full">
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">
                    Tidak ada teman sekelas yang ditemukan.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
        
        {courses.map(course => (
          <TabsContent key={course.id} value={course.id.toString()} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredClassmates
                .filter(classmate => classmate.course === course.name)
                .map(classmate => (
                  <Card key={classmate.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={classmate.photo} alt={classmate.name} />
                          <AvatarFallback>{classmate.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{classmate.name}</h3>
                          <p className="text-sm text-gray-500 mb-2">{classmate.course}</p>
                          <p className="text-xs text-gray-500">Bergabung: {classmate.joinDate}</p>
                          
                          <div className="flex gap-2 mt-4">
                            <Button variant="outline" size="sm" className="h-8 px-2">
                              <Mail className="h-4 w-4 mr-1" />
                              <span className="sr-only sm:not-sr-only sm:inline-block">Email</span>
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 px-2">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              <span className="sr-only sm:not-sr-only sm:inline-block">Pesan</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </DashboardLayout>
  );
};

export default ClassmatesPage;