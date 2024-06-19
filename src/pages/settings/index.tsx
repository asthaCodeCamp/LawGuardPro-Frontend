import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import SettingsLayout from "@/components/layout/SettingsLayout";
import PersonalDetails from "@/components/Settings/PersonalDetails";
import { useSession } from "next-auth/react";
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
