
import { FC } from "react";
import { NavLink } from "react-router-dom";
import {
  User,
  BookOpen,
  Calendar,
  CheckSquare,
  Award,
  Settings,
  LogOut,
  Home,
  FileText,
  Upload,
  Users,
  GraduationCap,
  CalendarDays,
  ClipboardCheck,
  LayoutDashboard,
  UserPlus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  end?: boolean;
}

const SidebarLink: FC<SidebarLinkProps> = ({ to, icon, children, end }) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => cn(
        "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
        "hover:bg-primary/10 hover:text-primary",
        isActive ? "bg-primary/10 text-primary" : "text-gray-700"
      )}
    >
      <span className="mr-3">{icon}</span>
      <span>{children}</span>
    </NavLink>
  );
};

interface DashboardSidebarProps {
  userType: "student" | "guardian" | "teacher";
  userName: string;
  userProfilePic?: string;
}

const DashboardSidebar: FC<DashboardSidebarProps> = ({ userType, userName, userProfilePic }) => {
  // Different navigation links based on user type
  const renderNavLinks = () => {
    switch (userType) {
      case "teacher":
        return (
          <>
            <SidebarLink to="/dashboard/teacher" icon={<LayoutDashboard size={18} />} end>
              Dashboard
            </SidebarLink>
            <SidebarLink to="/dashboard/teacher/attendance" icon={<ClipboardCheck size={18} />}>
              Absensi
            </SidebarLink>
            <SidebarLink to="/dashboard/teacher/grades" icon={<FileText size={18} />}>
              Nilai
            </SidebarLink>
            <SidebarLink to="/dashboard/teacher/upload-results" icon={<Upload size={18} />}>
              Unggah Hasil Ujian
            </SidebarLink>
          </>
        );
      case "guardian":
      case "student":
      default:
        return (
          <>
            <SidebarLink to="/dashboard/student" icon={<LayoutDashboard size={18} />} end>
              Dashboard
            </SidebarLink>
            <SidebarLink to="/dashboard/student/biodata" icon={<User size={18} />}>
              Biodata
            </SidebarLink>
            <SidebarLink to="/dashboard/student/new-courses" icon={<GraduationCap size={18} />}>
              Kursus Baru
            </SidebarLink>
            <SidebarLink to="/dashboard/student/my-courses" icon={<BookOpen size={18} />}>
              Kursus Saya
            </SidebarLink>
            <SidebarLink to="/dashboard/student/schedule" icon={<CalendarDays size={18} />}>
              Jadwal
            </SidebarLink>
            <SidebarLink to="/dashboard/student/classmates" icon={<Users size={18} />}>
              Teman Sekelas
            </SidebarLink>
            <SidebarLink to="/dashboard/student/exam-results" icon={<FileText size={18} />}>
              Hasil Ujian
            </SidebarLink>
            <SidebarLink to="/dashboard/student/certificates" icon={<Award size={18} />}>
              Sertifikat
            </SidebarLink>
          </>
        );
    }
  };

  const handleLogout = () => {
    // Here you'd implement logout logic
    console.log("Logging out...");
    // Redirect to home page or login page
    window.location.href = "/";
  };

  return (
    <div className="w-64 border-r bg-white h-screen flex flex-col">
      {/* User Info */}
      <div className="p-4 border-b flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-gray-200">
          {userProfilePic ? (
            <img src={userProfilePic} alt={userName} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-semibold">
              {userName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="overflow-hidden">
          <h3 className="font-medium text-sm truncate">{userName}</h3>
          <p className="text-xs text-gray-500 capitalize">{userType}</p>
        </div>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {renderNavLinks()}
      </nav>
      
      {/* Footer Links */}
      <div className="p-4 border-t space-y-1">
        <SidebarLink to="/dashboard/settings" icon={<Settings size={18} />}>
          Pengaturan
        </SidebarLink>
        <Button 
          variant="ghost" 
          className="w-full justify-start text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut size={18} className="mr-3" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
