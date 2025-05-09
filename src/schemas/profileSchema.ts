
import { z } from "zod";

// Schema for profile creation
export const profileSchema = z.object({
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

export type ProfileFormValues = z.infer<typeof profileSchema>;

// Helper function to calculate age
export function calculateAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

// Format date for display
export function formatDisplayDate(date: Date | undefined): string {
  if (!date) return "";
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}
