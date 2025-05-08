
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
import AttendancePage from "./pages/teacher/AttendancePage";
import AboutPage from "./pages/AboutPage";
import BiodataPage from "./pages/student/BiodataPage";

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
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile/create" element={<ProfileCreatePage />} />
          
          {/* Student Routes */}
          <Route path="/dashboard/student" element={<StudentDashboardPage />} />
          <Route path="/dashboard/student/biodata" element={<BiodataPage />} />
          <Route path="/dashboard/student/new-courses" element={<NewCoursesPage />} />
          
          {/* Teacher Routes */}
          <Route path="/dashboard/teacher" element={<TeacherDashboardPage />} />
          <Route path="/dashboard/teacher/attendance/:classId" element={<AttendancePage />} />
          
          {/* Guardian Routes */}
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
