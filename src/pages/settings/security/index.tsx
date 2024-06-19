import ProtectedLayout from "@/components/layout/ProtectedLayout";
import React, { useEffect } from "react";
import Settings from "..";
import SettingsLayout from "@/components/layout/SettingsLayout";
import { Box, Divider } from "@mui/material";
import SecurityComponent from "@/components/Settings/SecurityComponent";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Security = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.status !== "authenticated") {
      router.push("/login");
    }
  }, [session]);
  return (
    <ProtectedLayout>
      <div className="w-full ">
        <SettingsLayout>
          <div className=" w-full">
            <SecurityComponent />
          </div>
        </SettingsLayout>
      </div>
    </ProtectedLayout>
  );
};

export default Security;
