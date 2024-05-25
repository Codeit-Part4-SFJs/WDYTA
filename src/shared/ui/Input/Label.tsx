import { ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
}

const Label = ({ children }: LabelProps) => {
  return <p className="text-gray-F1 text-sm lg:text-base">{children}</p>;
};

export default Label;
