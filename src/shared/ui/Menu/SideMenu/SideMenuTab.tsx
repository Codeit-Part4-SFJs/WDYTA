"use client";

import { SideMenuTabProps } from "./type/categoryType";

const SideMenuTab = ({
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

  return (
    <>
      <button type="button" onClick={handleClick}>
        {category}
      </button>
      <br />
    </>
  );
};

export default SideMenuTab;
