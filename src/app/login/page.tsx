import LoginForm from '@/components/Login/LoginForm';
import SocialLogin from '@/components/Login/SocialLogin';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="flex flex-col gap-5 items-center mt-[108px] md:mt-[250px] lg:mt-[181px]">
      <LoginForm />
      <div className="flex gap-2">
        <p className="text-sm lg:text-base text-gray-6E">회원이 아니신가요?</p>
        <Link className="text-sm lg:text-base text-main-blue" href="/register">
          회원가입하기
        </Link>
      </div>
      <SocialLogin />
    </div>
  );
};

export default Login;
