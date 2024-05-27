import { HTMLAttributes } from "react";

export type ImageType = "product" | "profile" | "review";

export interface ImageProps {
  type: ImageType;
  className?: HTMLAttributes<HTMLImageElement>["className"];
  src: string;
  alt: string;
}
