"use client";
import Logo from "@/shared/ui/Icon/Logo";
import Icon from "../../shared/ui/Icon/Icon";
import Loading from "@/shared/ui/Icon/Loading";

//테스트
const Profile = () => {
  const onClick = () => {
    console.log("a");
  };

  return (
    <div className="flex flex-col items-center">
      <Icon
        name={"GoogleIcon"}
        iconSizeClass="w-3 h-3 md:w-3.75 md:h-3.75 lg:w-4 lg:h-4"
        color="red"
        onClick={onClick}
      />

      <Logo
        iconSizeClass="w-28 h-4 md:w-28 md:h-4 lg:w-40 lg:h-7"
        onClick={onClick}
      />
      <Loading
        iconSizeClass="w-20 h-20 md:w-20 md:h-20 lg:w-24 lg:h-20"
        fontSizeClass="text-lg md:text-lg lg:text-xl  text-gray-6E"
        color="gray"
      >
        첫 리뷰를 작성해 보세요!
      </Loading>
    </div>
  );
};

export default Profile;
