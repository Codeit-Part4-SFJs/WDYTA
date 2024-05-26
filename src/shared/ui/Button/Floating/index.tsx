import IconComponent from "../../Icon/Icon";

interface FloatingProps {
  location?: string;
}

const Floating = ({ location }: FloatingProps) => {
  const makingAlertNow = () => {
    alert("Floating이 클릭되었습니다!");
  };

  return (
    <IconComponent
      name="AddIcon"
      className={`w-[60px] fixed main-gradation ${location}`}
      onClick={makingAlertNow}
    />
  );
};

export default Floating;

/*
  onClick으로 상품 등록 Modal Open 해야 함.
*/
