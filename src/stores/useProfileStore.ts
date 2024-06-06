import { create } from 'zustand';

interface UserInfoData {
  id: number;
  nickname: string;
  description: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  teamId: string;
  isFollowing: boolean;
  followersCount: number;
  followeesCount: number;
  reviewCount: number;
  averageRating: number;
  mostFavoriteCategory: string | null;
}

interface ProfileState {
  userInfoData: UserInfoData | null;
  setUserInfoData: (data: UserInfoData) => void;
}

export const useUserInfoStore = create<ProfileState>((set) => ({
  userInfoData: null,
  setUserInfoData: (data: UserInfoData) => set({ userInfoData: data }),
}));
