"use client";

import { SideMenuTabProps } from "./type/categoryType";

const SideMenuTab = ({
  size,
  category,
  currentCategory,
  setCurrentCategory,
}: SideMenuTabProps) => {
  const handleClick = () => {
    if (currentCategory === category) {
      setCurrentCategory("idle");
    } else {
      setCurrentCategory(category);
    }
  };

  let tabClass = "flex py-[15px] px-[20px] items-center shrink-0 rounded-lg";
  if (size === "L") {
    tabClass += " w-[200px] h-[50px]";
  } else {
    tabClass += " w-[160px] h-[45px]";
  }

  let eventClass = "";
  if (currentCategory === category) {
    eventClass =
      " border-solid border border-gray-35 bg-gray-25 font-['Pretendard'] text-base not-italic font-medium text-gray-F1";
  } else {
    eventClass =
      " bg-black-1C font-['Pretendard'] text-base not-italic font-medium text-gray-6E hover:border-solid hover:border hover:border-gray-35 hover:bg-gray-25 hover:font-['Pretendard'] hover:text-base hover:not-italic hover:font-medium hover:text-gray-F1";
  }

  return (
    <>
      <button
        className={tabClass + eventClass}
        type="button"
        onClick={handleClick}
      >
        {category}
      </button>
    </>
  );
};

export default SideMenuTab;
