import * as React from "react";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import SettingsLayout from "@/components/layout/SettingsLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Settings() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.data) {
      if (session?.status !== "authenticated") {
        router.push("/login");
      }
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
