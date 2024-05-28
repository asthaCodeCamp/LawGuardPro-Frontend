import PersonalDetails from "@/components/Settings/PersonalDetails";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import SettingsLayout from "@/components/layout/SettingsLayout";
import React from "react";

const PersonalInfo = () => {
  return (
    <ProtectedLayout>
      <div className="flex">
        <SettingsLayout>
          {/* <div className="flex border border-red-800">personal info here</div> */}
          <PersonalDetails />
        </SettingsLayout>
      </div>
    </ProtectedLayout>
  );
};

export default PersonalInfo;
