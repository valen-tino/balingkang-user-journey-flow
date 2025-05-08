
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import ProfilePhotoUpload from "@/components/profile/ProfilePhotoUpload";

// Schema for profile creation
const profileSchema = z.object({
  fullName: z.string().min(2, { message: "Nama lengkap wajib diisi" }),
  dateOfBirth: z.date({
    required_error: "Tanggal lahir wajib diisi",
  }),
  gender: z.enum(["male", "female"], {
    required_error: "Jenis kelamin wajib dipilih",
  }),
  status: z.enum(["student_sd", "student_smp", "student_sma", "undiksha_student", "undiksha_civitas", "general"], {
    required_error: "Status wajib dipilih",
  }),
  school: z.string().optional(),
  nim: z.string().optional(),
  classGrade: z.string().optional(),
  semester: z.string().optional(),
  phone: z.string().min(10, { message: "No. HP minimal 10 digit" }),
  address: z.string().min(5, { message: "Alamat wajib diisi" }),
  guardianName: z.string().optional(),
  guardianPhone: z.string().optional(),
}).refine((data) => {
  // Validate school/class fields based on status
  if (["student_sd", "student_smp", "student_sma"].includes(data.status)) {
    return !!data.school && !!data.classGrade;
  }
  return true;
}, {
  message: "Nama sekolah dan kelas wajib diisi",
  path: ["school"],
}).refine((data) => {
  // Validate NIM/semester fields for Undiksha students
  if (data.status === "undiksha_student") {
    return !!data.nim && !!data.semester;
  }
  return true;
}, {
  message: "NIM dan semester wajib diisi",
  path: ["nim"],
}).refine((data) => {
  // Calculate age from date of birth
  const today = new Date();
  const birthDate = new Date(data.dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  // If under 17, guardian info is required
  if (age < 17) {
    return !!data.guardianName && !!data.guardianPhone;
  }
  return true;
}, {
  message: "Nama dan no. HP wali wajib diisi untuk siswa di bawah 17 tahun",
  path: ["guardianName"],
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const ProfileCreatePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const navigate = useNavigate();

  // Calculate min/max dates for date of birth
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 5); // Minimum age 5 years
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 70); // Maximum age 70 years

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "",
      gender: "male",
      status: "general",
      phone: "",
      address: "",
    },
  });

  // Watch status to conditionally render fields
  const status = form.watch("status");
  const dateOfBirth = form.watch("dateOfBirth");
  
  // Calculate age to determine if guardian fields are needed
  const showGuardianFields = dateOfBirth ? calculateAge(dateOfBirth) < 17 : false;
  
  function calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }

  const onSubmit = async (data: ProfileFormValues) => {
    if (!profilePhoto) {
      toast.error("Foto profil wajib diupload");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // Here you'd make your profile creation API call, including photo upload
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Form data:", data);
      console.log("Profile photo:", profilePhoto);
      
      // If successful:
      toast.success("Profil berhasil dibuat!");
      
      // Redirect to the appropriate dashboard
      const isStudent = ["student_sd", "student_smp", "student_sma", "undiksha_student"].includes(data.status);
      navigate(isStudent ? "/dashboard/student" : "/dashboard/guardian");
      
    } catch (error) {
      toast.error("Gagal menyimpan profil", {
        description: "Silakan coba lagi."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhotoChange = (file: File | null) => {
    setProfilePhoto(file);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container max-w-3xl mx-auto">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Lengkapi Profil Anda</CardTitle>
            <CardDescription>
              Informasi ini diperlukan untuk proses pendaftaran kursus
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-2/3">
                    <h3 className="text-lg font-semibold mb-4">Informasi Pribadi</h3>
                    
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nama Lengkap</FormLabel>
                            <FormControl>
                              <Input placeholder="Nama lengkap" {...field} disabled={isSubmitting} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="dateOfBirth"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Tanggal Lahir</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant="outline"
                                      className={cn(
                                        "pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                      disabled={isSubmitting}
                                    >
                                      {field.value ? (
                                        format(field.value, "dd/MM/yyyy")
                                      ) : (
                                        <span>Pilih tanggal</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 z-50 pointer-events-auto" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                      date > maxDate || date < minDate
                                    }
                                    initialFocus
                                    className="p-3 pointer-events-auto"
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Jenis Kelamin</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                                disabled={isSubmitting}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Pilih jenis kelamin" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="male">Laki-laki</SelectItem>
                                  <SelectItem value="female">Perempuan</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Status</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                              disabled={isSubmitting}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Pilih status" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="student_sd">Pelajar SD Buleleng</SelectItem>
                                <SelectItem value="student_smp">Pelajar SMP Buleleng</SelectItem>
                                <SelectItem value="student_sma">Pelajar SMA Buleleng</SelectItem>
                                <SelectItem value="undiksha_student">Mahasiswa Undiksha</SelectItem>
                                <SelectItem value="undiksha_civitas">Civitas Undiksha</SelectItem>
                                <SelectItem value="general">Umum</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {/* Conditional fields based on status */}
                      {["student_sd", "student_smp", "student_sma"].includes(status) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="school"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nama Sekolah</FormLabel>
                                <FormControl>
                                  <Input placeholder="Nama sekolah" {...field} disabled={isSubmitting} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="classGrade"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Kelas</FormLabel>
                                <FormControl>
                                  <Input placeholder="Contoh: 7A" {...field} disabled={isSubmitting} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}
                      
                      {status === "undiksha_student" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="nim"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>NIM</FormLabel>
                                <FormControl>
                                  <Input placeholder="Nomor Induk Mahasiswa" {...field} disabled={isSubmitting} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="semester"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Semester</FormLabel>
                                <FormControl>
                                  <Input placeholder="Contoh: 3" {...field} disabled={isSubmitting} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>No. HP</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Contoh: 081234567890" 
                                {...field} 
                                disabled={isSubmitting}
                                type="tel"
                              />
                            </FormControl>
                            <FormDescription>
                              Nomor yang aktif WhatsApp
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Alamat</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Alamat lengkap" 
                                {...field} 
                                disabled={isSubmitting}
                                rows={3}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    {showGuardianFields && (
                      <>
                        <Separator className="my-6" />
                        <h3 className="text-lg font-semibold mb-4">Informasi Wali</h3>
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="guardianName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nama Wali</FormLabel>
                                <FormControl>
                                  <Input placeholder="Nama wali" {...field} disabled={isSubmitting} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="guardianPhone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>No. HP Wali</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Contoh: 081234567890" 
                                    {...field} 
                                    disabled={isSubmitting}
                                    type="tel"
                                  />
                                </FormControl>
                                <FormDescription>
                                  Nomor yang aktif WhatsApp
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="w-full md:w-1/3">
                    <h3 className="text-lg font-semibold mb-4">Foto Profil</h3>
                    <ProfilePhotoUpload
                      onPhotoChange={handlePhotoChange}
                      disabled={isSubmitting}
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Upload foto formal dengan latar belakang polos. Max 2MB (JPG, PNG)
                    </p>
                  </div>
                </div>
                
                <CardFooter className="flex justify-end px-0 pt-4">
                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Menyimpan..." : "Simpan dan Lanjutkan"}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileCreatePage;
