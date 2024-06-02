import {
  ActivitySection,
  ProductSection,
  ProfileCard,
} from '@/components/Profile';

export default function Profile() {
  return (
    <main className="flex justify-center items-start md:flex-col mobile:flex-col md:items-center mobile:items-center md:min-w-[509px] mobile:min-w-[335px] lg:gap-[70px] gap-[60px] p-[52px]">
      <ProfileCard />
      <div className="flex flex-col lg:gap-[80px] gap-[60px] mobile:w-[335px]">
        <ActivitySection />
        <ProductSection />
      </div>
    </main>
  );
}
