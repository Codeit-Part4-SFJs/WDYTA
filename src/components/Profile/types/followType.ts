interface FollowInfo {
  updatedAt: string;
  createdAt: string;
  teamId: string;
  image: string;
  description: string;
  nickname: string;
  id: number;
}

export interface Follower {
  id: number;
  follower: FollowInfo;
}

export interface Followee {
  id: number;
  followee: FollowInfo;
}

export interface FollowDataPage {
  list: (Follower | Followee)[];
  nextCursor: number;
}
