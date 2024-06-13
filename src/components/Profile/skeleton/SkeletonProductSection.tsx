import { SkeletonMainCard } from '@/components/Home/skeletons/SkeletonMainCard';

const SkeletonProductTab = () => {
  return (
    <li>
      <div className="w-[100px] h-[30px] rounded-lg bg-slate-700" />
    </li>
  );
};

export const SkeletonProductSection = () => {
  return (
    <section className="flex flex-col gap-[30px] animate-pulse">
      <div className="!p-0 lg:hidden">
        <div className="w-full h-[40px] rounded-lg bg-slate-700" />
      </div>
      <ul className="flex gap-[40px] text-gray-6E lg:text-xl text-lg mobile:hidden md:hidden">
        <SkeletonProductTab />
        <SkeletonProductTab />
        <SkeletonProductTab />
      </ul>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mobile:grid-cols-2 gap-[20px] ">
        <SkeletonMainCard />
        <SkeletonMainCard />
        <SkeletonMainCard />
        <SkeletonMainCard />
        <SkeletonMainCard />
        <SkeletonMainCard />
      </div>
    </section>
  );
};
