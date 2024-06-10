import { ProfileKeys } from '@/app/profile/[userId]/queryKeyFactories';
import { postUserFollow } from '@/shared/@common/apis/follow';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export interface FollowMutationProps {
  currentProfileId: number;
  accessToken: string;
}
const useFollowMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      currentProfileId,
      accessToken,
    }: FollowMutationProps) => {
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
    onSuccess: (_, variables) =>
      queryClient.invalidateQueries({
        queryKey: ProfileKeys.user(variables.currentProfileId),
      }),
  });
};

export default useFollowMutation;
