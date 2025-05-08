
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "../common/LanguageSwitcher";
import { cn } from "@/lib/utils";

const LandingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/placeholder.svg" alt="Balingkang Logo" className="h-10 w-10 mr-2" />
            <span className="text-xl font-bold text-primary">Balingkang</span>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary transition">Beranda</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition">Tentang Kami</Link>
            <Link to="/courses" className="text-gray-700 hover:text-primary transition">Kursus</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition">Kontak</Link>
            <LanguageSwitcher />
            <div className="flex space-x-2">
              <Button variant="ghost" asChild>
                <Link to="/login">Masuk</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Daftar</Link>
              </Button>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <LanguageSwitcher />
            <button 
              onClick={toggleMenu} 
              className="ml-2 p-2 focus:outline-none"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-primary transition py-2" onClick={toggleMenu}>Beranda</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition py-2" onClick={toggleMenu}>Tentang Kami</Link>
            <Link to="/courses" className="text-gray-700 hover:text-primary transition py-2" onClick={toggleMenu}>Kursus</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition py-2" onClick={toggleMenu}>Kontak</Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" asChild onClick={toggleMenu} className="w-full">
                <Link to="/login">Masuk</Link>
              </Button>
              <Button asChild onClick={toggleMenu} className="w-full">
                <Link to="/register">Daftar</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default LandingNavbar;
