import UpdatePasswordForm from "@/components/UpdatePassword/UpdatePasswordForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const UpdatePassword = () => {
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
      <UpdatePasswordForm />
    </>
  );
};

export default UpdatePassword;
