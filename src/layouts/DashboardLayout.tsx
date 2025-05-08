
import { ReactNode } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

interface DashboardLayoutProps {
  children: ReactNode;
  pageTitle: string;
  userType: "student" | "guardian" | "teacher";
}

const DashboardLayout = ({ 
  children, 
  pageTitle,
  userType,
}: DashboardLayoutProps) => {
  // Mock user data - in real app this would come from auth context
  const userName = "Putu Wijaya";
  const userProfilePic = "https://randomuser.me/api/portraits/men/32.jpg";

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <DashboardSidebar 
          userType={userType} 
          userName={userName}
          userProfilePic={userProfilePic}
        />
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader 
          pageTitle={pageTitle} 
          userType={userType}
          userName={userName}
          userProfilePic={userProfilePic}
        />
        
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
