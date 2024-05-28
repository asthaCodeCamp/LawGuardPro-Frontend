import ProtectedLayout from "@/components/layout/ProtectedLayout";
import SettingsLayout from "@/components/layout/SettingsLayout";
import SupportComponent from "@/components/Settings/SupportComponent";
import React from "react";

const Support = () => {
  return (
    <ProtectedLayout>
      <div className="w-full ">
        <SettingsLayout>
          <div className=" w-full"><SupportComponent/></div>
        </SettingsLayout>
      </div>
    </ProtectedLayout>
  );
};

export default Support;
