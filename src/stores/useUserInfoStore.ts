import { create } from 'zustand';

interface FavoriteCategory {
  id: number;
  name: string;
}
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
  mostFavoriteCategory: FavoriteCategory;
}

interface ProfileState {
  userInfoData: UserInfoData | null;
  setUserInfoData: (data: UserInfoData) => void;
}

export const useUserInfoStore = create<ProfileState>((set) => ({
  userInfoData: null,
  setUserInfoData: (data: UserInfoData) => set({ userInfoData: data }),
}));
