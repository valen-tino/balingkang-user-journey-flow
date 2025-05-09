import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, CheckCircle, AlertCircle, Download, Plus } from "lucide-react";

// Mock data for classes
const classes = [
  { id: 1, name: "YCT Level 1 - Kelas A", students: 12, examType: "Ujian Tengah Semester" },
  { id: 2, name: "YCT Level 1 - Kelas B", students: 10, examType: "Quiz Mingguan" },
];

// Mock data for students
const students = [
  { id: 101, name: "Made Surya", studentId: "S2025001", status: "pending" },
  { id: 102, name: "Ni Kadek Ayu", studentId: "S2025002", status: "pending" },
  { id: 103, name: "I Wayan Dharma", studentId: "S2025003", status: "pending" },
  { id: 104, name: "Ni Made Dewi", studentId: "S2025004", status: "pending" },
  { id: 105, name: "I Ketut Bayu", studentId: "S2025005", status: "pending" },
];

// Mock data for previous uploads
const previousUploads = [
  { 
    id: 201, 
    className: "YCT Level 1 - Kelas A", 
    examType: "Quiz Mingguan #1", 
    uploadDate: "22 Februari 2025", 
    studentsCount: 12,
    status: "completed"
  },
  { 
    id: 202, 
    className: "YCT Level 1 - Kelas B", 
    examType: "Quiz Mingguan #1", 
    uploadDate: "23 Februari 2025", 
    studentsCount: 10,
    status: "completed"
  },
];

const UploadResultsPage = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [examType, setExamType] = useState("");
  const [examDate, setExamDate] = useState("");
  const [uploadMethod, setUploadMethod] = useState("manual");
  const [studentScores, setStudentScores] = useState<Record<number, { score: string, feedback: string }>>({});
  
  const handleScoreChange = (studentId: number, value: string) => {
    setStudentScores(prev => ({
      ...prev,
      [studentId]: { ...prev[studentId], score: value }
    }));
  };
  
  const handleFeedbackChange = (studentId: number, value: string) => {
    setStudentScores(prev => ({
      ...prev,
      [studentId]: { ...prev[studentId], feedback: value }
    }));
  };
  
  const handleSubmit = () => {
    // In a real application, this would submit the data to an API
    alert("Hasil ujian berhasil diunggah!");
  };

  return (
    <DashboardLayout pageTitle="Unggah Hasil Ujian" userType="teacher">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Unggah Hasil Ujian</h1>
        <p className="text-gray-600">
          Unggah dan kelola hasil ujian untuk siswa Anda.
        </p>
      </div>
      
      <Tabs defaultValue="upload" className="space-y-6">
        <TabsList>
          <TabsTrigger value="upload">Unggah Hasil Baru</TabsTrigger>
          <TabsTrigger value="history">Riwayat Unggahan</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Detail Ujian</CardTitle>
              <CardDescription>Masukkan informasi ujian yang akan diunggah hasilnya</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="class">Kelas</Label>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger id="class">
                      <SelectValue placeholder="Pilih kelas" />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map(cls => (
                        <SelectItem key={cls.id} value={cls.id.toString()}>
                          {cls.name} ({cls.students} siswa)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="examType">Jenis Ujian</Label>
                  <Select value={examType} onValueChange={setExamType}>
                    <SelectTrigger id="examType">
                      <SelectValue placeholder="Pilih jenis ujian" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="midterm">Ujian Tengah Semester</SelectItem>
                      <SelectItem value="final">Ujian Akhir Semester</SelectItem>
                      <SelectItem value="quiz">Quiz Mingguan</SelectItem>
                      <SelectItem value="assignment">Tugas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="examDate">Tanggal Ujian</Label>
                  <Input 
                    id="examDate" 
                    type="date" 
                    value={examDate} 
                    onChange={(e) => setExamDate(e.target.value)} 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Metode Unggah</CardTitle>
              <CardDescription>Pilih cara untuk mengunggah hasil ujian</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={uploadMethod} onValueChange={setUploadMethod} className="space-y-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="manual">Input Manual</TabsTrigger>
                  <TabsTrigger value="file">Unggah File</TabsTrigger>
                </TabsList>
                
                <TabsContent value="manual" className="space-y-4">
                  {selectedClass ? (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-medium">Daftar Siswa</h3>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Unduh Template
                        </Button>
                      </div>
                      
                      <div className="border rounded-md">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[50px]">No.</TableHead>
                              <TableHead>Nama Siswa</TableHead>
                              <TableHead>ID Siswa</TableHead>
                              <TableHead className="w-[120px]">Nilai</TableHead>
                              <TableHead>Umpan Balik</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {students.map((student, index) => (
                              <TableRow key={student.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.studentId}</TableCell>
                                <TableCell>
                                  <Input 
                                    type="number" 
                                    min="0" 
                                    max="100" 
                                    placeholder="0-100"
                                    value={studentScores[student.id]?.score || ""}
                                    onChange={(e) => handleScoreChange(student.id, e.target.value)}
                                  />
                                </TableCell>
                                <TableCell>
                                  <Textarea 
                                    placeholder="Umpan balik (opsional)"
                                    className="min-h-[60px]"
                                    value={studentScores[student.id]?.feedback || ""}
                                    onChange={(e) => handleFeedbackChange(student.id, e.target.value)}
                                  />
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-6 text-gray-500">
                      Silakan pilih kelas terlebih dahulu untuk melihat daftar siswa.
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="file" className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="bg-blue-50 p-3 rounded-full">
                        <Upload className="h-6 w-6 text-blue-500" />
                      </div>
                      <h3 className="font-medium">Unggah File Hasil Ujian</h3>
                      <p className="text-sm text-gray-500 max-w-md">
                        Seret dan lepas file Excel atau CSV, atau klik untuk memilih file.
                        Pastikan format file sesuai dengan template.
                      </p>
                      <Button variant="outline" className="mt-2">
                        <FileText className="mr-2 h-4 w-4" />
                        Pilih File
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      Format yang didukung: .xlsx, .csv
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Unduh Template
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline">Batal</Button>
              <Button onClick={handleSubmit}>Unggah Hasil</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Riwayat Unggahan</CardTitle>
              <CardDescription>Daftar hasil ujian yang telah diunggah sebelumnya</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Kelas</TableHead>
                      <TableHead>Jenis Ujian</TableHead>
                      <TableHead>Tanggal Unggah</TableHead>
                      <TableHead>Jumlah Siswa</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {previousUploads.map((upload) => (
                      <TableRow key={upload.id}>
                        <TableCell>{upload.className}</TableCell>
                        <TableCell>{upload.examType}</TableCell>
                        <TableCell>{upload.uploadDate}</TableCell>
                        <TableCell>{upload.studentsCount}</TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline" 
                            className={upload.status === "completed" ? "bg-green-50 text-green-700 border-green-200" : "bg-yellow-50 text-yellow-700 border-yellow-200"}
                          >
                            {upload.status === "completed" ? (
                              <>
                                <CheckCircle className="mr-1 h-3 w-3" />
                                Selesai
                              </>
                            ) : (
                              <>
                                <AlertCircle className="mr-1 h-3 w-3" />
                                Dalam Proses
                              </>
                            )}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">Lihat Detail</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default UploadResultsPage;