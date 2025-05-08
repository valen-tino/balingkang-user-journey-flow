
import { Link } from "react-router-dom";
import LanguageSwitcher from "../common/LanguageSwitcher";

const LandingFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src="/placeholder.svg" alt="Balingkang Logo" className="h-10 w-10 mr-2" />
              <span className="text-xl font-bold">Balingkang</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Pusat Kursus Bahasa Mandarin terpercaya dengan program kurikulum internasional.
            </p>
            <div className="flex items-center">
              <span className="mr-2 text-gray-400">Bahasa:</span>
              <LanguageSwitcher />
            </div>
          </div>
          
          {/* Program */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Program</h3>
            <ul className="space-y-2">
              <li><Link to="/courses/yct" className="text-gray-400 hover:text-white transition">YCT (Anak-anak)</Link></li>
              <li><Link to="/courses/hsk" className="text-gray-400 hover:text-white transition">HSK (Remaja & Dewasa)</Link></li>
              <li><Link to="/courses/vip" className="text-gray-400 hover:text-white transition">Kelas VIP</Link></li>
              <li><Link to="/courses/special" className="text-gray-400 hover:text-white transition">Program Khusus</Link></li>
            </ul>
          </div>
          
          {/* Informasi */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informasi</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">Tentang Kami</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Hubungi Kami</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition">Syarat & Ketentuan</Link></li>
            </ul>
          </div>
          
          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Jl. Contoh No. 123</p>
              <p className="mb-2">Singaraja, Buleleng</p>
              <p className="mb-2">Bali, Indonesia</p>
            </address>
            <p className="text-gray-400 mb-2">Email: info@balingkang.com</p>
            <p className="text-gray-400">Tel: +62 123 4567 890</p>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="text-center text-gray-500">
          <p>&copy; {currentYear} Balingkang. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
