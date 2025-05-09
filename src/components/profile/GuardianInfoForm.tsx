
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormValues } from "@/schemas/profileSchema";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { User, Phone } from "lucide-react"; // Added icons for better UI

interface GuardianInfoFormProps {
  form: UseFormReturn<ProfileFormValues>;
  isSubmitting: boolean;
}

const GuardianInfoForm = ({ form, isSubmitting }: GuardianInfoFormProps) => {
  return (
    <>
      <Separator className="my-6" />
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-1 bg-confucius-blue rounded-full"></div>
        <h3 className="text-lg font-semibold text-confucius-blue">Informasi Wali</h3>
      </div>
      <div className="space-y-5 bg-gray-50 p-5 rounded-lg">
        <FormField
          control={form.control}
          name="guardianName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <User className="h-4 w-4 text-confucius-blue" />
                Nama Wali
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="Nama wali" 
                  {...field} 
                  disabled={isSubmitting} 
                  className="border-gray-300 focus:border-confucius-blue focus:ring-confucius-blue"
                />
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
              <FormLabel className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-confucius-blue" />
                No. HP Wali
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="Contoh: 081234567890" 
                  {...field} 
                  disabled={isSubmitting}
                  type="tel"
                  className="border-gray-300 focus:border-confucius-blue focus:ring-confucius-blue"
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
  );
};

export default GuardianInfoForm;
