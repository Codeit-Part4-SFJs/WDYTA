import Image from "next/image";
import LoadingIcon from "../../../../public/icon/loading.svg";

interface Loading {
  size: "S" | "L";
  color: string;
  children: React.ReactNode;
}
const Loading = ({ size = "L", color, children }: Loading) => {
  const sizeClass = size === "S" ? "w-10 h-8" : "w-12 h-10";
  const fontClass =
    size === "S" ? "text-lg text-gray-6E" : "text-xl text-gray-6E";

  return (
    <div className="flex flex-col items-center gap-2">
      <LoadingIcon className={`${sizeClass}`} color={color} />
      <p className={`${fontClass}`}>{children}</p>
    </div>
  );
};

export default Loading;
