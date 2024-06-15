export interface FollowerTypes {
  id: number;
  follower: {
    updatedAt: string;
    createdAt: string;
    teamId: string;
    image: string;
    description: string;
    nickname: string;
    id: number;
  };
}

export interface FolloweeTypes {
  id: number;
  followee: {
    updatedAt: string;
    createdAt: string;
    teamId: string;
    image: string;
    description: string;
    nickname: string;
    id: number;
  };
}

export interface FollowDataPage {
  list: (FollowerTypes | FolloweeTypes)[];
  nextCursor: number;
}
