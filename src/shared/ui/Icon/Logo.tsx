import LogoIcon from "../../../../public/icon/logo.svg";

interface Logo {
  iconSizeClass: string;
  onClick: () => void;
}
const Logo = ({ iconSizeClass, onClick }: Logo) => {
  return (
    <div>
      <LogoIcon className={`${iconSizeClass}`} onClick={onClick} />
    </div>
  );
};

export default Logo;
