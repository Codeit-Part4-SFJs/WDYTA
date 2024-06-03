import { HTMLAttributes } from 'react';

export type ImageType = 'product' | 'profile' | 'review' | 'detail';

export interface ImageProps {
  type: ImageType;
  className?: HTMLAttributes<HTMLImageElement>['className'];
  src: string;
  alt: string;
}
