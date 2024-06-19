export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Categories extends Array<Category> {}

export interface SideMenuProps {
  currentCategoryId?: number;
}

export interface SideMenuTabProps {
  category: string;
  categoryId: number;
  currentCategoryId?: number;
}

export interface SideMenuOpenButtonProps {
  currentCategoryId?: number;
}
