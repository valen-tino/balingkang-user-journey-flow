
import { useEffect } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Pencil } from "lucide-react";

// Mock student data
const studentData = {
  name: "Putu Wijaya",
  dateOfBirth: "17 Maret 2012",
  gender: "Laki-laki",
  status: "Pelajar SD",
  school: "SD Negeri 3 Singaraja",
  grade: "4",
  phone: "082145678912",
  address: "Jl. Ahmad Yani No. 45, Singaraja, Bali",
  guardianName: "Ketut Wijaya",
  guardianPhone: "081234567890",
  profilePhoto: "https://randomuser.me/api/portraits/kids/1.jpg"
};

const BiodataPage = () => {
  useEffect(() => {
    document.title = "Biodata | Dashboard Siswa";
  }, []);

  return (
    <DashboardLayout pageTitle="Biodata" userType="student">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Informasi Pribadi</h1>
        <p className="text-gray-600">
          Detail informasi pribadi Anda yang tersimpan dalam sistem.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Data Diri</CardTitle>
            <Button variant="outline" size="sm" asChild>
              <Link to="/dashboard/student/biodata/edit">
                <Pencil className="mr-2 h-4 w-4" />
                Edit Data Diri
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Nama Lengkap</h3>
                <p className="text-base">{studentData.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Tanggal Lahir</h3>
                <p className="text-base">{studentData.dateOfBirth}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Jenis Kelamin</h3>
                <p className="text-base">{studentData.gender}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Status</h3>
                <p className="text-base">{studentData.status}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Sekolah</h3>
                <p className="text-base">{studentData.school}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Kelas</h3>
                <p className="text-base">{studentData.grade}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Nomor HP</h3>
                <p className="text-base">{studentData.phone}</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-sm font-medium text-gray-500">Alamat</h3>
                <p className="text-base">{studentData.address}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Nama Wali</h3>
                <p className="text-base">{studentData.guardianName}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Nomor HP Wali</h3>
                <p className="text-base">{studentData.guardianPhone}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Foto Profil</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-40 h-40 mb-4 rounded-full overflow-hidden">
              <img 
                src={studentData.profilePhoto} 
                alt="Foto Profil" 
                className="w-full h-full object-cover"
              />
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link to="/dashboard/student/biodata/edit">
                Ubah Foto
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default BiodataPage;
