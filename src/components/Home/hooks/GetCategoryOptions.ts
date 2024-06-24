import { getCategory } from '@/shared/@common/apis';
import DEFAULT_CATEGORIES from '@/shared/ui/Menu/SideMenu/constants/DEFAULT_CATEGORIES';
import { Category } from '@/shared/ui/Menu/SideMenu/types/categoryType';

async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await getCategory();

    if (!response.ok) {
      return DEFAULT_CATEGORIES;
    }
    return await response.json();
  } catch (error) {
    return DEFAULT_CATEGORIES;
  }
}

export const GetCategoryOptions = async () => {
  const categories = await fetchCategories();
  const categoryList: Category[] = categories ?? DEFAULT_CATEGORIES;

  return categoryList.map((category) => ({
    value: String(category.id),
    label: category.name,
  }));
};
