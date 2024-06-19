const SkeletonUserList = () => {
  return (
    <li className="flex items-center gap-[20px] animate-pulse">
      <div className="w-[36px] h-[36px] lg:w-[42px] lg:h-[42px] bg-slate-700 rounded-full" />
      <div>
        <div className="lg:text-lg text-base text-white bg-slate-700 rounded w-[150px] h-[20px]">
          &nbsp;
        </div>
      </div>
    </li>
  );
};

const SkeletonUserListModal = () => (
  <div className="flex flex-col gap-[40px] lg:h-[520px] md:h-[440px] mobile:h-[440px] w-full">
    <h1 className="lg:text-2xl text-xl text-white bg-slate-700 animate-pulse rounded">
      &nbsp;
    </h1>
    <div className="flex flex-col gap-[25px] overflow-y-scroll h-full scrollbar-hide">
      <ul className="flex flex-col lg:gap-[25px] gap-[20px]">
        <SkeletonUserList />
        <SkeletonUserList />
        <SkeletonUserList />
        <SkeletonUserList />
        <SkeletonUserList />
        <SkeletonUserList />
        <SkeletonUserList />
      </ul>
    </div>
  </div>
);

export default SkeletonUserListModal;
