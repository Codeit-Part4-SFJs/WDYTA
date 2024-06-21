import Image from 'next/image';

export const LoadingSpinner = () => {
  return (
    <div className="z-[1000] fixed inset-0 flex justify-center items-center w-full h-full">
      {/* <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-main-blue" /> */}
      <Image
        src="/loadingSpinnerCircle.gif"
        alt="loadingSpinner"
        width={150}
        height={150}
      />
    </div>
  );
};
