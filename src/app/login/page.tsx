import LoginForm from "@/components/Login/LoginForm";
import SocialLogin from "@/components/Login/SocialLogin";

const Login = () => {
  return (
    <div className="flex flex-col gap-[60px] items-center mt-[108px] md:mt-[250px] lg:mt-[181px]">
      <LoginForm />
      <SocialLogin />
    </div>
  );
};

export default Login;
