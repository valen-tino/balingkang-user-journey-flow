
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Bell, 
  Menu,
  ChevronDown,
  Settings,
  LogOut,
  User
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DashboardSidebar from "./DashboardSidebar";
import LanguageSwitcher from "../common/LanguageSwitcher";

interface DashboardHeaderProps {
  pageTitle: string;
  userType: "student" | "guardian" | "teacher";
  userName: string;
  userProfilePic?: string;
}

const DashboardHeader = ({
  pageTitle,
  userType,
  userName,
  userProfilePic,
}: DashboardHeaderProps) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleLogout = () => {
    // Handle logout logic
    console.log("Logging out...");
    window.location.href = "/";
  };

  return (
    <header className="bg-white border-b h-16 flex items-center px-4 justify-between sticky top-0 z-30">
      {/* Left side - Mobile menu & logo */}
      <div className="flex items-center">
        <Sheet open={isMobileSidebarOpen} onOpenChange={setIsMobileSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden mr-2">
              <Menu size={20} />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <DashboardSidebar
              userType={userType}
              userName={userName}
              userProfilePic={userProfilePic}
            />
          </SheetContent>
        </Sheet>

        <Link to="/" className="flex items-center">
          <img src="/placeholder.svg" alt="Balingkang Logo" className="h-8 w-8 mr-2" />
          <span className="font-bold text-primary hidden sm:inline">Balingkang</span>
        </Link>

        <div className="h-6 border-l mx-4 hidden md:block"></div>
        
        <h1 className="text-lg font-semibold hidden md:block">{pageTitle}</h1>
      </div>

      {/* Mobile Page Title */}
      <div className="flex-1 text-center md:hidden">
        <h1 className="text-lg font-semibold">{pageTitle}</h1>
      </div>
      
      {/* Right side - notifications & user menu */}
      <div className="flex items-center space-x-1">
        {/* Language Switcher */}
        <div className="hidden sm:block">
          <LanguageSwitcher />
        </div>
        
        {/* Notification Button */}
        <Button variant="ghost" size="icon">
          <Bell size={20} />
          <span className="sr-only">Notifications</span>
        </Button>
        
        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2 p-1 pl-2">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                {userProfilePic ? (
                  <img src={userProfilePic} alt={userName} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-semibold">
                    {userName.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <span className="max-w-[100px] truncate hidden sm:inline">
                {userName}
              </span>
              <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="flex items-center px-3 py-2 sm:hidden">
              <div className="font-medium">{userName}</div>
            </div>
            <DropdownMenuSeparator className="sm:hidden" />
            <DropdownMenuItem asChild>
              <Link to={`/dashboard/${userType}/biodata`} className="flex cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profil Saya</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/dashboard/settings" className="flex cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Pengaturan</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="flex cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
