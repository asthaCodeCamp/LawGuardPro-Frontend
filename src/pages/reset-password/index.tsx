import ResetPasswordRequestForm from "@/components/ResetPassword/ResetPasswordRequestForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ResetPassword = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log(session, "at notification useEffect");
    if (session?.status !== "authenticated") {
      router.push("/login");
    }
  }, [session]);
  return (
    <>
      <ResetPasswordRequestForm />
    </>
  );
};

export default ResetPassword;
