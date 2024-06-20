import { postSignUp } from '@/shared/@common/apis/auth';
import { FormValues } from '@/shared/@common/types/input';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { UseFormSetError } from 'react-hook-form';

const useRegisterMutation = (setError: UseFormSetError<FormValues>) => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: FormValues) => {
      const response = await postSignUp(data);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      return response;
    },
    onSuccess: () => {
      router.push('/login');
    },
    onError: (error) => {
      const errorMessage = error.message;
      if (errorMessage.includes('이미 사용중인 닉네임')) {
        setError('nickname', { type: 'manual', message: errorMessage });
      } else if (errorMessage.includes('이미 사용중인 이메일')) {
        setError('email', { type: 'manual', message: errorMessage });
      } else {
        router.push('/modal/register', { scroll: false });
      }
    },
  });
};

export default useRegisterMutation;
