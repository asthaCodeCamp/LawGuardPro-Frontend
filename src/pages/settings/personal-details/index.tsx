import ProtectedLayout from "@/components/layout/ProtectedLayout";
import SettingsLayout from "@/components/layout/SettingsLayout";
import React from "react";

const PersonalDetails = () => {
  return (
    <ProtectedLayout>
      <div className="flex">
        <SettingsLayout>
          <div className="flex border border-red-800">
            <PersonalDetails />
          </div>
        </SettingsLayout>
      </div>
    </ProtectedLayout>
  );
};

export default PersonalDetails;
