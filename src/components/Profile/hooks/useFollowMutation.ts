import { API_USERS } from '@/shared/@common/apis/constants/API';
import { postUserFollow } from '@/shared/@common/apis/follow';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface FollowMutationProps {
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
      return response;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [API_USERS] }),
  });
};

export default useFollowMutation;
