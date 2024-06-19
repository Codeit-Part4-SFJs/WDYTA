import { SkeletonMainTitle } from './SkeletonMainTitle';
import { SkeletonMainCard } from './SkeletonMainCard';

export const SkeletonFilteredProducts = () => {
  return (
    <main className="md:col-span-3 lg:col-span-7 p-4 lg:my-14 lg:mr-12 lg:flex-auto">
      <section className="mb-20 mobile:min-h-[70vh] md:min-h-[90vh] w-full">
        <SkeletonMainTitle />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <SkeletonMainCard />
          <SkeletonMainCard />
          <SkeletonMainCard />
          <SkeletonMainCard />
          <SkeletonMainCard />
          <SkeletonMainCard />
        </div>
      </section>
    </main>
  );
};
