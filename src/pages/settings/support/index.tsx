import ProtectedLayout from "@/components/layout/ProtectedLayout";
import SettingsLayout from "@/components/layout/SettingsLayout";
import SupportComponent from "@/components/Settings/Support/SupportComponent";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Support = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.status !== "authenticated") {
      router.push("/login");
    }
  }, [session]);
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

export default Support;
