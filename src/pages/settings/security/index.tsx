import ProtectedLayout from "@/components/layout/ProtectedLayout";
import React, { useEffect } from "react";
import SettingsLayout from "@/components/layout/SettingsLayout";
import SecurityComponent from "@/components/Settings/SecurityComponent";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Security = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session && status !== "loading") {
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
