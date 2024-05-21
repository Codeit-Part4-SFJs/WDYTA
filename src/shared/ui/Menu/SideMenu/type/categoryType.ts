import { Dispatch, SetStateAction } from "react";

export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Categories extends Array<Category> {}

export interface SideMenuTabListProps {
  categories: Categories;
}

export interface SideMenuTabProps {
  category: string;
  currentCategory: string;
  setCurrentCategory: Dispatch<SetStateAction<string>>;
}
