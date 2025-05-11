
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfileCreatePage from "./pages/ProfileCreatePage";
import StudentDashboardPage from "./pages/student/StudentDashboardPage";
import TeacherDashboardPage from "./pages/teacher/TeacherDashboardPage";
import GuardianDashboardPage from "./pages/guardian/GuardianDashboardPage";
import NewCoursesPage from "./pages/student/NewCoursesPage";
import MyCoursesPage from "./pages/student/MyCoursesPage";
import ClassmatesPage from "./pages/student/ClassmatesPage";
import ExamResultsPage from "./pages/student/ExamResultsPage";
import CertificatesPage from "./pages/student/CertificatesPage";
import SchedulePage from "./pages/student/SchedulePage";
import AttendancePage from "./pages/teacher/AttendancePage";
import ClassDetailsPage from "./pages/teacher/ClassDetailsPage";
import UploadResultsPage from "./pages/teacher/UploadResultsPage";
import AboutPage from "./pages/AboutPage";
import BiodataPage from "./pages/student/BiodataPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import DesignSystemPage from "./pages/DesignSystemPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile/create" element={<ProfileCreatePage />} />
          <Route path="/design-system" element={<DesignSystemPage />} />
          
          {/* Student Routes - now public */}
          <Route path="/dashboard/student" element={<StudentDashboardPage />} />
          <Route path="/dashboard/student/biodata" element={<BiodataPage />} />
          <Route path="/dashboard/student/new-courses" element={<NewCoursesPage />} />
          <Route path="/dashboard/student/my-courses" element={<MyCoursesPage />} />
          <Route path="/dashboard/student/classmates" element={<ClassmatesPage />} />
          <Route path="/dashboard/student/exam-results" element={<ExamResultsPage />} />
          <Route path="/dashboard/student/certificates" element={<CertificatesPage />} />
          <Route path="/dashboard/student/schedule" element={<SchedulePage />} />
          
          {/* Teacher Routes - now public */}
          <Route path="/dashboard/teacher" element={<TeacherDashboardPage />} />
          <Route path="/dashboard/teacher/attendance" element={<AttendancePage />} />
          <Route path="/dashboard/teacher/class/:id" element={<ClassDetailsPage />} />
          <Route path="/dashboard/teacher/upload-results" element={<UploadResultsPage />} />
          
          {/* Guardian Routes - now public */}
          <Route path="/dashboard/guardian" element={<GuardianDashboardPage />} />
          <Route path="/dashboard/guardian/ward/:wardId" element={<GuardianDashboardPage />} />
          <Route path="/dashboard/guardian/add-ward" element={<GuardianDashboardPage />} />
          <Route path="/dashboard/guardian/schedule" element={<GuardianDashboardPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
