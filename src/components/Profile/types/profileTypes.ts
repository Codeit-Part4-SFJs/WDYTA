export interface UserInfoData {
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
  mostFavoriteCategory: {
    id: number;
    name: string;
  };
}

export interface MyInfoData {
  description: string;
  nickname: string;
  image: string;
}
