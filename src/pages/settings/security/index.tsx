import ProtectedLayout from "@/components/layout/ProtectedLayout";
import React from "react";
import Settings from "..";
import SettingsLayout from "@/components/layout/SettingsLayout";

const Security = () => {
  return (
    <ProtectedLayout>
      <div className="flex">
        <SettingsLayout>
          <div className="flex border border-red-800">hdfsdfsd</div>
        </SettingsLayout>
      </div>
    </ProtectedLayout>
  );
};

export default Security;
