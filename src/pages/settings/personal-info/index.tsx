import PersonalDetails from "@/components/Settings/PersonalDetails";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import SettingsLayout from "@/components/layout/SettingsLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PersonalInfo = () => {
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
          {/* <div className="flex border border-red-800">personal info here</div> */}
          <div className="w-full">
            <PersonalDetails />
          </div>
        </SettingsLayout>
      </div>
    </ProtectedLayout>
  );
};

export default PersonalInfo;
