import { ImageProps } from "@/shared/types/imageType";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const typeClasses: Record<ImageProps["type"], string> = {
  product:
    "mobile:w-[140px] mobile:h-[98px] md:w-[227px] md:h-[160px] lg:w-[284px] lg:h-[200px]",
  profile:
    "mobile:w-[36px] mobile:h-[36px] md:w-[36px] md:h-[36px] lg:w-[42px] lg:h-[42px] rounded-full overflow-hidden",
  review:
    "mobile:w-[60px] mobile:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]",
};

const ImageComponent = ({ type, className, src, alt }: ImageProps) => {
  return (
    <div className={twMerge("relative", typeClasses[type], className)}>
      <Image src={src} fill alt={alt} sizes="auto" priority={true} />
    </div>
  );
};

export default ImageComponent;
