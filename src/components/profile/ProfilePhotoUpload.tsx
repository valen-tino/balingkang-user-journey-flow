
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import { toast } from "sonner";

interface ProfilePhotoUploadProps {
  onPhotoChange: (file: File | null) => void;
  disabled?: boolean;
}

const ProfilePhotoUpload = ({ onPhotoChange, disabled = false }: ProfilePhotoUploadProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Ukuran file terlalu besar", {
        description: "Maksimal ukuran foto adalah 2MB"
      });
      return;
    }

    // Check file type (only jpg, png)
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      toast.error("Format file tidak didukung", {
        description: "Hanya file JPG dan PNG yang diizinkan"
      });
      return;
    }

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    onPhotoChange(file);
  };

  const handleRemovePhoto = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    onPhotoChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClickUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div 
        className="w-40 h-40 mb-4 bg-gray-100 border-2 border-dashed border-gray-300 rounded-full overflow-hidden flex items-center justify-center relative"
      >
        {previewUrl ? (
          <>
            <img 
              src={previewUrl} 
              alt="Preview" 
              className="w-full h-full object-cover"
            />
            {!disabled && (
              <button
                type="button"
                onClick={handleRemovePhoto}
                className="absolute bottom-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                aria-label="Remove photo"
              >
                <X size={16} />
              </button>
            )}
          </>
        ) : (
          <div className="text-gray-400 flex flex-col items-center">
            <Upload size={32} />
            <span className="text-xs mt-2 text-center">Upload Foto</span>
          </div>
        )}
      </div>
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png"
        onChange={handleFileChange}
        className="hidden"
        disabled={disabled}
      />
      
      {!previewUrl && (
        <Button 
          type="button" 
          variant="outline" 
          onClick={handleClickUpload}
          disabled={disabled}
          className="w-full"
        >
          <Upload size={16} className="mr-2" />
          Pilih Foto
        </Button>
      )}
    </div>
  );
};

export default ProfilePhotoUpload;
