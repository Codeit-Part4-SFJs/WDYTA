import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import loginAction from '@/components/Login/loginAction';
import { AuthProps, postSimpleSignIn } from '@/shared/@common/apis';

const useSignInMutation = (provider: string) => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: AuthProps) => {
      const response = await postSimpleSignIn(provider, data);
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
    onError: (error) => {
      alert(error.message);
      router.push('/oauth/register');
    },
  });
};

export default useSignInMutation;
