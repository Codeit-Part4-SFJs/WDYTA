import { postSignUp } from '@/shared/@common/apis/auth';
import { FormValues } from '@/shared/@common/types/input';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const useRegisterMutation = () => {
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
      alert(error.message); // 바꿀 예정임
    },
  });
};

export default useRegisterMutation;
