import PersonalDetails from "@/components/Settings/PersonalDetails";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import SettingsLayout from "@/components/layout/SettingsLayout";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PersonalInfo = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log(session, "personal-info");
    if (session?.status !== "authenticated") {
      router.push("/login");
    }
  }, [session]);
  return (
    <ProtectedLayout>
      <div className="w-full">
        <SettingsLayout>
          {/* <div className="flex border border-red-800">personal info here</div> */}
          <div className="w-full">
            <PersonalDetails />
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

export default PersonalInfo;
