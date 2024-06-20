export interface ReviewCardProps {
  reviewData: Review;
  userId: number;
  accessToken: string;
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

export interface ReviewLikeButtonProps {
  isLike: boolean;
  likeCount: number;
  reviewId: number;
  accessToken: string;
  productId: number;
  filter: string | undefined;
}

export interface ReviewImage {
  id: number;
  source: string;
}

export interface Review {
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
  reviewImages: ReviewImage[];
  isLiked: boolean;
}

export interface ReviewsDataPage {
  list: Review[];
  nextCursor: number;
}

export interface ReviewsDataAllPages {
  pages: ReviewsDataPage[];
  pageParams: number[];
}
