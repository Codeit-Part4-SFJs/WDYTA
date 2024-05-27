export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Categories extends Array<Category> {}

export interface SideMenuProps {
  categories: Categories | undefined;
}

export interface SideMenuTabProps {
  category: string;
  categoryId: number;
}
