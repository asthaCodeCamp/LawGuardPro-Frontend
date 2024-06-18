import ProtectedLayout from "@/components/layout/ProtectedLayout";
import React from "react";
import Settings from "..";
import SettingsLayout from "@/components/layout/SettingsLayout";
import { Box, Divider } from "@mui/material";
import SecurityComponent from "@/components/Settings/SecurityComponent";

const Security = () => {
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
