export interface ReviewData {
  id: number;
  rating: number;
  content: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  productId: number;
  user: {
    id: number;
    nickname: string;
    image: string;
  };
  reviewImages: {
    id: number;
    source: string;
  }[];
  isLiked: boolean;
}

export interface ReviewCardProps {
  reviewData: ReviewData;
  userId: number;
  accessToken: string;
  productId: number;
  filter: string | undefined;
}

export interface ReviewProfileProps {
  rating: number;
  reviewUser: { id: number; nickname: string; image: string };
}

export interface ReviewImageProps {
  src: string;
}

export interface ProductReviewsProps {
  category: string;
  userId: number;
  productId: number;
  accessToken: string;
  currentFilter: string | undefined;
}

export interface ControlButtonsProps {
  accessToken: string;
  reviewId: number;
  productId: number;
  filter: string | undefined;
}
