import { getCategory } from '@/shared/@common/apis';
import DEFAULT_CATEGORIES from '@/shared/ui/Menu/SideMenu/constants/DEFAULT_CATEGORIES';
import { Category } from '@/shared/ui/Menu/SideMenu/types/categoryType';

async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await getCategory();

    if (!response.ok) {
      console.error('카테고리 데이터를 불러오는데 실패했습니다.');
      return DEFAULT_CATEGORIES;
    }
    return await response.json();
  } catch (error) {
    console.error('카테고리 데이터를 불러오는데 실패했습니다.');
    return DEFAULT_CATEGORIES;
  }
}

export const CATEGORY_DROPDOWN_OPTIONS = async () => {
  const categories = await fetchCategories();
  const categoryList: Category[] = categories ?? DEFAULT_CATEGORIES;
  console.log(categoryList);

  // 카테고리 선택 드롭다운 옵션
  return categoryList.map((category) => ({
    value: String(category.id),
    label: category.name,
  }));
};
