import { deleteUserFollow } from '@/shared/@common/apis/follow';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProfileKeys } from '@/app/profile/queryKeyFactories';

import { FollowMutationProps } from './useFollowMutation';

const useUnFollowMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      currentProfileId,
      accessToken,
    }: FollowMutationProps) => {
      const response = await deleteUserFollow(
        { userId: currentProfileId },
        accessToken,
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      return response;
    },
    onSuccess: (_, variables) =>
      queryClient.invalidateQueries({
        queryKey: ProfileKeys.user(variables.currentProfileId),
      }),
  });
};

export default useUnFollowMutation;
