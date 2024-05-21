import StarIcon from "../../../../public/icon/star.svg";
import BubbleIcon from "../../../../public/icon/bubble.svg";
import AddIcon from "../../../../public/icon/add.svg";
import CategoryIcon from "../../../../public/icon/category.svg";
import CloseIcon from "../../../../public/icon/close.svg";
import DropDownIcon from "../../../../public/icon/drop-down.svg";
import DropUpIcon from "../../../../public/icon/drop-up.svg";
import GoogleIcon from "../../../../public/icon/google.svg";
import KakaoIcon from "../../../../public/icon/kakao.svg";
import KakaoTalkIcon from "../../../../public/icon/kakaotalk.svg";
import MyPropfileIcon from "../../../../public/icon/my-profile.svg";
import PhotoIcon from "../../../../public/icon/photo.svg";
import SaveIcon from "../../../../public/icon/save.svg";
import SearchIcon from "../../../../public/icon/search.svg";
import ShareIcon from "../../../../public/icon/share.svg";
import UnSaveIcon from "../../../../public/icon/unsave.svg";
import MenuIcon from "../../../../public/icon/menu.svg";
import UpNoColorIcon from "../../../../public/icon/up-no-color.svg";
import UpIcon from "../../../../public/icon/up.svg";
import VisibilityIcon from "../../../../public/icon/visibility.svg";
import VisibilityOffIcon from "../../../../public/icon/visibility-off.svg";

const iconTypes: {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} = {
  StarIcon,
  BubbleIcon,
  AddIcon,
  CategoryIcon,
  CloseIcon,
  DropDownIcon,
  DropUpIcon,
  GoogleIcon,
  KakaoIcon,
  KakaoTalkIcon,
  MenuIcon,
  MyPropfileIcon,
  PhotoIcon,
  SaveIcon,
  SearchIcon,
  ShareIcon,
  UnSaveIcon,
  UpNoColorIcon,
  UpIcon,
  VisibilityIcon,
  VisibilityOffIcon,
};

interface IconProps {
  name: keyof typeof iconTypes;
  width: string;
  height: string;
  color?: string;
  onClick?: () => void;
}
const IconComponent = ({ name, width, height, color, onClick }: IconProps) => {
  const Icon = iconTypes[name];
  return <Icon width={width} color={color} height={height} onClick={onClick} />;
};

export default IconComponent;
