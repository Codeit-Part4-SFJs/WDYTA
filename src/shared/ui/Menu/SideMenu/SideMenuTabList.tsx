"use client";

import { useState } from "react";
import SideMenuTab from "./SideMenuTab";
import { SideMenuTabListProps } from "./type/categoryType";

const SideMenuTabList = ({ categories }: SideMenuTabListProps) => {
  const [currentCategory, setCurrentCategory] = useState<string>("idle");

  return (
    <ul>
      {categories.map((item) => {
        return (
          <SideMenuTab
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
