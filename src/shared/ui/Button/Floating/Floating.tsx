import IconComponent from '../../Icon/Icon';

const Floating = () => {
  const makingAlertNow = () => {
    alert('Floating이 클릭되었습니다!');
  };

  return (
    <button
      type="button"
      className="flex w-[60px] h-[60px] rounded-full fixed bg-main-gradation items-center justify-center right-[90px] bottom-[180px] md:right-[30px] md:bottom-[60px] mobile:right-5 mobile:bottom-10"
    >
      <IconComponent
        name="AddIcon"
        className={`w-[40px] text-white `}
        onClick={makingAlertNow}
      />
    </button>
  );
};
/*
  onClick으로 상품 등록 Modal Open 해야 함.
*/

export default Floating;
