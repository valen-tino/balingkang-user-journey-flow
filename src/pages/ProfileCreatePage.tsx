
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { profileSchema, ProfileFormValues, calculateAge } from "@/schemas/profileSchema";
import ProfilePhotoUpload from "@/components/profile/ProfilePhotoUpload";
import PersonalInfoForm from "@/components/profile/PersonalInfoForm";
import GuardianInfoForm from "@/components/profile/GuardianInfoForm";

const ProfileCreatePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const navigate = useNavigate();

  // Calculate min/max dates for date of birth
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 5); // Minimum age 5 years
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 70); // Maximum age 70 years
  
  // Set a sensible default date for better UX (15 years ago)
  const defaultDate = new Date();
  defaultDate.setFullYear(defaultDate.getFullYear() - 15);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "",
      dateOfBirth: defaultDate, // Set a default date
      gender: "male",
      status: "general",
      phone: "",
      address: "",
    },
  });

  // Watch date of birth to determine if guardian fields are needed
  const dateOfBirth = form.watch("dateOfBirth");
  const showGuardianFields = dateOfBirth ? calculateAge(dateOfBirth) < 17 : false;

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
                    <PersonalInfoForm 
                      form={form}
                      isSubmitting={isSubmitting}
                      minDate={minDate}
                      maxDate={maxDate}
                      defaultDate={defaultDate}
                    />
                    
                    {showGuardianFields && (
                      <GuardianInfoForm
                        form={form}
                        isSubmitting={isSubmitting}
                      />
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
