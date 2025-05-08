
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingFooter from "@/components/landing/LandingFooter";
import { useEffect } from "react";

const ContactPage = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Set page title
    document.title = "Kontak Kami | Balingkang - Pusat Kursus Bahasa Mandarin";
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: "Pesan Terkirim",
      description: "Terima kasih atas pesan Anda. Kami akan segera menghubungi Anda.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <main className="flex-grow py-16">
        <div className="container px-4 mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Hubungi Kami</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Informasi Kontak</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Alamat</h3>
                    <p className="text-gray-600">Jl. Ahmad Yani No. 45, Singaraja, Bali 81113</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">info@balingkang.edu</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Telepon</h3>
                    <p className="text-gray-600">+62 362 123456</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Jam Operasional</h3>
                    <p className="text-gray-600">Senin - Jumat: 09:00 - 17:00</p>
                    <p className="text-gray-600">Sabtu: 09:00 - 12:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama</Label>
                    <Input id="name" placeholder="Nama lengkap Anda" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@contoh.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subjek</Label>
                    <Input id="subject" placeholder="Subjek pesan Anda" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tulis pesan Anda di sini..." 
                      className="min-h-[120px]"
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full">Kirim Pesan</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
};

export default ContactPage;
