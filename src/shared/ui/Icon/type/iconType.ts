import { HTMLAttributes } from "react";

export type IconType =
  | "StarIcon"
  | "ReviewIcon"
  | "AddIcon"
  | "CategoryIcon"
  | "CloseIcon"
  | "DropDownIcon"
  | "DropUpIcon"
  | "GoogleIcon"
  | "KakaoIcon"
  | "KakaoTalkIcon"
  | "MenuIcon"
  | "MyProfileIcon"
  | "PhotoIcon"
  | "SaveIcon"
  | "SearchIcon"
  | "ShareIcon"
  | "UnSaveIcon"
  | "UpNoColorIcon"
  | "UpIcon"
  | "VisibilityIcon"
  | "VisibilityOffIcon";

export interface IconProps {
  name: IconType;
  className: HTMLAttributes<SVGAElement>["className"];
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export interface LoadingProps {
  iconClassName?: HTMLAttributes<SVGAElement>["className"];
  textClassName?: HTMLAttributes<HTMLParagraphElement>["className"];
}
