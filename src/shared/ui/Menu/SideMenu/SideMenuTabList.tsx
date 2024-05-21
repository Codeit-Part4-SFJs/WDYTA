"use client";

import { useState } from "react";
import SideMenuTab from "./SideMenuTab";
import { SideMenuTabListProps } from "./type/categoryType";

const SideMenuTabList = ({ size, categories }: SideMenuTabListProps) => {
  const [currentCategory, setCurrentCategory] = useState<string>("idle");

  return (
    <ul className="flex flex-col items-start shrink-0 gap-1 bg-black-1C">
      {categories.map((item) => {
        return (
          <SideMenuTab
            size={size}
            key={item.id}
            category={item.name}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
        );
      })}
    </ul>
  );
};

export default SideMenuTabList;
