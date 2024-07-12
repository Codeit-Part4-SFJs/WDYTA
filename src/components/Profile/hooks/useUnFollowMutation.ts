import { deleteUserFollow } from '@/shared/@common/apis/follow';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { profileKeys } from '@/app/profile/queryKeyFactories';
import { UserInfoData } from '@/components/Profile/types/profileTypes';
import { FollowMutationProps } from './useFollowMutation';

const useUnFollowMutation = ({
  currentProfileId,
  accessToken,
}: FollowMutationProps) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await deleteUserFollow(
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
        queryKey: profileKeys.user(currentProfileId),
      });
      const previousFollow = queryClient.getQueryData<UserInfoData>(
        profileKeys.user(currentProfileId),
      );
      queryClient.setQueryData(
        profileKeys.user(currentProfileId),
        (prev: UserInfoData) => ({
          ...prev,
          isFollowing: !isFollowing,
          followersCount: isFollowing && prev.followersCount - 1,
        }),
      );
      return { previousFollow };
    },
    onError: (context: { previousFollow?: UserInfoData }) => {
      queryClient.setQueryData(
        profileKeys.user(currentProfileId),
        context.previousFollow,
      );
    },

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: profileKeys.user(currentProfileId),
      }),
  });
};

export default useUnFollowMutation;
