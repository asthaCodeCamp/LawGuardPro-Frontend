import BillingAddress from "@/components/Settings/Address/BillingAddress";
import ResidentialAddress from "@/components/Settings/Address/ResidentialAddress";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import SettingsLayout from "@/components/layout/SettingsLayout";
import { Box, Tab, Tabs, styled } from "@mui/material";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface StyledTabProps {
  label: string;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Box
            sx={{
              width: 430,
              margin: "32px 0px 0px 32px",
            }}
          >
            {children}
          </Box>
        </Box>
      )}
    </div>
  );
}

const AntTabs = styled(Tabs)({
  borderTop: "1px solid #D1D1D1",
  // width:"936px",

  "& .MuiTabs-indicator": {
    backgroundColor: "black",
  },
});

const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    maxWidth: 468,
  },
  fontWeight: theme.typography.fontWeightRegular,
  width: 500,
  color: "rgba(0, 0, 0, 0.85)",
  fontSize: "16px",
  "&.Mui-selected": {
    color: "#191919",
    fontWeight: theme.typography.fontWeightMedium,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
}));

const Address = () => {
  const [value, setValue] = React.useState(0);
  var index;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (newValue === 0) index = 0;
    else index = 1;
  };

  return (
    <ProtectedLayout>
      <SettingsLayout>
        <Box className="flex flex-col w-[919.25px]">
          <Box className="max-h-screen">
            <Box className="m-8 flex flex-col">
              <span className="font-[600] text-[24px] text-[#191919]">
                Addresses
              </span>
              <span className="font-[400] text-[16px]">
                Add or modify your addresses
              </span>
            </Box>
          </Box>

          <Box className="">
            <AntTabs
              value={value}
              onChange={handleChange}
              aria-label="ant example"
              sx={{ borderBottom: "1px solid #D1D1D1" }}
              className="w-full"
            >
              <AntTab label="Residential address" />
              <AntTab label="Billing address" />
            </AntTabs>
          </Box>
          <CustomTabPanel value={value} index={value === 0 ? 0 : 1}>
            {value === 0 ? <ResidentialAddress /> : <BillingAddress />}
          </CustomTabPanel>
        </Box>
      </SettingsLayout>
    </ProtectedLayout>
  );
};

export default Address;
