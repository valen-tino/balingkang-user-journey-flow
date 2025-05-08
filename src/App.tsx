
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
import NewCoursesPage from "./pages/student/NewCoursesPage";
import AttendancePage from "./pages/teacher/AttendancePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile/create" element={<ProfileCreatePage />} />
          
          {/* Student Routes */}
          <Route path="/dashboard/student" element={<StudentDashboardPage />} />
          <Route path="/dashboard/student/new-courses" element={<NewCoursesPage />} />
          
          {/* Teacher Routes */}
          <Route path="/dashboard/teacher" element={<TeacherDashboardPage />} />
          <Route path="/dashboard/teacher/attendance/:classId" element={<AttendancePage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
