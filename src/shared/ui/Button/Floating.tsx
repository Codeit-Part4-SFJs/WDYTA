import IconComponent from "../Icon/Icon";

interface FloatingProps {
  location?: string;
}

const Floating = ({ location }: FloatingProps) => {
  return (
    <IconComponent
      name="AddIcon"
      iconSizeClass={`w-[60px] fixed ${location}`}
      color="main-gradation"
    />
  );
};

export default Floating;

/*
  onClick으로 상품 등록 Modal Open 해야 함.
*/
