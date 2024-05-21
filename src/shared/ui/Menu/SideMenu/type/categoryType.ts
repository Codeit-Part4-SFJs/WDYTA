import { Dispatch, SetStateAction } from "react";

export interface SideMenuProps {
  size: "L" | "M";
}

export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Categories extends Array<Category> {}

export interface SideMenuTabListProps {
  size: "L" | "M";
  categories: Categories;
}

export interface SideMenuTabProps {
  size: "L" | "M";
  category: string;
  currentCategory: string;
  setCurrentCategory: Dispatch<SetStateAction<string>>;
}
