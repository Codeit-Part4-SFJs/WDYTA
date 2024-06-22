import { SkeletonMainTitle } from './SkeletonMainTitle';
import { SkeletonMainCard } from './SkeletonMainCard';

export const SkeletonFilteredProducts = () => {
  return (
    <section className="mobile:min-h-[70vh] md:min-h-[90vh] w-full">
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
  );
};
