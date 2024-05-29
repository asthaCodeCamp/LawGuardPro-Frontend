import ProtectedLayout from "@/components/layout/ProtectedLayout";
import EmptyNotification from "@/components/Notification/EmptyNotification";
import { Box, Tab, Tabs, Typography, styled } from "@mui/material";
import React from "react";
import AllNotification from "@/components/Notification/AllNotification";
import UnreadNotification from "@/components/Notification/UnreadNotification";

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
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
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
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: "rgba(0, 0, 0, 0.85)",
  fontSize: "16px",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&.Mui-selected": {
    color: "#191919",
    fontWeight: theme.typography.fontWeightMedium,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
}));

const Notification = () => {
  let notificationLength = 0;

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ProtectedLayout>
      <Box className="block w-full max-h-screen">
        <Box className="w-full">
          <Box className="ml-8 mt-8 mb-2 flex flex-col">
            <span className="font-[600] text-[24px] text-[#191919]">
              Notification
            </span>
            <span className="font-[400] text-[16px]">
              Your notification history.
            </span>
          </Box>
        </Box>

        {notificationLength !== 0 ? (
          <Box sx={{ maxWidth: "100%" }}>
            <Box sx={{ bgcolor: "#fff" }}>
              <AntTabs
                value={value}
                onChange={handleChange}
                aria-label="ant example"
                sx={{ borderBottom: "1px solid #D1D1D1" }}
                className="pl-8"
              >
                <AntTab label="See all" />
                <AntTab label="Unread" />
              </AntTabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <AllNotification />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <UnreadNotification />
            </CustomTabPanel>
          </Box>
        ) : (
          <Box className="flex justify-center items-center h-screen">
            <Box className="w-80">
              <EmptyNotification />
            </Box>
          </Box>
        )}
      </Box>
    </ProtectedLayout>
  );
};
export default Notification;
