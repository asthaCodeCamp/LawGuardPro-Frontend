import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProtectedLayout from "@/components/layout/ProtectedLayout";

export default function Settings() {
  return (
    <ProtectedLayout>
      <div>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </Typography>
        </Box>
      </div>
    </ProtectedLayout>
  );
}
