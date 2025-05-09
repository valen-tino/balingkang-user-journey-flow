import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Award, Calendar, CheckCircle2 } from "lucide-react";

// Mock data for certificates
const certificates = [
  {
    id: 1,
    courseName: "YCT Level 1",
    issueDate: "30 Juni 2025",
    validUntil: "30 Juni 2030",
    certificateId: "CONF-YCT1-2025-001",
    status: "issued",
    imageUrl: "/lovable-uploads/confucius-institute-logo.png"
  }
];

// Mock data for completed courses without certificates yet
const completedCourses = [
  {
    id: 101,
    courseName: "HSK 1 Preparation",
    completionDate: "15 Mei 2025",
    status: "processing",
    progress: 100
  }
];

const CertificatesPage = () => {
  const [activeTab, setActiveTab] = useState("available");

  return (
    <DashboardLayout pageTitle="Sertifikat" userType="student">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Sertifikat</h1>
        <p className="text-gray-600">
          Unduh dan kelola sertifikat kursus Anda.
        </p>
      </div>
      
      <Tabs defaultValue="available" onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="available">
            Tersedia
            {certificates.length > 0 && (
              <Badge variant="secondary" className="ml-2">{certificates.length}</Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="pending">
            Dalam Proses
            {completedCourses.length > 0 && (
              <Badge variant="secondary" className="ml-2">{completedCourses.length}</Badge>
            )}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="available" className="space-y-4">
          {certificates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certificates.map(certificate => (
                <Card key={certificate.id} className="overflow-hidden">
                  <div className="bg-blue-50 p-6 flex justify-center">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <img 
                        src={certificate.imageUrl} 
                        alt={certificate.courseName} 
                        className="w-full h-auto object-contain"
                      />
                      <div className="absolute -bottom-2 -right-2">
                        <CheckCircle2 className="h-6 w-6 text-green-600 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{certificate.courseName}</CardTitle>
                    <CardDescription>ID: {certificate.certificateId}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                      <span>Diterbitkan: {certificate.issueDate}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Award className="mr-2 h-4 w-4 text-gray-500" />
                      <span>Berlaku hingga: {certificate.validUntil}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Unduh Sertifikat
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Award className="h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-1">Belum Ada Sertifikat</h3>
                <p className="text-gray-500 text-center max-w-md">
                  Anda belum memiliki sertifikat yang tersedia. Selesaikan kursus untuk mendapatkan sertifikat.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="pending" className="space-y-4">
          {completedCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {completedCourses.map(course => (
                <Card key={course.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{course.courseName}</CardTitle>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        Dalam Proses
                      </Badge>
                    </div>
                    <CardDescription>
                      Kursus selesai pada {course.completionDate}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Status Sertifikat</p>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                          <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: `${course.status === 'processing' ? 70 : 0}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">70%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Sertifikat Anda sedang diproses dan akan tersedia dalam 3-5 hari kerja.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Award className="h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-1">Tidak Ada Sertifikat Dalam Proses</h3>
                <p className="text-gray-500 text-center max-w-md">
                  Anda tidak memiliki sertifikat yang sedang diproses saat ini.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default CertificatesPage;