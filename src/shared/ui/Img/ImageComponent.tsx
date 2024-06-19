import { ImageProps } from '@/shared/ui/Img/types/imageType';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const typeClasses: Record<ImageProps['type'], string> = {
  product: 'w-full aspect-[284/200] rounded-lg overflow-hidden object-cover',
  profile:
    'mobile:w-[36px] mobile:h-[36px] md:w-[36px] md:w-[36px] lg:w-[42px] lg:h-[42px] rounded-full overflow-hidden',
  review:
    'mobile:w-[60px] mobile:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]',
  detail:
    'mobile:w-[335px] mobile:h-[236px] md:w-[280px] md:h-[197px] lg:w-[355px] lg:h-[250px]',
};

const sizesConfig: Record<ImageProps['type'], string> = {
  product: '(max-width: 768px) 50vw, (max-width: 1024px) 80vw, 50vw',
  profile: '(max-width: 768px) 36px, (max-width: 1024px) 36px, 33vw',
  review: '(max-width: 768px) 60px, (max-width: 1024px) 80px, 33vw',
  detail: '(max-width: 768px) 335px, (max-width: 1024px) 280px, 355px',
};

export const ImageComponent = ({ type, className, src, alt }: ImageProps) => {
  return (
    <div className={twMerge('relative', typeClasses[type], className)}>
      <Image
        draggable={false}
        src={src}
        fill
        alt={alt}
        sizes={sizesConfig[type]}
        priority
      />
    </div>
  );
};
