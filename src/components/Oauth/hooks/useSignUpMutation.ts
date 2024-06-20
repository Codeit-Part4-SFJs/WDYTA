import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import loginAction from '@/components/Login/loginAction';
import { AuthProps, postSimpleSignUp } from '@/shared/@common/apis';

const useSignUpMutation = (provider: string) => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: AuthProps) => {
      const response = await postSimpleSignUp(provider, data);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      return response.json();
    },
    onSuccess: async (data) => {
      await loginAction(data);
      router.push('/');
    },
    onError: () => {
      router.push('/modal/oauth', { scroll: false });
    },
  });
};

export default useSignUpMutation;
