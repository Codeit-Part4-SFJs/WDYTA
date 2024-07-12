import { profileKeys } from '@/app/profile/queryKeyFactories';
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
          followersCount: !isFollowing && prev.followersCount + 1,
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

export default useFollowMutation;
