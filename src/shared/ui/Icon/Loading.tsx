import { PropsWithChildren } from "react";
import LoadingIcon from "../../../../public/icon/loading.svg";

const Loading = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <LoadingIcon className="mobile:w-[39.2px] mobile:h-[32px] md:w-[39.2px] md:h-[32px] lg:w-[49px] lg:h-[40px] fill-gray-6E " />

      <p className="mobile:text-lg md:text-lg lg:text-xl text-gray-6E">
        {children}
      </p>
    </div>
  );
};

export default Loading;
