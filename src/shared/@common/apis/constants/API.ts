export const API = Object.freeze({
  USER: '/users',
  REVIEW: '/reviews',
  PRODUCT: '/products',
  OAUTH: '/oauthApps',
  IMAGE: '/images',
  FOLLOW: '/follow',
  CATEGORY: '/categories',
  AUTH: '/auth',
} as const);

export const API_AUTH = Object.freeze({
  SIGN_UP: `${process.env.NEXT_PUBLIC_BASE_URL}${API.AUTH}/signUp`,
  SIGN_IN: `${process.env.NEXT_PUBLIC_BASE_URL}${API.AUTH}/signIn`,
  SIGN_UP_PROVIDER: (provider: string) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}${API.AUTH}/signUp/${provider}`,
  SIGN_IN_PROVIDER: (provider: string) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}${API.AUTH}/signIn/${provider}`,
} as const);

export const API_CATEGORY = Object.freeze({
  CATEGORY: `${process.env.NEXT_PUBLIC_BASE_URL}${API.CATEGORY}`,
} as const);

export const API_FOLLOW = Object.freeze({
  FOLLOW: `${process.env.NEXT_PUBLIC_BASE_URL}${API.FOLLOW}`,
} as const);

export const API_IMAGE = Object.freeze({
  UPLOAD: `${process.env.NEXT_PUBLIC_BASE_URL}${API.IMAGE}/upload`,
} as const);

export const API_OAUTH = Object.freeze({
  OAUTH: `${process.env.NEXT_PUBLIC_BASE_URL}${API.OAUTH}`,
} as const);

export const API_PRODUCT = Object.freeze({
  PRODUCT: `${process.env.NEXT_PUBLIC_BASE_URL}${API.PRODUCT}`,
  PRODUCT_BY_CATEGORY: (keyword: string, category: number, order: string) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}${API.PRODUCT}?keyword=${keyword}&category=${category}&order=${order}`,
  PRODUCT_BY_SEARCH: (keyword: string, order: string) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}${API.PRODUCT}?keyword=${keyword}&order=${order}`,
  BY_ID: (productId: number) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}${API.PRODUCT}/${productId}`,
  REVIEWS: (productId: number, filter: string, pageParam: number) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}${API.PRODUCT}/${productId}/reviews?order=${filter}&cursor=${pageParam}`,
  FAVORITE: (productId: number) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}${API.PRODUCT}/${productId}/favorite`,
} as const);

export const API_REVIEWS = Object.freeze({
  BY_ID: (reviewId: number) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}${API.REVIEW}/${reviewId}`,
  LIKE: (reviewId: number) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}${API.REVIEW}/${reviewId}/like`,
  CREATE: `${process.env.NEXT_PUBLIC_BASE_URL}${API.REVIEW}`,
} as const);

export const API_USERS = Object.freeze({
  MY_INFO: `${process.env.NEXT_PUBLIC_BASE_URL}${API.USER}/me`,
  RANKING: `${process.env.NEXT_PUBLIC_BASE_URL}${API.USER}/ranking`,
  BY_ID: (userId: number) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}${API.USER}/${userId}`,
  PRODUCT: (userId: number) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}${API.USER}/${userId}/created-products`,
  REVIEW: (userId: number) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}${API.USER}/${userId}/reviewed-products`,
  FAVORITE: (userId: number) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}${API.USER}/${userId}/favorite-products`,
  FOLLOWEES: (userId: number) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}${API.USER}/${userId}/followees`,
  FOLLOWERS: (userId: number) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}${API.USER}/${userId}/followers`,
} as const);
