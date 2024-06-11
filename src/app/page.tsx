import { SideMenu } from '@/shared/ui/Menu/SideMenu';
import { Floating } from '@/shared/ui/Button/Floating';
import { MainProducts } from '@/components/Home/MainProducts/MainProducts';
import { ReviewerRanking } from '@/components/Home/ReviewerRanking/ReviewerRanking';
import { CATEGORY_LIST_MOCK } from '@/components/Home/mock/CATEGORY_LIST_MOCK';

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 gap-4 lg:ml-44">
      <div className="md:col-span-1 lg:col-span-2">
        <SideMenu categories={CATEGORY_LIST_MOCK} />
      </div>
      <div className="flex flex-col-reverse lg:flex-row md:col-span-4 lg:col-span-10 lg:justify-center mobile:ml-2 md:mr-2 lg:mr-44">
        <MainProducts />
        <ReviewerRanking />
      </div>
      <Floating />
    </div>
  );
}
