
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Save, User } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useParams } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import { toast } from "sonner";

// Mock data for students
const students = [
  { id: 1, name: "Wayan Suardana", photo: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Made Putra", photo: "https://randomuser.me/api/portraits/men/44.jpg" },
  { id: 3, name: "Nyoman Rai", photo: "https://randomuser.me/api/portraits/men/56.jpg" },
  { id: 4, name: "Ketut Arta", photo: "https://randomuser.me/api/portraits/men/62.jpg" },
  { id: 5, name: "Komang Indah", photo: "https://randomuser.me/api/portraits/women/33.jpg" },
  { id: 6, name: "Kadek Ratih", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 7, name: "Gede Surya", photo: "https://randomuser.me/api/portraits/men/76.jpg" },
  { id: 8, name: "Luh Ari", photo: "https://randomuser.me/api/portraits/women/65.jpg" },
  { id: 9, name: "Putu Dewi", photo: "https://randomuser.me/api/portraits/women/48.jpg" },
  { id: 10, name: "I Gusti Raka", photo: "https://randomuser.me/api/portraits/men/33.jpg" },
];

// Mock data for class details
const classDetails = {
  id: 1,
  name: "YCT Level 1",
  date: "12 Mei 2025",
  time: "15:00 - 16:30",
  meeting: "Pertemuan 5 dari 10",
  room: "Ruang Bamboo"
};

// Schema for attendance form
type AttendanceRecord = Record<string, "present" | "absent" | "permission" | "sick">;

const attendanceSchema = z.record(
  z.string(),
  z.enum(["present", "absent", "permission", "sick"])
);

const AttendancePage = () => {
  const { classId } = useParams<{ classId: string }>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form with all students marked as present
  const initialValues: AttendanceRecord = {};
  students.forEach(student => {
    initialValues[student.id.toString()] = "present";
  });
  
  const form = useForm<AttendanceRecord>({
    resolver: zodResolver(attendanceSchema),
    defaultValues: initialValues,
  });
  
  const handleMarkAllAs = (status: "present" | "absent" | "permission" | "sick") => {
    const values: AttendanceRecord = {};
    students.forEach(student => {
      values[student.id.toString()] = status;
    });
    form.reset(values);
  };
  
  const onSubmit = async (values: AttendanceRecord) => {
    setIsSubmitting(true);
    
    try {
      // Here you'd make your API call to save attendance
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Submitted attendance:", values);
      
      toast.success("Kehadiran berhasil disimpan", {
        description: `Kehadiran untuk ${classDetails.name} tanggal ${classDetails.date} telah direcord.`
      });
    } catch (error) {
      toast.error("Gagal menyimpan kehadiran", {
        description: "Terjadi kesalahan. Silakan coba lagi."
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const statusOptions = [
    { value: "present", label: "Hadir" },
    { value: "absent", label: "Tidak Hadir" },
    { value: "permission", label: "Izin" },
    { value: "sick", label: "Sakit" },
  ];
  
  return (
    <DashboardLayout pageTitle="Validasi Kehadiran" userType="teacher">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Validasi Kehadiran Siswa</h1>
          <p className="text-gray-600">
            Kelas: {classDetails.name} - {classDetails.date} ({classDetails.time})
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Detail Kelas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Kelas</span>
                <span>{classDetails.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tanggal</span>
                <span>{classDetails.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Waktu</span>
                <span>{classDetails.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Pertemuan</span>
                <span>{classDetails.meeting}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Ruangan</span>
                <span>{classDetails.room}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Jumlah Siswa</span>
                <span>{students.length} siswa</span>
              </div>
            </CardContent>
            <CardFooter className="flex-col space-y-2">
              <Button variant="outline" className="w-full" onClick={() => handleMarkAllAs("present")}>
                <CheckCircle size={16} className="mr-2" />
                Tandai Semua Hadir
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Daftar Kehadiran</CardTitle>
              <CardDescription>
                Pilih status kehadiran untuk setiap siswa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  {students.map((student, index) => (
                    <div key={student.id}>
                      {index > 0 && <Separator className="my-4" />}
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden">
                          <img
                            src={student.photo}
                            alt={student.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{student.name}</p>
                        </div>
                        <FormField
                          control={form.control}
                          name={student.id.toString()}
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel className="sr-only">Status Kehadiran</FormLabel>
                              <Select
                                disabled={isSubmitting}
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-[140px]">
                                    <SelectValue placeholder="Status" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {statusOptions.map(option => (
                                    <SelectItem key={option.value} value={option.value}>
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex justify-end mt-6">
                    <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                      {isSubmitting ? (
                        "Menyimpan..."
                      ) : (
                        <>
                          <Save size={16} className="mr-2" />
                          Simpan Kehadiran
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AttendancePage;
