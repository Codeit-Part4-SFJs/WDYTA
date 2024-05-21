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
        name={"UpIcon"}
        width="300"
        height="300"
        color="red"
        onClick={onClick}
      />

      {/* <Logo size="L" onClick={onClick} />  */}
      <Loading size="L">첫 리뷰를 작성해 보세요!</Loading>
    </div>
  );
};

export default Profile;
