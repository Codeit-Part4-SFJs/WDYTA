interface ImageChangeProps {
  event: React.ChangeEvent<HTMLInputElement>;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  setPreview: React.Dispatch<React.SetStateAction<string>>;
}

export const handleImageChange = ({
  event,
  setFile,
  setPreview,
}: ImageChangeProps) => {
  const selectedFile = event.target.files?.[0] || null;
  setFile(selectedFile);

  if (selectedFile) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  } else {
    setPreview('');
  }
};

interface ImageDeleteProps {
  setPreview: React.Dispatch<React.SetStateAction<string>>;
}

export const handleDeleteButton = ({ setPreview }: ImageDeleteProps) => {
  setPreview('');
};
