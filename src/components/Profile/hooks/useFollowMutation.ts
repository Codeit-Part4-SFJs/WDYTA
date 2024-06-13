import { ProfileKeys } from '@/app/profile/queryKeyFactories';
import { postUserFollow } from '@/shared/@common/apis/follow';
import { UserInfoData } from '@/components/Profile/types/profileTypes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export interface FollowMutationProps {
  currentProfileId: number;
  accessToken: string;
}
const useFollowMutation = ({
  currentProfileId,
  accessToken,
}: FollowMutationProps) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await postUserFollow(
        { userId: currentProfileId },
        accessToken,
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      return response.json();
    },
    onMutate: async ({ isFollowing }: { isFollowing: boolean }) => {
      await queryClient.cancelQueries({
        queryKey: ProfileKeys.user(currentProfileId),
      });
      const previousFollow = queryClient.getQueryData<UserInfoData>(
        ProfileKeys.user(currentProfileId),
      );
      queryClient.setQueryData(
        ProfileKeys.user(currentProfileId),
        (prev: UserInfoData) => ({
          ...prev,
          isFollowing: !isFollowing,
        }),
      );
      return { previousFollow };
    },
    onError: (context: { previousFollow?: UserInfoData }) => {
      queryClient.setQueryData(
        ProfileKeys.user(currentProfileId),
        context.previousFollow,
      );
    },

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ProfileKeys.user(currentProfileId),
      }),
  });
};

export default useFollowMutation;
