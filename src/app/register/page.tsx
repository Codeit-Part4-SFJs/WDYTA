import RegisterForm from "@/components/Register/RegisterForm";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex flex-col gap-5 items-center mt-[30px] md:mt-[181px] lg:mt-[93px] ">
      <RegisterForm />
      <div className="flex gap-2">
        <p className="text-sm lg:text-base text-gray-6E">이미 회원이신가요?</p>
        <Link className="text-sm lg:text-base text-main-blue" href="/login">
          로그인하기
        </Link>
      </div>
    </div>
  );
};

export default Register;
