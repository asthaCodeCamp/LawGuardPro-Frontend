import LoginForm from "@/components/LoginForm/LoginForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  // const { pathname } = router;
  // console.log("pathname ===== ", pathname);
  // console.log("Login session == ", session);
  useEffect(() => {
    console.log(session, "at login useEffect");
    if (session?.data) {
      router.push("/");
    }
  }, [session]);
  return !session?.data ? <LoginForm /> : <></>;
};

export default Login;
