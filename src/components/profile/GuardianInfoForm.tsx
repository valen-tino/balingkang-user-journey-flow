
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormValues } from "@/schemas/profileSchema";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

interface GuardianInfoFormProps {
  form: UseFormReturn<ProfileFormValues>;
  isSubmitting: boolean;
}

const GuardianInfoForm = ({ form, isSubmitting }: GuardianInfoFormProps) => {
  return (
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
  );
};

export default GuardianInfoForm;
