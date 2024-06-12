import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import SettingsLayout from "@/components/layout/SettingsLayout";
import PersonalDetails from "@/components/Settings/PersonalDetails";

export default function Settings() {
  return (
    <ProtectedLayout>
      <SettingsLayout>
        <>{/* <PersonalDetails /> */}</>
      </SettingsLayout>
    </ProtectedLayout>
  );
}
