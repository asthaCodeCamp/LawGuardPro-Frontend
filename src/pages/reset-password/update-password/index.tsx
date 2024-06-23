import UpdatePasswordForm from "@/components/UpdatePassword/UpdatePasswordForm";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const UpdatePassword = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    // console.log(session, "at notification useEffect");
    if (session?.data) {
      if (session?.status !== "authenticated") {
        router.push("/login");
      }
    }
    // else {
    //   router.push("/login");
    // }
  }, [session]);
  return (
    <>
      <UpdatePasswordForm />
    </>
  );
};

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req });
  console.log(session, "session at home page ");
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default UpdatePassword;
