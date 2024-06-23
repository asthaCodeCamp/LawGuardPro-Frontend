import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import SettingsLayout from "@/components/layout/SettingsLayout";
import PersonalDetails from "@/components/Settings/PersonalDetails";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Settings() {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.status !== "authenticated") {
      router.push("/login");
    }
  }, [session]);
  return (
    <ProtectedLayout>
      <SettingsLayout>
        <>{/* <PersonalDetails /> */}</>
      </SettingsLayout>
    </ProtectedLayout>
  );
}

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
