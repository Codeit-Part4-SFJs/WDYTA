"use client";

const TextFieldInput = () => {
  return (
    <input
      className="w-[335px] md:w-[360px] lg:w-[440px] h-[55px] md:h-[60px] lg:h-[70px] px-[20px] py-[23px] rounded-[8px] border border-solid border-gray-35 bg-black-25 text-gray-F1 text-[14px] md:text-[16px] font-normal placeholder-gray-6E focus:border-main-blue focus:outline-none"
      type="text"
      placeholder="상품명 (상품 등록 여부를 확인해 주세요)"
    />
  );
};

export default TextFieldInput;
