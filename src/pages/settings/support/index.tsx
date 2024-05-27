import ProtectedLayout from "@/components/layout/ProtectedLayout";
import SettingsLayout from "@/components/layout/SettingsLayout";
import React from "react";

const Support = () => {
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

export default Support;
