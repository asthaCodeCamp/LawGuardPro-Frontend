import ProtectedLayout from "@/components/layout/ProtectedLayout";
import SettingsLayout from "@/components/layout/SettingsLayout";
import SupportComponent from "@/components/Settings/Support/SupportComponent";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Support = () => {
  // const session = useSession();
  // const router = useRouter();
  // useEffect(() => {
  //   if (session?.status !== "authenticated") {
  //     router.push("/login");
  //   }
  // }, [session]);
  return (
    <ProtectedLayout>
      <div className="w-full">
        <SettingsLayout>
          <div className=" w-full">
            <SupportComponent />
          </div>
        </SettingsLayout>
      </div>
    </ProtectedLayout>
  );
};

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req });
  console.log( session , "session at home page ")
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session},
  };
}

export default Support;
