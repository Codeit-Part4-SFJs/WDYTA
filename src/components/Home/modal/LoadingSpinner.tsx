import Image from 'next/image';

export const LoadingSpinner = () => {
  return (
    <div className="z-[1000] fixed inset-0 flex justify-center items-center w-full h-full">
      <Image
        src="/loadingSpinnerCircle.gif"
        alt="loadingSpinner"
        width={150}
        height={150}
      />
    </div>
  );
};
