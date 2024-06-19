import { getCategory } from '@/shared/@common/apis';
import DEFAULT_CATEGORIES from '@/shared/ui/Menu/SideMenu/constants/DEFAULT_CATEGORIES';
import {
  Categories,
  Category,
} from '@/shared/ui/Menu/SideMenu/types/categoryType';

async function fetchCategories(): Promise<Category[]> {
  const response = await getCategory();

  if (!response.ok) {
    console.error('카테고리 데이터를 불러오는데 실패했습니다.');
  }
  return response.json();
}

const categories = fetchCategories();
const categoryList: Categories =
  (categories as unknown as Category[]) ?? DEFAULT_CATEGORIES;

interface Option {
  value: string;
  label: string;
}

// 카테고리 선택 드롭다운 옵션
export const CATEGORY_DROPDOWN_OPTIONS: Option[] = [
  // api로 받아온 카테고리 데이터를 옵션으로 변환
  ...categoryList.map((category) => ({
    value: category.id.toString(),
    label: category.name,
  })),
];
