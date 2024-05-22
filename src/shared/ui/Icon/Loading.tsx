import LoadingIcon from "../../../../public/icon/loading.svg";

interface Loading {
  iconSizeClass: string;
  fontSizeClass: string;
  color: string;
  children: React.ReactNode;
}
const Loading = ({
  iconSizeClass,
  fontSizeClass,
  color,
  children,
}: Loading) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <LoadingIcon className={`${iconSizeClass}`} color={color} />
      <p className={`${fontSizeClass} text-gray-6E`}>{children}</p>
    </div>
  );
};

export default Loading;
