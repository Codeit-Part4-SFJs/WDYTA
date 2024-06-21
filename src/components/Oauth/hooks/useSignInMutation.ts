import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import loginAction from '@/components/Login/loginAction';
import { AuthProps, postSimpleSignIn } from '@/shared/@common/apis';

const useSignInMutation = (provider: string) => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: AuthProps) => {
      const response = await postSimpleSignIn(provider, data);
      if (response.status === 403) {
        throw new Error('Forbidden');
      } else if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      return response.json();
    },
    onSuccess: async (data) => {
      await loginAction(data);
      router.push('/');
    },
    onError: (error) => {
      if (error.message === 'Forbidden') {
        router.push(`/modal/oauth/${provider}`, {
          scroll: false,
        });
      } else {
        router.push('/modal/oauth', { scroll: false });
      }
    },
  });
};

export default useSignInMutation;
