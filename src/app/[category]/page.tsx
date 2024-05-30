import { SideMenu } from '@/shared/ui/Menu/SideMenu';

const Page = ({ params }: { params: { category: number } }) => {
  return (
    <SideMenu categories={undefined} currentCategoryId={params.category} />
  );
};

export default Page;
