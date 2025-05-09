import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calendar } from "lucide-react";

// Mock data for exam results
const examResults = [
  {
    id: 1,
    courseName: "YCT Level 1",
    examName: "Ujian Tengah Semester",
    date: "15 Maret 2025",
    score: 85,
    maxScore: 100,
    status: "passed",
    feedback: "Excellent work on vocabulary and grammar. Need to improve on listening comprehension.",
    details: [
      { section: "Listening", score: 18, maxScore: 25 },
      { section: "Reading", score: 22, maxScore: 25 },
      { section: "Writing", score: 20, maxScore: 25 },
      { section: "Speaking", score: 25, maxScore: 25 }
    ]
  },
  {
    id: 2,
    courseName: "YCT Level 1",
    examName: "Quiz Mingguan #1",
    date: "22 Februari 2025",
    score: 90,
    maxScore: 100,
    status: "passed",
    feedback: "Great performance on all sections.",
    details: [
      { section: "Vocabulary", score: 45, maxScore: 50 },
      { section: "Grammar", score: 45, maxScore: 50 }
    ]
  },
  {
    id: 3,
    courseName: "YCT Level 1",
    examName: "Quiz Mingguan #2",
    date: "1 Maret 2025",
    score: 75,
    maxScore: 100,
    status: "passed",
    feedback: "Good work, but need to improve on grammar rules.",
    details: [
      { section: "Vocabulary", score: 42, maxScore: 50 },
      { section: "Grammar", score: 33, maxScore: 50 }
    ]
  }
];

const courses = [
  { id: 101, name: "YCT Level 1" },
];

const ExamResultsPage = () => {
  const [selectedExam, setSelectedExam] = useState(examResults[0]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "passed": return "bg-green-100 text-green-800";
      case "failed": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <DashboardLayout pageTitle="Hasil Ujian" userType="student">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Hasil Ujian</h1>
        <p className="text-gray-600">
          Lihat hasil ujian dan penilaian Anda.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Daftar Ujian</CardTitle>
              <CardDescription>Pilih ujian untuk melihat detail</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="space-y-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="all">Semua</TabsTrigger>
                  <TabsTrigger value="recent">Terbaru</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="space-y-2">
                  {examResults.map((exam) => (
                    <div 
                      key={exam.id}
                      className={`p-3 rounded-md cursor-pointer transition-colors ${selectedExam.id === exam.id ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'}`}
                      onClick={() => setSelectedExam(exam)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{exam.examName}</h3>
                          <p className="text-sm text-gray-500">{exam.courseName}</p>
                        </div>
                        <Badge className={getStatusColor(exam.status)}>
                          {exam.status === "passed" ? "Lulus" : "Gagal"}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span>{exam.date}</span>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="recent" className="space-y-2">
                  {examResults.slice(0, 2).map((exam) => (
                    <div 
                      key={exam.id}
                      className={`p-3 rounded-md cursor-pointer transition-colors ${selectedExam.id === exam.id ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'}`}
                      onClick={() => setSelectedExam(exam)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{exam.examName}</h3>
                          <p className="text-sm text-gray-500">{exam.courseName}</p>
                        </div>
                        <Badge className={getStatusColor(exam.status)}>
                          {exam.status === "passed" ? "Lulus" : "Gagal"}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span>{exam.date}</span>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{selectedExam.examName}</CardTitle>
                  <CardDescription>{selectedExam.courseName} • {selectedExam.date}</CardDescription>
                </div>
                <Badge className={getStatusColor(selectedExam.status)}>
                  {selectedExam.status === "passed" ? "Lulus" : "Gagal"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">Nilai Keseluruhan</h3>
                  <span className={`font-bold ${getScoreColor(selectedExam.score)}`}>
                    {selectedExam.score}/{selectedExam.maxScore}
                  </span>
                </div>
                <Progress value={(selectedExam.score / selectedExam.maxScore) * 100} className="h-2" />
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Detail Penilaian</h3>
                <div className="space-y-3">
                  {selectedExam.details.map((detail, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>{detail.section}</span>
                        <span className={getScoreColor(detail.score / detail.maxScore * 100)}>
                          {detail.score}/{detail.maxScore}
                        </span>
                      </div>
                      <Progress value={(detail.score / detail.maxScore) * 100} className="h-1.5" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Umpan Balik</h3>
                <p className="text-gray-700 text-sm">{selectedExam.feedback}</p>
              </div>
              
              <div className="pt-2">
                <Button variant="outline" className="w-full sm:w-auto">
                  <FileText className="mr-2 h-4 w-4" />
                  Unduh Detail Hasil
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ExamResultsPage;