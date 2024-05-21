import Image from "next/image";
import logo from "../../../../public/logo.png";

interface Logo {
  size: string;
  onClick: () => void;
}
const Logo = ({ size = "L", onClick }: Logo) => {
  const sizeClass = size === "S" ? "w-28 h-5" : "";

  return (
    <div>
      <Image
        src={logo}
        className={`${sizeClass}`}
        onClick={onClick}
        alt="로고 이미지"
      />
    </div>
  );
};

export default Logo;
