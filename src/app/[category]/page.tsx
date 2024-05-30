import { convertCategoryToCategoryId } from '@/shared/@common/utils';
import { SideMenu, SideMenuOpenButton } from '@/shared/ui/Menu/SideMenu';

const Page = ({ params }: { params: { category: string } }) => {
  return (
    <div>
      <SideMenu
        categories={undefined}
        currentCategoryId={convertCategoryToCategoryId(params.category)}
      />
      <div className="flex justify-end">
        <SideMenuOpenButton
          currentCategoryId={convertCategoryToCategoryId(params.category)}
        />
      </div>
    </div>
  );
};

export default Page;
