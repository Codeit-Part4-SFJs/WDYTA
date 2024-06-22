import { SkeletonMainTitle } from './SkeletonMainTitle';
import { SkeletonMainCard } from './SkeletonMainCard';

export const SkeletonMainProducts = () => {
  return (
    <section>
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
