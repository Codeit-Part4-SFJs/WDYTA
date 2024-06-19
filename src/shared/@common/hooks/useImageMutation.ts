import { postImage } from '@/shared/@common/apis';
import { useMutation } from '@tanstack/react-query';

interface ImageMutationProps {
  accessToken: string;
  setErrorMessage: (message: string) => void;
}

export const useImageMutation = ({
  accessToken,
  setErrorMessage,
}: ImageMutationProps) => {
  return useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append('image', file);

      const response = await postImage(accessToken, formData);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      return response.json();
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
  });
};
