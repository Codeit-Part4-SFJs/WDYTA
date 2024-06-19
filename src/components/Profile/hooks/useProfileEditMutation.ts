import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { ProfileKeys } from '@/app/profile/queryKeyFactories';
import { MyInfoData } from '@/components/Profile/types/profileTypes';
import { patchMyInfo } from '../../../shared/@common/apis/user';

const useProfileEditMutation = (
  accessToken: string,
  loginedId: number | null,
) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: MyInfoData) => {
      const response = await patchMyInfo(data, accessToken);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      return response.json();
    },

    onSuccess: async () => {
      await router.back();
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ProfileKeys.user(loginedId),
      });
    },
  });
};

export default useProfileEditMutation;
