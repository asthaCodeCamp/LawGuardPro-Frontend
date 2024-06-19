import LoginForm from "@/components/LoginForm/LoginForm";
import { useSession } from "next-auth/react";

// const session = useSession();

const Login = () => {
  return <LoginForm />;
};

export default Login;
