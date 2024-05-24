import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  type: "product" | "profile" | "review";
}

const typeClasses: Record<ImageProps["type"], string> = {
  product: "mobile:w-35 mobile:h-24.5 md:w-56.75 md:h-40 lg:w-70 lg:h-50",
  profile:
    "mobile:w-9 mobile:h-9 md:h-9 md:w-9 lg:w-10.5 lg:h-10.5 rounded-full",
  review: "mobile:w-15 mobile:h-15 md:w-20 md:h-20 lg:w-25 lg:h-25",
};

const ImageComponent = ({ type, src, alt }: ImageProps) => {
  const isProfile = type === "profile";
  return (
    <div className={`relative ${typeClasses[type]}`}>
      <Image
        src={src}
        fill
        alt={alt}
        style={isProfile ? { borderRadius: "50%" } : {}}
      />
    </div>
  );
};

export default ImageComponent;
